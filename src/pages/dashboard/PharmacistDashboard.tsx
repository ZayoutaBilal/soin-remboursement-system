
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Pill, FileText, Users, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const PharmacistDashboard = () => {
  return (
    <DashboardLayout role="pharmacist">
      <div className="space-y-6">
        {/* Welcome header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bonjour, Pierre Moreau</h2>
          <p className="text-muted-foreground">
            Gestion des prescriptions et médicaments
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">14</div>
              <p className="text-xs text-muted-foreground">
                En attente aujourd'hui
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Médicaments</CardTitle>
              <Pill className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">857</div>
              <p className="text-xs text-muted-foreground">
                En stock actuellement
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28</div>
              <p className="text-xs text-muted-foreground">
                Servis aujourd'hui
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Remboursements</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-muted-foreground">
                Demandes à traiter
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Prescription scanning and search */}
        <Card>
          <CardHeader>
            <CardTitle>Scanner une prescription</CardTitle>
            <CardDescription>
              Scannez ou recherchez une prescription par ID
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="ID de prescription ou nom du patient" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                Scanner QR code
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Current prescriptions */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Prescriptions à traiter</CardTitle>
              <CardDescription>
                Prescriptions en attente de traitement
              </CardDescription>
            </div>
            <Button>Nouvelle dispensation</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Patient</th>
                      <th scope="col" className="px-6 py-3">Médecin</th>
                      <th scope="col" className="px-6 py-3">Date prescription</th>
                      <th scope="col" className="px-6 py-3">Médicaments</th>
                      <th scope="col" className="px-6 py-3">Statut</th>
                      <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">Jean Dupont</td>
                      <td className="px-6 py-4">Dr. Marie Laurent</td>
                      <td className="px-6 py-4">10/05/2025</td>
                      <td className="px-6 py-4">Amoxicilline 500mg (x20)</td>
                      <td className="px-6 py-4"><Badge>En attente</Badge></td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <Button size="sm">Délivrer</Button>
                          <Button variant="outline" size="sm">Détails</Button>
                        </div>
                      </td>
                    </tr>
                    <tr className="bg-muted/20 border-b">
                      <td className="px-6 py-4">Sophie Martin</td>
                      <td className="px-6 py-4">Dr. Jean Lefevre</td>
                      <td className="px-6 py-4">09/05/2025</td>
                      <td className="px-6 py-4">Paracétamol 1000mg (x16), Ibuprofène 400mg (x12)</td>
                      <td className="px-6 py-4"><Badge>En attente</Badge></td>
                      <td className="px-6 py-4">
                        <div className="flex space-x-2">
                          <Button size="sm">Délivrer</Button>
                          <Button variant="outline" size="sm">Détails</Button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="flex justify-center">
                <Button variant="outline">Voir toutes les prescriptions</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Medication inventory alerts */}
        <Card>
          <CardHeader>
            <CardTitle>Alertes de stock</CardTitle>
            <CardDescription>
              Médicaments nécessitant un réapprovisionnement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Médicament</th>
                    <th scope="col" className="px-6 py-3">Format</th>
                    <th scope="col" className="px-6 py-3">Stock actuel</th>
                    <th scope="col" className="px-6 py-3">Seuil minimal</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Amoxicilline</td>
                    <td className="px-6 py-4">500mg comprimés</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20</td>
                    <td className="px-6 py-4"><Button size="sm">Commander</Button></td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">Insuline Lantus</td>
                    <td className="px-6 py-4">Flacon 100UI/ml</td>
                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">5</td>
                    <td className="px-6 py-4"><Button size="sm">Commander</Button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PharmacistDashboard;
