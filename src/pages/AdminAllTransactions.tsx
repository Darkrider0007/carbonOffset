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
import { Link } from "react-router-dom";
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
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" to="#">
              <Package2Icon className="h-6 w-6" />
            </Link>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
            <div className="grid h-[20vh] gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="shadow-xl bg-green-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Total Users
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    {dashBoardData?.totalUsers}
                  </div>
                </CardContent>
                <CardContent>
                  <div className="flex gap-2 items-center">
                    <FaArrowUp color="green" />
                    <h1>
                      <span className="text-green-600">
                        {Math.abs(dashBoardData?.percentageUserIncrease)}
                      </span>{" "}
                      % vs last month
                    </h1>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-xl">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Total Farm Onboarded
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    {" "}
                    {dashBoardData?.totalProjects}
                  </div>
                </CardContent>
                <CardContent>
                  <div className="flex gap-2 items-center">
                    <FaArrowUp color="green" />
                    <h1>
                      <span className="text-green-600">
                        {Math.floor(
                          Math.abs(dashBoardData?.projectCountPerMonth)
                        )}
                      </span>{" "}
                      % vs last month
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h1 className="text-2xl font-bold text-black">
              All Token Purchase Transactions
            </h1>

            {/* Dropdown and search bar for filtering records */}
            <div className="mt-4 flex flex-wrap items-center gap-4">
              <div>
                <label
                  htmlFor="records"
                  className="text-lg text-black font-medium mr-2"
                >
                  Show Records:
                </label>
                <Select onValueChange={handleLimitChange} defaultValue="100">
                  <SelectTrigger className="w-48 bg-white border border-gray-300 rounded">
                    <SelectValue placeholder="Select Limit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="100">100</SelectItem>
                    <SelectItem value="250">250</SelectItem>
                    <SelectItem value="500">500</SelectItem>
                    <SelectItem value="1000">1000</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* <div>
              <label htmlFor="status" className="text-lg text-black font-medium mr-2">Filter by Status:</label>
              <Select onValueChange={handleStatusChange} defaultValue="all">
                <SelectTrigger className="w-48 bg-white border border-gray-300 rounded">
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                </SelectContent>
              </Select>
            </div> */}

              {/* Search Input */}
              <div className="flex flex-col ">
                <label
                  htmlFor="search"
                  className="text-lg text-black font-medium mr-2"
                >
                  Search:
                </label>
                <input
                  type="text"
                  id="search"
                  className="w-64 bg-white border border-gray-300 rounded px-3 py-1"
                  placeholder="Search by name, email, payment ID"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
            </div>

            <div className="overflow-y-auto h-96 mt-4">
              <Table className="min-w-full table-auto">
                <TableHeader>
                  <TableRow className="bg-gray-100 border-b">
                    <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Sl No.
                    </TableHead>
                    <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Payment Id
                    </TableHead>
                    <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Name
                    </TableHead>
                    <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Email
                    </TableHead>
                    <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Total Amount
                    </TableHead>
                    <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Currency
                    </TableHead>
                    <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                      Time
                    </TableHead>
                    {/* <TableHead className="px-4 py-2 text-left text-sm font-medium text-gray-700">Status</TableHead> */}
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPayments.length > 0 ? (
                    filteredPayments.map((payment: any, index: number) => (
                      <TableRow
                        key={payment.id}
                        className="border-b hover:bg-gray-50"
                      >
                        <TableCell className="px-4 py-2 text-sm text-gray-700">
                          {index + 1}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700">
                          {payment.paymentId}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700">
                          {payment.name}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700">
                          {payment.email}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700">
                          {(payment.totalAmount / 100).toFixed(2)}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700">
                          {payment.currency.toUpperCase()}
                        </TableCell>
                        <TableCell className="px-4 py-2 text-sm text-gray-700">
                          {payment.paymentTime}
                        </TableCell>
                        {/* <TableCell className="px-4 py-2">
                        <div className={`${payment.status === 'paid' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'} text-center px-2 py-1 rounded-lg`}>
                          {payment.status}
                        </div>
                      </TableCell> */}
                      </TableRow>
                    ))
                  ) : (
                    <TableRow>
                      <TableCell
                        colSpan={8}
                        className="text-center px-4 py-2 text-sm text-gray-700"
                      >
                        No transactions found.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}

function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
      <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
      <path d="M12 3v6" />
    </svg>
  );
}
