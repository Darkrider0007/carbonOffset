import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";

import { Link } from "react-router-dom";

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
import { Button } from "../components/ui/button";
import { deleteFarmOnboard, getFarmOnboard } from "../api/farmOnboard";
import ViewFarmBoarding from "../components/ViewFarmBoarding";
import { toast } from "../hooks/use-toast";
import { AlertDialogDemo } from "../components/AlertDialogDemo";

export default function AdminFarmOnboarding() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [farmData, setFarmData] = useState<any[]>([]);
  const [approvedFarmData, setApprovedFarmData] = useState<number>();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFarm, setSelectedFarm] = useState<any>(null);

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
        console.log("Farm Data:", res.data);
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

  const handleViewDocument = (farm: any) => {
    setSelectedFarm(farm);
    setIsModalOpen(true);
  };

  // Function to handle delete action (you need to implement this function)
  const handleDelete = async (id: string) => {
    // Implement the delete functionality here.
    console.log(`Delete farm with id: ${id}`);
    try {
      const res = await deleteFarmOnboard(id);

      if (res.status === 200) {
        toast({
          title: "Farm deleted successfully",
        })
        const updatedFarmData = farmData.filter((farm) => farm._id !== id);
        setFarmData(updatedFarmData);
      }
    } catch (error) {
      console.log(error)
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
          <div className="w-full flex-1">
            <form>
              {/* <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search..."
                  type="search"
                />
              </div> */}
            </form>
          </div>
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
            <h2 className="font-bold text-2xl mb-4">Farm Onboarding</h2>
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
                {farmData.length > 0 ? (
                  farmData.map((farm, index) => (
                    <TableRow key={index}>
                      <TableCell>{farm.organization || "N/A"}</TableCell>
                      <TableCell>{farm.address || "N/A"}</TableCell>
                      <TableCell>{farm.area || "N/A"}</TableCell>
                      <TableCell>
                        {farm.approvedByAdmin ? "Approved" : "Pending"}
                      </TableCell>
                      <TableCell>
                        <div className="flex gap-2">
                          <Button variant="outline"
                            className="hover:text-white hover:bg-green-600"
                            onClick={() => handleViewDocument(farm)}>
                            View Document
                          </Button>
                          <AlertDialogDemo
                            triggerText="Delete"
                            title="Are you absolutely sure?"
                            description="This action cannot be undone. This will permanently delete users Farm onboarding data from our servers."
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



// Icon components
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

// function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }
