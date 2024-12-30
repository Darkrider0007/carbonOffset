import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { ChartConfig, ChartContainer } from "../../components/ui/chart";
import SmoothScroll from "../../components/SmoothScroll";
import { Card, CardContent } from "../../components/ui/card";

// Define TypeScript types for project data
type Project = {
  _id: string;
  name: string;
  location: string;
  status: string;
  userCount: number;
  details: string;
  image: string;
};

type LineGraphProps = {
  projects: Project[];
};

// Chart configuration with single color
const chartConfig: ChartConfig = {
  users: {
    label: "User Count",
    color: "#8B5CF6", // violet-500 (matching BarGraph)
  },
};

export function UserCountLineGraph({ projects }: LineGraphProps) {
  // Process data for the chart - get user counts for active projects
  const chartData = projects
    .filter((project) => project.status === "Active")
    .map((project) => ({
      name: project.name,
      userCount: project.userCount || 0,
    }))
    .sort((a, b) => b.userCount - a.userCount);

  return (
    <SmoothScroll>
      <Card className="w-1/2 bg-white shadow-lg">
        <CardContent className="p-4">
          <ChartContainer config={chartConfig} className="min-h-[100px]">
            <LineChart
              data={chartData}
              width={600}
              height={300}
              margin={{
                top: 10,
                right: 20,
                left: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="name"
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
                  value: "User Count",
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
              />
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#C4B5FD" stopOpacity={0.8} />
                </linearGradient>
              </defs>
              <Line
                type="monotone"
                dataKey="userCount"
                stroke="url(#colorGradient)"
                strokeWidth={3}
                dot={{ fill: "#8B5CF6", strokeWidth: 2 }}
                activeDot={{ r: 6, strokeWidth: 0 }}
                className="transition-all duration-300 ease-in-out hover:opacity-90"
              />
            </LineChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </SmoothScroll>
  );
}
