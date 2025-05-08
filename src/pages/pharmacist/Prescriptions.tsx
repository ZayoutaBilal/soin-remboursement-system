
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, ScrollText, User, Check } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const PharmacistPrescriptions = () => {
  return (
    <DashboardLayout role="pharmacist">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Prescriptions</h2>
          <p className="text-muted-foreground">
            Gestion et suivi des ordonnances médicales
          </p>
        </div>

        {/* Search section */}
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

        {/* Pending prescriptions */}
        <Card>
          <CardHeader>
            <CardTitle>Prescriptions à traiter</CardTitle>
            <CardDescription>
              Ordonnances en attente de délivrance
            </CardDescription>
          </CardHeader>
          <CardContent>
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
          </CardContent>
        </Card>

        {/* Fulfilled prescriptions */}
        <Card>
          <CardHeader>
            <CardTitle>Prescriptions délivrées</CardTitle>
            <CardDescription>
              Historique des ordonnances traitées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Patient</th>
                    <th scope="col" className="px-6 py-3">Médecin</th>
                    <th scope="col" className="px-6 py-3">Médicaments</th>
                    <th scope="col" className="px-6 py-3">Pharmacien</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">08/05/2025</td>
                    <td className="px-6 py-4">Lucas Bernard</td>
                    <td className="px-6 py-4">Dr. Marie Laurent</td>
                    <td className="px-6 py-4">Vitamine D 1000 UI (x30)</td>
                    <td className="px-6 py-4">Pierre Moreau</td>
                    <td className="px-6 py-4">
                      <Button variant="outline" size="sm">
                        <ScrollText className="h-4 w-4 mr-2" />
                        Détails
                      </Button>
                    </td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">07/05/2025</td>
                    <td className="px-6 py-4">Emma Petit</td>
                    <td className="px-6 py-4">Dr. Jean Lefevre</td>
                    <td className="px-6 py-4">Amlodipine 5mg (x30)</td>
                    <td className="px-6 py-4">Pierre Moreau</td>
                    <td className="px-6 py-4">
                      <Button variant="outline" size="sm">
                        <ScrollText className="h-4 w-4 mr-2" />
                        Détails
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="flex justify-center mt-4">
              <Button variant="outline">Voir tout l'historique</Button>
            </div>
          </CardContent>
        </Card>

        {/* Insurance claims */}
        <Card>
          <CardHeader>
            <CardTitle>Demandes de remboursement</CardTitle>
            <CardDescription>
              Demandes de remboursement à traiter pour les assurances
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Patient</th>
                    <th scope="col" className="px-6 py-3">Assurance</th>
                    <th scope="col" className="px-6 py-3">Montant</th>
                    <th scope="col" className="px-6 py-3">Statut</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">09/05/2025</td>
                    <td className="px-6 py-4">Sophie Martin</td>
                    <td className="px-6 py-4">Assurance Nationale</td>
                    <td className="px-6 py-4">43,50 €</td>
                    <td className="px-6 py-4"><Badge variant="secondary">À envoyer</Badge></td>
                    <td className="px-6 py-4">
                      <Button size="sm">
                        <Check className="h-4 w-4 mr-2" />
                        Soumettre
                      </Button>
                    </td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">08/05/2025</td>
                    <td className="px-6 py-4">Lucas Bernard</td>
                    <td className="px-6 py-4">MutuellePlus</td>
                    <td className="px-6 py-4">12,30 €</td>
                    <td className="px-6 py-4"><Badge>Envoyé</Badge></td>
                    <td className="px-6 py-4">
                      <Button variant="outline" size="sm">Voir détails</Button>
                    </td>
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

export default PharmacistPrescriptions;
