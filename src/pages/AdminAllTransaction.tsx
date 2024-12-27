import {
  CardTitle,
  CardHeader,
  CardContent,
  Card,
} from "../components/ui/card";

import { FaArrowUp } from "react-icons/fa6";
import AdminSidebar from "../components/AdminSidebar";
import {
  Table,
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
} from "../components/ui/table";
import SmoothScroll from "../components/SmoothScroll";

const transactionData = [
  {
    username: "john_doe",
    offsetPurchased: "Vehicle Offset",
    amount: "150 Tokens",
    status: "Completed",
  },
  {
    username: "jane_smith",
    offsetPurchased: "Planting Tree",
    amount: "100 Tokens",
    status: "Pending",
  },
  {
    username: "alice_jones",
    offsetPurchased: "Building Offset",
    amount: "200 Tokens",
    status: "Completed",
  },
  {
    username: "bob_brown",
    offsetPurchased: "Vehicle Offset",
    amount: "250 Tokens",
    status: "Pending",
  },
  {
    username: "carol_white",
    offsetPurchased: "Planting Tree",
    amount: "300 Tokens",
    status: "Completed",
  },
];

const tokenData = [
  {
    username: "john_doe",
    tokenAmount: "50 Tokens",
    ratePerToken: "$1",
    type: "Buy",
  },
  {
    username: "jane_smith",
    tokenAmount: "100 Tokens",
    ratePerToken: "$1.2",
    type: "Sell",
  },
  {
    username: "alice_jones",
    tokenAmount: "150 Tokens",
    ratePerToken: "$1.1",
    type: "Buy",
  },
  {
    username: "bob_brown",
    tokenAmount: "200 Tokens",
    ratePerToken: "$1.3",
    type: "Sell",
  },
  {
    username: "carol_white",
    tokenAmount: "250 Tokens",
    ratePerToken: "$1.4",
    type: "Buy",
  },
];

export default function AdminAllTransaction() {
  // const navigate = useNavigate();

  return (
    <SmoothScroll>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r bg-gray-100/40 lg:block dark:bg-gray-800/40">
          <AdminSidebar />
        </div>
        <div className="flex flex-col">
          <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40">
            <h1 className="text-lg font-bold">Transaction</h1>
          </header>
          <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6 bg-black/[0.05]">
            <div className="grid h-[20vh] gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <Card className="shadow-xl ">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Total User
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">2,420</div>
                </CardContent>
                <CardContent>
                  <div className="flex gap-2 items-center">
                    <FaArrowUp color="green" />
                    <h1>
                      <span className="text-green-600">40</span> % vs last month
                    </h1>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-xl ">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Total Farm Onboarded
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">50</div>
                </CardContent>
                <CardContent>
                  <div className="flex gap-2 items-center">
                    <FaArrowUp color="green" />
                    <h1>
                      <span className="text-green-600">10</span> % vs last month
                    </h1>
                  </div>
                </CardContent>
              </Card>
              <Card className="shadow-xl ">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-md font-bold text-black">
                    Active Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-black">100</div>
                </CardContent>
                <CardContent>
                  <div className="flex gap-2 items-center">
                    <FaArrowUp color="green" />
                    <h1>
                      <span className="text-green-600">5</span> % vs last month
                    </h1>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="border shadow-sm rounded-lg p-4 mt-6 bg-white">
              <h2 className="font-bold mb-4">User Transactions</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Offset Purchased</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {transactionData.map((transaction, index) => (
                    <TableRow key={index}>
                      <TableCell>{transaction.username}</TableCell>
                      <TableCell>{transaction.offsetPurchased}</TableCell>
                      <TableCell>{transaction.amount}</TableCell>
                      <TableCell>{transaction.status}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="border shadow-sm rounded-lg p-4 mt-6 bg-white">
              <h2 className="font-bold mb-4">Token Purchases</h2>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Username</TableHead>
                    <TableHead>Token Amount</TableHead>
                    <TableHead>Rate per Token</TableHead>
                    <TableHead>Type</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tokenData.map((token, index) => (
                    <TableRow key={index}>
                      <TableCell>{token.username}</TableCell>
                      <TableCell>{token.tokenAmount}</TableCell>
                      <TableCell>{token.ratePerToken}</TableCell>
                      <TableCell>{token.type}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </main>
        </div>
      </div>
    </SmoothScroll>
  );
}
