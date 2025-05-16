
import React, { useState } from "react";
import { toast } from "sonner";
import { ReportsLayout, StatCard, BarChartComponent, PieChartComponent } from "@/components/reports/ReportsLayout";
import { Button } from "@/components/ui/button";
import { Calendar, RefreshCw, Filter } from "lucide-react";

const patientVisitsData = [
  { month: "Jan", visits: 48 },
  { month: "Feb", visits: 52 },
  { month: "Mar", visits: 61 },
  { month: "Apr", visits: 45 },
  { month: "May", visits: 55 },
  { month: "Jun", visits: 58 }
];

const diagnosisData = [
  { name: "Respiratory", value: 35 },
  { name: "Cardiovascular", value: 20 },
  { name: "Digestive", value: 18 },
  { name: "Musculoskeletal", value: 15 },
  { name: "Other", value: 12 }
];

const DoctorReports = () => {
  const [timeframe, setTimeframe] = useState("6m");
  
  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
    toast.success(`Timeframe updated to ${newTimeframe === "1m" ? "1 month" : newTimeframe === "3m" ? "3 months" : "6 months"}`, {
      description: "Report data has been refreshed"
    });
  };
  
  return (
    <ReportsLayout role="doctor" title="Practice Analytics">
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
              toast.success("Filters applied", { description: "Reports have been filtered by visit type" });
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
          title="Total Patients" 
          value="243" 
          description="Active patient files"
          className="hover:bg-gradient-to-br hover:from-background hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-purple-900/20 transition-colors"
        />
        <StatCard 
          title="Consultations" 
          value="58" 
          description="This month"
          className="hover:bg-gradient-to-br hover:from-background hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-purple-900/20 transition-colors"
        />
        <StatCard 
          title="Avg. Duration" 
          value="24 min" 
          description="Per consultation"
          className="hover:bg-gradient-to-br hover:from-background hover:to-purple-50 dark:hover:from-gray-800 dark:hover:to-purple-900/20 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 report-grid">
        <BarChartComponent 
          data={patientVisitsData} 
          dataKey="visits" 
          nameKey="month"
          title="Patient Consultations" 
          description="Monthly patient visits"
        />
        
        <PieChartComponent 
          data={diagnosisData}
          title="Diagnosis Categories" 
          description="Distribution of diagnoses by medical category"
        />
      </div>
    </ReportsLayout>
  );
};

export default DoctorReports;
