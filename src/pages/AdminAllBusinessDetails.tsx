import {
    CardTitle,
    CardHeader,
    CardContent,
    Card,
} from "../components/ui/card";
import { FaArrowUp } from "react-icons/fa6";
import AdminSidebar from "../components/AdminSidebar";
import { useEffect, useState } from "react";
import { getAdminData } from "../api/admin";
import { Link } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../components/ui/table";
import SmoothScroll from "../components/SmoothScroll";
import { Package2Icon } from "lucide-react";
import { getBusinessDetails } from "../api/businessDetails";

export default function AdminAllBusinessDetails() {
    const [dashBoardData, setDashBoardData] = useState<any>([]);
    const [businessData, setBusinessData] = useState<any>([]);
    useEffect(() => {
        const fetchAdminData = async () => {
            const res = await getAdminData();
            setDashBoardData(res.data);
        };

        const fetchBusinessData = async () => {
            const res = await getBusinessDetails();
            console.log(res.data);
            setBusinessData(res.data);
        }

        fetchAdminData();
        fetchBusinessData();
    }, []);

    return (
        <SmoothScroll>
            <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
                <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
                    <AdminSidebar />
                </div>
                <div className="flex flex-col">
                    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
                        <Link className="lg:hidden" to="#">
                            <Package2Icon className="h-6 w-6" />
                        </Link>
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
                                        {dashBoardData?.totalUsers}
                                    </div>
                                </CardContent>
                                <CardContent>
                                    <div className="flex gap-2 items-center">
                                        <FaArrowUp color="green" />
                                        <h1>
                                            <span className="text-green-600">
                                                {Math.abs(dashBoardData?.percentageUserIncrease)}
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
                                        {" "}
                                        {dashBoardData?.totalProjects}
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
                        <div className="overflow-x-auto">
                            <Table className="min-w-full text-sm">
                                <TableHeader>
                                    <TableRow>
                                        <TableHead className="px-4 py-2">Name</TableHead>
                                        <TableHead className="px-4 py-2">Title</TableHead>
                                        <TableHead className="px-4 py-2">Company</TableHead>
                                        <TableHead className="px-4 py-2">Industry</TableHead>
                                        <TableHead className="px-4 py-2">Employees</TableHead>
                                        <TableHead className="px-4 py-2">Email</TableHead>
                                        <TableHead className="px-4 py-2">Phone</TableHead>
                                        <TableHead className="px-4 py-2">Country</TableHead>
                                        <TableHead className="px-4 py-2">Address</TableHead>
                                        <TableHead className="px-4 py-2">City</TableHead>
                                        <TableHead className="px-4 py-2">Postal Code</TableHead>
                                        <TableHead className="px-4 py-2">Total Carbon Emission</TableHead>
                                        <TableHead className="px-4 py-2">Total Credit</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {businessData.map((business: any) => (
                                        <TableRow key={business._id}>
                                            <TableCell className="px-4 py-2">{business.name}</TableCell>
                                            <TableCell className="px-4 py-2">{business.title}</TableCell>
                                            <TableCell className="px-4 py-2">{business.company}</TableCell>
                                            <TableCell className="px-4 py-2">{business.industry}</TableCell>
                                            <TableCell className="px-4 py-2">{business.employees}</TableCell>
                                            <TableCell className="px-4 py-2">{business.email}</TableCell>
                                            <TableCell className="px-4 py-2">{business.phone}</TableCell>
                                            <TableCell className="px-4 py-2">{business.country}</TableCell>
                                            <TableCell className="px-4 py-2">{business.address}</TableCell>
                                            <TableCell className="px-4 py-2">{business.city}</TableCell>
                                            <TableCell className="px-4 py-2">{business.postalCode}</TableCell>
                                            <TableCell className="px-4 py-2">{business.totalCarbonEmmision}</TableCell>
                                            <TableCell className="px-4 py-2">{business.totalCradit}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </div>
                    </main>
                </div>
            </div>
        </SmoothScroll>
    )
}