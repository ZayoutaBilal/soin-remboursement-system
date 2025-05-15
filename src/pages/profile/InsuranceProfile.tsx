
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ProfileCard } from "@/components/profile/ProfileCard";

const InsuranceProfile = () => {
  return (
    <DashboardLayout role="insurance">
      <div className="container py-6">
        <ProfileCard
          role="insurance"
          name="Sophie Bernard"
          email="sophie.bernard@example.com"
          specialization="Conseillère santé"
          phone="+33 6 11 22 33 44"
          address="101 Rue de Rivoli, 75001 Paris"
          memberSince="Octobre 2023"
        />
      </div>
    </DashboardLayout>
  );
};

export default InsuranceProfile;
