import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../components/ui/input";
import {
    CardTitle,
    CardHeader,
    CardContent,
    Card,
} from "../components/ui/card";
import { Link } from "react-router-dom";
import AdminSidebar from "../components/AdminSidebar";
import { getAdminData } from "../api/admin";
import { getTokenData, updateTokenPrice } from "../api/token"; // Assuming there's an updateTokenPrice function in the API
import { Loader2 } from "lucide-react";

export default function Token() {
    const [dashBoardData, setDashBoardData] = useState<any>([]);
    const [tokenData, setTokenData] = useState<any>([]);
    const [updating, setUpdating] = useState(false);
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        const fetchAdminData = async () => {
            const res = await getAdminData();
            setDashBoardData(res.data);
        };

        const fetchToken = async () => {
            try {
                const res = await getTokenData();
                setTokenData(res.data);
            } catch (error) {
                console.error("Error fetching token data:", error);
                throw error;
            }
        };
        fetchAdminData();
        fetchToken();
    }, []);

    // Function to handle token price update
    const onUpdateTokenPrice = async (data: any) => {
        setUpdating(true);
        try {
            console.log(data.tokenPrice);
            await updateTokenPrice(data.tokenPrice, tokenData._id);
            const updatedTokenData = await getTokenData();
            setTokenData(updatedTokenData.data);
            reset();
        } catch (error) {
            console.error("Error updating token price:", error);
        } finally {
            setUpdating(false);
        }
    };

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
                    <div className="w-full flex-1">
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
                    </div>
                </header>
                <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
                    <div className="grid h-[20vh] gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <Card className="shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-md font-bold text-black">
                                    Total User
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-black">
                                    {dashBoardData?.totalUsers}
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-md font-bold text-black">
                                    Total Token Volume
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-black">{tokenData.tokenVolume}</div>
                            </CardContent>
                        </Card>
                        <Card className="shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-md font-bold text-black">
                                    Token Current Value
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="text-2xl font-bold text-black">
                                    ${tokenData?.tokenPrice}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="grid h-[20vh] gap-4 md:grid-cols-1 xl:grid-cols-2">
                        {/* Update Token Price Card */}
                        <Card className="shadow-xl">
                            <CardHeader className="flex flex-row items-center justify-between pb-2">
                                <CardTitle className="text-md font-bold text-black">
                                    Update Token Price
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit(onUpdateTokenPrice)}>
                                    <div className="flex gap-4 items-center">
                                        <Input
                                            type="number"
                                            step="0.01"
                                            placeholder="Enter new token price"
                                            {...register("tokenPrice", { required: true })} // Register the input with React Hook Form
                                            className="bg-white shadow-none appearance-none w-full md:w-2/3 lg:w-1/2 p-2 border rounded-md dark:bg-gray-950"
                                        />
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                        >
                                            {
                                                updating ? <div className="flex flex-row">
                                                    <Loader2 className="animate-spin mr-2" /> Updating ...
                                                </div> :
                                                    <>
                                                        <h1 className="text-white">Update</h1>
                                                    </>
                                            }
                                        </button>
                                    </div>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
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

function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
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
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    );
}
