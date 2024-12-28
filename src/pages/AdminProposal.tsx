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
import { getProposalData } from "../api/proposal";
import ViewProposal from "../components/ViewProposal";
import { Briefcase, Eye, FileText, Users } from "lucide-react";

export default function AdminProposal() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [proposalData, setProposalData] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<any>(null);

  useEffect(() => {
    const fetchAdminData = async () => {
      try {
        const res = await getAdminData();
        setDashBoardData(res.data);
      } catch (error) {
        console.error("Failed to fetch admin data", error);
      }
    };

    const fetchProposalData = async () => {
      try {
        const res = await getProposalData();
        console.log("Proposal API Response:", res);

        if (res.data && res.data.data) {
          console.log("Setting proposal data:", res.data.data);
          setProposalData(res.data.data);
        }
      } catch (error) {
        console.error("Failed to fetch proposal data", error);
      }
    };

    fetchAdminData();
    fetchProposalData();
  }, []);

  const handleViewDocument = (proposal: any) => {
    setSelectedProposal(proposal);
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
            <h1 className="text-lg font-bold">Proposal Management</h1>
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
                    Total Proposals
                  </CardTitle>
                  <FileText className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {proposalData?.length || 0}
                  </div>
                  <div className="mt-2 text-sm opacity-75">
                    Submitted proposals
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

            {/* Proposals Table Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-2xl text-gray-800">
                    Proposal Management
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
                            Funding Need
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {proposalData && proposalData.length > 0 ? (
                          proposalData.map((item: any) => (
                            <TableRow
                              key={item._id}
                              className="hover:bg-gray-50 transition-colors duration-200"
                            >
                              <TableCell className="font-medium text-gray-800">
                                {`${item.firstName} ${item.lastName}` || "N/A"}
                              </TableCell>
                              <TableCell className="text-gray-600">
                                {item.email || "N/A"}
                              </TableCell>
                              <TableCell>
                                <span
                                  className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                    item.isNeedFund
                                      ? "bg-blue-100 text-blue-800"
                                      : "bg-gray-100 text-gray-800"
                                  }`}
                                >
                                  {item.isNeedFund
                                    ? "Required"
                                    : "Not Required"}
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
                              No proposals available
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              </div>
            </Card>

            <ViewProposal
              isOpen={isModalOpen}
              toggleModal={() => setIsModalOpen(false)}
              selectedProposal={selectedProposal}
            />
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
