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
import AdminSidebar from "../components/AdminSidebar";
import { getAdminData } from "../api/admin";
import { FaArrowUp } from "react-icons/fa6";
import SmoothScroll from "../components/SmoothScroll";
import { getMembershipData } from "../api/Membership";
import ViewMembership from "../components/ViewMembership";
import { Briefcase, Eye, UserPlus, Users } from "lucide-react";

export default function AdminMembership() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [membershipData, setMembershipData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<any>(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await getAdminData();
        setDashBoardData(res.data);
      } catch (error) {
        console.error("Failed to fetch admin data", error);
      }
    };

    const fetchMembershipData = async () => {
      try {
        const res = await getMembershipData();
        console.log("Membership API Response:", res);

        if (res.data && res.data.memberships) {
          console.log("Setting membership data:", res.data.memberships);
          setMembershipData(res.data.memberships);
        }
      } catch (error) {
        console.error("Failed to fetch membership data", error);
      }
    };

    fetchAdminData();
    fetchMembershipData();
  }, []);

  const handleViewDocument = (member: any) => {
    setSelectedMember(member);
    setIsModalOpen(true);
  };

  return (
    <SmoothScroll>
      <div className="grid w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gradient-to-b from-gray-50 to-white lg:block dark:from-gray-900 dark:to-gray-800">
          <AdminSidebar />
        </div>
        <div className="flex flex-col min-h-screen">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
            <h1 className="text-lg font-bold">Membership Management</h1>
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
                    Total Members
                  </CardTitle>
                  <UserPlus className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {membershipData?.length || 0}
                  </div>
                  <div className="mt-2 text-sm opacity-75">
                    Active memberships
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
                        Math.abs(dashBoardData?.projectCountPerMonth || 0)
                      )}
                      % vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Members Table Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-2xl text-gray-800">
                    Member Directory
                  </h2>
                </div>
              </CardHeader>

              <div className="p-6">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Name
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Email
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Membership
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {membershipData && membershipData.length > 0 ? (
                          membershipData.map((item: any) => (
                            <TableRow
                              key={item._id}
                              className="hover:bg-gray-50 transition-colors duration-200"
                            >
                              <TableCell className="font-medium text-gray-800">
                                {item.fullName || "N/A"}
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {item.email || "N/A"}
                              </TableCell>
                              <TableCell>
                                <span
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                    item.membershipType?.includes("Individual")
                                      ? "bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800"
                                      : "bg-gradient-to-r from-purple-100 to-purple-50 text-purple-800"
                                  }`}
                                >
                                  {item.membershipType?.split("(")[0] || "N/A"}
                                </span>
                              </TableCell>
                              <TableCell>
                                <Button
                                  onClick={() => handleViewDocument(item)}
                                  className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white transition-all duration-200"
                                >
                                  <Eye className="h-4 w-4 mr-2" />
                                  View Details
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={4}
                              className="text-center py-8 text-gray-500"
                            >
                              No members available
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </Card>

            <ViewMembership
              isOpen={isModalOpen}
              toggleModal={() => setIsModalOpen(false)}
              selectedMember={selectedMember}
            />
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
