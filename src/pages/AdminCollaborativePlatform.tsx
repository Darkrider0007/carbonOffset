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
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Input } from "../components/ui/input";
import AdminSidebar from "../components/AdminSidebar";
import { getAdminData } from "../api/admin";
import { FaArrowUp } from "react-icons/fa6";
import { Search } from "lucide-react";
import SmoothScroll from "../components/SmoothScroll";
import { getCollaborativeParticipationData } from "../api/collaborativeParticipation";

export default function AdminCollaborativePlatform() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [searchQuery, setSearchQuery] = useState("");

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
        const res = await getCollaborativeParticipationData();
        console.log("res", res);
      } catch (error) {
        console.error("Failed to fetch farm data", error);
      }
    };

    fetchAdminData();
    fetchFarmData();
  }, []);

  return (
    <SmoothScroll>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <h1 className="text-lg font-bold">
              Collaborative Participation Platform
            </h1>
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
                    Total Collaborative Participants
                  </CardTitle>
                </CardHeader>
                <CardContent></CardContent>
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
                    Collaborative Participation Platform
                  </h2>

                  {/* Filter and Search */}
                  <div className="flex items-center gap-4">
                    {/* Filter Dropdown */}
                    <select className="p-2 border border-black rounded-md">
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
                      <TableHead className="font-bold text-black text-xl">
                        Organization
                      </TableHead>
                      <TableHead className="font-bold text-black text-xl">
                        Location
                      </TableHead>
                      <TableHead className="font-bold text-black text-xl">
                        Area
                      </TableHead>
                      <TableHead className="font-bold text-black text-xl">
                        Status
                      </TableHead>
                      <TableHead className="font-bold text-black text-xl">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody></TableBody>
                </Table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
