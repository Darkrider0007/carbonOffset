import { Button } from "../components/ui/button";
// import { Input } from "../components/ui/input";
import
  {
    CardTitle,
    CardHeader,
    CardContent,
    Card,
  } from "../components/ui/card";

import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import TopUpWithdrawChart from "../components/TopUpWithdrawChart";
import CarbonOffsetChart from "../components/CarbonOffsetChart";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../api/auth/getUser";
import { logout } from "../api/auth/loginAndLogout";
import { toast } from "../hooks/use-toast";
import UserContext from "../context/UserContext";
// import { getTokenData } from "../api/token";

export default function UserUpdates()
{
  const navigate = useNavigate();
  const [user, setUser1] = useState<any>(null);
  // const [tokenConversionRate, setTokenConversionRate] = useState(10);

  const location = useLocation();

  const context = useContext(UserContext);

  // Ensure context is defined before accessing properties
  if (!context)
  {
    throw new Error('UserProfile must be used within a UserContextProvider');
  }

  const { setUser } = context;

  const handelLogout = async () =>
  {
    try
    {
      const res = await logout();
      console.log(res);
      if (res.status === 200)
      {
        setUser({
          id: "",
          firstName: "",
          lastName: "",
          email: "",
        })
        toast({
          title: "Logged out successfully"
        })
        setTimeout(() =>
        {
          navigate('/login');
        }, 1000)
      }
    } catch (error)
    {
      console.log("error", error);
      toast({
        title: "Error",
        description: "Error during logout",
        variant: "destructive"
      })
    }
  }

  useEffect(() =>
  {
    if (location.state && location.state.user)
    {
      setUser1(location.state.user);
    } else
    {
      const getUserDetails = async () =>
      {
        const res = await getUser();
        setUser1(res.data.data);
      };
      getUserDetails();
    }

    // const tokenConversion = async () => {
    //   const tokenData = await getTokenData();
    //   setTokenConversionRate(tokenData.data.tokenPrice);
    // }
    // tokenConversion();
  }, [location.state]);

  return (
    <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
      <div className=" border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
        <Sidebar />
      </div>
      <div className="flex flex-col h-full">
        <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
          <Link className="lg:hidden" to="#">
            {/* <Package2Icon className="h-6 w-6" /> */}
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
          <Button
            className="ml-auto"
            onClick={() =>
            {
              handelLogout();
            }}
          >
            Logout
          </Button>
        </header>

        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          <h1 className="font-bold">{user ? user.firstName : "John"}'s Cards</h1>

          {/* Card Grid */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* <Card className="bg-green-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-white">
                  User Account Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">$ {user ? user.tokenCount * tokenConversionRate : 0}</div>
              </CardContent>
            </Card> */}

            <Card className="bg-green-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-white">
                  Available Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">
                  {user ? user.tokenCount : 0} Tokens
                </div>
              </CardContent>
            </Card>

            <Card className="bg-green-600">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-white">
                  Used Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* <div className="text-2xl font-bold text-white">{user ? user.tokenCount : 0} Tokens</div> */}
                <div className="text-2xl font-bold text-white">0 Tokens</div>
              </CardContent>
            </Card>
          </div>

          {/* Chart Section */}
          <div className="flex flex-col lg:flex-row justify-between gap-8">
            {/* TopUpWithdrawChart */}
            <div className="w-full lg:w-1/2">
              <TopUpWithdrawChart />
            </div>

            {/* CarbonOffsetChart */}
            <div className="flex flex-col items-center w-full lg:w-60 md:pr-8">
              <div className="w-4/5 md:w-full mb-2">
                <h1 className="font-bold text-lg text-center">Carbon-offset Achieved</h1>
                <CarbonOffsetChart />
              </div>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}

// function Package2Icon(props: React.SVGProps<SVGSVGElement>) {
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
//       <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
//       <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9" />
//       <path d="M12 3v6" />
//     </svg>
//   );
// }

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
