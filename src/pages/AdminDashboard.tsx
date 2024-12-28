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
import AddProject from "../components/AddProject";
import { useEffect, useState } from "react";
import { deleteProject } from "../api/addProject";
import { getAdminData } from "../api/admin";
import { Plus, Search, Edit2, Trash2, Users, Briefcase } from "lucide-react";
import { getFarmOnboard } from "../api/farmOnboard";
import EditProject from "../components/EditProject";
import { BarGraph } from "./Graphs/BarGraph";
import SmoothScroll from "../components/SmoothScroll";
import { GiFarmer } from "react-icons/gi";

interface ProjectData {
  name: string;
  location: string;
  status: string;
  userCount: number;
  _id: string;
  image: string;
  details: string;
}

export default function AdminDashboard() {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [approvedFarmData, setApprovedFarmData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(
    null
  );

  const handleAddProject = () => {
    setIsModalOpen(true);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProject({ id });
      setProjectData((prev) =>
        prev.filter((project: any) => project._id !== id)
      );
    } catch (error) {
      console.error("Failed to delete project", error);
    }
  };

  useEffect(() => {
    const fetchAdminData = async () => {
      const res = await getAdminData();
      console.log(res.data.allProjects);
      setProjectData(res.data.allProjects);
      setDashBoardData(res.data);
    };

    const fetchFarmData = async () => {
      try {
        const res = await getFarmOnboard();
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

  // Filtered projects based on the search term
  const filteredProjects = projectData.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <SmoothScroll>
      <div className="grid w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gradient-to-b from-gray-50 to-white lg:block dark:from-gray-900 dark:to-gray-800">
          <AdminSidebar />
        </div>
        <div className="flex flex-col min-h-screen">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
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
                    Total Farm Onboarded
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
                      )}
                      % vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Bar Graph */}
            <BarGraph projects={projectData} />

            {/* Projects Table Section */}
            <Card className="overflow-hidden bg-white flex flex-col">
              <CardHeader className="border-b bg-gray-50/50 p-6 flex-none">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-2xl mb-4 md:mb-0">
                    Active Projects
                  </h2>
                  <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>
                    <Button
                      onClick={handleAddProject}
                      className="bg-green-500 hover:bg-green-600 text-white shadow-lg transform transition-all duration-200 hover:scale-105"
                    >
                      <Plus className="w-5 h-5 mr-2" /> Add Project
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                <Table className="min-w-full">
                  <TableHeader>
                    <TableRow className="bg-gray-50">
                      <TableHead className="text-lg text-black font-semibold">
                        Project Name
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Location
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Status
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        User Count
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Actions
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project, index) => (
                        <TableRow
                          key={index}
                          className="hover:bg-gray-50 transition-colors duration-200"
                        >
                          <TableCell className="flex items-center gap-3">
                            <img
                              className="h-10 w-10 rounded-full object-cover border-2 border-gray-200"
                              src={project.image}
                              alt={project.name}
                            />
                            <span className="font-medium text-gray-800">
                              {project.name}
                            </span>
                          </TableCell>
                          <TableCell className="text-gray-600">
                            {project.location}
                          </TableCell>
                          <TableCell>
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-medium ${
                                project.status
                                  ? "bg-green-100 text-green-800"
                                  : "bg-red-100 text-red-800"
                              }`}
                            >
                              {project.status}
                            </span>
                          </TableCell>
                          <TableCell className="font-medium text-gray-700">
                            {project.userCount}
                          </TableCell>
                          <TableCell>
                            <div className="flex gap-2">
                              <Button
                                onClick={() => {
                                  setSelectedProject(project);
                                  toggleEditModal();
                                }}
                                className="bg-blue-500 hover:bg-blue-600 text-white p-2"
                                size="sm"
                              >
                                <Edit2 className="h-4 w-4" />
                              </Button>
                              <Button
                                onClick={() => handleDeleteProject(project._id)}
                                className="bg-red-500 hover:bg-red-600 text-white p-2"
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
                          No projects found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </Card>

            <AddProject
              isOpen={isModalOpen}
              toggleModal={toggleModal}
              onAddProject={setProjectData}
            />
            <EditProject
              isOpen={isEditModalOpen}
              toggleModal={toggleEditModal}
              onEditProject={setProjectData}
              projectData={selectedProject}
            />
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
