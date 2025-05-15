
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BadgeDollarSign, Calendar, FileText } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const DoctorReimbursements = () => {
  return (
    <DashboardLayout role="doctor">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Demandes de Remboursement</h2>
          <p className="text-muted-foreground">
            Gérez les demandes de remboursement pour vos patients
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid gap-4 md:grid-cols-3">
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total demandé</CardTitle>
              <BadgeDollarSign className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,250.00 €</div>
              <p className="text-xs text-muted-foreground">
                Ce mois-ci
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">En attente</CardTitle>
              <Calendar className="h-4 w-4 text-amber-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">450.00 €</div>
              <p className="text-xs text-muted-foreground">
                3 demandes en cours
              </p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux d'acceptation</CardTitle>
              <FileText className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">92%</div>
              <p className="text-xs text-muted-foreground">
                Des demandes approuvées
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Reimbursements table */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Historique des demandes</CardTitle>
            <CardDescription>
              Suivez l'état de vos demandes de remboursement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Date</th>
                    <th scope="col" className="px-6 py-3">Patient</th>
                    <th scope="col" className="px-6 py-3">Type</th>
                    <th scope="col" className="px-6 py-3">Montant</th>
                    <th scope="col" className="px-6 py-3">Statut</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-muted/20 dark:border-gray-700/30">
                    <td className="px-6 py-4">10/05/2025</td>
                    <td className="px-6 py-4">Jean Dupont</td>
                    <td className="px-6 py-4">Consultation</td>
                    <td className="px-6 py-4">75,00 €</td>
                    <td className="px-6 py-4"><Badge>Approuvé</Badge></td>
                    <td className="px-6 py-4"><Button variant="ghost" size="sm">Détails</Button></td>
                  </tr>
                  <tr className="bg-muted/20 border-b dark:bg-gray-800/40 dark:border-gray-700/30">
                    <td className="px-6 py-4">03/05/2025</td>
                    <td className="px-6 py-4">Sophie Martin</td>
                    <td className="px-6 py-4">Acte médical</td>
                    <td className="px-6 py-4">120,50 €</td>
                    <td className="px-6 py-4"><Badge variant="secondary">En cours</Badge></td>
                    <td className="px-6 py-4"><Button variant="ghost" size="sm">Détails</Button></td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-muted/20 dark:border-gray-700/30">
                    <td className="px-6 py-4">22/04/2025</td>
                    <td className="px-6 py-4">Lucas Bernard</td>
                    <td className="px-6 py-4">Consultation spécialiste</td>
                    <td className="px-6 py-4">95,00 €</td>
                    <td className="px-6 py-4"><Badge variant="outline">Payé</Badge></td>
                    <td className="px-6 py-4"><Button variant="ghost" size="sm">Détails</Button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* New reimbursement request */}
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle>Nouvelle demande de remboursement</CardTitle>
            <CardDescription>
              Créez une demande de remboursement pour un patient
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col space-y-4 items-center sm:flex-row sm:space-y-0 sm:space-x-4">
              <Button className="w-full sm:w-auto">
                <BadgeDollarSign className="mr-2 h-4 w-4" />
                Créer une demande
              </Button>
              <Button variant="outline" className="w-full sm:w-auto">
                <FileText className="mr-2 h-4 w-4" />
                Consulter un modèle
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorReimbursements;
