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

// Chart configuration with single color
const chartConfig: ChartConfig = {
  projects: {
    label: "Active Projects",
    color: "#10b981", // Emerald-500
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
      <Card className="w-1/2 bg-white shadow-lg">
        <CardContent className="p-4">
          <ChartContainer config={chartConfig} className="min-h-[100px]">
            <BarChart
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
                dataKey="country"
                tick={{ fill: "#4b5563" }}
                tickLine={{ stroke: "#9ca3af" }}
                axisLine={{ stroke: "#9ca3af" }}
              />
              <YAxis
                tick={{ fill: "#4b5563" }}
                tickLine={{ stroke: "#9ca3af" }}
                axisLine={{ stroke: "#9ca3af" }}
                label={{
                  value: "Active Projects",
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
                cursor={{ fill: "rgba(229, 231, 235, 0.4)" }}
              />
              <Bar
                dataKey="activeProjects"
                fill={chartConfig.projects.color}
                radius={[4, 4, 0, 0]}
                className="transition-all duration-300 ease-in-out hover:opacity-80"
              />
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </SmoothScroll>
  );
}
