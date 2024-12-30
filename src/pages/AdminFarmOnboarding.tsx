import { useEffect, useState } from "react";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { deleteFarmOnboard, getFarmOnboard } from "../api/farmOnboard";
import ViewFarmBoarding from "../components/ViewFarmBoarding";
import { toast } from "../hooks/use-toast";
import AdminSidebar from "../components/AdminSidebar";
import { getAdminData } from "../api/admin";
import { FaArrowUp } from "react-icons/fa6";
import { Briefcase, Eye, Menu, Search, Trash2, Users } from "lucide-react";
import SmoothScroll from "../components/SmoothScroll";
import { GiFarmer } from "react-icons/gi";

export default function AdminFarmOnboarding() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [farmData, setFarmData] = useState<any[]>([]);
  const [approvedFarmData, setApprovedFarmData] = useState<number>();
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
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
        const [adminRes, farmRes] = await Promise.all([
          getAdminData(),
          getFarmOnboard(),
        ]);

        setDashBoardData(adminRes.data);
        setFarmData(farmRes.data);
        setFilteredData(farmRes.data);

        const approvedFarms = farmRes.data.filter(
          (farm: any) => farm.approvedByAdmin
        );
        setApprovedFarmData(approvedFarms.length);
      } catch (error) {
        console.error("Failed to fetch data", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filteredResults = farmData.filter((farm) => {
      const matchesQuery =
        farm.organization?.toLowerCase().includes(lowercasedQuery) ||
        farm.address?.toLowerCase().includes(lowercasedQuery);
      const matchesStatus =
        statusFilter === "All" ||
        (statusFilter === "Approved" && farm.approvedByAdmin) ||
        (statusFilter === "Pending" &&
          !farm.approvedByAdmin &&
          !farm.isRejected) ||
        (statusFilter === "Rejected" && farm.isRejected);
      return matchesQuery && matchesStatus;
    });
    setFilteredData(filteredResults);
  }, [searchQuery, statusFilter, farmData]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleViewDocument = (farm: any) => {
    setSelectedFarm(farm);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteFarmOnboard(id);
      if (res.status === 200) {
        toast({
          title: "Farm deleted successfully",
        });
        const updatedFarmData = farmData.filter((farm) => farm._id !== id);
        setFarmData(updatedFarmData);
        setFilteredData(updatedFarmData);
      }
    } catch (error) {
      console.error("Failed to delete farm onboarding data", error);
    }
  };

  // Mobile Card Component
  const FarmCard = ({ farm }: { farm: any }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex flex-col space-y-1">
            <label className="text-sm text-gray-500">Organization</label>
            <div className="font-semibold">{farm.organization || "N/A"}</div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm text-gray-500">Location</label>
            <div className="text-gray-700">{farm.address || "N/A"}</div>
          </div>

          <div className="flex flex-col space-y-1">
            <label className="text-sm text-gray-500">Area</label>
            <div className="text-gray-700">{farm.area || "N/A"}</div>
          </div>

          <div className="flex justify-between items-center">
            <div>
              {!farm.isRejected && (
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    farm.approvedByAdmin
                      ? "bg-green-100 text-green-800"
                      : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {farm.approvedByAdmin ? "Approved" : "Pending"}
                </span>
              )}
              {farm.isRejected && (
                <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                  Rejected
                </span>
              )}
            </div>

            <div className="flex gap-2">
              <Button
                onClick={() => handleViewDocument(farm)}
                className="bg-blue-500 hover:bg-blue-600 text-white"
                size="sm"
              >
                <Eye className="h-4 w-4" />
              </Button>
              <Button
                onClick={() => handleDelete(farm._id)}
                className="bg-red-500 hover:bg-red-600 text-white"
                size="sm"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
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
              Farm Onboarding
            </h1>
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
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {dashBoardData?.totalUsers || 0}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs md:text-sm">
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
                    Total Farms Onboarded
                  </CardTitle>
                  <GiFarmer className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {approvedFarmData || 0}
                  </div>
                  <div className="mt-2 text-xs md:text-sm opacity-75">
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
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {dashBoardData?.totalProjects || 0}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs md:text-sm">
                    <FaArrowUp />
                    <span>
                      {Math.floor(
                        Math.abs(dashBoardData?.projectCountPerMonth)
                      ) || 0}
                      % vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Farm Management Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-xl md:text-2xl text-gray-800">
                    Farm Management
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <select
                      className="w-full md:w-48 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      value={statusFilter}
                      onChange={(e) => setStatusFilter(e.target.value)}
                    >
                      <option value="All">All Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Approved">Approved</option>
                      <option value="Rejected">Rejected</option>
                    </select>

                    <div className="relative w-full md:w-80">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <Input
                        className="w-full pl-10"
                        placeholder="Search by Organization or Location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>

              <div className="p-4 md:p-6">
                {isSmallScreen ? (
                  // Mobile view - Cards
                  <div className="space-y-4">
                    {filteredData.length > 0 ? (
                      filteredData.map((farm, index) => (
                        <FarmCard key={index} farm={farm} />
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No farm data available
                      </div>
                    )}
                  </div>
                ) : (
                  // Desktop view - Table
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[150px]">
                            Organization
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[200px]">
                            Location
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[100px]">
                            Area
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[100px]">
                            Status
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredData.length > 0 ? (
                          filteredData.map((farm, index) => (
                            <TableRow
                              key={index}
                              className="hover:bg-gray-50 transition-colors duration-200"
                            >
                              <TableCell className="font-medium text-sm md:text-base text-gray-800">
                                {farm.organization || "N/A"}
                              </TableCell>
                              <TableCell className="text-sm md:text-base text-gray-600">
                                {farm.address || "N/A"}
                              </TableCell>
                              <TableCell className="text-sm md:text-base text-gray-600">
                                {farm.area || "N/A"}
                              </TableCell>
                              <TableCell>
                                {!farm.isRejected && (
                                  <span
                                    className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                      farm.approvedByAdmin
                                        ? "bg-green-100 text-green-800"
                                        : "bg-yellow-100 text-yellow-800"
                                    }`}
                                  >
                                    {farm.approvedByAdmin
                                      ? "Approved"
                                      : "Pending"}
                                  </span>
                                )}
                                {farm.isRejected && (
                                  <span className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
                                    Rejected
                                  </span>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button
                                    onClick={() => handleViewDocument(farm)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white"
                                    size="sm"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    onClick={() => handleDelete(farm._id)}
                                    className="bg-red-500 hover:bg-red-600 text-white"
                                    size="sm"
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </div>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={5}
                              className="text-center py-8 text-gray-500"
                            >
                              No farm data available
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </Card>

            {/* Modal */}
            <ViewFarmBoarding
              isOpen={isModalOpen}
              toggleModal={() => setIsModalOpen(false)}
              selectedProject={selectedFarm}
              onUpdateProject={setFarmData}
              farmData={farmData}
            />
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
