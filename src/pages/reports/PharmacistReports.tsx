
import React, { useState } from "react";
import { toast } from "sonner";
import { ReportsLayout, StatCard, BarChartComponent, PieChartComponent } from "@/components/reports/ReportsLayout";
import { Button } from "@/components/ui/button";
import { Calendar, RefreshCw, Filter } from "lucide-react";

const dispensedMedsData = [
  { month: "Jan", count: 234 },
  { month: "Feb", count: 245 },
  { month: "Mar", count: 267 },
  { month: "Apr", count: 251 },
  { month: "May", count: 278 },
  { month: "Jun", count: 265 }
];

const medicationCategoryData = [
  { name: "Antibiotics", value: 32 },
  { name: "Cardiovascular", value: 24 },
  { name: "Analgesics", value: 18 },
  { name: "Antihistamines", value: 12 },
  { name: "Vitamins", value: 14 }
];

const PharmacistReports = () => {
  const [timeframe, setTimeframe] = useState("6m");
  
  const handleTimeframeChange = (newTimeframe: string) => {
    setTimeframe(newTimeframe);
    toast.success(`Timeframe updated to ${newTimeframe === "1m" ? "1 month" : newTimeframe === "3m" ? "3 months" : "6 months"}`, {
      description: "Report data has been refreshed"
    });
  };
  
  return (
    <ReportsLayout role="pharmacist" title="Pharmacy Analytics">
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
              toast.success("Filters applied", { description: "Reports have been filtered by medication type" });
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
          title="Prescriptions" 
          value="265" 
          description="Dispensed this month"
          className="hover:bg-gradient-to-br hover:from-background hover:to-emerald-50 dark:hover:from-gray-800 dark:hover:to-emerald-900/20 transition-colors"
        />
        <StatCard 
          title="Inventory Value" 
          value="€42,650" 
          description="Current stock valuation"
          className="hover:bg-gradient-to-br hover:from-background hover:to-emerald-50 dark:hover:from-gray-800 dark:hover:to-emerald-900/20 transition-colors"
        />
        <StatCard 
          title="OTC Sales" 
          value="€8,245" 
          description="This month"
          className="hover:bg-gradient-to-br hover:from-background hover:to-emerald-50 dark:hover:from-gray-800 dark:hover:to-emerald-900/20 transition-colors"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 report-grid">
        <BarChartComponent 
          data={dispensedMedsData} 
          dataKey="count" 
          nameKey="month"
          title="Medications Dispensed" 
          description="Monthly count of dispensed prescriptions"
        />
        
        <PieChartComponent 
          data={medicationCategoryData}
          title="Medication Categories" 
          description="Distribution of dispensed medications by category"
        />
      </div>
    </ReportsLayout>
  );
};

export default PharmacistReports;
