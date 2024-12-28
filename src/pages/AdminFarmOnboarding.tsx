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
import { AlertDialogDemo } from "../components/AlertDialogDemo";
import AdminSidebar from "../components/AdminSidebar";
import { getAdminData } from "../api/admin";
import { FaArrowUp } from "react-icons/fa6";
import { Briefcase, Search, Users } from "lucide-react";
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

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await getAdminData();
        setDashBoardData(res.data);
      } catch (error) {
        console.error("Failed to fetch admin data", error);
      }
    };

    const fetchFarmData = async () => {
      try {
        const res = await getFarmOnboard();
        setFarmData(res.data);
        setFilteredData(res.data);
        const approvedFarms = res.data.filter(
          (farm: any) => farm.approvedByAdmin
        );
        setApprovedFarmData(approvedFarms.length);
      } catch (error) {
        console.error("Failed to fetch farm data", error);
      }
    };

    fetchAdminData();
    fetchFarmData();
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
        setFilteredData(updatedFarmData); // Update filtered data as well
      }
    } catch (error) {
      console.error("Failed to delete farm onboarding data", error);
    }
  };

  return (
    <SmoothScroll>
      <div className="grid w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gradient-to-b from-gray-50 to-white lg:block dark:from-gray-900 dark:to-gray-800">
          <AdminSidebar />
        </div>
        <div className="flex flex-col min-h-screen">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
            <h1 className="text-lg font-bold">Farm Onboarding</h1>
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
                  <div className="text-2xl font-bold text-white">
                    {dashBoardData?.totalUsers || 0}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm">
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
                    Total Farms Onboarded
                  </CardTitle>
                  <GiFarmer className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {approvedFarmData || 0}
                  </div>
                  <div className="mt-2 text-sm opacity-75">
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
                  <div className="text-2xl font-bold text-white">
                    {dashBoardData?.totalProjects || 0}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm">
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

            {/* Farm Management Table Section */}
            <Card className="overflow-hidden bg-white flex flex-col">
              <CardHeader className="border-b bg-gray-50/50 p-6 flex-none">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-2xl mb-4 md:mb-0">
                    Farm Management
                  </h2>
                  <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <select
                      className="w-full md:w-48 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        placeholder="Search by Organization or Location..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </CardHeader>

              <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="text-lg text-black font-semibold">
                        Organization
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Location
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Area
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Status
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
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
                          <TableCell className="font-medium text-gray-800">
                            {farm.organization || "N/A"}
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {farm.address || "N/A"}
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {farm.area || "N/A"}
                          </TableCell>
                          <TableCell>
                            {!farm.isRejected &&
                              (farm.approvedByAdmin ? (
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                  Approved
                                </span>
                              ) : (
                                <span className="px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
                                  Pending
                                </span>
                              ))}
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
                                className="bg-blue-500 hover:bg-blue-600 text-white p-2"
                                size="sm"
                              >
                                View
                              </Button>
                              <AlertDialogDemo
                                triggerText="Delete"
                                title="Are you absolutely sure?"
                                description="This action cannot be undone. This will permanently delete the farm onboarding data from our servers."
                                actionText="Continue"
                                onAction={() => handleDelete(farm._id)}
                              />
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
            </Card>

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
