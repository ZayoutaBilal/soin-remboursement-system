
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
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
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
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
  <Card className={`shadow-md ${className}`}>
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
}) => (
  <Card className="shadow-md">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
    <CardContent className="pt-2">
      <div className="h-80 w-full">
        <ChartContainer config={{
          [dataKey]: { color: "#8B5CF6" }
        }}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataKey} fill="#8B5CF6" />
          </BarChart>
        </ChartContainer>
      </div>
    </CardContent>
  </Card>
);

export const LineChartComponent = ({ data, dataKey, nameKey = "name", title, description }: {
  data: any[];
  dataKey: string;
  nameKey?: string;
  title: string;
  description?: string;
}) => (
  <Card className="shadow-md">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
    <CardContent className="pt-2">
      <div className="h-80 w-full">
        <ChartContainer config={{
          [dataKey]: { color: "#0EA5E9" }
        }}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={nameKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={dataKey} stroke="#0EA5E9" strokeWidth={2} activeDot={{ r: 8 }} />
          </LineChart>
        </ChartContainer>
      </div>
    </CardContent>
  </Card>
);

export const PieChartComponent = ({ data, dataKey = "value", nameKey = "name", title, description }: {
  data: any[];
  dataKey?: string;
  nameKey?: string;
  title: string;
  description?: string;
}) => (
  <Card className="shadow-md">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      {description && <CardDescription>{description}</CardDescription>}
    </CardHeader>
    <CardContent className="pt-2">
      <div className="h-80 w-full">
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
              outerRadius={120} 
              fill="#8884d8" 
              dataKey={dataKey}
              nameKey={nameKey}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colorPalette[index % colorPalette.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ChartContainer>
      </div>
    </CardContent>
  </Card>
);
