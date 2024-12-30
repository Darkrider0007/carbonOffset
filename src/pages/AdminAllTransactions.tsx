import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";
import { FaArrowUp } from "react-icons/fa6";
import AdminSidebar from "../components/AdminSidebar";
import { useEffect, useState } from "react";
import { getAdminData } from "../api/admin";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { getAllPayments } from "../api/payments";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Button } from "../components/ui/button";
import SmoothScroll from "../components/SmoothScroll";
import {
  Banknote,
  Briefcase,
  Clock,
  Coins,
  Mail,
  Menu,
  Receipt,
  Search,
  User2,
  Users,
} from "lucide-react";
import { TransactionLineGraph } from "./Graphs/TransactionLineGraph";

export default function AdminAllTransactions() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [paymentsDetails, setPaymentsDetails] = useState<any>([]);
  const [limit, setLimit] = useState<number>(100);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [adminRes, paymentsRes] = await Promise.all([
          getAdminData(),
          getAllPayments({ limit }),
        ]);
        setDashBoardData(adminRes.data);
        setPaymentsDetails(paymentsRes.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [limit]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLimitChange = (value: string) => {
    setLimit(Number(value));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredPayments = paymentsDetails.filter((payment: any) => {
    return (
      payment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.paymentId.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  // Mobile Card Component
  const TransactionCard = ({
    payment,
    index,
  }: {
    payment: any;
    index: number;
  }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-purple-100">
                <Receipt className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Payment ID</div>
                <div className="font-medium text-gray-900">
                  {payment.paymentId}
                </div>
              </div>
            </div>
            <div className="text-sm text-gray-500">#{index + 1}</div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-blue-100">
              <User2 className="w-4 h-4 text-blue-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Name</div>
              <div className="text-gray-600">{payment.name}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-green-100">
              <Mail className="w-4 h-4 text-green-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Email</div>
              <div className="text-gray-600 break-all">{payment.email}</div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-yellow-100">
                <Coins className="w-4 h-4 text-yellow-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Amount</div>
                <div className="font-medium text-gray-900">
                  {(payment.totalAmount / 100).toFixed(2)}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-red-100">
                <Banknote className="w-4 h-4 text-red-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Currency</div>
                <div className="text-gray-600 uppercase">
                  {payment.currency}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="p-2 rounded-full bg-indigo-100">
              <Clock className="w-4 h-4 text-indigo-600" />
            </div>
            <div>
              <div className="text-xs text-gray-500">Time</div>
              <div className="text-gray-600">{payment.paymentTime}</div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-gray-50">
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
            onClick={toggleSidebar}
          />
        )}

        {/* Sidebar */}
        <div
          className={`fixed lg:fixed w-[280px] h-full z-50 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0 border-r bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800`}
        >
          <AdminSidebar />
        </div>

        {/* Main Content */}
        <div className="lg:pl-[280px]">
          {/* Header */}
          <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-white px-4 md:px-6 shadow-sm">
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-base md:text-lg font-bold truncate">
              Transactions
            </h1>
          </header>

          <main className="p-4 md:p-6 max-w-[1600px] mx-auto">
            {/* Stats Cards */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 mb-6">
              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-emerald-400 to-green-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm md:text-md font-bold text-white">
                    Total Users
                  </CardTitle>
                  <Users className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-4xl font-bold text-white">
                    {dashBoardData?.totalUsers}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-white/80">
                    <FaArrowUp />
                    <span>
                      {Math.abs(dashBoardData?.percentageUserIncrease)}% vs last
                      month
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#DB20C4] to-[#F86893] text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm md:text-md font-bold text-white">
                    Total Farm Onboarded
                  </CardTitle>
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-4xl font-bold text-white">
                    {dashBoardData?.totalProjects}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-white/80">
                    <FaArrowUp />
                    <span>
                      {Math.floor(
                        Math.abs(dashBoardData?.projectCountPerMonth)
                      )}
                      % vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Transaction Graph */}
            <Card className="mb-6 shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-bold text-gray-800">
                    Transaction History
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-[400px] lg:h-[500px] w-full">
                  <TransactionLineGraph payments={filteredPayments} />
                </div>
              </CardContent>
            </Card>

            {/* Transactions Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-4 md:p-6">
                <div className="flex flex-col gap-4">
                  <h2 className="font-bold text-xl md:text-2xl text-gray-800">
                    Token Purchase Transactions
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-auto">
                      <label className="text-sm font-medium text-gray-600 mb-2 block">
                        Show Records
                      </label>
                      <Select
                        onValueChange={handleLimitChange}
                        defaultValue="100"
                      >
                        <SelectTrigger className="w-full sm:w-48 bg-white border focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                          <SelectValue placeholder="Select Limit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="100">100 Records</SelectItem>
                          <SelectItem value="250">250 Records</SelectItem>
                          <SelectItem value="500">500 Records</SelectItem>
                          <SelectItem value="1000">1000 Records</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex-grow">
                      <label className="text-sm font-medium text-gray-600 mb-2 block">
                        Search Transactions
                      </label>
                      <div className="relative w-full md:w-80">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                        <input
                          type="text"
                          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                          placeholder="Search by name, email, ID"
                          value={searchQuery}
                          onChange={handleSearchChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <div className="p-4 md:p-6">
                {isSmallScreen ? (
                  // Mobile view - Cards
                  <div className="space-y-4">
                    {filteredPayments.length > 0 ? (
                      filteredPayments.map((payment: any, index: number) => (
                        <TransactionCard
                          key={payment.id}
                          payment={payment}
                          index={index}
                        />
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No transactions found.
                      </div>
                    )}
                  </div>
                ) : (
                  // Desktop view - Table
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            Sl No.
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[150px]">
                            Payment ID
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[150px]">
                            Name
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[200px]">
                            Email
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            Amount
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            Currency
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[200px]">
                            Time
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredPayments.length > 0 ? (
                          filteredPayments.map(
                            (payment: any, index: number) => (
                              <TableRow
                                key={payment.id}
                                className="hover:bg-gray-50 transition-colors duration-200"
                              >
                                <TableCell className="font-medium text-gray-900">
                                  {index + 1}
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-purple-100">
                                      <Receipt className="w-4 h-4 text-purple-600" />
                                    </div>
                                    <span className="font-medium text-gray-900">
                                      {payment.paymentId}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-blue-100">
                                      <User2 className="w-4 h-4 text-blue-600" />
                                    </div>
                                    <span className="text-gray-600">
                                      {payment.name}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-green-100">
                                      <Mail className="w-4 h-4 text-green-600" />
                                    </div>
                                    <span className="text-gray-600">
                                      {payment.email}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-yellow-100">
                                      <Coins className="w-4 h-4 text-yellow-600" />
                                    </div>
                                    <span className="font-medium text-gray-900">
                                      {(payment.totalAmount / 100).toFixed(2)}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-red-100">
                                      <Banknote className="w-4 h-4 text-red-600" />
                                    </div>
                                    <span className="text-gray-600 uppercase">
                                      {payment.currency}
                                    </span>
                                  </div>
                                </TableCell>
                                <TableCell>
                                  <div className="flex items-center gap-2">
                                    <div className="p-2 rounded-full bg-indigo-100">
                                      <Clock className="w-4 h-4 text-indigo-600" />
                                    </div>
                                    <span className="text-gray-600">
                                      {payment.paymentTime}
                                    </span>
                                  </div>
                                </TableCell>
                              </TableRow>
                            )
                          )
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={7}
                              className="text-center py-8 text-gray-500"
                            >
                              No transactions found.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </Card>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
