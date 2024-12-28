import { Button } from "../components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";
import AdminSidebar from "../components/AdminSidebar";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../components/ui/table";
import { FaArrowUp } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getAdminData } from "../api/admin";
import {
  Briefcase,
  Coins,
  MoveLeftIcon,
  MoveRight,
  Search,
  Users,
} from "lucide-react";
import { getFarmOnboard } from "../api/farmOnboard";
import { getAllUsers } from "../api/auth/getUser";
import SmoothScroll from "../components/SmoothScroll";
import { GiFarmer } from "react-icons/gi";

export default function AdminUsers() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [approvedFarmData, setApprovedFarmData] = useState<any>(null);
  const [allUsers, setAllUsers] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20); // Number of users per page
  const [searchTerm, setSearchTerm] = useState(""); // Search term state

  useEffect(() => {
    const fetchAdminData = async () => {
      const res = await getAdminData();
      setDashBoardData(res.data);
    };

    const fetchFarmData = async () => {
      try {
        const res = await getFarmOnboard();
        const approvedFarms = res.data.filter(
          (farm: any) => farm.approvedByAdmin
        );

        setApprovedFarmData(approvedFarms.length);
      } catch (error) {
        console.error("Failed to fetch farm data", error);
      }
    };

    const fetchUsers = async () => {
      try {
        const res = await getAllUsers();
        setAllUsers(res.data);
      } catch (error) {
        console.error("Failed to fetch all users", error);
      }
    };

    fetchAdminData();
    fetchFarmData();
    fetchUsers();
  }, []);

  // Filter users based on search term
  const filteredUsers = allUsers.filter(
    (user: any) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Get the current users to display based on pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  // Change page
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <SmoothScroll>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gradient-to-b from-gray-50 to-white lg:block dark:from-gray-900 dark:to-gray-800">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
            <h1 className="text-lg font-bold">Users</h1>
          </header>
          <main className="flex flex-1 flex-col gap-6 p-6 bg-gray-50">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-emerald-400 to-green-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Total Users
                  </CardTitle>
                  <Users className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">
                    {(dashBoardData && dashBoardData?.totalUsers) || 0}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm text-white/80">
                    <FaArrowUp />
                    <span>
                      {Math.abs(dashBoardData?.percentageUserIncrease) || 0}% vs
                      last month
                    </span>
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#8555C1] to-[#B469FF] text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Total Farm Onboarded
                  </CardTitle>
                  <GiFarmer className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">
                    {approvedFarmData || 0}
                  </div>
                  <div className="mt-2 text-sm text-white/80">
                    Total approved farms
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#DB20C4] to-[#F86893] text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Active Projects
                  </CardTitle>
                  <Briefcase className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-4xl font-bold text-white">
                    {dashBoardData?.totalProjects || 0}
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

            {/* Users Table Section */}
            <Card className="overflow-hidden bg-white flex flex-col">
              <CardHeader className="border-b bg-gray-50/50 p-6 flex-none">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-2xl mb-4 md:mb-0">
                    Active Users
                  </h2>
                  <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
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
                        Name
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Email
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Token Count
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentUsers.length > 0 ? (
                      currentUsers.map((user: any, index: number) => (
                        <TableRow
                          key={user._id}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <TableCell className="font-medium text-gray-900">
                            {indexOfFirstUser + index + 1}
                          </TableCell>
                          <TableCell className="font-medium text-gray-900">
                            {user.firstName} {user.lastName}
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {user.email}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center justify-center gap-2 text-gray-900">
                              <Coins className="w-5 h-5 text-yellow-500" />
                              <span className="font-medium">
                                {user?.tokenCount && user.tokenCount.toFixed(2)}
                              </span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={4}
                          className="text-center py-8 text-gray-500"
                        >
                          No users found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>

              {/* Pagination */}
              <div className="flex justify-end gap-2 p-4 border-t bg-gray-50">
                <Button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="bg-purple-500 hover:bg-purple-600 text-white gap-2 transition-colors"
                >
                  <MoveLeftIcon className="w-4 h-4" />
                  Previous
                </Button>
                <Button
                  onClick={nextPage}
                  disabled={indexOfLastUser >= filteredUsers.length}
                  className="bg-purple-500 hover:bg-purple-600 text-white gap-2 transition-colors"
                >
                  Next
                  <MoveRight className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
