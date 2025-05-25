
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Dashboard routes
import PatientDashboard from "./pages/dashboard/PatientDashboard";
import DoctorDashboard from "./pages/dashboard/DoctorDashboard";
import PharmacistDashboard from "./pages/dashboard/PharmacistDashboard";
import InsuranceDashboard from "./pages/dashboard/InsuranceDashboard";
import LaboratoryDashboard from "./pages/dashboard/LaboratoryDashboard";

// Patient routes
import PatientConsultations from "./pages/patient/Consultations";
import PatientPrescriptions from "./pages/patient/Prescriptions";
import PatientReimbursements from "./pages/patient/Reimbursements";

// Doctor routes
import DoctorPatients from "./pages/doctor/Patients";
import DoctorConsultations from "./pages/doctor/Consultations";
import DoctorPrescriptions from "./pages/doctor/Prescriptions";

// Pharmacist routes
import PharmacistPrescriptions from "./pages/pharmacist/Prescriptions";
import PharmacistMedications from "./pages/pharmacist/Medications";

// Insurance routes
import InsuranceClaims from "./pages/insurance/Claims";
import InsuranceInsured from "./pages/insurance/Insured";
import InsurancePayments from "./pages/insurance/Payments";

// Laboratory routes
import LaboratoryAnalyses from "./pages/laboratory/Analyses";
import LaboratoryResults from "./pages/laboratory/Results";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<Index />} />*/}
          <Route path="/" element={<DoctorDashboard />} />

          {/* Patient Routes */}
          <Route path="/patient/consultations" element={<PatientConsultations />} />
          <Route path="/patient/prescriptions" element={<PatientPrescriptions />} />
          <Route path="/patient/reimbursements" element={<PatientReimbursements />} />
          <Route path="/patient/dashboard" element={<PatientDashboard />} />

          {/* Doctor Routes */}
          <Route path="/doctor/patients" element={<DoctorPatients />} />
          <Route path="/doctor/consultations" element={<DoctorConsultations />} />
          <Route path="/doctor/prescriptions" element={<DoctorPrescriptions />} />
          <Route path="/doctor/dashboard" element={<DoctorDashboard />} />

          {/* Pharmacist Routes */}
          <Route path="/pharmacist/prescriptions" element={<PharmacistPrescriptions />} />
          <Route path="/pharmacist/medications" element={<PharmacistMedications />} />
          <Route path="/pharmacist/dashboard" element={<PharmacistDashboard />} />

          {/* Insurance Routes */}
          <Route path="/insurance/claims" element={<InsuranceClaims />} />
          <Route path="/insurance/insured" element={<InsuranceInsured />} />
          <Route path="/insurance/payments" element={<InsurancePayments />} />
          <Route path="/insurance/dashboard" element={<InsuranceDashboard />} />

          {/* Laboratory Routes */}
          <Route path="/laboratory/analyses" element={<LaboratoryAnalyses />} />
          <Route path="/laboratory/results" element={<LaboratoryResults />} />
          <Route path="/laboratory/dashboard" element={<LaboratoryDashboard />} />

          {/* Catch-all route for 404s */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
