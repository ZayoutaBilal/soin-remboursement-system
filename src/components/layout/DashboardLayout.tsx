
import { useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/types/healthcare";
import { Home, User, FileText, PlusCircle, LogOut, Users, Pill, Heart, Activity, Search, Microscope, ScrollText } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";

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
      case 'patient': return 'bg-gradient-to-r from-blue-500 to-blue-600';
      case 'doctor': return 'bg-gradient-to-r from-purple-500 to-purple-600';
      case 'pharmacist': return 'bg-gradient-to-r from-green-500 to-green-600';
      case 'insurance': return 'bg-gradient-to-r from-blue-400 to-blue-500';
      case 'laboratory': return 'bg-gradient-to-r from-amber-500 to-amber-600';
      default: return 'bg-gradient-to-r from-primary to-accent';
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
        } sidebar-enhanced transition-all duration-300 flex flex-col`}
      >
        {/* Logo and Collapse Button */}
        <div className={`${getRoleColor()} text-white h-16 flex items-center justify-between px-4`}>
          {!sidebarCollapsed && (
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full p-1">
                {getRoleIcon()}
              </div>
              <span className="ml-2 font-semibold">{getRoleName()}</span>
            </div>
          )}
          {sidebarCollapsed && 
            <div className="mx-auto bg-white/20 rounded-full p-1">
              {getRoleIcon()}
            </div>
          }
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="text-white hover:bg-white/20 absolute right-0"
          >
            {sidebarCollapsed ? ">" : "<"}
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 overflow-y-auto py-4 px-2">
          <ul className="space-y-2">
            {getMenuItems().map((item, index) => {
              const isActive = window.location.pathname === item.path;
              return (
                <li key={index}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start menu-item ${!sidebarCollapsed ? "px-4" : "px-2 justify-center"} ${
                      isActive ? "active" : ""
                    } text-white hover:bg-white/10`}
                    onClick={() => navigate(item.path)}
                  >
                    {item.icon}
                    {!sidebarCollapsed && <span className="ml-3">{item.name}</span>}
                  </Button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-white/10">
          <Button 
            variant="ghost" 
            className={`w-full justify-start text-white hover:bg-white/10 ${!sidebarCollapsed ? "px-4" : "px-2 justify-center"}`}
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
        <header className="bg-white shadow-sm border-b h-16 flex items-center justify-between px-6">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm"
              className="mr-2 md:hidden"
              onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            >
              {sidebarCollapsed ? "☰" : "✕"}
            </Button>
            <h1 className="text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {getRoleName()} - Tableau de Bord
            </h1>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center pr-4 border-r">
              <span className="text-sm text-muted-foreground mr-2">Mode sombre</span>
              <Checkbox id="dark-mode" />
            </div>
            <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
              <PlusCircle className="w-4 h-4 mr-2" />
              Nouvelle Action
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-secondary/30">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
