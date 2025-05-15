
import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { ProfileCard } from "@/components/profile/ProfileCard";

const PharmacistProfile = () => {
  return (
    <DashboardLayout role="pharmacist">
      <div className="container py-6">
        <ProfileCard
          role="pharmacist"
          name="Pierre Moreau"
          email="pierre.moreau@example.com"
          specialization="Pharmacie clinique"
          phone="+33 6 45 67 89 10"
          address="789 Boulevard Saint-Michel, 75005 Paris"
          memberSince="Juin 2023"
        />
      </div>
    </DashboardLayout>
  );
};

export default PharmacistProfile;
