import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";
import { ChartConfig, ChartContainer } from "../../components/ui/chart";
import SmoothScroll from "../../components/SmoothScroll";

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

// Define chart configuration for styling
const chartConfig: ChartConfig = {
  projects: {
    label: "Active Projects",
    color: "#34d399", // Green color for active projects
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

  // Convert the data to an array format suitable for the chart
  const chartData = Object.entries(activeProjectsByCountry).map(
    ([country, count]) => ({
      country,
      activeProjects: count,
    })
  );

  return (
    <SmoothScroll>
      <ChartContainer config={chartConfig} className="min-h-[100px] w-1/2">
        <BarChart data={chartData} width={600} height={300}>
          <XAxis dataKey="country" />
          <YAxis
            label={{
              value: "Active Projects",
              angle: -90,
              position: "insideLeft",
            }}
          />
          <Tooltip />
          <Bar
            dataKey="activeProjects"
            fill={chartConfig.projects.color}
            radius={4}
          />
        </BarChart>
      </ChartContainer>
    </SmoothScroll>
  );
}
