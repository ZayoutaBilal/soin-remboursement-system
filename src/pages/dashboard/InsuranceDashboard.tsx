
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, TrendingUp, Clock, Search } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";

const InsuranceDashboard = () => {
  return (
    <DashboardLayout role="insurance">
      <div className="space-y-6">
        {/* Welcome header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Assurance Nationale</h2>
          <p className="text-muted-foreground">
            Gestion des remboursements et assurés
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demandes en attente</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">38</div>
              <p className="text-xs text-muted-foreground">
                +12 depuis hier
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assurés actifs</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,254</div>
              <p className="text-xs text-muted-foreground">
                +34 ce mois-ci
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Montant traité</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,452 €</div>
              <p className="text-xs text-muted-foreground">
                Ce mois-ci
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Temps moyen</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">48h</div>
              <p className="text-xs text-muted-foreground">
                Pour traitement
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Search and actions section */}
        <Card>
          <CardHeader>
            <CardTitle>Recherche rapide</CardTitle>
            <CardDescription>
              Retrouvez un assuré ou une demande
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Numéro d'assuré ou de demande" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              
              <div className="flex space-x-2">
                <Button variant="outline">Nouveau dossier</Button>
                <Button>Demandes urgentes</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Claims management tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Gestion des remboursements</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="pending">En attente</TabsTrigger>
                <TabsTrigger value="review">En révision</TabsTrigger>
                <TabsTrigger value="approved">Approuvés</TabsTrigger>
                <TabsTrigger value="history">Historique</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">N° Demande</th>
                        <th scope="col" className="px-6 py-3">Assuré</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">DR-2025-0042</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Consultation</td>
                        <td className="px-6 py-4">25,00 €</td>
                        <td className="px-6 py-4">10/05/2025</td>
                        <td className="px-6 py-4 flex space-x-2">
                          <Button size="sm">Approuver</Button>
                          <Button variant="outline" size="sm">Détails</Button>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">DR-2025-0041</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Médicaments</td>
                        <td className="px-6 py-4">43,50 €</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4 flex space-x-2">
                          <Button size="sm">Approuver</Button>
                          <Button variant="outline" size="sm">Détails</Button>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">DR-2025-0040</td>
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">Analyses</td>
                        <td className="px-6 py-4">72,00 €</td>
                        <td className="px-6 py-4">08/05/2025</td>
                        <td className="px-6 py-4 flex space-x-2">
                          <Button size="sm">Approuver</Button>
                          <Button variant="outline" size="sm">Détails</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="review" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">N° Demande</th>
                        <th scope="col" className="px-6 py-3">Assuré</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Assigné à</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">DR-2025-0039</td>
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">Hospitalisation</td>
                        <td className="px-6 py-4">1,250.00 €</td>
                        <td className="px-6 py-4">Michel D.</td>
                        <td className="px-6 py-4"><Button variant="outline" size="sm">Voir rapport</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="approved" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">N° Demande</th>
                        <th scope="col" className="px-6 py-3">Assuré</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Date paiement</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">DR-2025-0038</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Optique</td>
                        <td className="px-6 py-4">210,00 €</td>
                        <td className="px-6 py-4">12/05/2025</td>
                        <td className="px-6 py-4"><Button variant="outline" size="sm">Détails</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="history" className="mt-4">
                <div className="relative overflow-x-auto">
                  <div className="flex justify-between mb-4">
                    <Input type="text" placeholder="Rechercher dans l'historique" className="max-w-sm" />
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">Filtrer par:</span>
                      <Button variant="outline" size="sm">Date</Button>
                      <Button variant="outline" size="sm">Type</Button>
                      <Button variant="outline" size="sm">Montant</Button>
                    </div>
                  </div>
                  
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">N° Demande</th>
                        <th scope="col" className="px-6 py-3">Assuré</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Statut</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">DR-2025-0037</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Dentaire</td>
                        <td className="px-6 py-4">320,00 €</td>
                        <td className="px-6 py-4"><Badge variant="outline">Payé</Badge></td>
                        <td className="px-6 py-4">02/05/2025</td>
                        <td className="px-6 py-4"><Button variant="ghost" size="sm">PDF</Button></td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">DR-2025-0036</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Consultation</td>
                        <td className="px-6 py-4">25,00 €</td>
                        <td className="px-6 py-4"><Badge variant="outline">Payé</Badge></td>
                        <td className="px-6 py-4">01/05/2025</td>
                        <td className="px-6 py-4"><Button variant="ghost" size="sm">PDF</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InsuranceDashboard;
