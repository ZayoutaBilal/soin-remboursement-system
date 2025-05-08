import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, PieChart, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";

const InsuranceDashboard = () => {
  return (
    <DashboardLayout role="insurance">
      <div className="space-y-6">
        {/* Welcome header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bonjour, Assurance Nationale</h2>
          <p className="text-muted-foreground">
            Gestion des remboursements et polices d'assurance
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demandes</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">
                +8 aujourd'hui
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assurés</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,245</div>
              <p className="text-xs text-muted-foreground">
                +15 ce mois-ci
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Montant remboursé</CardTitle>
              <PieChart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,560 €</div>
              <p className="text-xs text-muted-foreground">
                Ce mois
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approbation</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">78%</div>
              <p className="text-xs text-muted-foreground">
                Taux d'acceptation
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Claim search */}
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
                <Button type="submit">Rechercher</Button>
              </div>
              <Button variant="outline" className="w-full sm:w-auto">
                Recherche avancée
              </Button>
            </div>
          </CardContent>
        </Card>
        
        {/* Recent claims */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Demandes récentes</CardTitle>
              <CardDescription>
                Demandes de remboursement en attente de traitement
              </CardDescription>
            </div>
            <Button>Nouvelle demande</Button>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Numéro</th>
                    <th scope="col" className="px-6 py-3">Assuré</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Montant</th>
                    <th scope="col" className="px-6 py-3">Statut</th>
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
                    <td className="px-6 py-4"><Badge>En révision</Badge></td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm">Approuver</Button>
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
                    <td className="px-6 py-4"><Badge>En révision</Badge></td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm">Approuver</Button>
                        <Button variant="outline" size="sm">Détails</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">REF-12340</td>
                    <td className="px-6 py-4">Lucas Bernard</td>
                    <td className="px-6 py-4">Analyses</td>
                    <td className="px-6 py-4">08/05/2025</td>
                    <td className="px-6 py-4">72,00 €</td>
                    <td className="px-6 py-4"><Badge variant="secondary">Documentation manquante</Badge></td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">Demander documents</Button>
                        <Button variant="outline" size="sm">Détails</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
        
        {/* Statistics */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Types de remboursements</CardTitle>
              <CardDescription>
                Distribution par catégorie ce mois-ci
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                [Graphique circulaire - Consultations: 45%, Médicaments: 30%, Analyses: 15%, Autres: 10%]
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Evolution mensuelle</CardTitle>
              <CardDescription>
                Nombre de demandes et montants remboursés
              </CardDescription>
            </CardHeader>
            <CardContent className="h-80 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                [Graphique linéaire - Évolution sur les 6 derniers mois]
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default InsuranceDashboard;
