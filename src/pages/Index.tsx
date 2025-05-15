
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  User, Heart, Pill, Microscope, FileText
} from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const roles = [
    {
      name: "Patient",
      icon: <User className="w-6 h-6" />,
      description: "Accédez à votre espace patient pour consulter vos ordonnances, rapports médicaux et rendez-vous",
      path: "/dashboard/patient",
      variant: "patient" as const,
    },
    {
      name: "Médecin",
      icon: <Heart className="w-6 h-6" />,
      description: "Gérez vos patients, consultations, ordonnances et rapports médicaux",
      path: "/dashboard/doctor",
      variant: "doctor" as const,
    },
    {
      name: "Pharmacien",
      icon: <Pill className="w-6 h-6" />,
      description: "Gérez les prescriptions, le stock de médicaments et les demandes de remboursement",
      path: "/dashboard/pharmacist",
      variant: "pharmacist" as const,
    },
    {
      name: "Laboratoire",
      icon: <Microscope className="w-6 h-6" />,
      description: "Gérez les analyses, les résultats et les rapports de laboratoire",
      path: "/dashboard/laboratory",
      variant: "laboratory" as const,
    },
    {
      name: "Assurance",
      icon: <FileText className="w-6 h-6" />,
      description: "Gérez les demandes de remboursement et vérifiez la couverture des patients",
      path: "/dashboard/insurance",
      variant: "insurance" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 dark:from-background dark:to-gray-900/50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Plateforme de Santé Connectée
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une solution complète pour les patients, médecins, pharmaciens, laboratoires et assurances
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {roles.map((role, index) => (
            <Card 
              key={index} 
              className="bg-card dark:bg-gray-800/80 border border-border/50 hover:shadow-xl transition-all duration-300 animate-scale-in hover-scale"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4 gap-3">
                  <div className={`p-2 rounded-full ${
                    role.variant === "patient" ? "bg-pink-100 text-pink-600" :
                    role.variant === "doctor" ? "bg-purple-100 text-purple-600" :
                    role.variant === "pharmacist" ? "bg-emerald-100 text-emerald-600" :
                    role.variant === "laboratory" ? "bg-amber-100 text-amber-600" :
                    "bg-blue-100 text-blue-600"
                  } dark:bg-gray-700`}>
                    {role.icon}
                  </div>
                  <h2 className="text-2xl font-bold">{role.name}</h2>
                </div>
                <p className="text-muted-foreground mb-6 flex-1">
                  {role.description}
                </p>
                <Button 
                  variant={role.variant} 
                  className="w-full mt-auto text-md font-medium"
                  onClick={() => navigate(role.path)}
                >
                  Accéder au tableau de bord
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Plateforme de Santé Connectée. Tous droits réservés.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
