
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ProfileCard } from "@/components/profile/ProfileCard";

const PatientProfile = () => {
  return (
    <DashboardLayout role="patient">
      <div className="container py-6">
        <ProfileCard
          role="patient"
          name="Jean Dupont"
          email="jean.dupont@example.com"
          phone="+33 6 12 34 56 78"
          address="123 Rue de Paris, 75001 Paris"
          memberSince="Janvier 2024"
        />
      </div>
    </DashboardLayout>
  );
};

export default PatientProfile;
