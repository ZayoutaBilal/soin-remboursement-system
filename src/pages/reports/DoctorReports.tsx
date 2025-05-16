
import React from "react";
import { ReportsLayout, StatCard, BarChartComponent, PieChartComponent } from "@/components/reports/ReportsLayout";

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
  return (
    <ReportsLayout role="doctor" title="Practice Analytics">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Total Patients" 
          value="243" 
          description="Active patient files"
        />
        <StatCard 
          title="Consultations" 
          value="58" 
          description="This month"
        />
        <StatCard 
          title="Avg. Duration" 
          value="24 min" 
          description="Per consultation"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
