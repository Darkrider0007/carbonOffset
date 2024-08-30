import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";

import { Link, useLocation, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import TopUpWithdrawChart from "../components/TopUpWithdrawChart";
import CarbonOffsetChart from "../components/CarbonOffsetChart";
// import { useContext } from "react";
// import UserContext from "../context/UserContext";

export default function UserUpdates() {
  const navigate = useNavigate();

  // const context = useContext(UserContext);

  // // Ensure context is defined before accessing properties
  // if (!context) {
  //   throw new Error('UserProfile must be used within a UserContextProvider');
  // }

  // const { user } = context;

  // console.log(user);

  const location = useLocation();

  console.log(location);

  const { user } = location.state;

  console.log(user);
  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <Sidebar />
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
          <Button
            onClick={() => {
              // dispatch(logout());
              navigate("/");
            }}
          >
            Logout
          </Button>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <h1 className="font-bold">{user ? user.firstName : "Jhon"}'s Cards</h1>
          <div className="grid h-[20vh] gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <Card className="bg-green-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-white">
                  User Account Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">$ 1000</div>
              </CardContent>
            </Card>
            <Card className="bg-green-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-white">
                  Available Tokens
                </CardTitle>
                {/* <Link className="text-sm font-medium underline" to="#">
                  View All
                </Link> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">{user ? user.tokenCount
                  : 0} Tokens</div>
              </CardContent>
            </Card>
            <Card className="bg-green-600 ">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-white">
                  Used Tokens
                </CardTitle>
                {/* <Link className="text-sm font-medium underline" to="#">
                  View All
                </Link> */}
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">100 Tokens</div>
              </CardContent>
            </Card>
            {/* <div
              style={{
                backgroundImage: `url(${cardBg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "200px",
                width: "130%",
              }}
              className="rounded-md"
            ></div> */}
          </div>
          <div className="flex justify-between pr-32">
            <div className="w-1/2">
              <TopUpWithdrawChart />
            </div>
            <div className="w-60 flex flex-col items-center">
              <h1 className="font-bold text-lg">Carbon-offset Achieved</h1>
              <CarbonOffsetChart />
            </div>
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
