import { useState, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { UserRole } from "@/types/healthcare";
import { 
  Home, User, FileText, PlusCircle, LogOut, Users, 
  Pill, Heart, Activity, Search, Microscope, ScrollText,
  Moon, Sun
} from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Checkbox } from "@/components/ui/checkbox";
import { useIsMobile } from "@/hooks/use-mobile";

interface DashboardLayoutProps {
  children: ReactNode;
  role: UserRole;
}

const DashboardLayout = ({ children, role }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    // Check for stored preference or system preference
    const storedDarkMode = localStorage.getItem('darkMode');
    const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedDarkMode) {
      setDarkMode(storedDarkMode === 'true');
    } else {
      setDarkMode(systemDarkMode);
    }
  }, []);

  useEffect(() => {
    // Apply dark mode class to the html element
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Store preference
    localStorage.setItem('darkMode', String(darkMode));
  }, [darkMode]);

  // Auto-collapse on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarCollapsed(true);
    }
  }, [isMobile]);

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

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Sidebar with improved contrast for dark mode */}
      <div 
        className={`${
          sidebarCollapsed ? "w-16" : "w-64"
        } relative bg-sidebar text-sidebar-foreground transition-all duration-300 flex flex-col shadow-xl z-20`}
      >
        {/* Logo and Collapse Button */}
        <div className={`${getRoleColor()} text-white h-16 flex items-center justify-between px-4`}>
          {!sidebarCollapsed && (
            <div className="flex items-center">
              <div className="bg-white/20 rounded-full p-1 shadow-md">
                {getRoleIcon()}
              </div>
              <span className="ml-2 font-semibold">{getRoleName()}</span>
            </div>
          )}
          {sidebarCollapsed && 
            <div className="mx-auto bg-white/20 rounded-full p-1 shadow-md">
              {getRoleIcon()}
            </div>
          }
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={toggleSidebar}
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
                      isActive ? "active bg-sidebar-accent text-sidebar-accent-foreground" : ""
                    } text-sidebar-foreground hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground transition-all shadow-sm`}
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
        <div className="p-4 border-t border-sidebar-border">
          <Button 
            variant="ghost" 
            className={`w-full justify-start text-sidebar-foreground hover:bg-sidebar-accent/70 hover:text-sidebar-accent-foreground ${!sidebarCollapsed ? "px-4" : "px-2 justify-center"}`}
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
        <header className="bg-card shadow-md border-b h-16 flex items-center justify-between px-4 md:px-6">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="sm"
              className="mr-2 md:hidden"
              onClick={toggleSidebar}
            >
              {sidebarCollapsed ? "☰" : "✕"}
            </Button>
            <h1 className="text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {getRoleName()} - Tableau de Bord
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            <Button 
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="relative"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Button variant="outline" size="sm" className="hidden md:flex border-primary text-primary hover:bg-primary/10">
              <PlusCircle className="w-4 h-4 mr-2" />
              Nouvelle Action
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-secondary/30">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
