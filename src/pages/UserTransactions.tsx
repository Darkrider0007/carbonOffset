import { Button } from "../components/ui/button";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../components/ui/table";
import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { format } from "date-fns";
import { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { getUser } from "../api/auth/getUser";
import { toast } from "../hooks/use-toast";
import { logout } from "../api/auth/loginAndLogout";
import SmoothScroll from "../components/SmoothScroll";

export default function UserUpdates() {
  const navigate = useNavigate();
  const [user, setUser1] = useState<any>(null);
  const context = useContext(UserContext);

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
        toast({
          title: "Logged out successfully",
        });
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      console.log("error", error);
      toast({
        title: "Error",
        description: "Error during logout",
        variant: "destructive",
      });
    }
  };

  useEffect(() => {
    const getUserDetails = async () => {
      const res = await getUser();
      setUser1(res.data.data);
    };
    getUserDetails();
  }, []);

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;

  const handleNextPage = () => {
    setCurrentPage((prev) =>
      Math.min(
        prev + 1,
        Math.floor((user?.tokenHistory.length || 0) / itemsPerPage)
      )
    );
  };

  const handlePreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const paginatedTransactions = user?.tokenHistory
    ?.sort(
      (a: any, b: any) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    )
    .slice(
      currentPage * itemsPerPage,
      currentPage * itemsPerPage + itemsPerPage
    );

  return (
    <SmoothScroll>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="lg:block border-r bg-gray-100/40 dark:bg-gray-800/40">
          <Sidebar />
        </div>

        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <Link className="lg:hidden" to="#">
              <span className="sr-only">Home</span>
            </Link>
            <Button onClick={handelLogout} className="ml-auto">
              Logout
            </Button>
          </header>

          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <h1 className="font-bold">
              {user && user.firstName
                ? `${
                    user.firstName.charAt(0).toUpperCase() +
                    user.firstName.slice(1)
                  }'s Transactions`
                : "User's Transactions"}
            </h1>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
                  <div className="text-2xl font-bold text-white">
                    {user ? user.tokenCount : 0} Tokens
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="border shadow-sm rounded-lg p-4">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Description</TableHead>
                    <TableHead>Transaction ID</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedTransactions &&
                    paginatedTransactions.map((transaction: any) => (
                      <TableRow key={transaction?._id}>
                        <TableCell>{transaction?.description}</TableCell>
                        <TableCell>{transaction?._id}</TableCell>
                        <TableCell>{transaction?.type}</TableCell>
                        <TableCell>
                          {format(new Date(transaction?.createdAt), "PP")}
                        </TableCell>
                        <TableCell>${transaction?.amaount}</TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
              {/* Pagination Controls */}
              <div className="flex justify-between items-center mt-4">
                <Button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 0}
                >
                  Previous
                </Button>
                <span>
                  Page {currentPage + 1} of{" "}
                  {Math.ceil((user?.tokenHistory.length || 0) / itemsPerPage)}
                </span>
                <Button
                  onClick={handleNextPage}
                  disabled={
                    currentPage >=
                    Math.floor((user?.tokenHistory.length || 0) / itemsPerPage)
                  }
                >
                  Next
                </Button>
              </div>
            </div>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
