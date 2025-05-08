
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollText, Search, User, Plus } from "lucide-react";
import { Input } from "@/components/ui/input";
import DashboardLayout from "@/components/layout/DashboardLayout";

const DoctorPrescriptions = () => {
  return (
    <DashboardLayout role="doctor">
      <div className="space-y-6">
        <div className="dashboard-header p-4 rounded-xl">
          <h2 className="text-3xl font-bold tracking-tight">Prescriptions</h2>
          <p className="text-white/80">
            Gestion des ordonnances et suivi des traitements
          </p>
        </div>

        {/* Search and create section */}
        <Card className="dashboard-panel">
          <CardHeader className="dashboard-panel-header">
            <CardTitle>Rechercher une prescription</CardTitle>
            <CardDescription>
              Retrouvez une ordonnance par patient ou numéro
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input 
                  type="text" 
                  placeholder="Nom du patient ou numéro d'ordonnance" 
                  className="border-primary/20 focus:border-primary"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              <Button className="w-full sm:w-auto ml-auto bg-primary hover:bg-primary/90">
                <ScrollText className="h-4 w-4 mr-2" />
                Nouvelle ordonnance
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent prescriptions */}
        <Card className="dashboard-panel">
          <CardHeader className="dashboard-panel-header">
            <CardTitle>Prescriptions récentes</CardTitle>
            <CardDescription>
              Ordonnances émises récemment
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-primary/5">
                  <tr>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Patient</th>
                    <th scope="col" className="px-6 py-3">Médicaments</th>
                    <th scope="col" className="px-6 py-3">Durée</th>
                    <th scope="col" className="px-6 py-3">Statut</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white hover:bg-secondary/20 transition-colors border-b">
                    <td className="px-6 py-4">10/05/2025</td>
                    <td className="px-6 py-4">Jean Dupont</td>
                    <td className="px-6 py-4">Amoxicilline 500mg, Paracetamol 1000mg</td>
                    <td className="px-6 py-4">7 jours</td>
                    <td className="px-6 py-4"><Badge className="bg-primary">Émise</Badge></td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">Voir</Button>
                        <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">Renouveler</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-secondary/10 hover:bg-secondary/20 transition-colors border-b">
                    <td className="px-6 py-4">28/04/2025</td>
                    <td className="px-6 py-4">Sophie Martin</td>
                    <td className="px-6 py-4">Vitamine D 1000 UI</td>
                    <td className="px-6 py-4">30 jours</td>
                    <td className="px-6 py-4"><Badge variant="outline" className="border-primary/50 text-primary">Délivrée</Badge></td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">Voir</Button>
                        <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">Renouveler</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-secondary/20 transition-colors border-b">
                    <td className="px-6 py-4">15/03/2025</td>
                    <td className="px-6 py-4">Lucas Bernard</td>
                    <td className="px-6 py-4">Amlodipine 5mg, Aspirine 100mg</td>
                    <td className="px-6 py-4">90 jours</td>
                    <td className="px-6 py-4"><Badge variant="outline" className="border-primary/50 text-primary">Délivrée</Badge></td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm" className="bg-primary hover:bg-primary/90">Voir</Button>
                        <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">Renouveler</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Prescription templates */}
        <Card className="dashboard-panel">
          <CardHeader className="dashboard-panel-header">
            <CardTitle>Modèles d'ordonnances</CardTitle>
            <CardDescription>
              Créez et utilisez des modèles pour gagner du temps
            </CardDescription>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <div className="border border-primary/20 rounded-lg p-4 flex flex-col hover-scale bg-white/60">
                <h3 className="font-medium text-primary">Antibiothérapie standard</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Amoxicilline 500mg, 3x/jour pendant 7 jours
                </p>
                <div className="mt-auto pt-4 flex justify-end">
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">Utiliser</Button>
                </div>
              </div>
              
              <div className="border border-primary/20 rounded-lg p-4 flex flex-col hover-scale bg-white/60">
                <h3 className="font-medium text-primary">Hypertension légère</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Amlodipine 5mg, 1x/jour pendant 30 jours
                </p>
                <div className="mt-auto pt-4 flex justify-end">
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">Utiliser</Button>
                </div>
              </div>
              
              <div className="border border-primary/20 rounded-lg p-4 flex flex-col hover-scale bg-white/60">
                <h3 className="font-medium text-primary">Douleur modérée</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  Paracetamol 1000mg, jusqu'à 4x/jour si besoin
                </p>
                <div className="mt-auto pt-4 flex justify-end">
                  <Button variant="outline" size="sm" className="border-primary/30 hover:bg-primary/5">Utiliser</Button>
                </div>
              </div>
              
              <div className="border border-primary/30 border-dashed rounded-lg p-4 flex items-center justify-center hover-scale bg-primary/5 hover:bg-primary/10">
                <Button variant="ghost" className="flex items-center text-primary">
                  <Plus className="h-5 w-5 mr-1" />
                  Créer un modèle
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorPrescriptions;
