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
import { Users, Briefcase, Eye, Globe2, HandHelping } from "lucide-react";
import SmoothScroll from "../components/SmoothScroll";
import { getVolunteerRegistrationData } from "../api/volunteerRegistration";
import ViewRegistrationForm from "../components/ViewRegistrationForm";

export default function AdminVolunteerRegistration() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [VolunteerData, setVolunteerData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedVolunteer, setSelectedVolunteer] = useState<any>(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await getAdminData();

        setDashBoardData(res.data);
      } catch (error) {
        console.error("Failed to fetch admin data", error);
      }
    };

    const fetchVolunteerData = async () => {
      try {
        const res = await getVolunteerRegistrationData();
        console.log(res.data);
        if (res.data) {
          setVolunteerData(res.data);
        }
      } catch (error) {
        console.error("Failed to fetch participation data", error);
      }
    };

    fetchAdminData();
    fetchVolunteerData();
  }, []);

  const handleViewDocument = (volunteer: any) => {
    setSelectedVolunteer(volunteer);
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
            <h1 className="text-lg font-bold">Volunteer Management</h1>
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
                    Total Volunteers
                  </CardTitle>
                  <HandHelping className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {VolunteerData?.length || 0}
                  </div>
                  <div className="mt-2 text-sm opacity-75">
                    Registered volunteers
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

            {/* Volunteers Table Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <div className="space-y-1">
                    <h2 className="font-bold text-2xl text-gray-800">
                      Volunteer Directory
                    </h2>
                    <p className="text-sm text-gray-500">
                      Manage and view all registered volunteers
                    </p>
                  </div>
                </div>
              </CardHeader>

              <div className="p-6">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Organization
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Email
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Country
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {VolunteerData && VolunteerData.length > 0 ? (
                          VolunteerData.map((item: any) => (
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
                                <div className="flex items-center gap-2">
                                  <Globe2 className="h-4 w-4 text-gray-500" />
                                  <span className="text-gray-600">
                                    {item.country || "N/A"}
                                  </span>
                                </div>
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
                              No volunteers registered yet
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </Card>

            <ViewRegistrationForm
              isOpen={isModalOpen}
              toggleModal={() => setIsModalOpen(false)}
              selectedVolunteer={selectedVolunteer}
            />
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
