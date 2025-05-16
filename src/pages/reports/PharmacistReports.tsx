
import React from "react";
import { ReportsLayout, StatCard, BarChartComponent, PieChartComponent } from "@/components/reports/ReportsLayout";

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
  return (
    <ReportsLayout role="pharmacist" title="Pharmacy Analytics">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Prescriptions" 
          value="265" 
          description="Dispensed this month"
        />
        <StatCard 
          title="Inventory Value" 
          value="€42,650" 
          description="Current stock valuation"
        />
        <StatCard 
          title="OTC Sales" 
          value="€8,245" 
          description="This month"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
