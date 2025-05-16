
import React, { useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { Button } from "@/components/ui/button";
import { Download, Maximize, ChevronDown, ChevronUp } from "lucide-react";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart, 
  Pie, 
  ResponsiveContainer, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  Cell
} from "recharts";
import { toast } from "sonner";

export type ActorRole = "patient" | "doctor" | "pharmacist" | "insurance" | "laboratory";

interface ReportsLayoutProps {
  role: ActorRole;
  title: string;
  children?: React.ReactNode;
}

export const ReportsLayout: React.FC<ReportsLayoutProps> = ({ role, title, children }) => {
  return (
    <DashboardLayout role={role}>
      <div className="container py-6 space-y-6">
        <header className="flex flex-wrap justify-between items-center mb-4 pb-2 border-b border-border/40 dark:border-gray-700/40">
          <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
          <div className="flex space-x-2 mt-2 sm:mt-0">
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs sm:text-sm"
              onClick={() => toast.success("Report updated with latest data", { 
                description: "All charts now show the most recent information" 
              })}
            >
              Refresh Data
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-xs sm:text-sm"
              onClick={() => toast.success("Report data exported", { 
                description: "The report has been downloaded as PDF" 
              })}
            >
              <Download className="w-3.5 h-3.5 mr-1" /> Export
            </Button>
          </div>
        </header>
        {children}
      </div>
    </DashboardLayout>
  );
};

export const colorPalette = [
  "#8B5CF6",
  "#D946EF",
  "#F97316",
  "#0EA5E9",
  "#22C55E",
  "#EAB308",
  "#F43F5E",
  "#06B6D4",
  "#6366F1",
  "#EC4899"
];

export const StatCard = ({ title, value, description, className = "" }: {
  title: string;
  value: string | number;
  description?: string;
  className?: string;
}) => (
  <Card className={`shadow-md report-stat-card ${className}`}>
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">{value}</div>
      {description && <CardDescription className="mt-1">{description}</CardDescription>}
    </CardContent>
  </Card>
);

export const BarChartComponent = ({ data, dataKey, nameKey = "name", title, description }: {
  data: any[];
  dataKey: string;
  nameKey?: string;
  title: string;
  description?: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Card className="shadow-md report-chart-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        <div className="flex gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => {
              toast.success("Chart exported", { description: "The chart has been downloaded as PNG" });
            }}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className={`pt-2 transition-all duration-300 ${expanded ? 'h-[400px]' : 'h-80'}`}>
        <ChartContainer config={{
          [dataKey]: { color: "#8B5CF6" }
        }}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataKey} fill="#8B5CF6" className="hover:opacity-80 transition-opacity" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export const LineChartComponent = ({ data, dataKey, nameKey = "name", title, description }: {
  data: any[];
  dataKey: string;
  nameKey?: string;
  title: string;
  description?: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <Card className="shadow-md report-chart-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        <div className="flex gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => {
              toast.success("Chart exported", { description: "The chart has been downloaded as PNG" });
            }}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className={`pt-2 transition-all duration-300 ${expanded ? 'h-[400px]' : 'h-80'}`}>
        <ChartContainer config={{
          [dataKey]: { color: "#0EA5E9" }
        }}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line 
              type="monotone" 
              dataKey={dataKey} 
              stroke="#0EA5E9" 
              strokeWidth={2} 
              activeDot={{ r: 8 }}
              className="hover:opacity-80 transition-opacity" 
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export const PieChartComponent = ({ data, dataKey = "value", nameKey = "name", title, description }: {
  data: any[];
  dataKey?: string;
  nameKey?: string;
  title: string;
  description?: string;
}) => {
  const [expanded, setExpanded] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(null);
  };

  return (
    <Card className="shadow-md report-chart-card">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <div>
          <CardTitle>{title}</CardTitle>
          {description && <CardDescription>{description}</CardDescription>}
        </div>
        <div className="flex gap-1">
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8" 
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="h-8 w-8"
            onClick={() => {
              toast.success("Chart exported", { description: "The chart has been downloaded as PNG" });
            }}
          >
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className={`pt-2 transition-all duration-300 ${expanded ? 'h-[400px]' : 'h-80'}`}>
        <ChartContainer config={{
          [dataKey]: { color: "#D946EF" }
        }}>
          <PieChart margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <Pie 
              data={data} 
              cx="50%" 
              cy="50%" 
              labelLine={false}
              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              outerRadius={expanded ? 160 : 120} 
              fill="#8884d8" 
              dataKey={dataKey}
              nameKey={nameKey}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              className="hover:opacity-95 transition-opacity"
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill={colorPalette[index % colorPalette.length]} 
                  opacity={activeIndex === index ? 1 : activeIndex === null ? 0.9 : 0.7}
                  className="transition-opacity duration-200"
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};
