import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UserRole } from "@/types/healthcare";
import { Edit, Camera, Shield, User } from "lucide-react";
import { useCustomToast } from "@/components/ui/custom-toast";

interface ProfileCardProps {
  role: UserRole;
  name: string;
  email: string;
  avatar?: string;
  specialization?: string;
  address?: string;
  phone?: string;
  memberSince?: string;
}

export const ProfileCard = ({
  role,
  name,
  email,
  avatar,
  specialization,
  address,
  phone,
  memberSince = "Mai 2025",
}: ProfileCardProps) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const toast = useCustomToast();
  
  const getRoleIcon = () => {
    switch (role) {
      case "patient":
        return <User className="h-5 w-5 text-pink-500" />;
      case "doctor":
        return <Shield className="h-5 w-5 text-purple-500" />;
      case "pharmacist":
        return <Shield className="h-5 w-5 text-emerald-500" />;
      case "laboratory":
        return <Shield className="h-5 w-5 text-amber-500" />;
      case "insurance":
        return <Shield className="h-5 w-5 text-blue-500" />;
      default:
        return <User className="h-5 w-5" />;
    }
  };

  const getRoleColor = () => {
    switch (role) {
      case "patient":
        return "from-pink-500 to-pink-600";
      case "doctor":
        return "from-purple-500 to-purple-600";
      case "pharmacist":
        return "from-emerald-500 to-emerald-600";
      case "laboratory":
        return "from-amber-500 to-amber-600";
      case "insurance":
        return "from-blue-500 to-blue-600";
      default:
        return "from-primary to-accent";
    }
  };

  const getRoleTitle = () => {
    switch (role) {
      case "patient":
        return "Patient";
      case "doctor":
        return "Médecin";
      case "pharmacist":
        return "Pharmacien";
      case "laboratory":
        return "Laboratoire";
      case "insurance":
        return "Assurance";
      default:
        return "Utilisateur";
    }
  };
  
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  const handleSave = () => {
    setIsEditing(false);
    toast.success({
      title: "Profil mis à jour",
      description: "Vos informations ont été enregistrées avec succès.",
      // Use the modern Sonner toast by default (not passing useClassic)
    });
  };

  return (
    <Card className="w-full max-w-3xl mx-auto profile-card animate-fade-in">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className={`text-2xl font-bold bg-gradient-to-r ${getRoleColor()} bg-clip-text text-transparent`}>
            Mon Profil
          </CardTitle>
          <Button
            variant={role}
            size="sm"
            className="flex items-center gap-1 transition-all"
            onClick={() => setIsEditing(!isEditing)}
          >
            <Edit className="h-4 w-4" />
            <span>{isEditing ? "Annuler" : "Modifier"}</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          <div className="flex flex-col items-center gap-2">
            <div className="relative">
              <Avatar className={`h-24 w-24 border-4 border-${role === "patient" ? "pink" : role === "doctor" ? "purple" : role === "pharmacist" ? "emerald" : role === "laboratory" ? "amber" : "blue"}-500/30`}>
                {avatar ? (
                  <AvatarImage src={avatar} alt={name} />
                ) : (
                  <AvatarFallback className={`bg-gradient-to-br ${getRoleColor()} text-white text-xl`}>
                    {getInitials(name)}
                  </AvatarFallback>
                )}
              </Avatar>
              <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1 shadow-md border">
                <Button size="icon" variant="ghost" className="h-7 w-7">
                  <Camera className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="flex items-center mt-2 text-sm font-medium text-muted-foreground">
              {getRoleIcon()}
              <span className="ml-1">{getRoleTitle()}</span>
            </div>
            <div className="text-xs text-muted-foreground">Membre depuis {memberSince}</div>
          </div>
          
          <div className="flex-1 space-y-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nom</Label>
                {isEditing ? (
                  <Input id="name" defaultValue={name} />
                ) : (
                  <div className="text-base font-medium p-2 bg-secondary/30 rounded">{name}</div>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                {isEditing ? (
                  <Input id="email" type="email" defaultValue={email} />
                ) : (
                  <div className="text-base font-medium p-2 bg-secondary/30 rounded">{email}</div>
                )}
              </div>
              {phone && (
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  {isEditing ? (
                    <Input id="phone" defaultValue={phone} />
                  ) : (
                    <div className="text-base font-medium p-2 bg-secondary/30 rounded">{phone}</div>
                  )}
                </div>
              )}
              {specialization && (
                <div className="space-y-2">
                  <Label htmlFor="specialization">Spécialisation</Label>
                  {isEditing ? (
                    <Input id="specialization" defaultValue={specialization} />
                  ) : (
                    <div className="text-base font-medium p-2 bg-secondary/30 rounded">{specialization}</div>
                  )}
                </div>
              )}
              {address && (
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Adresse</Label>
                  {isEditing ? (
                    <Input id="address" defaultValue={address} />
                  ) : (
                    <div className="text-base font-medium p-2 bg-secondary/30 rounded">{address}</div>
                  )}
                </div>
              )}
            </div>

            {isEditing && (
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" onClick={() => setIsEditing(false)}>Annuler</Button>
                <Button variant={role} onClick={handleSave} className="animate-pulse">Enregistrer</Button>
              </div>
            )}
          </div>
        </div>

        {role === "doctor" && (
          <Card className="bg-muted/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Informations professionnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Numéro RPPS</span>
                  <span className="font-medium">1012345678</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Convention</span>
                  <span className="font-medium">Secteur 1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Activité</span>
                  <span className="font-medium">Libéral</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {role === "pharmacist" && (
          <Card className="bg-muted/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Informations professionnelles</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Numéro RPPS</span>
                  <span className="font-medium">2023456789</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">Officine</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {role === "patient" && (
          <Card className="bg-muted/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Informations médicales</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Numéro Sécurité Sociale</span>
                  <span className="font-medium">1 87 05 75 123 456 78</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Médecin traitant</span>
                  <span className="font-medium">Dr. Marie Laurent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {role === "laboratory" && (
          <Card className="bg-muted/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Informations laboratoire</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Numéro FINESS</span>
                  <span className="font-medium">750712184</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">Analyses médicales</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {role === "insurance" && (
          <Card className="bg-muted/30">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Informations assurance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Numéro RCS</span>
                  <span className="font-medium">Paris B 123 456 789</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Type</span>
                  <span className="font-medium">Complémentaire santé</span>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <Card className="bg-muted/30">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg">Paramètres du compte</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Button variant={role} className="w-full justify-start">
                Changer mon mot de passe
              </Button>
              <Button variant={role} className="w-full justify-start">
                Notifications et préférences
              </Button>
            </div>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};
