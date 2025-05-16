
import React, { useState } from "react";
import { toast } from "sonner";
import { ReportsLayout, StatCard, LineChartComponent, PieChartComponent } from "@/components/reports/ReportsLayout";
import { Button } from "@/components/ui/button";
import { Calendar, RefreshCw, Filter } from "lucide-react";

const healthData = [
  { month: "Jan", bloodPressure: 120, weight: 70, heartRate: 72 },
  { month: "Feb", bloodPressure: 118, weight: 69, heartRate: 70 },
  { month: "Mar", bloodPressure: 122, weight: 71, heartRate: 73 },
  { month: "Apr", bloodPressure: 125, weight: 72, heartRate: 74 },
  { month: "May", bloodPressure: 120, weight: 70, heartRate: 73 },
  { month: "Jun", bloodPressure: 118, weight: 69, heartRate: 72 }
];

const medicationData = [
  { name: "Antibiotics", value: 14 },
  { name: "Painkillers", value: 8 },
  { name: "Vitamins", value: 22 },
  { name: "Antihistamines", value: 5 }
];

const PatientReports = () => {
  const [timeframe, setTimeframe] = useState("6m");
  
  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
    toast.success(`Timeframe updated to ${newTimeframe === "1m" ? "1 month" : newTimeframe === "3m" ? "3 months" : "6 months"}`, {
      description: "Report data has been refreshed"
    });
  };
  
  return (
    <ReportsLayout role="patient" title="My Health Reports">
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
              toast.success("Filters applied", { description: "Reports have been filtered by health metrics" });
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
          title="Appointments" 
          value="8" 
          description="Last 3 months"
          className="hover:bg-gradient-to-br hover:from-background hover:to-pink-50 dark:hover:from-gray-800 dark:hover:to-pink-900/20 transition-colors"
        />
        <StatCard 
          title="Prescriptions" 
          value="12" 
          description="Active medications"
          className="hover:bg-gradient-to-br hover:from-background hover:to-pink-50 dark:hover:from-gray-800 dark:hover:to-pink-900/20 transition-colors"
        />
        <StatCard 
          title="Health Score" 
          value="92/100" 
          description="Based on recent checkups"
          className="hover:bg-gradient-to-br hover:from-background hover:to-pink-50 dark:hover:from-gray-800 dark:hover:to-pink-900/20 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 report-grid">
        <LineChartComponent 
          data={healthData} 
          dataKey="bloodPressure" 
          nameKey="month"
          title="Blood Pressure Tracking" 
          description="Systolic pressure (mmHg) over 6 months"
        />
        
        <PieChartComponent 
          data={medicationData}
          title="Medication Distribution" 
          description="Categories of medications taken"
        />
      </div>
    </ReportsLayout>
  );
};

export default PatientReports;
