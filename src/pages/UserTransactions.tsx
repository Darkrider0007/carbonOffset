import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
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

const dummyData = [
  {
    description: "Plant Offset",
    transactionId: "TXN001",
    type: "Debit",
    date: "2024-01-15T10:30:00Z",
    amount: "$50.00",
    receipt: "Receipt_001.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN002",
    type: "Credit",
    date: "2024-01-20T12:00:00Z",
    amount: "$2000.00",
    receipt: "Receipt_002.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN003",
    type: "Debit",
    date: "2024-02-01T14:45:00Z",
    amount: "$75.00",
    receipt: "Receipt_003.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN004",
    type: "Debit",
    date: "2024-02-05T09:15:00Z",
    amount: "$150.00",
    receipt: "Receipt_004.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN005",
    type: "Credit",
    date: "2024-02-10T16:30:00Z",
    amount: "$25.00",
    receipt: "Receipt_005.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN006",
    type: "Debit",
    date: "2024-02-15T17:00:00Z",
    amount: "$100.00",
    receipt: "Receipt_006.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN007",
    type: "Debit",
    date: "2024-02-18T19:30:00Z",
    amount: "$120.00",
    receipt: "Receipt_007.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN008",
    type: "Credit",
    date: "2024-02-25T21:00:00Z",
    amount: "$500.00",
    receipt: "Receipt_008.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN009",
    type: "Debit",
    date: "2024-03-01T06:45:00Z",
    amount: "$60.00",
    receipt: "Receipt_009.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN010",
    type: "Debit",
    date: "2024-03-05T08:00:00Z",
    amount: "$200.00",
    receipt: "Receipt_010.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN011",
    type: "Debit",
    date: "2024-03-10T11:30:00Z",
    amount: "$85.00",
    receipt: "Receipt_011.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN012",
    type: "Debit",
    date: "2024-03-15T13:15:00Z",
    amount: "$300.00",
    receipt: "Receipt_012.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN013",
    type: "Credit",
    date: "2024-03-20T15:45:00Z",
    amount: "$1000.00",
    receipt: "Receipt_013.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN014",
    type: "Debit",
    date: "2024-03-25T18:00:00Z",
    amount: "$45.00",
    receipt: "Receipt_014.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN015",
    type: "Debit",
    date: "2024-04-01T20:30:00Z",
    amount: "$95.00",
    receipt: "Receipt_015.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN016",
    type: "Credit",
    date: "2024-04-05T22:15:00Z",
    amount: "$2000.00",
    receipt: "Receipt_016.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN017",
    type: "Debit",
    date: "2024-04-10T00:00:00Z",
    amount: "$30.00",
    receipt: "Receipt_017.pdf",
  },
  {
    description: "Plant Offset",
    transactionId: "TXN018",
    type: "Debit",
    date: "2024-04-15T01:30:00Z",
    amount: "$250.00",
    receipt: "Receipt_018.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN019",
    type: "Debit",
    date: "2024-04-20T03:15:00Z",
    amount: "$70.00",
    receipt: "Receipt_019.pdf",
  },
  {
    description: "Vehicle Offset",
    transactionId: "TXN020",
    type: "Credit",
    date: "2024-04-25T05:00:00Z",
    amount: "$150.00",
    receipt: "Receipt_020.pdf",
  },
];

export default function UserUpdates() {
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
                <div className="text-2xl font-bold text-white">450 Tokens</div>
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

          <div className="border shadow-sm rounded-lg p-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Description</TableHead>
                  <TableHead>Transaction ID</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Receipt</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {dummyData.map((transaction: any) => (
                  <TableRow key={transaction?.transactionId}>
                    <TableCell>{transaction?.description}</TableCell>
                    <TableCell>{transaction?.transactionId}</TableCell>
                    <TableCell>{transaction?.type}</TableCell>
                    <TableCell>
                      {format(new Date(transaction?.date), "PPpp")}
                    </TableCell>
                    <TableCell>{transaction?.amount}</TableCell>
                    <TableCell>
                      <Button className="bg-green-600 hover:bg-green-400">
                        Receipt
                      </Button>
                    </TableCell>
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
