
import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/types/healthcare";
import { Home, User, FileText, PlusCircle, LogOut, Users, Pill, Heart, Activity, Search, Microscope, ScrollText } from "lucide-react";

interface DashboardLayoutProps {
  children: ReactNode;
  role: UserRole;
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
  };

  const getRoleColor = () => {
    switch (role) {
      case 'patient': return 'bg-healthcare-patient';
      case 'doctor': return 'bg-healthcare-doctor';
      case 'pharmacist': return 'bg-healthcare-pharmacist';
      case 'insurance': return 'bg-healthcare-insurance';
      case 'laboratory': return 'bg-healthcare-laboratory';
      default: return 'bg-healthcare-primary';
    }
  };

  const getRoleIcon = () => {
    switch (role) {
      case 'patient': return <User className="w-6 h-6" />;
      case 'doctor': return <Heart className="w-6 h-6" />;
      case 'pharmacist': return <Pill className="w-6 h-6" />;
      case 'insurance': return <FileText className="w-6 h-6" />;
      case 'laboratory': return <Microscope className="w-6 h-6" />;
      default: return <User className="w-6 h-6" />;
    }
  };

  const getRoleName = () => {
    switch (role) {
      case 'patient': return 'Patient';
      case 'doctor': return 'Médecin';
      case 'pharmacist': return 'Pharmacien';
      case 'insurance': return 'Assurance';
      case 'laboratory': return 'Laboratoire';
      default: return 'Utilisateur';
    }
  };

  // Different menu items based on role
  const getMenuItems = () => {
    const commonItems = [
      { name: "Tableau de bord", icon: <Home className="w-5 h-5" />, path: `/dashboard/${role}` }
    ];

    const roleSpecificItems = {
      patient: [
        { name: "Mes Consultations", icon: <Activity className="w-5 h-5" />, path: `/patient/consultations` },
        { name: "Mes Prescriptions", icon: <ScrollText className="w-5 h-5" />, path: `/patient/prescriptions` },
        { name: "Mes Remboursements", icon: <FileText className="w-5 h-5" />, path: `/patient/reimbursements` }
      ],
      doctor: [
        { name: "Mes Patients", icon: <Users className="w-5 h-5" />, path: `/doctor/patients` },
        { name: "Consultations", icon: <Activity className="w-5 h-5" />, path: `/doctor/consultations` },
        { name: "Prescriptions", icon: <ScrollText className="w-5 h-5" />, path: `/doctor/prescriptions` }
      ],
      pharmacist: [
        { name: "Prescriptions", icon: <ScrollText className="w-5 h-5" />, path: `/pharmacist/prescriptions` },
        { name: "Médicaments", icon: <Pill className="w-5 h-5" />, path: `/pharmacist/medications` }
      ],
      insurance: [
        { name: "Demandes", icon: <FileText className="w-5 h-5" />, path: `/insurance/claims` },
        { name: "Assurés", icon: <Users className="w-5 h-5" />, path: `/insurance/insured` },
        { name: "Paiements", icon: <FileText className="w-5 h-5" />, path: `/insurance/payments` }
      ],
      laboratory: [
        { name: "Analyses", icon: <Search className="w-5 h-5" />, path: `/laboratory/analyses` },
        { name: "Résultats", icon: <FileText className="w-5 h-5" />, path: `/laboratory/results` }
      ]
    };

    return [...commonItems, ...roleSpecificItems[role]];
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <div 
        className={`${
          sidebarCollapsed ? "w-16" : "w-64"
        } bg-card border-r transition-all duration-300 flex flex-col`}
      >
        {/* Logo and Collapse Button */}
        <div className={`${getRoleColor()} text-white h-16 flex items-center justify-between px-4`}>
          {!sidebarCollapsed && (
            <div className="flex items-center">
              {getRoleIcon()}
              <span className="ml-2 font-semibold">{getRoleName()}</span>
            </div>
          )}
          {sidebarCollapsed && getRoleIcon()}
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white hover:bg-white/20"
          >
            {sidebarCollapsed ? ">" : "<"}
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-2 px-2">
            {getMenuItems().map((item, index) => (
              <li key={index}>
                <Button
                  variant="ghost"
                  className={`w-full justify-start ${!sidebarCollapsed ? "px-4" : "px-2 justify-center"}`}
                  onClick={() => navigate(item.path)}
                >
                  {item.icon}
                  {!sidebarCollapsed && <span className="ml-3">{item.name}</span>}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t">
          <Button 
            variant="outline" 
            className={`w-full justify-start ${!sidebarCollapsed ? "px-4" : "px-2 justify-center"}`}
            onClick={handleLogout}
          >
            <LogOut className="w-5 h-5" />
            {!sidebarCollapsed && <span className="ml-3">Déconnexion</span>}
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b h-16 flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold">
            {getRoleName()} - Tableau de Bord
          </h1>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <PlusCircle className="w-4 h-4 mr-2" />
              Nouvelle Action
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-muted/30">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
