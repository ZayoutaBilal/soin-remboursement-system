
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Microscope, FileText, Clock, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LaboratoryDashboard = () => {
  return (
    <DashboardLayout role="laboratory">
      <div className="space-y-6">
        {/* Welcome header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bonjour, Laboratoire Central</h2>
          <p className="text-muted-foreground">
            Gestion des analyses et résultats
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Analyses</CardTitle>
              <Microscope className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                En cours aujourd'hui
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Résultats</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">
                À livrer aujourd'hui
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Délai moyen</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1.8j</div>
              <p className="text-xs text-muted-foreground">
                Pour traiter une analyse
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Remboursements</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">
                En attente de paiement
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Analysis search */}
        <Card>
          <CardHeader>
            <CardTitle>Rechercher une analyse</CardTitle>
            <CardDescription>
              Accédez rapidement à une analyse par référence ou patient
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Référence ou nom du patient" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                Scanner code-barres
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Analysis tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Gestion des analyses</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="pending">En attente</TabsTrigger>
                <TabsTrigger value="inprogress">En cours</TabsTrigger>
                <TabsTrigger value="completed">Complétées</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Demandeur</th>
                        <th scope="col" className="px-6 py-3">Date de demande</th>
                        <th scope="col" className="px-6 py-3">Priorité</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">LAB-5432</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Hématologie</td>
                        <td className="px-6 py-4">Dr. Marie Laurent</td>
                        <td className="px-6 py-4">10/05/2025</td>
                        <td className="px-6 py-4"><Badge variant="destructive">Urgent</Badge></td>
                        <td className="px-6 py-4"><Button size="sm">Démarrer</Button></td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">LAB-5433</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Biochimie</td>
                        <td className="px-6 py-4">Dr. Jean Lefevre</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4"><Badge>Normal</Badge></td>
                        <td className="px-6 py-4"><Button size="sm">Démarrer</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="inprogress" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Technicien</th>
                        <th scope="col" className="px-6 py-3">Date de début</th>
                        <th scope="col" className="px-6 py-3">Statut</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">LAB-5430</td>
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">Immunologie</td>
                        <td className="px-6 py-4">Thomas Petit</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4"><Badge>Phase 2/3</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Finaliser</Button>
                            <Button variant="outline" size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="completed" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Date de fin</th>
                        <th scope="col" className="px-6 py-3">Remboursement</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">LAB-5425</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Microbiologie</td>
                        <td className="px-6 py-4">08/05/2025</td>
                        <td className="px-6 py-4"><Badge variant="outline">Remboursé</Badge></td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">Télécharger PDF</Button>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">LAB-5420</td>
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">Hématologie</td>
                        <td className="px-6 py-4">07/05/2025</td>
                        <td className="px-6 py-4"><Badge variant="secondary">En attente</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Demander remboursement</Button>
                            <Button variant="outline" size="sm">Télécharger PDF</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
        
        {/* Equipment status */}
        <Card>
          <CardHeader>
            <CardTitle>État des équipements</CardTitle>
            <CardDescription>
              Statut actuel des appareils d'analyse
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Équipement</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Statut</th>
                    <th scope="col" className="px-6 py-3">Capacité</th>
                    <th scope="col" className="px-6 py-3">Prochaine maintenance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Analyseur hématologie HC-5000</td>
                    <td className="px-6 py-4">Hématologie</td>
                    <td className="px-6 py-4"><Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Opérationnel</Badge></td>
                    <td className="px-6 py-4">75%</td>
                    <td className="px-6 py-4">15/05/2025</td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">Spectromètre de masse X200</td>
                    <td className="px-6 py-4">Biochimie</td>
                    <td className="px-6 py-4"><Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">Maintenance</Badge></td>
                    <td className="px-6 py-4">0%</td>
                    <td className="px-6 py-4">En cours</td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">PCR LightCycler</td>
                    <td className="px-6 py-4">Génétique</td>
                    <td className="px-6 py-4"><Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">Opérationnel</Badge></td>
                    <td className="px-6 py-4">30%</td>
                    <td className="px-6 py-4">25/05/2025</td>
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

export default LaboratoryDashboard;
