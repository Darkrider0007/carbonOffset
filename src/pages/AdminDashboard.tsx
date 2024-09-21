import { Button } from "../components/ui/button";

import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";
import { Link } from "react-router-dom";
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
import { Plus } from "lucide-react";
import { getFarmOnboard } from "../api/farmOnboard";

interface ProjectData {
  name: string;
  location: string;
  status: string;
  userCount: number;
  _id: string;
  image: string;
}

export default function AdminDashboard() {
  const [projectData, setProjectData] = useState<ProjectData[]>([]);
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [approvedFarmData, setApprovedFarmData] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddProject = () => {
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleDeleteProject = async (id: string) => {
    try {
      // const res = await deleteProject({ id });
      // console.log(res);
      const res = await deleteProject({ id });
      console.log(res);
      setProjectData(prev => prev.filter((project: any) => project._id !== id));
    } catch (error) {
      console.error("Failed to delete project", error);
    }
  };

  useEffect(() => {
    const fetchAdminData = async () => {
      const res = await getAdminData();
      setProjectData(res.data.allProjects)
      setDashBoardData(res.data);
      console.log("res", res.data);
    }

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

    fetchAdminData();
  }, []);

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
          {/* <div className="w-full flex-1">
            <form>
              <div className="relative">
                <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                <Input
                  className="w-full bg-white shadow-none appearance-none pl-8 md:w-2/3 lg:w-1/3 dark:bg-gray-950"
                  placeholder="Search..."
                  type="search"
                />
              </div>
            </form>
          </div> */}
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
          <div className="grid h-[20vh] gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                    <span className="text-green-600">{Math.abs(dashBoardData?.percentageUserIncrease) || 0}</span> % vs last month
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
                <div className="text-2xl font-bold text-black">{approvedFarmData || 0}</div>
              </CardContent>
              <CardContent>
                {/* <div className="flex gap-2 items-center">
                  <FaArrowUp color="green" />
                  <h1>
                    <span className="text-green-600">10</span> % vs last month
                  </h1>
                </div> */}
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
                    <span className="text-green-600">{Math.floor(Math.abs(dashBoardData?.projectCountPerMonth))
                    }</span> % vs last month
                  </h1>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="border shadow-sm rounded-lg p-4 mt-6 bg-white">
            <div className="flex flex-row justify-between">
              <h2 className="font-bold text-2xl mb-4">Active Projects</h2>
              <Button
                onClick={handleAddProject}
                variant="outline" className="bg-green-500 hover:bg-green-600 text-white ">
                <Plus className="mx-2" /> Add Project
              </Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-lg text-black font-semibold">Project Name</TableHead>
                  <TableHead className="text-lg text-black font-semibold">Location</TableHead>
                  <TableHead className="text-lg text-black font-semibold">Status</TableHead>
                  <TableHead className="text-lg  text-black font-semibold">User Count</TableHead>
                  {/* <TableHead className="text-lg  text-black font-semibold">Details</TableHead> */}
                  <TableHead className="text-lg text-black font-semibold">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {projectData && projectData.map((project, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex flex-row items-center justify-start gap-2 w-72">
                      <img className="h-10 w-10 border-2 p-1 rounded-full" src={project.image} alt="" />
                      {project.name}
                    </TableCell>
                    <TableCell>{project.location}</TableCell>
                    <TableCell>
                      <div
                        className={`p-1 ${project.status ? "bg-green-500 text-white" : "bg-red-500 text-white"} flex justify-center items-center rounded-2xl`}
                      >
                        {project.status}
                      </div>
                    </TableCell>

                    <TableCell>{project.userCount}</TableCell>
                    {/* <TableCell>
                      <Button variant="outline" className=" ">
                        View
                      </Button>
                    </TableCell> */}
                    <TableCell>
                      <div className="flex gap-2">
                        {/* <Button variant="outline" className=" ">
                          Edit
                        </Button> */}
                        <Button variant="outline" className="hover:text-white hover:bg-red-600"
                          onClick={() => {
                            handleDeleteProject(project._id);
                          }}
                        >
                          Delete
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <AddProject isOpen={isModalOpen} toggleModal={toggleModal} onAddProject={setProjectData} />
        </main>
      </div>
    </div>
  );
}

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
