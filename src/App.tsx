
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import UIShowcase from "./pages/UIShowcase";

// Dashboard routes
import PatientDashboard from "./pages/dashboard/PatientDashboard";
import DoctorDashboard from "./pages/dashboard/DoctorDashboard";
import PharmacistDashboard from "./pages/dashboard/PharmacistDashboard";
import InsuranceDashboard from "./pages/dashboard/InsuranceDashboard";
import LaboratoryDashboard from "./pages/dashboard/LaboratoryDashboard";

// Profile routes
import PatientProfile from "./pages/profile/PatientProfile";
import DoctorProfile from "./pages/profile/DoctorProfile";
import PharmacistProfile from "./pages/profile/PharmacistProfile";
import InsuranceProfile from "./pages/profile/InsuranceProfile";
import LaboratoryProfile from "./pages/profile/LaboratoryProfile";

// Patient routes
import PatientConsultations from "./pages/patient/Consultations";
import PatientPrescriptions from "./pages/patient/Prescriptions";

// Doctor routes
import DoctorPatients from "./pages/doctor/Patients";
import DoctorConsultations from "./pages/doctor/Consultations";
import DoctorPrescriptions from "./pages/doctor/Prescriptions";
import DoctorReimbursements from "./pages/doctor/Reimbursements";

// Pharmacist routes
import PharmacistPrescriptions from "./pages/pharmacist/Prescriptions";
import PharmacistMedications from "./pages/pharmacist/Medications";
import PharmacistReimbursements from "./pages/pharmacist/Reimbursements";

// Insurance routes
import InsuranceClaims from "./pages/insurance/Claims";
import InsuranceInsured from "./pages/insurance/Insured";
import InsurancePayments from "./pages/insurance/Payments";

// Laboratory routes
import LaboratoryAnalyses from "./pages/laboratory/Analyses";
import LaboratoryResults from "./pages/laboratory/Results";
import LaboratoryReimbursements from "./pages/laboratory/Reimbursements";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ui" element={<UIShowcase />} />
          
          {/* Dashboard Routes */}
          <Route path="/dashboard/patient" element={<PatientDashboard />} />
          <Route path="/dashboard/doctor" element={<DoctorDashboard />} />
          <Route path="/dashboard/pharmacist" element={<PharmacistDashboard />} />
          <Route path="/dashboard/insurance" element={<InsuranceDashboard />} />
          <Route path="/dashboard/laboratory" element={<LaboratoryDashboard />} />
          
          {/* Profile Routes */}
          <Route path="/profile/patient" element={<PatientProfile />} />
          <Route path="/profile/doctor" element={<DoctorProfile />} />
          <Route path="/profile/pharmacist" element={<PharmacistProfile />} />
          <Route path="/profile/insurance" element={<InsuranceProfile />} />
          <Route path="/profile/laboratory" element={<LaboratoryProfile />} />
          
          {/* Patient Routes */}
          <Route path="/patient/consultations" element={<PatientConsultations />} />
          <Route path="/patient/prescriptions" element={<PatientPrescriptions />} />
          
          {/* Doctor Routes */}
          <Route path="/doctor/patients" element={<DoctorPatients />} />
          <Route path="/doctor/consultations" element={<DoctorConsultations />} />
          <Route path="/doctor/prescriptions" element={<DoctorPrescriptions />} />
          <Route path="/doctor/reimbursements" element={<DoctorReimbursements />} />
          
          {/* Pharmacist Routes */}
          <Route path="/pharmacist/prescriptions" element={<PharmacistPrescriptions />} />
          <Route path="/pharmacist/medications" element={<PharmacistMedications />} />
          <Route path="/pharmacist/reimbursements" element={<PharmacistReimbursements />} />
          
          {/* Insurance Routes */}
          <Route path="/insurance/claims" element={<InsuranceClaims />} />
          <Route path="/insurance/insured" element={<InsuranceInsured />} />
          <Route path="/insurance/payments" element={<InsurancePayments />} />
          
          {/* Laboratory Routes */}
          <Route path="/laboratory/analyses" element={<LaboratoryAnalyses />} />
          <Route path="/laboratory/results" element={<LaboratoryResults />} />
          <Route path="/laboratory/reimbursements" element={<LaboratoryReimbursements />} />
          
          {/* Catch-all route for 404s */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
