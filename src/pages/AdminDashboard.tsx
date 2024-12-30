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
import {
  Plus,
  Search,
  Edit2,
  Trash2,
  Users,
  Briefcase,
  Eye,
  Menu,
} from "lucide-react";
import { getFarmOnboard } from "../api/farmOnboard";
import EditProject from "../components/EditProject";
import { BarGraph } from "./Graphs/BarGraph";
import SmoothScroll from "../components/SmoothScroll";
import { GiFarmer } from "react-icons/gi";
import ViewProject from "../components/ViewProject";
import { UserCountLineGraph } from "./Graphs/calculateGrowth";
import CountryFlag from "../components/CountryFlag";

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
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
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

        console.log(adminRes.data.allProjects);
        setProjectData(adminRes.data.allProjects);
        setDashBoardData(adminRes.data);

        const approvedFarms = farmRes.data.filter(
          (farm: any) => farm.approvedByAdmin
        );
        setApprovedFarmData(approvedFarms.length);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);

  const handleViewProject = (project: ProjectData) => {
    setSelectedProject(project);
    setIsViewModalOpen(true);
  };

  const toggleViewModal = () => {
    setIsViewModalOpen(!isViewModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleAddProject = () => {
    setIsModalOpen(true);
  };

  const handleDeleteProject = async (id: string) => {
    try {
      await deleteProject({ id });
      setProjectData((prev) => prev.filter((project) => project._id !== id));
    } catch (error) {
      console.error("Failed to delete project", error);
    }
  };

  const filteredProjects = projectData.filter(
    (project) =>
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Mobile Card Component
  const ProjectCard = ({ project }: { project: ProjectData }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <img
              className="h-12 w-12 rounded-full object-cover border-2 border-gray-200"
              src={project.image}
              alt={project.name}
            />
            <div>
              <h3 className="font-medium text-gray-800">{project.name}</h3>
              <p className="text-sm text-gray-600">{project.location}</p>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <span
              className={`px-3 py-1 rounded-full text-sm font-medium ${
                project.status
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {project.status}
            </span>
            <div className="flex items-center gap-2">
              <Users className="h-4 w-4 text-gray-400" />
              <span className="font-medium text-gray-700">
                {project.userCount}
              </span>
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Button
              onClick={() => handleViewProject(project)}
              className="bg-gray-500 hover:bg-gray-600 text-white"
              size="sm"
            >
              <Eye className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => {
                setSelectedProject(project);
                toggleEditModal();
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white"
              size="sm"
            >
              <Edit2 className="h-4 w-4" />
            </Button>
            <Button
              onClick={() => handleDeleteProject(project._id)}
              className="bg-red-500 hover:bg-red-600 text-white"
              size="sm"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
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
            onClick={() => setIsSidebarOpen(false)}
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
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-base md:text-lg font-bold truncate">
              Admin Dashboard
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
                    Total Farm Onboarded
                  </CardTitle>
                  <GiFarmer className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {approvedFarmData || 0}
                  </div>
                  <div className="mt-2 text-xs md:text-sm text-white/80">
                    Total approved farms
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#DB20C4] to-[#F86893] text-white">
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
                      )}
                      % vs last month
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Charts Section */}
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <BarGraph projects={projectData} />
              <UserCountLineGraph projects={projectData} />
            </div>

            {/* Projects Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-xl md:text-2xl text-gray-800">
                    Active Projects
                  </h2>
                  <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search projects..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    <Button
                      onClick={handleAddProject}
                      className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white shadow-lg transform transition-all duration-200 hover:scale-105"
                    >
                      <Plus className="w-5 h-5 mr-2" /> Add Project
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <div className="p-4 md:p-6">
                {isSmallScreen ? (
                  // Mobile view - Cards
                  <div className="space-y-4">
                    {filteredProjects.length > 0 ? (
                      filteredProjects.map((project) => (
                        <ProjectCard key={project._id} project={project} />
                      ))
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No projects found.
                      </div>
                    )}
                  </div>
                ) : (
                  // Desktop view - Table
                  <div className="overflow-x-auto">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            Project Name
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            Location
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            Status
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            User Count
                          </TableHead>
                          <TableHead className="text-base md:text-lg font-semibold text-gray-700">
                            Actions
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredProjects.length > 0 ? (
                          filteredProjects.map((project) => (
                            <TableRow
                              key={project._id}
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
                                <CountryFlag
                                  countryName={project.location}
                                  size="1.5em"
                                  className="mr-2"
                                />
                                {project.location}
                                {/* {project.location} */}
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
                                <div className="flex items-center justify-center gap-2">
                                  <Users className="h-4 w-4 text-gray-400" />
                                  <span>{project.userCount}</span>
                                </div>
                              </TableCell>
                              <TableCell>
                                <div className="flex gap-2">
                                  <Button
                                    onClick={() => handleViewProject(project)}
                                    className="bg-gray-500 hover:bg-gray-600 text-white"
                                    size="sm"
                                  >
                                    <Eye className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    onClick={() => {
                                      setSelectedProject(project);
                                      toggleEditModal();
                                    }}
                                    className="bg-blue-500 hover:bg-blue-600 text-white"
                                    size="sm"
                                  >
                                    <Edit2 className="h-4 w-4" />
                                  </Button>
                                  <Button
                                    onClick={() =>
                                      handleDeleteProject(project._id)
                                    }
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
                              No projects found.
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                )}
              </div>
            </Card>

            {/* Modals */}
            {selectedProject && (
              <ViewProject
                isOpen={isViewModalOpen}
                toggleModal={toggleViewModal}
                projectData={selectedProject}
              />
            )}
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
