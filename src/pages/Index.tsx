
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useNavigate } from "react-router-dom";
import { UserRole } from "@/types/healthcare";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (role: UserRole) => {
    if (!email || !password) {
      toast({
        title: "Error",
        description: "Please enter both email and password",
        variant: "destructive",
      });
      return;
    }

    // In a real app, this would validate against a backend
    toast({
        title: "Success",
        description: `Logged in as ${role}`,
    });
    
    // Redirect to the dashboard for the selected role
    navigate(`/dashboard/${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-healthcare-primary to-healthcare-secondary flex flex-col items-center justify-center p-4">
      <div className="max-w-lg w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Système Intégré de Gestion des Soins et Demandes de Remboursement
          </h1>
          <p className="text-white/80">
            Connectez les patients, médecins, pharmaciens, assurances et laboratoires
          </p>
        </div>

        <Card className="w-full">
          <CardHeader>
            <CardTitle>Connexion</CardTitle>
            <CardDescription>
              Sélectionnez votre profil et connectez-vous au système
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="exemple@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input 
                  id="password" 
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </CardContent>
          
          <Tabs defaultValue="patient" className="w-full">
            <TabsList className="grid grid-cols-5 mb-4 mx-4">
              <TabsTrigger value="patient">Patient</TabsTrigger>
              <TabsTrigger value="doctor">Médecin</TabsTrigger>
              <TabsTrigger value="pharmacist">Pharmacien</TabsTrigger>
              <TabsTrigger value="insurance">Assurance</TabsTrigger>
              <TabsTrigger value="laboratory">Laboratoire</TabsTrigger>
            </TabsList>
            
            <TabsContent value="patient">
              <CardFooter>
                <Button className="w-full" onClick={() => handleLogin("patient")}>
                  Se connecter en tant que Patient
                </Button>
              </CardFooter>
            </TabsContent>
            
            <TabsContent value="doctor">
              <CardFooter>
                <Button className="w-full" onClick={() => handleLogin("doctor")}>
                  Se connecter en tant que Médecin
                </Button>
              </CardFooter>
            </TabsContent>
            
            <TabsContent value="pharmacist">
              <CardFooter>
                <Button className="w-full" onClick={() => handleLogin("pharmacist")}>
                  Se connecter en tant que Pharmacien
                </Button>
              </CardFooter>
            </TabsContent>
            
            <TabsContent value="insurance">
              <CardFooter>
                <Button className="w-full" onClick={() => handleLogin("insurance")}>
                  Se connecter en tant qu'Assureur
                </Button>
              </CardFooter>
            </TabsContent>
            
            <TabsContent value="laboratory">
              <CardFooter>
                <Button className="w-full" onClick={() => handleLogin("laboratory")}>
                  Se connecter en tant que Laboratoire
                </Button>
              </CardFooter>
            </TabsContent>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Index;
