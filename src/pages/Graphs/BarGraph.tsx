import { Bar, BarChart, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
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

type BarGraphProps = {
  projects: Project[];
};

// Enhanced chart configuration with gradient colors
const chartConfig: ChartConfig = {
  projects: {
    label: "Active Projects",
    color: "#8B5CF6", // Primary color (violet-500)
  },
};

export function BarGraph({ projects }: BarGraphProps) {
  // Aggregate active project count by location
  const activeProjectsByCountry =
    projects &&
    projects?.reduce<Record<string, number>>((acc, project) => {
      if (project.status === "Active") {
        acc[project.location] = (acc[project.location] || 0) + 1;
      }
      return acc;
    }, {});

  // Convert and sort data for the chart
  const chartData = Object.entries(activeProjectsByCountry)
    .map(([country, count]) => ({
      country,
      activeProjects: count,
    }))
    .sort((a, b) => b.activeProjects - a.activeProjects);

  return (
    <SmoothScroll>
      <Card className="w-1/2 bg-white shadow-lg rounded-xl">
        <CardContent className="p-6">
          <ChartContainer config={chartConfig} className="min-h-[100px]">
            <BarChart
              data={chartData}
              width={600}
              height={300}
              margin={{
                top: 20,
                right: 30,
                left: 30,
                bottom: 20,
              }}
            >
              {/* Define gradient */}
              <defs>
                <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity={1} />
                  <stop offset="100%" stopColor="#C4B5FD" stopOpacity={0.8} />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="3 3"
                stroke="#e5e7eb"
                opacity={0.5}
              />
              <XAxis
                dataKey="country"
                tick={{ fill: "#4b5563", fontSize: 12 }}
                tickLine={{ stroke: "#9ca3af" }}
                axisLine={{ stroke: "#9ca3af" }}
              />
              <YAxis
                tick={{ fill: "#4b5563", fontSize: 12 }}
                tickLine={{ stroke: "#9ca3af" }}
                axisLine={{ stroke: "#9ca3af" }}
                label={{
                  value: "Active Projects",
                  angle: -90,
                  position: "insideLeft",
                  style: { fill: "#4b5563", fontSize: 14 },
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "rgba(255, 255, 255, 0.98)",
                  border: "none",
                  borderRadius: "12px",
                  boxShadow:
                    "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  padding: "12px",
                }}
                cursor={{ fill: "rgba(139, 92, 246, 0.1)" }}
                labelStyle={{
                  color: "#4b5563",
                  fontWeight: "600",
                  marginBottom: "4px",
                }}
              />
              <Bar
                dataKey="activeProjects"
                fill="url(#colorGradient)"
                radius={[8, 8, 0, 0]}
                className="transition-all duration-300 ease-in-out hover:opacity-90"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </SmoothScroll>
  );
}
