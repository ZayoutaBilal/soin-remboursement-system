
import React, { useState } from "react";
import { toast } from "sonner";
import { ReportsLayout, StatCard, LineChartComponent, PieChartComponent } from "@/components/reports/ReportsLayout";
import { Button } from "@/components/ui/button";
import { Calendar, RefreshCw, Filter } from "lucide-react";

const claimsData = [
  { month: "Jan", processed: 421, pending: 45 },
  { month: "Feb", processed: 435, pending: 52 },
  { month: "Mar", processed: 456, pending: 41 },
  { month: "Apr", processed: 478, pending: 58 },
  { month: "May", processed: 492, pending: 49 },
  { month: "Jun", processed: 485, pending: 38 }
];

const claimTypeData = [
  { name: "Hospital", value: 32 },
  { name: "Outpatient", value: 45 },
  { name: "Pharmacy", value: 18 },
  { name: "Dental", value: 5 }
];

const InsuranceReports = () => {
  const [timeframe, setTimeframe] = useState("6m");
  
  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
    toast.success(`Timeframe updated to ${newTimeframe === "1m" ? "1 month" : newTimeframe === "3m" ? "3 months" : "6 months"}`, {
      description: "Report data has been refreshed"
    });
  };
  
  return (
    <ReportsLayout role="insurance" title="Claims Analytics">
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
              toast.success("Filters applied", { description: "Reports have been filtered by claim type" });
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
          title="Total Claims" 
          value="523" 
          description="Current month"
          className="hover:bg-gradient-to-br hover:from-background hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-blue-900/20 transition-colors"
        />
        <StatCard 
          title="Avg. Processing" 
          value="3.2 days" 
          description="Time to resolution"
          className="hover:bg-gradient-to-br hover:from-background hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-blue-900/20 transition-colors"
        />
        <StatCard 
          title="Claim Value" 
          value="€195,432" 
          description="Total current month"
          className="hover:bg-gradient-to-br hover:from-background hover:to-blue-50 dark:hover:from-gray-800 dark:hover:to-blue-900/20 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 report-grid">
        <LineChartComponent 
          data={claimsData} 
          dataKey="processed" 
          nameKey="month"
          title="Claims Processed" 
          description="Monthly processed claims"
        />
        
        <PieChartComponent 
          data={claimTypeData}
          title="Claim Categories" 
          description="Distribution of claims by medical service type"
        />
      </div>
    </ReportsLayout>
  );
};

export default InsuranceReports;
