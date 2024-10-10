import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import
{
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";
import
{
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
import { Search } from "lucide-react";

// Icon components
function Package2Icon(props: React.SVGProps<SVGSVGElement>)
{
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24"
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

export default function AdminFarmOnboarding()
{
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [farmData, setFarmData] = useState<any[]>([]);
  const [approvedFarmData, setApprovedFarmData] = useState<number>();
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() =>
  {
    const fetchAdminData = async () =>
    {
      try
      {
        const res = await getAdminData();
        setDashBoardData(res.data);
      } catch (error)
      {
        console.error("Failed to fetch admin data", error);
      }
    };

    const fetchFarmData = async () =>
    {
      try
      {
        const res = await getFarmOnboard();
        setFarmData(res.data);
        setFilteredData(res.data);
        const approvedFarms = res.data.filter(
          (farm: any) => farm.approvedByAdmin
        );
        setApprovedFarmData(approvedFarms.length);
      } catch (error)
      {
        console.error("Failed to fetch farm data", error);
      }
    };

    fetchAdminData();
    fetchFarmData();
  }, []);

  useEffect(() =>
  {
    const lowercasedQuery = searchQuery.toLowerCase();
    const filteredResults = farmData.filter((farm) =>
    {
      const matchesQuery =
        farm.organization?.toLowerCase().includes(lowercasedQuery) ||
        farm.address?.toLowerCase().includes(lowercasedQuery);
      const matchesStatus =
        statusFilter === "All" ||
        (statusFilter === "Approved" && farm.approvedByAdmin) ||
        (statusFilter === "Pending" && !farm.approvedByAdmin && !farm.isRejected) ||
        (statusFilter === "Rejected" && farm.isRejected);
      return matchesQuery && matchesStatus;
    });
    setFilteredData(filteredResults);
  }, [searchQuery, statusFilter, farmData]);

  const handleViewDocument = (farm: any) =>
  {
    setSelectedFarm(farm);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) =>
  {
    try
    {
      const res = await deleteFarmOnboard(id);
      if (res.status === 200)
      {
        toast({
          title: "Farm deleted successfully",
        });
        const updatedFarmData = farmData.filter((farm) => farm._id !== id);
        setFarmData(updatedFarmData);
        setFilteredData(updatedFarmData); // Update filtered data as well
      }
    } catch (error)
    {
      console.error("Failed to delete farm onboarding data", error);
    }
  };

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <AdminSidebar />
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" to="#">
            <Package2Icon className="h-6 w-6" />
            <span className="sr-only">Home</span>
          </Link>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="shadow-xl bg-green-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-black">
                  Total Users
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black">
                  {dashBoardData?.totalUsers || 0}
                </div>
              </CardContent>
              <CardContent>
                <div className="flex gap-2 items-center">
                  <FaArrowUp color="green" />
                  <h1>
                    <span className="text-green-600">
                      {Math.abs(dashBoardData?.percentageUserIncrease) || 0}
                    </span>{" "}
                    % vs last month
                  </h1>
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-black">
                  Total Farms Onboarded
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black">
                  {approvedFarmData || 0}
                </div>
              </CardContent>
            </Card>
            <Card className="shadow-xl bg-green-300">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-black">
                  Active Projects
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-black">
                  {dashBoardData?.totalProjects || 0}
                </div>
              </CardContent>
              <CardContent>
                <div className="flex gap-2 items-center">
                  <FaArrowUp color="green" />
                  <h1>
                    <span className="text-green-600">
                      {Math.floor(
                        Math.abs(dashBoardData?.projectCountPerMonth || 0)
                      )}
                    </span>{" "}
                    % vs last month
                  </h1>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="border shadow-sm rounded-lg p-4 mt-6 bg-white">
            <div className=" p-4  bg-white ">
              <div className="flex flex-wrap lg:flex-nowrap justify-between items-center mb-4 w-full">
                {/* Heading */}
                <h2 className="font-bold text-2xl mb-4 lg:mb-0 w-full lg:w-2/5 ">
                  Farm Onboarding
                </h2>

                {/* Filter and Search */}
                <div className="flex items-center gap-4">
                  {/* Filter Dropdown */}
                  <select
                    className="p-2 border border-black rounded-md"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="All">All</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>

                  {/* Search Input */}
                  <form className="flex-1 relative border border-black rounded-md w-72 ">
                    <Search className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-500" />
                    <Input
                      className="w-full bg-white shadow-none appearance-none pl-8 dark:bg-gray-950"
                      placeholder="Search by Organization or Location..."
                      type="search"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </form>
                </div>
              </div>
            </div>

            <div className="overflow-y-auto h-96">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold text-black text-xl">Organization</TableHead>
                    <TableHead className="font-bold text-black text-xl">Location</TableHead>
                    <TableHead className="font-bold text-black text-xl">Area</TableHead>
                    <TableHead className="font-bold text-black text-xl">Status</TableHead>
                    <TableHead className="font-bold text-black text-xl">Action</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredData.length > 0 ? (
                    filteredData.map((farm, index) => (
                      <TableRow key={index}>
                        <TableCell>{farm.organization || "N/A"}</TableCell>
                        <TableCell>{farm.address || "N/A"}</TableCell>
                        <TableCell>{farm.area || "N/A"}</TableCell>
                        <TableCell>
                          {!farm.isRejected && (
                            farm.approvedByAdmin ? (
                              <div className="bg-green-500 text-white px-4 py-2 rounded-2xl text-center font-semibold">
                                Approved
                              </div>
                            ) : (
                              <div className="bg-yellow-500 text-white px-4 py-2 rounded-2xl text-center font-semibold">
                                Pending
                              </div>
                            )
                          )}
                          {farm.isRejected && (
                            <div className="bg-red-500 text-white px-4 py-2 rounded-2xl text-center font-semibold">
                              Rejected
                            </div>
                          )}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Button
                              variant="outline"
                              className="hover:text-white hover:bg-green-600"
                              onClick={() => handleViewDocument(farm)}
                            >
                              View Document
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
                      <TableCell colSpan={5} className="text-center">
                        No farm data available.
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </div>
          </div>
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
  );
}
