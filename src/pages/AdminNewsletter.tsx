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
import { Download, Search } from "lucide-react";
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
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <h1 className="text-lg font-bold">Newsletters</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Card for Newsletter Subscriber Count */}
              <Card className="shadow-xl bg-green-300">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Total Newsletter Subscribers
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">
                    {newsletterSubscribers.length || 0}
                  </div>
                </CardContent>
                <CardContent>
                  <div className="flex gap-2 items-center">
                    {dashBoardData?.percentageSubscriberIncrease > 0 ? (
                      <>
                        <FaArrowUp color="green" />
                        <h1>
                          <span className="text-green-600">
                            {Math.abs(
                              dashBoardData?.percentageSubscriberIncrease
                            ) || 0}
                          </span>{" "}
                          % vs last month
                        </h1>
                      </>
                    ) : (
                      <>
                        <FaArrowDown color="red" />
                        <h1>
                          <span className="text-red-600">
                            {Math.abs(
                              dashBoardData?.percentageSubscriberIncrease
                            ) || 0}
                          </span>{" "}
                          % vs last month
                        </h1>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="border shadow-sm rounded-lg p-4 mt-6 bg-white">
              <div className="flex flex-row justify-between">
                <h2 className="font-bold text-2xl mb-4">Subscribers</h2>
                <div className="flex flex-row items-center gap-2 border border-gray-300 rounded-lg text-gray-600 pl-2 focus-within:ring-1 focus-within:ring-green-500 w-1/4">
                  <Search className="w-6 h-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search subscriber"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="focus:outline-none p-2"
                  />
                </div>
                {/* CSV Download Button */}
                <Button
                  onClick={downloadCSV}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  <Download className="w-6 h-6 mr-2" />
                  Download CSV
                </Button>
              </div>
              {/* Table with scrollable content */}
              <div className="overflow-y-auto h-96">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-lg text-black font-semibold">
                        Sl No.
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Email
                      </TableHead>
                      <TableHead className="text-lg text-black font-semibold">
                        Is Subscribed
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {currentSubscribers.length > 0 ? (
                      currentSubscribers.map(
                        (subscriber: any, index: number) => (
                          <TableRow key={subscriber._id}>
                            <TableCell className="text-black">
                              {indexOfFirstSubscriber + index + 1}
                            </TableCell>
                            <TableCell className="text-black">
                              {subscriber.email}
                            </TableCell>
                            <TableCell className="text-black">
                              {subscriber.isSubscribed ? "Yes" : "No"}
                            </TableCell>
                          </TableRow>
                        )
                      )
                    ) : (
                      <TableRow>
                        <TableCell
                          colSpan={3}
                          className="text-center text-black"
                        >
                          No subscribers found.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
              {/* Pagination Buttons */}
              <div className="flex justify-end gap-2 mt-4">
                <Button
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="bg-green-500 hover:bg-green-600 text-white gap-1"
                >
                  Previous
                </Button>
                <Button
                  onClick={nextPage}
                  disabled={indexOfLastSubscriber >= filteredSubscribers.length}
                  className="bg-green-500 hover:bg-green-600 text-white gap-1"
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
