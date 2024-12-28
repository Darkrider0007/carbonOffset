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
import { FaArrowUp, FaArrowDown } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { getNewsletter } from "../api/newslatter";
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Mail,
  Search,
  UserCheck,
} from "lucide-react";
import SmoothScroll from "../components/SmoothScroll";

export default function AdminNewsletter() {
  const [dashBoardData, setDashBoardData] = useState<any>([]);
  const [newsletterSubscribers, setNewsletterSubscribers] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(20);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchAllNewsletterSubscribers = async () => {
      console.log("fetching all newsletter subscribers");
      try {
        const res = await getNewsletter();
        console.log("res", res.data.percentageIncrease);
        setNewsletterSubscribers(res.data.data);
        setDashBoardData({
          percentageSubscriberIncrease: res.data.percentageIncrease,
        });
      } catch (error) {
        console.error("Failed to fetch subscribers", error);
      }
    };
    fetchAllNewsletterSubscribers();
  }, []);

  // Pagination logic
  const indexOfLastSubscriber = currentPage * usersPerPage;
  const indexOfFirstSubscriber = indexOfLastSubscriber - usersPerPage;
  const filteredSubscribers = newsletterSubscribers.filter((subscriber: any) =>
    subscriber.email.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const currentSubscribers = filteredSubscribers.slice(
    indexOfFirstSubscriber,
    indexOfLastSubscriber
  );

  // CSV generation function
  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      newsletterSubscribers
        .map((subscriber: { email: any }) => subscriber.email)
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "newsletter_subscribers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Change page
  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  return (
    <SmoothScroll>
      <div className="grid w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gradient-to-b from-gray-50 to-white lg:block dark:from-gray-900 dark:to-gray-800">
          <AdminSidebar />
        </div>
        <div className="flex flex-col min-h-screen">
          <header className="flex h-16 items-center gap-4 border-b bg-white px-6 shadow-sm">
            <h1 className="text-lg font-bold">Newsletter Management</h1>
          </header>

          <main className="flex flex-1 flex-col gap-6 p-6 bg-gray-50">
            {/* Stats Cards */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-emerald-400 to-green-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Total Subscribers
                  </CardTitle>
                  <Mail className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {newsletterSubscribers.length || 0}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-sm">
                    {dashBoardData?.percentageSubscriberIncrease > 0 ? (
                      <>
                        <FaArrowUp />
                        <span>
                          {Math.abs(
                            dashBoardData?.percentageSubscriberIncrease
                          ) || 0}
                          % vs last month
                        </span>
                      </>
                    ) : (
                      <>
                        <FaArrowDown />
                        <span>
                          {Math.abs(
                            dashBoardData?.percentageSubscriberIncrease
                          ) || 0}
                          % vs last month
                        </span>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#8555C1] to-[#B469FF] text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-white">
                    Active Subscribers
                  </CardTitle>
                  <UserCheck className="h-6 w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">
                    {newsletterSubscribers.filter((s: any) => s.isSubscribed)
                      .length || 0}
                  </div>
                  <div className="mt-2 text-sm opacity-75">
                    Currently active subscribers
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subscribers Table Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-2xl text-gray-800">
                    Subscriber Management
                  </h2>

                  <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search subscribers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      />
                    </div>

                    <Button
                      onClick={downloadCSV}
                      className="w-full md:w-auto bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Download className="w-5 h-5 mr-2" />
                      Export CSV
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <div className="p-6">
                <div className="overflow-hidden rounded-lg border border-gray-200">
                  <div className="overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-gray-50">
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Sl No.
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Email
                          </TableHead>
                          <TableHead className="text-lg font-semibold text-gray-700">
                            Status
                          </TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {currentSubscribers.length > 0 ? (
                          currentSubscribers.map(
                            (subscriber: any, index: number) => (
                              <TableRow
                                key={subscriber._id}
                                className="hover:bg-gray-50 transition-colors duration-200"
                              >
                                <TableCell className="font-medium text-gray-700">
                                  {indexOfFirstSubscriber + index + 1}
                                </TableCell>
                                <TableCell className="text-gray-600">
                                  {subscriber.email}
                                </TableCell>
                                <TableCell>
                                  {subscriber.isSubscribed ? (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                                      Active
                                    </span>
                                  ) : (
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800">
                                      Inactive
                                    </span>
                                  )}
                                </TableCell>
                              </TableRow>
                            )
                          )
                        ) : (
                          <TableRow>
                            <TableCell
                              colSpan={3}
                              className="text-center py-8 text-gray-500"
                            >
                              No subscribers found
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                </div>

                {/* Enhanced Pagination */}
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-600">
                    Showing {indexOfFirstSubscriber + 1} to{" "}
                    {Math.min(
                      indexOfLastSubscriber,
                      filteredSubscribers.length
                    )}{" "}
                    of {filteredSubscribers.length} subscribers
                  </p>
                  <div className="flex gap-2">
                    <Button
                      onClick={prevPage}
                      disabled={currentPage === 1}
                      className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                      <ChevronLeft className="h-4 w-4 mr-1" />
                      Previous
                    </Button>
                    <Button
                      onClick={nextPage}
                      disabled={
                        indexOfLastSubscriber >= filteredSubscribers.length
                      }
                      className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                    >
                      Next
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
