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
  Menu,
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
    const fetchAllNewsletterSubscribers = async () => {
      try {
        const res = await getNewsletter();
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

  const nextPage = () => setCurrentPage((prevPage) => prevPage + 1);
  const prevPage = () => setCurrentPage((prevPage) => prevPage - 1);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Mobile Card Component for subscriber data
  const SubscriberCard = ({
    subscriber,
    index,
  }: {
    subscriber: any;
    index: number;
  }) => (
    <Card className="mb-4">
      <CardContent className="p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="text-sm text-gray-500">
              #{indexOfFirstSubscriber + index + 1}
            </div>
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                subscriber.isSubscribed
                  ? "bg-green-100 text-green-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {subscriber.isSubscribed ? "Active" : "Inactive"}
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="h-4 w-4" />
            <span className="text-sm break-all">{subscriber.email}</span>
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
            onClick={toggleSidebar}
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
              onClick={toggleSidebar}
            >
              <Menu className="h-6 w-6" />
            </Button>
            <h1 className="text-base md:text-lg font-bold truncate">
              Newsletter Management
            </h1>
          </header>

          <main className="p-4 md:p-6 max-w-[1600px] mx-auto">
            {/* Stats Cards */}
            <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 mb-6">
              <Card className="transform transition-all duration-300 hover:scale-105 bg-gradient-to-br from-emerald-400 to-green-500 text-white">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm md:text-md font-bold text-white">
                    Total Subscribers
                  </CardTitle>
                  <Mail className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {newsletterSubscribers.length || 0}
                  </div>
                  <div className="flex items-center gap-2 mt-2 text-xs md:text-sm">
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
                  <CardTitle className="text-sm md:text-md font-bold text-white">
                    Active Subscribers
                  </CardTitle>
                  <UserCheck className="h-5 w-5 md:h-6 md:w-6 opacity-75" />
                </CardHeader>
                <CardContent>
                  <div className="text-xl md:text-2xl font-bold text-white">
                    {newsletterSubscribers.filter((s: any) => s.isSubscribed)
                      .length || 0}
                  </div>
                  <div className="mt-2 text-xs md:text-sm opacity-75">
                    Currently active subscribers
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subscribers Section */}
            <Card className="shadow-lg">
              <CardHeader className="border-b bg-gray-50/50 p-4 md:p-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                  <h2 className="font-bold text-xl md:text-2xl text-gray-800">
                    Subscriber Management
                  </h2>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-grow">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="text"
                        placeholder="Search subscribers..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>

                    <Button
                      onClick={downloadCSV}
                      className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      <Download className="h-5 w-5 sm:mr-2" />
                      <span className="ml-2 sm:inline">Export CSV</span>
                    </Button>
                  </div>
                </div>
              </CardHeader>

              <div className="p-4 md:p-6">
                {isSmallScreen ? (
                  // Mobile view - Cards
                  <div className="space-y-4">
                    {currentSubscribers.length > 0 ? (
                      currentSubscribers.map(
                        (subscriber: any, index: number) => (
                          <SubscriberCard
                            key={subscriber._id}
                            subscriber={subscriber}
                            index={index}
                          />
                        )
                      )
                    ) : (
                      <div className="text-center py-8 text-gray-500">
                        No subscribers found
                      </div>
                    )}
                  </div>
                ) : (
                  // Desktop view - Table
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow className="bg-gray-50">
                            <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[80px]">
                              Sl No.
                            </TableHead>
                            <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[250px]">
                              Email
                            </TableHead>
                            <TableHead className="text-base md:text-lg font-semibold text-gray-700 min-w-[100px]">
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
                                  <TableCell className="font-medium text-sm md:text-base text-gray-700">
                                    {indexOfFirstSubscriber + index + 1}
                                  </TableCell>
                                  <TableCell className="text-sm md:text-base text-gray-600">
                                    {subscriber.email}
                                  </TableCell>
                                  <TableCell>
                                    <span
                                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                        subscriber.isSubscribed
                                          ? "bg-green-100 text-green-800"
                                          : "bg-gray-100 text-gray-800"
                                      }`}
                                    >
                                      {subscriber.isSubscribed
                                        ? "Active"
                                        : "Inactive"}
                                    </span>
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
                )}

                {/* Responsive Pagination */}
                <div className="mt-4 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <p className="text-xs sm:text-sm text-gray-600 text-center sm:text-left">
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
                      className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-3 sm:px-4"
                      size="sm"
                    >
                      <ChevronLeft className="h-4 w-4 sm:mr-1" />
                      <span className="hidden sm:inline">Previous</span>
                    </Button>
                    <Button
                      onClick={nextPage}
                      disabled={
                        indexOfLastSubscriber >= filteredSubscribers.length
                      }
                      className="bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 px-3 sm:px-4"
                      size="sm"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="h-4 w-4 sm:ml-1" />
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
