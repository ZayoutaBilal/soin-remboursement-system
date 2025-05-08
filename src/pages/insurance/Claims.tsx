
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, FileText, CheckCheck, X, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/layout/DashboardLayout";

const InsuranceClaims = () => {
  return (
    <DashboardLayout role="insurance">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Demandes de remboursement</h2>
          <p className="text-muted-foreground">
            Gestion des demandes de remboursement
          </p>
        </div>

        {/* Search section */}
        <Card>
          <CardHeader>
            <CardTitle>Rechercher une demande</CardTitle>
            <CardDescription>
              Accédez rapidement à une demande par numéro ou nom d'assuré
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="N° de demande ou nom de l'assuré" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                Recherche avancée
              </Button>
              <Button className="w-full sm:w-auto ml-auto">
                Nouvelle demande
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Claims management */}
        <Card>
          <CardHeader>
            <CardTitle>Gestion des demandes</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="pending">En attente</TabsTrigger>
                <TabsTrigger value="review">En révision</TabsTrigger>
                <TabsTrigger value="approved">Approuvées</TabsTrigger>
                <TabsTrigger value="rejected">Rejetées</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Numéro</th>
                        <th scope="col" className="px-6 py-3">Assuré</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">REF-12345</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Consultation</td>
                        <td className="px-6 py-4">10/05/2025</td>
                        <td className="px-6 py-4">25,00 €</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Examiner</Button>
                            <Button variant="outline" size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">REF-12346</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Médicaments</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4">43,50 €</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Examiner</Button>
                            <Button variant="outline" size="sm">Détails</Button>
                          </div>
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
                        <th scope="col" className="px-6 py-3">Numéro</th>
                        <th scope="col" className="px-6 py-3">Assuré</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">REF-12340</td>
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">Analyses</td>
                        <td className="px-6 py-4">08/05/2025</td>
                        <td className="px-6 py-4">72,00 €</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm" className="bg-green-500 hover:bg-green-600">
                              <CheckCheck className="h-4 w-4 mr-1" />
                              Approuver
                            </Button>
                            <Button variant="outline" size="sm" className="border-red-500 hover:bg-red-50 text-red-500">
                              <X className="h-4 w-4 mr-1" />
                              Rejeter
                            </Button>
                          </div>
                        </td>
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
                        <th scope="col" className="px-6 py-3">Numéro</th>
                        <th scope="col" className="px-6 py-3">Assuré</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Date approbation</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Détails</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">REF-12335</td>
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">Consultation spécialiste</td>
                        <td className="px-6 py-4">05/05/2025</td>
                        <td className="px-6 py-4">50,00 €</td>
                        <td className="px-6 py-4">
                          <Button variant="outline" size="sm">
                            <FileText className="h-4 w-4 mr-1" />
                            Détails
                          </Button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="rejected" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Numéro</th>
                        <th scope="col" className="px-6 py-3">Assuré</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Date rejet</th>
                        <th scope="col" className="px-6 py-3">Motif</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">REF-12320</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Traitement non couvert</td>
                        <td className="px-6 py-4">02/05/2025</td>
                        <td className="px-6 py-4">Hors contrat</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">Détails</Button>
                            <Button size="sm">Reconsidérer</Button>
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

        {/* Claim details */}
        <Card>
          <CardHeader>
            <CardTitle>Détail d'une demande - REF-12340</CardTitle>
            <CardDescription>
              Informations complètes sur la demande sélectionnée
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium text-muted-foreground">Assuré:</div>
                  <div>Lucas Bernard</div>
                  <div className="font-medium text-muted-foreground">N° Police:</div>
                  <div>POL-78945</div>
                  <div className="font-medium text-muted-foreground">Type de contrat:</div>
                  <div>Premium</div>
                  <div className="font-medium text-muted-foreground">Couverture:</div>
                  <div>80%</div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="font-medium text-muted-foreground">Type de demande:</div>
                  <div>Analyses médicales</div>
                  <div className="font-medium text-muted-foreground">Date des soins:</div>
                  <div>07/05/2025</div>
                  <div className="font-medium text-muted-foreground">Montant total:</div>
                  <div className="font-medium">72,00 €</div>
                  <div className="font-medium text-muted-foreground">Montant éligible:</div>
                  <div className="font-medium">57,60 € (80%)</div>
                </div>
              </div>
            </div>
            <div className="border-t pt-4 mt-4">
              <h4 className="font-medium mb-2">Documents fournis</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between border p-2 rounded">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Facture_Labo_07052025.pdf</span>
                  </div>
                  <Button variant="ghost" size="sm">Voir</Button>
                </div>
                <div className="flex items-center justify-between border p-2 rounded">
                  <div className="flex items-center">
                    <FileText className="h-4 w-4 mr-2" />
                    <span>Prescription_Dr_Laurent.pdf</span>
                  </div>
                  <Button variant="ghost" size="sm">Voir</Button>
                </div>
              </div>
            </div>
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline" size="sm" className="border-red-500 hover:bg-red-50 text-red-500">
                <X className="h-4 w-4 mr-1" />
                Rejeter
              </Button>
              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                <CheckCheck className="h-4 w-4 mr-1" />
                Approuver
              </Button>
              <Button variant="outline" size="sm">
                Demander documents
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InsuranceClaims;
