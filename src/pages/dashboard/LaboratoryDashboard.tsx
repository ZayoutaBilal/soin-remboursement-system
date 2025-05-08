
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileText, Users, Activity, Clock, Microscope } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const LaboratoryDashboard = () => {
  return (
    <DashboardLayout role="laboratory">
      <div className="space-y-6">
        {/* Welcome header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Laboratoire Central</h2>
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
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">
                En attente
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
                À publier aujourd'hui
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Patients</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">42</div>
              <p className="text-xs text-muted-foreground">
                Dossiers actifs
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Délai moyen</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">36h</div>
              <p className="text-xs text-muted-foreground">
                Traitement d'analyse
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Sample search and registration */}
        <Card>
          <CardHeader>
            <CardTitle>Gestion des échantillons</CardTitle>
            <CardDescription>
              Rechercher ou enregistrer un nouvel échantillon
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="ID d'échantillon ou nom du patient" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              <Button className="w-full sm:w-auto">
                Nouvel échantillon
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Analyses management */}
        <Card>
          <CardHeader>
            <CardTitle>Gestion des analyses</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="pending">En attente</TabsTrigger>
                <TabsTrigger value="inProgress">En cours</TabsTrigger>
                <TabsTrigger value="completed">Terminées</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type d'analyse</th>
                        <th scope="col" className="px-6 py-3">Demandeur</th>
                        <th scope="col" className="px-6 py-3">Date de réception</th>
                        <th scope="col" className="px-6 py-3">Priorité</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">ANL-2025-0042</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Biochimie - Foie</td>
                        <td className="px-6 py-4">Dr. Marie Laurent</td>
                        <td className="px-6 py-4">10/05/2025</td>
                        <td className="px-6 py-4"><Badge variant="destructive">Urgent</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Traiter</Button>
                            <Button variant="outline" size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">ANL-2025-0041</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Hémogramme</td>
                        <td className="px-6 py-4">Dr. Jean Lefevre</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4"><Badge>Normal</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Traiter</Button>
                            <Button variant="outline" size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="inProgress" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type d'analyse</th>
                        <th scope="col" className="px-6 py-3">Technicien</th>
                        <th scope="col" className="px-6 py-3">Début</th>
                        <th scope="col" className="px-6 py-3">Progression</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">ANL-2025-0040</td>
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">Microbiologie</td>
                        <td className="px-6 py-4">Thomas D.</td>
                        <td className="px-6 py-4">10/05/2025 08:30</td>
                        <td className="px-6 py-4">En incubation</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Mettre à jour</Button>
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
                        <th scope="col" className="px-6 py-3">ID</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type d'analyse</th>
                        <th scope="col" className="px-6 py-3">Date Fin</th>
                        <th scope="col" className="px-6 py-3">Résultat</th>
                        <th scope="col" className="px-6 py-3">Status Envoi</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">ANL-2025-0039</td>
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">Cholestérol</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4"><Badge>Normal</Badge></td>
                        <td className="px-6 py-4">Non envoyé</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Envoyer</Button>
                            <Button variant="outline" size="sm">PDF</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">ANL-2025-0038</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Glycémie</td>
                        <td className="px-6 py-4">08/05/2025</td>
                        <td className="px-6 py-4"><Badge variant="destructive">Anormal</Badge></td>
                        <td className="px-6 py-4">Envoyé</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">PDF</Button>
                            <Button variant="ghost" size="sm">Historique</Button>
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
        
        {/* Reimbursement requests */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Demandes de remboursement</CardTitle>
              <CardDescription>
                Remboursements à traiter auprès des assurances
              </CardDescription>
            </div>
            <Button>Nouvelle demande</Button>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">ID</th>
                    <th scope="col" className="px-6 py-3">Patient</th>
                    <th scope="col" className="px-6 py-3">Analyses</th>
                    <th scope="col" className="px-6 py-3">Montant</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Statut</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">REM-2025-0018</td>
                    <td className="px-6 py-4">Sophie Martin</td>
                    <td className="px-6 py-4">Biochimie, Hémogramme</td>
                    <td className="px-6 py-4">72,00 €</td>
                    <td className="px-6 py-4">08/05/2025</td>
                    <td className="px-6 py-4"><Badge variant="secondary">En attente</Badge></td>
                    <td className="px-6 py-4"><Button variant="outline" size="sm">Détails</Button></td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">REM-2025-0017</td>
                    <td className="px-6 py-4">Jean Dupont</td>
                    <td className="px-6 py-4">Glycémie</td>
                    <td className="px-6 py-4">24,50 €</td>
                    <td className="px-6 py-4">05/05/2025</td>
                    <td className="px-6 py-4"><Badge>Approuvé</Badge></td>
                    <td className="px-6 py-4"><Button variant="outline" size="sm">Détails</Button></td>
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
