
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, FileText, Mail, Download, ArrowRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/layout/DashboardLayout";

const LaboratoryResults = () => {
  return (
    <DashboardLayout role="laboratory">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Résultats</h2>
          <p className="text-muted-foreground">
            Gestion des résultats d'analyses
          </p>
        </div>

        {/* Search section */}
        <Card>
          <CardHeader>
            <CardTitle>Rechercher un résultat</CardTitle>
            <CardDescription>
              Retrouvez rapidement un résultat d'analyse
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
                Filtres avancés
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Results management */}
        <Card>
          <CardHeader>
            <CardTitle>Gestion des résultats</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="pending">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="pending">À valider</TabsTrigger>
                <TabsTrigger value="validated">Validés</TabsTrigger>
                <TabsTrigger value="delivered">Transmis</TabsTrigger>
                <TabsTrigger value="archived">Archivés</TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Date finalisation</th>
                        <th scope="col" className="px-6 py-3">Technicien</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">LAB-5425</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Microbiologie</td>
                        <td className="px-6 py-4">08/05/2025</td>
                        <td className="px-6 py-4">Thomas Petit</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Valider</Button>
                            <Button variant="outline" size="sm">Voir</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">LAB-5420</td>
                        <td className="px-6 py-4">Emma Petit</td>
                        <td className="px-6 py-4">Hématologie</td>
                        <td className="px-6 py-4">07/05/2025</td>
                        <td className="px-6 py-4">Claire Dubois</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">Valider</Button>
                            <Button variant="outline" size="sm">Voir</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="validated" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Validation</th>
                        <th scope="col" className="px-6 py-3">Validateur</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">LAB-5410</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Biochimie</td>
                        <td className="px-6 py-4">06/05/2025</td>
                        <td className="px-6 py-4">Dr. Michel Roux</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button size="sm">
                              <Mail className="h-4 w-4 mr-1" />
                              Transmettre
                            </Button>
                            <Button variant="outline" size="sm">Voir</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="delivered" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Référence</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Date envoi</th>
                        <th scope="col" className="px-6 py-3">Destinataire</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">LAB-5405</td>
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">Immunologie</td>
                        <td className="px-6 py-4">05/05/2025</td>
                        <td className="px-6 py-4">Dr. Jean Lefevre</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <Mail className="h-4 w-4 mr-1" />
                              Renvoyer
                            </Button>
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-1" />
                              Télécharger
                            </Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="archived" className="mt-4">
                <div className="text-center p-4 text-muted-foreground">
                  Résultats archivés listés ici
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Result details */}
        <Card>
          <CardHeader>
            <CardTitle>Résultat - LAB-5425 (Microbiologie)</CardTitle>
            <CardDescription>
              Analyse microbiologique, patient: Jean Dupont
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-base font-medium mb-2">Informations générales</h3>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Référence:</div>
                    <div className="text-sm">LAB-5425</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Patient:</div>
                    <div className="text-sm">Jean Dupont (12/05/1975)</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Demandeur:</div>
                    <div className="text-sm">Dr. Marie Laurent</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Date prélèvement:</div>
                    <div className="text-sm">07/05/2025</div>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-sm text-muted-foreground">Date analyse:</div>
                    <div className="text-sm">08/05/2025</div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="text-base font-medium mb-2">Méthodologie</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Analyse microbiologique par culture sur milieux spécifiques et identification par spectrométrie de masse MALDI-TOF.
                  </p>
                  <div className="text-sm">
                    <div className="font-medium mb-1">Échantillon analysé:</div>
                    <p>Prélèvement de gorge</p>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="text-base font-medium mb-2">Commentaires du technicien</h3>
                  <div className="text-sm">
                    <p>Échantillon de bonne qualité. Cultures réalisées selon protocole standard.</p>
                    <div className="mt-2 pt-2 border-t">
                      <div className="text-xs text-muted-foreground">Thomas Petit, 08/05/2025</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border rounded-md p-4">
                  <h3 className="text-base font-medium mb-2">Résultats</h3>
                  <div className="space-y-3">
                    <div>
                      <div className="font-medium text-sm">Examen direct:</div>
                      <p className="text-sm">Présence modérée de leucocytes et de cellules épithéliales.</p>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Culture:</div>
                      <p className="text-sm">Streptococcus pyogenes (groupe A): <Badge>Positif</Badge></p>
                      <p className="text-sm">Flore commensale: présente en quantité modérée.</p>
                    </div>
                    <div>
                      <div className="font-medium text-sm">Antibiogramme:</div>
                      <div className="mt-1">
                        <table className="w-full text-xs">
                          <thead className="bg-muted/30">
                            <tr>
                              <th className="px-2 py-1 text-left">Antibiotique</th>
                              <th className="px-2 py-1 text-left">Sensibilité</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-2 py-1 border-b">Pénicilline</td>
                              <td className="px-2 py-1 border-b text-green-600">Sensible</td>
                            </tr>
                            <tr>
                              <td className="px-2 py-1 border-b">Amoxicilline</td>
                              <td className="px-2 py-1 border-b text-green-600">Sensible</td>
                            </tr>
                            <tr>
                              <td className="px-2 py-1 border-b">Érythromycine</td>
                              <td className="px-2 py-1 border-b text-green-600">Sensible</td>
                            </tr>
                            <tr>
                              <td className="px-2 py-1">Clindamycine</td>
                              <td className="px-2 py-1 text-green-600">Sensible</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="text-base font-medium mb-2">Interprétation</h3>
                  <div className="text-sm">
                    <p className="mb-2">Identification de <span className="font-medium">Streptococcus pyogenes</span> (streptocoque β-hémolytique du groupe A), agent pathogène responsable d'angine, susceptible aux antibiotiques testés.</p>
                    <p>Un traitement par amoxicilline pendant 6 jours est recommandé selon les recommandations actuelles.</p>
                  </div>
                </div>

                <div className="border rounded-md p-4">
                  <h3 className="text-base font-medium mb-2">Conclusion</h3>
                  <div className="text-sm font-medium">
                    Infection à Streptococcus pyogenes confirmée.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2 mt-6">
              <Button variant="outline">
                <Download className="h-4 w-4 mr-2" />
                Télécharger PDF
              </Button>
              <Button variant="outline">
                <Mail className="h-4 w-4 mr-2" />
                Envoyer par email
              </Button>
              <Button>
                Valider le résultat
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default LaboratoryResults;
