
import React from "react";
import { ReportsLayout, StatCard, LineChartComponent, PieChartComponent } from "@/components/reports/ReportsLayout";

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
  return (
    <ReportsLayout role="patient" title="My Health Reports">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Appointments" 
          value="8" 
          description="Last 3 months"
        />
        <StatCard 
          title="Prescriptions" 
          value="12" 
          description="Active medications"
        />
        <StatCard 
          title="Health Score" 
          value="92/100" 
          description="Based on recent checkups"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
