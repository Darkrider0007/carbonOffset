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
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <h1 className="text-lg font-bold">Proposal</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
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
                    Total Proposals
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    {proposalData?.length || 0}
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
              <div className="p-4 bg-white">
                <h2 className="font-bold text-2xl mb-4">Proposals</h2>
              </div>

              <div className="overflow-y-auto h-96">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold text-black text-xl">
                        Name
                      </TableHead>
                      <TableHead className="font-bold text-black text-xl">
                        Email
                      </TableHead>
                      <TableHead className="font-bold text-black text-xl">
                        Needs Funding
                      </TableHead>
                      <TableHead className="font-bold text-black text-xl">
                        Action
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {proposalData && proposalData.length > 0 ? (
                      proposalData.map((item: any) => (
                        <TableRow key={item._id}>
                          <TableCell>
                            {`${item.firstName} ${item.lastName}` || "N/A"}
                          </TableCell>
                          <TableCell>{item.email || "N/A"}</TableCell>
                          <TableCell>
                            <span
                              className={`px-2 py-1 rounded-full text-sm ${
                                item.isNeedFund
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {item.isNeedFund ? "Yes" : "No"}
                            </span>
                          </TableCell>
                          <TableCell>
                            <Button
                              variant="outline"
                              className="hover:text-white hover:bg-green-600"
                              onClick={() => handleViewDocument(item)}
                            >
                              View Details
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={4} className="text-center">
                          No proposal data available.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>

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
