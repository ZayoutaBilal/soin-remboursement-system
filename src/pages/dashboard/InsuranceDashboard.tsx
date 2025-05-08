
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Users, PieChart, Activity, Search as SearchIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const InsuranceDashboard = () => {
  const isMobile = useIsMobile();

  return (
    <DashboardLayout role="insurance">
      <div className="space-y-4 md:space-y-6">
        {/* Welcome header */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Bonjour, Assurance Nationale</h2>
          <p className="text-muted-foreground">
            Gestion des remboursements et polices d'assurance
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demandes</CardTitle>
              <FileText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">
                +8 aujourd'hui
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Assurés</CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,245</div>
              <p className="text-xs text-muted-foreground">
                +15 ce mois-ci
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Montant remboursé</CardTitle>
              <PieChart className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24,560 €</div>
              <p className="text-xs text-muted-foreground">
                Ce mois
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Approbation</CardTitle>
              <Activity className="h-4 w-4 text-amber-500" />
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
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="flex items-center">
              <SearchIcon className="mr-2 h-5 w-5 text-primary" />
              Rechercher une demande
            </CardTitle>
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
        <Card className="shadow-md">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-primary" />
                Demandes récentes
              </CardTitle>
              <CardDescription>
                Demandes de remboursement en attente de traitement
              </CardDescription>
            </div>
            <Button>
              <FileText className="mr-2 h-4 w-4" />
              Nouvelle demande
            </Button>
          </CardHeader>
          <CardContent className="px-0 sm:px-6">
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-2 sm:px-6 py-3">Numéro</th>
                    <th scope="col" className="px-2 sm:px-6 py-3">Assuré</th>
                    <th scope="col" className="px-2 sm:px-6 py-3 hidden md:table-cell">Type</th>
                    <th scope="col" className="px-2 sm:px-6 py-3 hidden md:table-cell">Date</th>
                    <th scope="col" className="px-2 sm:px-6 py-3 hidden lg:table-cell">Montant</th>
                    <th scope="col" className="px-2 sm:px-6 py-3">Statut</th>
                    <th scope="col" className="px-2 sm:px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white dark:bg-gray-800 border-b">
                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm">REF-12345</td>
                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm">Jean Dupont</td>
                    <td className="px-2 sm:px-6 py-4 hidden md:table-cell">Consultation</td>
                    <td className="px-2 sm:px-6 py-4 hidden md:table-cell">10/05/2025</td>
                    <td className="px-2 sm:px-6 py-4 hidden lg:table-cell">25,00 €</td>
                    <td className="px-2 sm:px-6 py-4"><Badge className="shadow-sm">En révision</Badge></td>
                    <td className="px-2 sm:px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm">Approuver</Button>
                        <Button variant="outline" size="sm" className="hidden sm:inline-flex">Détails</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-muted/20 dark:bg-gray-700 border-b">
                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm">REF-12346</td>
                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm">Sophie Martin</td>
                    <td className="px-2 sm:px-6 py-4 hidden md:table-cell">Médicaments</td>
                    <td className="px-2 sm:px-6 py-4 hidden md:table-cell">09/05/2025</td>
                    <td className="px-2 sm:px-6 py-4 hidden lg:table-cell">43,50 €</td>
                    <td className="px-2 sm:px-6 py-4"><Badge className="shadow-sm">En révision</Badge></td>
                    <td className="px-2 sm:px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm">Approuver</Button>
                        <Button variant="outline" size="sm" className="hidden sm:inline-flex">Détails</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white dark:bg-gray-800 border-b">
                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm">REF-12340</td>
                    <td className="px-2 sm:px-6 py-4 text-xs sm:text-sm">Lucas Bernard</td>
                    <td className="px-2 sm:px-6 py-4 hidden md:table-cell">Analyses</td>
                    <td className="px-2 sm:px-6 py-4 hidden md:table-cell">08/05/2025</td>
                    <td className="px-2 sm:px-6 py-4 hidden lg:table-cell">72,00 €</td>
                    <td className="px-2 sm:px-6 py-4"><Badge variant="secondary" className="shadow-sm">Documentation manquante</Badge></td>
                    <td className="px-2 sm:px-6 py-4">
                      <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
                        <Button variant="outline" size="sm" className="text-xs">Docs</Button>
                        <Button variant="outline" size="sm" className="hidden sm:inline-flex">Détails</Button>
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
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <PieChart className="mr-2 h-5 w-5 text-primary" />
                Types de remboursements
              </CardTitle>
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
          
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Activity className="mr-2 h-5 w-5 text-primary" />
                Evolution mensuelle
              </CardTitle>
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
