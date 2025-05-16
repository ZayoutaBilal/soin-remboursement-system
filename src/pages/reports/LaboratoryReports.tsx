
import React, { useState } from "react";
import { toast } from "sonner";
import { ReportsLayout, StatCard, BarChartComponent, LineChartComponent } from "@/components/reports/ReportsLayout";
import { Button } from "@/components/ui/button";
import { Calendar, RefreshCw, Filter } from "lucide-react";

const testsData = [
  { month: "Jan", tests: 845 },
  { month: "Feb", tests: 912 },
  { month: "Mar", tests: 875 },
  { month: "Apr", tests: 943 },
  { month: "May", tests: 970 },
  { month: "Jun", tests: 1024 }
];

const turnaroundData = [
  { month: "Jan", time: 32 },
  { month: "Feb", time: 30 },
  { month: "Mar", time: 28 },
  { month: "Apr", time: 29 },
  { month: "May", time: 25 },
  { month: "Jun", time: 24 }
];

const LaboratoryReports = () => {
  const [timeframe, setTimeframe] = useState("6m");
  
  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
    toast.success(`Timeframe updated to ${newTimeframe === "1m" ? "1 month" : newTimeframe === "3m" ? "3 months" : "6 months"}`, {
      description: "Report data has been refreshed"
    });
  };
  
  return (
    <ReportsLayout role="laboratory" title="Laboratory Analytics">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Période:</span>
          <div className="flex bg-background border border-border/40 rounded-md">
            <Button 
              variant={timeframe === "1m" ? "secondary" : "ghost"} 
              size="sm"
              className="rounded-r-none px-3 text-xs font-medium"
              onClick={() => handleTimeframeChange("1m")}
            >
              1M
            </Button>
            <Button 
              variant={timeframe === "3m" ? "secondary" : "ghost"} 
              size="sm"
              className="rounded-none px-3 text-xs font-medium border-x border-border/40"
              onClick={() => handleTimeframeChange("3m")}
            >
              3M
            </Button>
            <Button 
              variant={timeframe === "6m" ? "secondary" : "ghost"} 
              size="sm"
              className="rounded-l-none px-3 text-xs font-medium"
              onClick={() => handleTimeframeChange("6m")}
            >
              6M
            </Button>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="gap-1"
            onClick={() => {
              toast.success("Filters applied", { description: "Reports have been filtered by test type" });
            }}
          >
            <Filter className="w-3.5 h-3.5" />
            Filtres
          </Button>
          <Button 
            variant="outline" 
            size="sm"
            className="gap-1"
            onClick={() => {
              toast.success("Data refreshed", { description: "Report shows the most recent data" });
            }}
          >
            <RefreshCw className="w-3.5 h-3.5" />
            Actualiser
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 report-grid">
        <StatCard 
          title="Tests Performed" 
          value="1,024" 
          description="Current month"
          className="hover:bg-gradient-to-br hover:from-background hover:to-amber-50 dark:hover:from-gray-800 dark:hover:to-amber-900/20 transition-colors"
        />
        <StatCard 
          title="Avg. Turnaround" 
          value="24 hours" 
          description="From receipt to results"
          className="hover:bg-gradient-to-br hover:from-background hover:to-amber-50 dark:hover:from-gray-800 dark:hover:to-amber-900/20 transition-colors"
        />
        <StatCard 
          title="Quality Score" 
          value="99.2%" 
          description="Accuracy rating"
          className="hover:bg-gradient-to-br hover:from-background hover:to-amber-50 dark:hover:from-gray-800 dark:hover:to-amber-900/20 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 report-grid">
        <BarChartComponent 
          data={testsData} 
          dataKey="tests" 
          nameKey="month"
          title="Tests Performed" 
          description="Monthly lab test volume"
        />
        
        <LineChartComponent 
          data={turnaroundData}
          dataKey="time"
          nameKey="month"
          title="Average Turnaround Time" 
          description="Hours from sample receipt to results (monthly average)"
        />
      </div>
    </ReportsLayout>
  );
};

export default LaboratoryReports;
