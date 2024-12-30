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
  Menu,
  MoveLeftIcon,
  MoveRight,
  Search,
  Users,
} from "lucide-react";
import { getFarmOnboard } from "../api/farmOnboard";
import { getAllUsers } from "../api/auth/getUser";
import SmoothScroll from "../components/SmoothScroll";
import { GiFarmer } from "react-icons/gi";
import { TokenCountLineGraph } from "./Graphs/TokenCountLineGraph";

export default function AdminUsers() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [approvedFarmData, setApprovedFarmData] = useState<any>(null);
  const [allUsers, setAllUsers] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");
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
        const [adminRes, farmRes, usersRes] = await Promise.all([
          getAdminData(),
          getFarmOnboard(),
          getAllUsers(),
        ]);
        setDashBoardData(adminRes.data);
        const approvedFarms = farmRes.data.filter(
          (farm: any) => farm.approvedByAdmin
        );
        setApprovedFarmData(approvedFarms.length);
        setAllUsers(usersRes.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  const filteredUsers = allUsers.filter(
    (user: any) =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  // Mobile Card Component
  const UserCard = ({ user, index }: { user: any; index: number }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <div className="font-medium text-gray-900">
              {user.firstName} {user.lastName}
            </div>
            <div className="text-sm text-gray-500">
              #{indexOfFirstUser + index + 1}
            </div>
          </div>

          <div className="text-gray-600 break-all">{user.email}</div>

          <div className="flex items-center justify-start gap-2 text-gray-900">
            <Coins className="w-5 h-5 text-yellow-500" />
            <span className="font-medium">
              {user?.tokenCount ? user.tokenCount.toFixed(2) : "0.00"}
            </span>
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
            <h1 className="text-base md:text-lg font-bold truncate">Users</h1>
          </header>

          <main className="p-4 md:p-6 max-w-[1600px] mx-auto">
            {/* Stats Cards */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-6">
              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-emerald-400 to-green-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm md:text-md font-bold text-white">
                    Total Users
                  </CardTitle>
                  <Users className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-4xl font-bold text-white">
                    {(dashBoardData && dashBoardData?.totalUsers) || 0}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs md:text-sm text-white/80">
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
                  <CardTitle className="text-sm md:text-md font-bold text-white">
                    Total Farm Onboarded
                  </CardTitle>
                  <GiFarmer className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-4xl font-bold text-white">
                    {approvedFarmData || 0}
                  </div>
                  <div className="mt-2 text-xs md:text-sm text-white/80">
                    Total approved farms
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#DB20C4] to-[#F86893] text-white sm:col-span-2 lg:col-span-1">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm md:text-md font-bold text-white">
                    Active Projects
                  </CardTitle>
                  <Briefcase className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-4xl font-bold text-white">
                    {dashBoardData?.totalProjects || 0}
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

            {/* Token Distribution Graph */}
            <Card className="mb-6 shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-4">
                <CardTitle className="text-xl font-bold text-gray-800">
                  Token Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="h-[400px] w-full">
                  <TokenCountLineGraph users={filteredUsers} />
                </div>
              </CardContent>
            </Card>

            {/* Users Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-xl md:text-2xl text-gray-800">
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

              <div className="p-4 md:p-6">
                {isSmallScreen ? (
                  // Mobile view - Cards
                  <div className="space-y-4">
                    {currentUsers.length > 0 ? (
                      currentUsers.map((user: any, index: number) => (
                        <UserCard key={user._id} user={user} index={index} />
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No users found.
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
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[200px]">
                            Name
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[250px]">
                            Email
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
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
                                    {user?.tokenCount
                                      ? user.tokenCount.toFixed(2)
                                      : "0.00"}
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
                )}

                {/* Responsive Pagination */}
                <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t pt-4 bg-gray-50">
                  <div className="text-sm text-gray-500 text-center sm:text-left">
                    Showing {indexOfFirstUser + 1} to{" "}
                    {Math.min(indexOfLastUser, filteredUsers.length)} of{" "}
                    {filteredUsers.length} users
                  </div>
                  <div className="flex gap-2">
                    <Button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                      size="sm"
                    >
                      <MoveLeftIcon className="h-4 w-4 sm:mr-1" />
                      <span className="hidden sm:inline">Previous</span>
                    </Button>
                    <Button
                      onClick={nextPage}
                      disabled={indexOfLastUser >= filteredUsers.length}
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                      size="sm"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <MoveRight className="h-4 w-4 sm:ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
