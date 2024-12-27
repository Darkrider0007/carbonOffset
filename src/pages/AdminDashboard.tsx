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
import { Plus, Search } from "lucide-react";
import { getFarmOnboard } from "../api/farmOnboard";
import EditProject from "../components/EditProject";
import { BarGraph } from "./Graphs/BarGraph";
import SmoothScroll from "../components/SmoothScroll";

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
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="shadow-xl bg-green-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Total User
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
                    Total Farm Onboarded
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
                          Math.abs(dashBoardData?.projectCountPerMonth)
                        )}
                      </span>{" "}
                      % vs last month
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </div>
            <BarGraph projects={projectData} />
            <div className="border shadow-sm rounded-lg p-4 mt-6 bg-white">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <h2 className="font-bold text-2xl mb-4 md:mb-0">
                  Active Projects
                </h2>
                <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
                  {/* Search Input Container */}
                  <div className="flex flex-row items-center gap-2 border border-gray-300 rounded-lg text-gray-600 pl-2 focus-within:ring-2 focus-within:ring-green-500 w-full md:w-64 lg:w-80">
                    <Search className="w-6 h-6 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search projects"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="focus:outline-none p-2 w-full bg-transparent"
                    />
                  </div>
                  {/* Add Project Button */}
                  <Button
                    onClick={handleAddProject}
                    variant="outline"
                    className="bg-green-500 hover:bg-green-600 text-white flex items-center gap-2 py-2 px-4"
                  >
                    <Plus className="w-5 h-5" /> Add Project
                  </Button>
                </div>
              </div>

              {/* Set a fixed height for the table and enable scrolling */}
              <div className="overflow-y-auto h-96">
                <Table className="w-full">
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-lg text-black font-semibold">
                        Project Name
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Location
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Status
                      </TableHead>
                      <TableHead className="text-lg  text-black font-semibold">
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
                        <TableRow key={index}>
                          <TableCell className="flex flex-row items-center justify-start gap-2 w-72">
                            <img
                              className="h-10 w-10 border-2 p-1 rounded-full"
                              src={project.image}
                              alt=""
                            />
                            {project.name}
                          </TableCell>
                          <TableCell>{project.location}</TableCell>
                          <TableCell>
                            <div
                              className={`p-1 ${
                                project.status
                                  ? "bg-green-500 text-white"
                                  : "bg-red-500 text-white"
                              } flex justify-center items-center rounded-2xl`}
                            >
                              {project.status}
                            </div>
                          </TableCell>

                          <TableCell>{project.userCount}</TableCell>
                          <TableCell>
                            <div className="flex gap-2 flex-row">
                              <Button
                                className="bg-green-500 hover:text-white hover:bg-green-600"
                                onClick={() => {
                                  setSelectedProject(project);
                                  toggleEditModal();
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                className="bg-red-500 hover:text-white hover:bg-red-600"
                                onClick={() => {
                                  handleDeleteProject(project._id);
                                }}
                              >
                                Delete
                              </Button>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={5}
                          className="text-center text-black py-4"
                        >
                          No projects found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </div>
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
