
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Microscope, ArrowRight, User, Calendar } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/layout/DashboardLayout";

const LaboratoryAnalyses = () => {
  return (
    <DashboardLayout role="laboratory">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Analyses</h2>
          <p className="text-muted-foreground">
            Gestion et suivi des analyses médicales
          </p>
        </div>

        {/* Search section */}
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
              <Button className="w-full sm:w-auto ml-auto">
                <Microscope className="h-4 w-4 mr-2" />
                Nouvelle analyse
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Analysis management */}
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
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Démarrer</Button>
                            <Button variant="outline" size="sm">Voir</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">LAB-5433</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Biochimie</td>
                        <td className="px-6 py-4">Dr. Jean Lefevre</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4"><Badge>Normal</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Démarrer</Button>
                            <Button variant="outline" size="sm">Voir</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">LAB-5434</td>
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">Microbiologie</td>
                        <td className="px-6 py-4">Dr. Marie Laurent</td>
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4"><Badge variant="secondary">Basse</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Démarrer</Button>
                            <Button variant="outline" size="sm">Voir</Button>
                          </div>
                        </td>
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
                        <th scope="col" className="px-6 py-3">Début</th>
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
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">LAB-5428</td>
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">Hématologie</td>
                        <td className="px-6 py-4">Claire Dubois</td>
                        <td className="px-6 py-4">08/05/2025</td>
                        <td className="px-6 py-4"><Badge>Phase 1/3</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Continuer</Button>
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
                        <th scope="col" className="px-6 py-3">Date finalisation</th>
                        <th scope="col" className="px-6 py-3">Statut</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">LAB-5425</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Microbiologie</td>
                        <td className="px-6 py-4">08/05/2025</td>
                        <td className="px-6 py-4"><Badge variant="outline">Validé</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Voir résultats</Button>
                            <Button size="sm">Envoyer</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">LAB-5420</td>
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">Hématologie</td>
                        <td className="px-6 py-4">07/05/2025</td>
                        <td className="px-6 py-4"><Badge variant="outline">Validé</Badge></td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">Voir résultats</Button>
                            <Button size="sm">Envoyer</Button>
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

        {/* Analysis details */}
        <Card>
          <CardHeader>
            <CardTitle>Détails de l'analyse - LAB-5432</CardTitle>
            <CardDescription>
              Hématologie complète
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-base font-medium mb-3">Informations générales</h3>
                <div className="space-y-2 border rounded-md p-4">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Référence:</div>
                    <div className="text-sm">LAB-5432</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Type:</div>
                    <div className="text-sm">Hématologie complète</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Priorité:</div>
                    <div className="text-sm"><Badge variant="destructive">Urgent</Badge></div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Date de demande:</div>
                    <div className="text-sm">10/05/2025</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Délai requis:</div>
                    <div className="text-sm">24 heures</div>
                  </div>
                </div>
                
                <h3 className="text-base font-medium mb-3 mt-5">Patient</h3>
                <div className="space-y-2 border rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      JD
                    </div>
                    <div>
                      <div className="font-medium">Jean Dupont</div>
                      <div className="text-xs text-muted-foreground">ID: PAT-12345</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Date de naissance:</div>
                    <div className="text-sm">12/05/1975</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Sexe:</div>
                    <div className="text-sm">Homme</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Assurance:</div>
                    <div className="text-sm">Assurance Nationale</div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-base font-medium mb-3">Demandeur</h3>
                <div className="space-y-2 border rounded-md p-4">
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-healthcare-doctor/20 flex items-center justify-center mr-3">
                      ML
                    </div>
                    <div>
                      <div className="font-medium">Dr. Marie Laurent</div>
                      <div className="text-xs text-muted-foreground">Médecin généraliste</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Institution:</div>
                    <div className="text-sm">Cabinet Médical Central</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Téléphone:</div>
                    <div className="text-sm">01 23 45 67 89</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Email:</div>
                    <div className="text-sm">m.laurent@cabmedcentral.fr</div>
                  </div>
                </div>
                
                <h3 className="text-base font-medium mb-3 mt-5">Tests demandés</h3>
                <div className="space-y-2 border rounded-md p-4">
                  <ul className="space-y-1">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Numération Formule Sanguine (NFS)</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Taux d'hémoglobine</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Plaquettes</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Leucocytes</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
                      <span className="text-sm">Groupe sanguin (confirmation)</span>
                    </li>
                  </ul>
                  
                  <div className="mt-4 pt-3 border-t border-dashed">
                    <div className="text-sm text-muted-foreground mb-1">Notes cliniques:</div>
                    <div className="text-sm">
                      Patient se plaint de fatigue persistante et vertiges occasionnels. 
                      Suspicion d'anémie à confirmer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline">
                <Calendar className="h-4 w-4 mr-2" />
                Programmer
              </Button>
              <Button variant="outline">
                <User className="h-4 w-4 mr-2" />
                Assigner
              </Button>
              <Button>
                <Microscope className="h-4 w-4 mr-2" />
                Démarrer l'analyse
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LaboratoryAnalyses;
