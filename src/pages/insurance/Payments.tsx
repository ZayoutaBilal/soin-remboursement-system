
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Calendar, FileText, ArrowRight, ArrowLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/layout/DashboardLayout";

const InsurancePayments = () => {
  return (
    <DashboardLayout role="insurance">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Paiements</h2>
          <p className="text-muted-foreground">
            Gestion des remboursements et des paiements
          </p>
        </div>

        {/* Statistics cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Remboursements du mois</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,560 €</div>
              <p className="text-xs text-muted-foreground">
                +12% par rapport au mois précédent
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paiements en attente</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8,345 €</div>
              <p className="text-xs text-muted-foreground">
                32 dossiers à traiter
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Paiements aujourd'hui</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,240 €</div>
              <p className="text-xs text-muted-foreground">
                8 paiements effectués
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Montant moyen</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">76,50 €</div>
              <p className="text-xs text-muted-foreground">
                Par demande de remboursement
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Search section */}
        <Card>
          <CardHeader>
            <CardTitle>Rechercher un paiement</CardTitle>
            <CardDescription>
              Retrouvez un paiement par référence ou bénéficiaire
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Référence ou nom du bénéficiaire" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                Filtres avancés
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Payments management */}
        <Card>
          <CardHeader>
            <CardTitle>Gestion des paiements</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="pending">À traiter</TabsTrigger>
                <TabsTrigger value="scheduled">Programmés</TabsTrigger>
                <TabsTrigger value="processed">Traités</TabsTrigger>
                <TabsTrigger value="rejected">Rejetés</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Bénéficiaire</th>
                        <th scope="col" className="px-6 py-3">Type de soin</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Date demande</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">PAY-5432</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Consultation</td>
                        <td className="px-6 py-4">25,00 €</td>
                        <td className="px-6 py-4">10/05/2025</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Approuver</Button>
                            <Button variant="outline" size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">PAY-5433</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Médicaments</td>
                        <td className="px-6 py-4">43,50 €</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Approuver</Button>
                            <Button variant="outline" size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">PAY-5430</td>
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">Analyses</td>
                        <td className="px-6 py-4">72,00 €</td>
                        <td className="px-6 py-4">08/05/2025</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Approuver</Button>
                            <Button variant="outline" size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="scheduled" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Bénéficiaire</th>
                        <th scope="col" className="px-6 py-3">Type de soin</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Date paiement</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">PAY-5425</td>
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">Radiologie</td>
                        <td className="px-6 py-4">120,00 €</td>
                        <td className="px-6 py-4">15/05/2025</td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">Modifier</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="processed" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Bénéficiaire</th>
                        <th scope="col" className="px-6 py-3">Type de soin</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Date paiement</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">PAY-5410</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Radiologie</td>
                        <td className="px-6 py-4">96,00 €</td>
                        <td className="px-6 py-4">08/04/2025</td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">Voir reçu</Button>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">PAY-5398</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Médicaments</td>
                        <td className="px-6 py-4">36,48 €</td>
                        <td className="px-6 py-4">15/03/2025</td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">Voir reçu</Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="rejected" className="mt-4">
                <div className="text-center p-4 text-muted-foreground">
                  Paiements rejetés listés ici
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Batch payment */}
        <Card>
          <CardHeader>
            <CardTitle>Paiements par lot</CardTitle>
            <CardDescription>
              Traitement groupé des remboursements
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm">
                  <span className="font-medium">32 paiements en attente</span> pour un montant total de <span className="font-medium">8,345 €</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Exporter CSV
                  </Button>
                  <Button size="sm">
                    Paiement groupé
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
              
              <div className="border rounded-md p-4">
                <div className="text-sm font-medium mb-2">Filtrage des paiements</div>
                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Date de demande</label>
                    <div className="flex items-center space-x-2">
                      <Input type="date" className="text-xs" />
                      <span className="text-xs">à</span>
                      <Input type="date" className="text-xs" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Montant</label>
                    <div className="flex items-center space-x-2">
                      <Input type="number" placeholder="Min" className="text-xs" />
                      <span className="text-xs">à</span>
                      <Input type="number" placeholder="Max" className="text-xs" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground block mb-1">Type de soin</label>
                    <select className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                      <option value="">Tous</option>
                      <option value="consultation">Consultations</option>
                      <option value="medication">Médicaments</option>
                      <option value="analysis">Analyses</option>
                    </select>
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button size="sm">Appliquer filtres</Button>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium">Récapitulatif</div>
                <Button size="sm">Valider tous les paiements sélectionnés</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InsurancePayments;
