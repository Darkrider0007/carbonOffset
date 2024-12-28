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
import SmoothScroll from "../components/SmoothScroll";
import {
  Banknote,
  Briefcase,
  Clock,
  Coins,
  Mail,
  Receipt,
  Search,
  User2,
  Users,
} from "lucide-react";

export default function AdminAllTransactions() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [paymentsDetails, setPaymentsDetails] = useState<any>([]);
  const [limit, setLimit] = useState<number>(100); // State for dropdown selection
  // const [statusFilter, setStatusFilter] = useState<string>('all'); // State for filtering paid/unpaid
  const [searchQuery, setSearchQuery] = useState<string>(""); // State for search query

  useEffect(() => {
    const fetchAdminData = async () => {
      const res = await getAdminData();
      setDashBoardData(res.data);
    };

    const fetchPayments = async () => {
      try {
        const res = await getAllPayments({ limit });
        setPaymentsDetails(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAdminData();
    fetchPayments();
  }, [limit]);

  const handleLimitChange = (value: string) => {
    setLimit(Number(value));
  };

  // const handleStatusChange = (value: string) =>
  // {
  //   setStatusFilter(value);
  // };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  // Filter payments based on both selected status and search query
  const filteredPayments = paymentsDetails.filter((payment: any) => {
    // const matchesStatus =
    //   statusFilter === 'all' || payment.status === statusFilter;
    const matchesSearch =
      payment.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      payment.paymentId.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  return (
    <SmoothScroll>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gradient-to-b from-gray-50 to-white lg:block dark:from-gray-900 dark:to-gray-800">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
            <h1 className="text-lg font-bold">Transactions</h1>
          </header>
          <main className="flex flex-1 flex-col gap-6 p-6 bg-gray-50">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-emerald-400 to-green-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Total Users
                  </CardTitle>
                  <Users className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">
                    {dashBoardData?.totalUsers}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
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
                  <CardTitle className="text-md font-bold text-white">
                    Total Farm Onboarded
                  </CardTitle>
                  <Briefcase className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">
                    {dashBoardData?.totalProjects}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
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

            {/* Transactions Section */}
            <Card className="overflow-hidden bg-white flex flex-col">
              <CardHeader className="border-b bg-gray-50/50 p-6 flex-none">
                <div className="flex flex-col gap-6">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Token Purchase Transactions
                  </h2>

                  <div className="flex flex-wrap items-center gap-6">
                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="records"
                        className="text-sm font-medium text-gray-600"
                      >
                        Show Records
                      </label>
                      <Select
                        onValueChange={handleLimitChange}
                        defaultValue="100"
                      >
                        <SelectTrigger className="w-48 bg-white border focus:ring-2 focus:ring-purple-500 focus:border-transparent">
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

                    <div className="flex flex-col gap-2">
                      <label
                        htmlFor="search"
                        className="text-sm font-medium text-gray-600"
                      >
                        Search Transactions
                      </label>
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <input
                          type="text"
                          id="search"
                          className="w-64 pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          placeholder="Search by name, email, ID"
                          value={searchQuery}
                          onChange={handleSearchChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="text-lg text-black font-semibold">
                        Sl No.
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Payment ID
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Name
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Email
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Amount
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Currency
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Time
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPayments.length > 0 ? (
                      filteredPayments.map((payment: any, index: number) => (
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
                      ))
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
            </Card>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}

// function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//       <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//       <path d="M12 3v6" />
//     </svg>
//   );
// }
