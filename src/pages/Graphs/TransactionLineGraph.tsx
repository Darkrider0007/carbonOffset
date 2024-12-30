import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

type Payment = {
  id: string;
  paymentId: string;
  name: string;
  email: string;
  totalAmount: number;
  currency: string;
  paymentTime: string;
};

type LineGraphProps = {
  payments: Payment[];
};

export function TransactionLineGraph({ payments }: LineGraphProps) {
  // Process and sort data by date
  const chartData = payments
    .map((payment) => ({
      date: new Date(payment.paymentTime).toLocaleDateString(),
      amount: payment.totalAmount / 100, // Convert to actual amount
    }))
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  // Aggregate amounts by date
  const aggregatedData = chartData.reduce((acc: any[], curr) => {
    const existingDate = acc.find((item) => item.date === curr.date);
    if (existingDate) {
      existingDate.amount += curr.amount;
    } else {
      acc.push({ date: curr.date, amount: curr.amount });
    }
    return acc;
  }, []);

  return (
    <div className="w-full h-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={aggregatedData}
          margin={{
            top: 10,
            right: 20,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
          <XAxis
            dataKey="date"
            tick={{ fill: "#4b5563" }}
            tickLine={{ stroke: "#9ca3af" }}
            axisLine={{ stroke: "#9ca3af" }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis
            tick={{ fill: "#4b5563" }}
            tickLine={{ stroke: "#9ca3af" }}
            axisLine={{ stroke: "#9ca3af" }}
            label={{
              value: "Amount",
              angle: -90,
              position: "insideLeft",
              style: { fill: "#4b5563" },
            }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(255, 255, 255, 0.95)",
              border: "none",
              borderRadius: "8px",
              boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
            }}
            cursor={{ stroke: "rgba(229, 231, 235, 0.4)" }}
            formatter={(value: number) => [`${value.toFixed(2)}`, "Amount"]}
          />
          <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8B5CF6" stopOpacity={1} />
              <stop offset="100%" stopColor="#C4B5FD" stopOpacity={0.8} />
            </linearGradient>
          </defs>
          <Line
            type="monotone"
            dataKey="amount"
            stroke="url(#colorGradient)"
            strokeWidth={3}
            dot={{ fill: "#8B5CF6", strokeWidth: 2 }}
            activeDot={{ r: 6, strokeWidth: 0 }}
            className="transition-all duration-300 ease-in-out hover:opacity-90"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
