
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Calendar } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const PatientReimbursements = () => {
  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Mes Remboursements</h2>
          <p className="text-muted-foreground">
            Suivi des demandes de remboursement auprès de votre assurance
          </p>
        </div>

        {/* Summary card */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total remboursé</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">432,50 €</div>
              <p className="text-xs text-muted-foreground">
                Cette année
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En attente</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">43,50 €</div>
              <p className="text-xs text-muted-foreground">
                2 demandes en cours
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux moyen</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">75%</div>
              <p className="text-xs text-muted-foreground">
                De prise en charge
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reimbursements table */}
        <Card>
          <CardHeader>
            <CardTitle>Historique des remboursements</CardTitle>
            <CardDescription>
              Toutes vos demandes de remboursement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Montant</th>
                    <th scope="col" className="px-6 py-3">Remboursé</th>
                    <th scope="col" className="px-6 py-3">Statut</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">10/05/2025</td>
                    <td className="px-6 py-4">Consultation</td>
                    <td className="px-6 py-4">25,00 €</td>
                    <td className="px-6 py-4">18,75 €</td>
                    <td className="px-6 py-4"><Badge>Approuvé</Badge></td>
                    <td className="px-6 py-4"><Button variant="ghost" size="sm">Détails</Button></td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">03/05/2025</td>
                    <td className="px-6 py-4">Médicaments</td>
                    <td className="px-6 py-4">43,50 €</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4"><Badge variant="secondary">En cours</Badge></td>
                    <td className="px-6 py-4"><Button variant="ghost" size="sm">Détails</Button></td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">22/04/2025</td>
                    <td className="px-6 py-4">Analyses</td>
                    <td className="px-6 py-4">72,00 €</td>
                    <td className="px-6 py-4">54,00 €</td>
                    <td className="px-6 py-4"><Badge variant="outline">Payé</Badge></td>
                    <td className="px-6 py-4"><Button variant="ghost" size="sm">Détails</Button></td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4">15/04/2025</td>
                    <td className="px-6 py-4">Radiologie</td>
                    <td className="px-6 py-4">120,00 €</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4"><Badge variant="secondary">En cours</Badge></td>
                    <td className="px-6 py-4"><Button variant="ghost" size="sm">Détails</Button></td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4">05/04/2025</td>
                    <td className="px-6 py-4">Consultation spécialiste</td>
                    <td className="px-6 py-4">50,00 €</td>
                    <td className="px-6 py-4">35,00 €</td>
                    <td className="px-6 py-4"><Badge variant="outline">Payé</Badge></td>
                    <td className="px-6 py-4"><Button variant="ghost" size="sm">Détails</Button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* New reimbursement request */}
        <Card>
          <CardHeader>
            <CardTitle>Nouvelle demande de remboursement</CardTitle>
            <CardDescription>
              Soumettez une nouvelle demande de remboursement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4 items-center sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button className="w-full sm:w-auto">
                <FileText className="mr-2 h-4 w-4" />
                Formulaire en ligne
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <Calendar className="mr-2 h-4 w-4" />
                Scanner facture
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PatientReimbursements;
