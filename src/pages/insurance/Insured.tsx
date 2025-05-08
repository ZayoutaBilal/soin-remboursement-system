
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, User, FileText, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/layout/DashboardLayout";

const InsuranceInsured = () => {
  return (
    <DashboardLayout role="insurance">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Assurés</h2>
          <p className="text-muted-foreground">
            Gestion des clients et des contrats d'assurance
          </p>
        </div>

        {/* Search section */}
        <Card>
          <CardHeader>
            <CardTitle>Rechercher un assuré</CardTitle>
            <CardDescription>
              Accédez rapidement à un assuré par nom ou numéro de police
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Nom ou numéro de police" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                Filtres avancés
              </Button>
              <Button className="w-full sm:w-auto ml-auto">
                <User className="h-4 w-4 mr-2" />
                Nouvel assuré
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Insured management */}
        <Card>
          <CardHeader>
            <CardTitle>Liste des assurés</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="active">Actifs</TabsTrigger>
                <TabsTrigger value="pending">En attente</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Nom</th>
                        <th scope="col" className="px-6 py-3">N° Police</th>
                        <th scope="col" className="px-6 py-3">Type de contrat</th>
                        <th scope="col" className="px-6 py-3">Date d'effet</th>
                        <th scope="col" className="px-6 py-3">Statut</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">POL-12345</td>
                        <td className="px-6 py-4">Premium</td>
                        <td className="px-6 py-4">01/01/2025</td>
                        <td className="px-6 py-4"><Badge>Actif</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Voir dossier</Button>
                            <Button variant="outline" size="sm">Modifier</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">POL-12346</td>
                        <td className="px-6 py-4">Standard</td>
                        <td className="px-6 py-4">15/02/2025</td>
                        <td className="px-6 py-4"><Badge>Actif</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Voir dossier</Button>
                            <Button variant="outline" size="sm">Modifier</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">POL-78945</td>
                        <td className="px-6 py-4">Premium</td>
                        <td className="px-6 py-4">10/03/2025</td>
                        <td className="px-6 py-4"><Badge>Actif</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Voir dossier</Button>
                            <Button variant="outline" size="sm">Modifier</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">POL-45632</td>
                        <td className="px-6 py-4">Économique</td>
                        <td className="px-6 py-4">05/04/2025</td>
                        <td className="px-6 py-4"><Badge>Actif</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Voir dossier</Button>
                            <Button variant="outline" size="sm">Modifier</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">Thomas Dubois</td>
                        <td className="px-6 py-4">POL-89562</td>
                        <td className="px-6 py-4">Standard</td>
                        <td className="px-6 py-4">-</td>
                        <td className="px-6 py-4"><Badge variant="secondary">En attente</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Traiter</Button>
                            <Button variant="outline" size="sm">Modifier</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="active" className="mt-4">
                <div className="text-center p-4 text-muted-foreground">
                  Assurés avec contrats actifs listés ici
                </div>
              </TabsContent>
              
              <TabsContent value="pending" className="mt-4">
                <div className="text-center p-4 text-muted-foreground">
                  Assurés en attente d'activation listés ici
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Insured details */}
        <Card>
          <CardHeader>
            <CardTitle>Détails de l'assuré - Jean Dupont</CardTitle>
            <CardDescription>
              Informations complètes et historique
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Informations personnelles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Nom:</div>
                      <div className="text-sm">Jean Dupont</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Date de naissance:</div>
                      <div className="text-sm">12/05/1975</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Adresse:</div>
                      <div className="text-sm">15 Rue des Lilas, 75001 Paris</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Téléphone:</div>
                      <div className="text-sm">01 23 45 67 89</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Email:</div>
                      <div className="text-sm">jean.dupont@email.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Détails du contrat</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">N° Police:</div>
                      <div className="text-sm">POL-12345</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Type:</div>
                      <div className="text-sm">Premium</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Date d'effet:</div>
                      <div className="text-sm">01/01/2025</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Date d'expiration:</div>
                      <div className="text-sm">31/12/2025</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Taux de couverture:</div>
                      <div className="text-sm font-medium">80%</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Récapitulatif</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Statut:</div>
                      <div className="text-sm"><Badge>Actif</Badge></div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Total remboursé:</div>
                      <div className="text-sm">345,60 € (cette année)</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Demandes en cours:</div>
                      <div className="text-sm">1</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Date dernier remboursement:</div>
                      <div className="text-sm">08/04/2025</div>
                    </div>
                    <div className="grid grid-cols-2 gap-1">
                      <div className="text-sm text-muted-foreground">Médecin traitant:</div>
                      <div className="text-sm">Dr. Marie Laurent</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-medium mb-4">Historique des demandes</h3>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                    <tr>
                      <th scope="col" className="px-6 py-3">Référence</th>
                      <th scope="col" className="px-6 py-3">Date</th>
                      <th scope="col" className="px-6 py-3">Type</th>
                      <th scope="col" className="px-6 py-3">Montant</th>
                      <th scope="col" className="px-6 py-3">Remboursé</th>
                      <th scope="col" className="px-6 py-3">Statut</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">REF-12345</td>
                      <td className="px-6 py-4">10/05/2025</td>
                      <td className="px-6 py-4">Consultation</td>
                      <td className="px-6 py-4">25,00 €</td>
                      <td className="px-6 py-4">-</td>
                      <td className="px-6 py-4"><Badge>En révision</Badge></td>
                    </tr>
                    <tr className="bg-muted/20 border-b">
                      <td className="px-6 py-4">REF-10542</td>
                      <td className="px-6 py-4">08/04/2025</td>
                      <td className="px-6 py-4">Radiologie</td>
                      <td className="px-6 py-4">120,00 €</td>
                      <td className="px-6 py-4">96,00 €</td>
                      <td className="px-6 py-4"><Badge variant="outline">Payé</Badge></td>
                    </tr>
                    <tr className="bg-white border-b">
                      <td className="px-6 py-4">REF-9876</td>
                      <td className="px-6 py-4">15/03/2025</td>
                      <td className="px-6 py-4">Médicaments</td>
                      <td className="px-6 py-4">45,60 €</td>
                      <td className="px-6 py-4">36,48 €</td>
                      <td className="px-6 py-4"><Badge variant="outline">Payé</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <Button>
                <FileText className="h-4 w-4 mr-2" />
                Générer attestation
              </Button>
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Historique complet
              </Button>
              <Button variant="secondary">
                Modifier contrat
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default InsuranceInsured;
