// import { Button } from "../components/ui/button";
// // import { Input } from "../components/ui/input";
// import {
//   CardTitle,
//   CardHeader,
//   CardContent,
//   Card,
// } from "../components/ui/card";

// import { Link, useLocation, useNavigate } from "react-router-dom";
// import Sidebar from "../components/Sidebar";
// // import TopUpWithdrawChart from "../components/TopUpWithdrawChart";
// // import CarbonOffsetChart from "../components/CarbonOffsetChart";
// import { useContext, useEffect, useState } from "react";
// import { getUser } from "../api/auth/getUser";
// import { logout } from "../api/auth/loginAndLogout";
// import { toast } from "../hooks/use-toast";
// import UserContext from "../context/UserContext";
// // import { getTokenData } from "../api/token";

// export default function UserUpdates() {
//   const navigate = useNavigate();
//   const [user, setUser1] = useState<any>({});
//   // const [tokenConversionRate, setTokenConversionRate] = useState(10);

//   const location = useLocation();

//   const context = useContext(UserContext);

//   console.log("context", context);
//   console.log("location", location.state.user);

//   // Ensure context is defined before accessing properties
//   if (!context) {
//     throw new Error("UserProfile must be used within a UserContextProvider");
//   }

//   const { setUser } = context;

//   const handelLogout = async () => {
//     try {
//       const res = await logout();
//       console.log(res);
//       if (res.status === 200) {
//         setUser({
//           id: "",
//           firstName: "",
//           lastName: "",
//           email: "",
//         });
//         toast({
//           title: "Logged out successfully",
//         });
//         setTimeout(() => {
//           navigate("/login");
//         }, 1000);
//       }
//     } catch (error) {
//       console.log("error", error);
//       toast({
//         title: "Error",
//         description: "Error during logout",
//         variant: "destructive",
//       });
//     }
//   };

//   useEffect(() => {
//     if (location.state && location.state.user) {
//       setUser1(location.state.user);
//     } else {
//       const getUserDetails = async () => {
//         const res = await getUser();
//         console.log("res", res);
//         setUser1(res.data.data);
//       };
//       getUserDetails();
//     }
//   }, [location.state]);

//   return (
//     <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr] bg-gray-50 dark:bg-gray-900">
//       <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
//         <Sidebar />
//       </div>
//       <div className="flex flex-col h-full">
//         <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
//           <Link className="lg:hidden" to="#">
//             {/* <Package2Icon className="h-6 w-6" /> */}
//             <span className="sr-only">Home</span>
//           </Link>
//           <Button
//             className="ml-auto bg-red-500 hover:bg-red-700 text-white"
//             onClick={() => {
//               handelLogout();
//             }}
//           >
//             Logout
//           </Button>
//         </header>

//         <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
//           <h1 className="font-bold text-2xl text-gray-800 dark:text-white">
//             {user && user.firstName
//               ? `${
//                   user.firstName.charAt(0).toUpperCase() +
//                   user.firstName.slice(1)
//                 }'s Profile`
//               : "User's Profile"}
//           </h1>

//           {/* Card Grid */}
//           <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             <Card className="bg-blue-600 shadow-lg">
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-md font-bold text-white">
//                   User Information
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-lg text-white">
//                   <p>
//                     <strong>Name:</strong>{" "}
//                     {user ? `${user.firstName} ${user.lastName}` : "N/A"}
//                   </p>
//                   <p>
//                     <strong>Email:</strong> {user ? user.email : "N/A"}
//                   </p>
//                   <p>
//                     <strong>Verification Status:</strong>{" "}
//                     {user && user.isVerified ? "Verified" : "Not Verified"}
//                   </p>
//                   <p>
//                     <strong>Tokens:</strong> {user ? user.tokenCount : 0} Tokens
//                   </p>
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-green-600 shadow-lg">
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-md font-bold text-white">
//                   Available Tokens
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold text-white">
//                   {user ? user.tokenCount : 0} Tokens
//                 </div>
//               </CardContent>
//             </Card>

//             <Card className="bg-yellow-600 shadow-lg">
//               <CardHeader className="flex flex-row items-center justify-between pb-2">
//                 <CardTitle className="text-md font-bold text-white">
//                   Used Tokens
//                 </CardTitle>
//               </CardHeader>
//               <CardContent>
//                 <div className="text-2xl font-bold text-white">0 Tokens</div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Chart Section */}
//           <div className="flex flex-col lg:flex-row justify-between gap-8">
//             {/* TopUpWithdrawChart */}
//             {/* <div className="w-full lg:w-1/2">
//               <TopUpWithdrawChart />
//             </div> */}

//             {/* CarbonOffsetChart */}
//             {/* <div className="flex flex-col items-center w-full lg:w-60 md:pr-8">
//               <div className="w-4/5 md:w-full mb-2">
//                 <h1 className="font-bold text-lg text-center">
//                   Carbon-offset Achieved
//                 </h1>
//                 <CarbonOffsetChart />
//               </div>
//             </div> */}
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

import { Button } from "../components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useContext, useEffect, useState } from "react";
import { getUser } from "../api/auth/getUser";
import { logout } from "../api/auth/loginAndLogout";
import { toast } from "../hooks/use-toast";
import UserContext from "../context/UserContext";
import SmoothScroll from "../components/SmoothScroll";

export default function UserUpdates() {
  const navigate = useNavigate();
  const [user, setUser1] = useState<any>(null);
  const location = useLocation();
  const context = useContext(UserContext);

  // Ensure context is defined before accessing properties
  if (!context) {
    throw new Error("UserProfile must be used within a UserContextProvider");
  }

  const { setUser } = context;

  const handelLogout = async () => {
    try {
      const res = await logout();
      if (res.status === 200) {
        setUser({
          id: "",
          firstName: "",
          lastName: "",
          email: "",
        });
        toast({ title: "Logged out successfully" });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Error during logout",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const res = await getUser();
        if (res.data && res.data.data) {
          setUser1(res.data.data);
        } else {
          console.error("User data not found");
        }
      } catch (error) {
        console.error("Failed to fetch user details", error);
      }
    };

    // Check if location.state and user are defined
    if (location.state && location.state.user) {
      setUser1(location.state.user);
    } else {
      getUserDetails();
    }
  }, [location.state]);

  // Handle loading state or empty user
  if (!user) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <SmoothScroll>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <Sidebar />
        </div>
        <div className="flex flex-col h-full">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" to="#">
              <span className="sr-only">Home</span>
            </Link>
            <Button className="ml-auto" onClick={handelLogout}>
              Logout
            </Button>
          </header>

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <h1 className="font-bold text-2xl text-gray-800 dark:text-white">
              {user.firstName
                ? `${
                    user.firstName.charAt(0).toUpperCase() +
                    user.firstName.slice(1)
                  }'s Profile`
                : "User's Profile"}
            </h1>

            {/* User Information */}
            <div className="bg-white shadow rounded-lg p-4">
              <h2 className="text-lg font-semibold">User Details</h2>
              <p>
                <strong>ID:</strong> {user._id}
              </p>
              <p>
                <strong>Name:</strong> {user.firstName} {user.lastName}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <p>
                <strong>Token Count:</strong> {user.tokenCount} Tokens
              </p>
              <p>
                <strong>Verified:</strong> {user.isVerified ? "Yes" : "No"}
              </p>
            </div>

            {/* Card Grid */}
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="bg-green-600">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Available Tokens
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {user.tokenCount || 0} Tokens
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
                  <div className="text-2xl font-bold text-white">0 Tokens</div>
                </CardContent>
              </Card>
            </div>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
