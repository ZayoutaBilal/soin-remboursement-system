
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, Pill, ArrowRight, ArrowLeft, Clock, Plus } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/layout/DashboardLayout";

const PharmacistMedications = () => {
  return (
    <DashboardLayout role="pharmacist">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Médicaments</h2>
          <p className="text-muted-foreground">
            Gestion du stock et des commandes
          </p>
        </div>

        {/* Search and add section */}
        <Card>
          <CardHeader>
            <CardTitle>Rechercher un médicament</CardTitle>
            <CardDescription>
              Trouvez un médicament par nom ou code
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Nom ou code du médicament" />
                <Button type="submit">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              <Button className="w-full sm:w-auto ml-auto">
                <Plus className="h-4 w-4 mr-2" />
                Ajouter médicament
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Low stock alerts */}
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
                    <th scope="col" className="px-6 py-3">Statut</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Amoxicilline</td>
                    <td className="px-6 py-4">500mg comprimés</td>
                    <td className="px-6 py-4">15</td>
                    <td className="px-6 py-4">20</td>
                    <td className="px-6 py-4"><Badge variant="destructive">Critique</Badge></td>
                    <td className="px-6 py-4"><Button size="sm">Commander</Button></td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">Insuline Lantus</td>
                    <td className="px-6 py-4">Flacon 100UI/ml</td>
                    <td className="px-6 py-4">3</td>
                    <td className="px-6 py-4">5</td>
                    <td className="px-6 py-4"><Badge variant="destructive">Critique</Badge></td>
                    <td className="px-6 py-4"><Button size="sm">Commander</Button></td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">Paracétamol</td>
                    <td className="px-6 py-4">1000mg comprimés</td>
                    <td className="px-6 py-4">25</td>
                    <td className="px-6 py-4">30</td>
                    <td className="px-6 py-4"><Badge variant="secondary">Faible</Badge></td>
                    <td className="px-6 py-4"><Button size="sm">Commander</Button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Inventory overview */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Inventaire</CardTitle>
              <CardDescription>
                Vue d'ensemble du stock disponible
              </CardDescription>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Précédent
              </Button>
              <Button variant="outline" size="sm">
                Suivant
                <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { name: "Amoxicilline", format: "500mg comprimés", stock: 15, max: 100, supplier: "MediPharma" },
                { name: "Paracétamol", format: "1000mg comprimés", stock: 25, max: 100, supplier: "GeneriMed" },
                { name: "Ibuprofène", format: "400mg comprimés", stock: 42, max: 100, supplier: "GeneriMed" },
                { name: "Insuline Lantus", format: "Flacon 100UI/ml", stock: 3, max: 20, supplier: "InsulinTech" },
                { name: "Vitamine D", format: "1000 UI capsules", stock: 87, max: 100, supplier: "VitaPlus" },
                { name: "Aspirine", format: "100mg comprimés", stock: 56, max: 100, supplier: "GeneriMed" }
              ].map((med, i) => (
                <Card key={i} className="border shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">{med.name}</div>
                        <div className="text-sm text-muted-foreground">{med.format}</div>
                      </div>
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Pill className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Stock actuel</span>
                        <span>{med.stock}/{med.max}</span>
                      </div>
                      <Progress value={(med.stock / med.max) * 100} />
                    </div>
                    <div className="mt-2 flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      Fournisseur: {med.supplier}
                    </div>
                    <Button variant="outline" size="sm" className="w-full mt-3">
                      Détails du stock
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Order management */}
        <Card>
          <CardHeader>
            <CardTitle>Commandes en cours</CardTitle>
            <CardDescription>
              Suivi des livraisons prévues
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">N° commande</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Fournisseur</th>
                    <th scope="col" className="px-6 py-3">Montant</th>
                    <th scope="col" className="px-6 py-3">Statut</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">CMD-4532</td>
                    <td className="px-6 py-4">08/05/2025</td>
                    <td className="px-6 py-4">MediPharma</td>
                    <td className="px-6 py-4">345,80 €</td>
                    <td className="px-6 py-4"><Badge>En transit</Badge></td>
                    <td className="px-6 py-4">
                      <Button variant="outline" size="sm">Voir détails</Button>
                    </td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">CMD-4530</td>
                    <td className="px-6 py-4">07/05/2025</td>
                    <td className="px-6 py-4">InsulinTech</td>
                    <td className="px-6 py-4">520,00 €</td>
                    <td className="px-6 py-4"><Badge variant="secondary">En préparation</Badge></td>
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

export default PharmacistMedications;
