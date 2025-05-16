
import React from "react";
import { ReportsLayout, StatCard, LineChartComponent, PieChartComponent } from "@/components/reports/ReportsLayout";

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
  return (
    <ReportsLayout role="insurance" title="Claims Analytics">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Total Claims" 
          value="523" 
          description="Current month"
        />
        <StatCard 
          title="Avg. Processing" 
          value="3.2 days" 
          description="Time to resolution"
        />
        <StatCard 
          title="Claim Value" 
          value="€195,432" 
          description="Total current month"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
