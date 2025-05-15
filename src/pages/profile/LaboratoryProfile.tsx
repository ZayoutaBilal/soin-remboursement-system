
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ProfileCard } from "@/components/profile/ProfileCard";

const LaboratoryProfile = () => {
  return (
    <DashboardLayout role="laboratory">
      <div className="container py-6">
        <ProfileCard
          role="laboratory"
          name="Thomas Martin"
          email="thomas.martin@example.com"
          specialization="Analyses Biologiques"
          phone="+33 6 55 66 77 88"
          address="202 Avenue Pasteur, 75015 Paris"
          memberSince="Avril 2023"
        />
      </div>
    </DashboardLayout>
  );
};

export default LaboratoryProfile;
