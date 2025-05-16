
import React from "react";
import { ReportsLayout, StatCard, BarChartComponent, LineChartComponent } from "@/components/reports/ReportsLayout";

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
  return (
    <ReportsLayout role="laboratory" title="Laboratory Analytics">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard 
          title="Tests Performed" 
          value="1,024" 
          description="Current month"
        />
        <StatCard 
          title="Avg. Turnaround" 
          value="24 hours" 
          description="From receipt to results"
        />
        <StatCard 
          title="Quality Score" 
          value="99.2%" 
          description="Accuracy rating"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
