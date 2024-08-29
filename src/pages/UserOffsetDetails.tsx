import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";

import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import ExpenseChart from "../components/ExpenseChart";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "../components/ui/table";
import { format } from "date-fns";

const expenseData = [
  {
    offsetName: "Planting Tree",
    date: "2024-01-15T10:30:00Z",
    amountOfTokens: "50 Tokens",
    status: "Completed",
  },
  {
    offsetName: "Vehicle Offset",
    date: "2024-01-20T12:00:00Z",
    amountOfTokens: "200 Tokens",
    status: "Pending",
  },
  {
    offsetName: "Planting Tree",
    date: "2024-02-01T14:45:00Z",
    amountOfTokens: "75 Tokens",
    status: "Completed",
  },
  {
    offsetName: "Vehicle Offset",
    date: "2024-02-05T09:15:00Z",
    amountOfTokens: "100 Tokens",
    status: "Completed",
  },
  {
    offsetName: "Planting Tree",
    date: "2024-02-10T16:30:00Z",
    amountOfTokens: "50 Tokens",
    status: "Pending",
  },
];

export default function UserOffsetDetails() {
  const navigate = useNavigate();

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
          <h1 className="font-bold">John's Cards</h1>
          <div className="grid h-[45vh] gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
            <Card className="bg-green-600 h-[50%]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-white">
                  Available Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">450 Tokens</div>
              </CardContent>
            </Card>
            <Card className="bg-green-600 h-[50%]">
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-md font-bold text-white">
                  Used Tokens
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-white">100 Tokens</div>
              </CardContent>
            </Card>
            <div className="h-[300px] w-[200%] ">
              <ExpenseChart />
            </div>
          </div>

          <div className="border shadow-sm rounded-lg p-4 mt-6 ">
            <h2 className="font-bold mb-4">Expense Details</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Offset Name</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount of Tokens</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {expenseData.map((expense) => (
                  <TableRow key={expense.date}>
                    <TableCell>{expense.offsetName}</TableCell>
                    <TableCell>
                      {format(new Date(expense.date), "PPpp")}
                    </TableCell>
                    <TableCell>{expense.amountOfTokens}</TableCell>
                    <TableCell>{expense.status}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
