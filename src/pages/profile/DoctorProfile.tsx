
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ProfileCard } from "@/components/profile/ProfileCard";

const DoctorProfile = () => {
  return (
    <DashboardLayout role="doctor">
      <div className="container py-6">
        <ProfileCard
          role="doctor"
          name="Dr. Marie Laurent"
          email="marie.laurent@example.com"
          specialization="Médecine générale"
          phone="+33 6 98 76 54 32"
          address="456 Avenue de la République, 75011 Paris"
          memberSince="Mars 2022"
        />
      </div>
    </DashboardLayout>
  );
};

export default DoctorProfile;
