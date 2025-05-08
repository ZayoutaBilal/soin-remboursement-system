
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Search, User, Calendar, Clock } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const DoctorPatients = () => {
  return (
    <DashboardLayout role="doctor">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Mes Patients</h2>
          <p className="text-muted-foreground">
            Gestion et suivi des patients
          </p>
        </div>

        {/* Search and filter section */}
        <Card>
          <CardHeader>
            <CardTitle>Rechercher un patient</CardTitle>
            <CardDescription>
              Retrouvez rapidement un patient par nom ou numéro de dossier
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex w-full sm:max-w-sm items-center space-x-2">
                <Input type="text" placeholder="Nom, prénom ou ID du patient" />
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
                Nouveau patient
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Patient list */}
        <Card>
          <CardHeader>
            <CardTitle>Liste des patients</CardTitle>
            <CardDescription>
              Vue d'ensemble de tous vos patients
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                  <tr>
                    <th scope="col" className="px-6 py-3">Nom</th>
                    <th scope="col" className="px-6 py-3">Date de naissance</th>
                    <th scope="col" className="px-6 py-3">Dernière visite</th>
                    <th scope="col" className="px-6 py-3">Prochain RDV</th>
                    <th scope="col" className="px-6 py-3">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">Jean Dupont</td>
                    <td className="px-6 py-4">12/05/1975</td>
                    <td className="px-6 py-4">10/05/2025</td>
                    <td className="px-6 py-4">15/05/2025</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm">Voir dossier</Button>
                        <Button variant="outline" size="sm">RDV</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4 font-medium">Sophie Martin</td>
                    <td className="px-6 py-4">23/09/1982</td>
                    <td className="px-6 py-4">03/05/2025</td>
                    <td className="px-6 py-4">22/05/2025</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm">Voir dossier</Button>
                        <Button variant="outline" size="sm">RDV</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-white border-b">
                    <td className="px-6 py-4 font-medium">Lucas Bernard</td>
                    <td className="px-6 py-4">08/11/1990</td>
                    <td className="px-6 py-4">22/04/2025</td>
                    <td className="px-6 py-4">-</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm">Voir dossier</Button>
                        <Button variant="outline" size="sm">RDV</Button>
                      </div>
                    </td>
                  </tr>
                  <tr className="bg-muted/20 border-b">
                    <td className="px-6 py-4 font-medium">Emma Petit</td>
                    <td className="px-6 py-4">14/02/1965</td>
                    <td className="px-6 py-4">15/04/2025</td>
                    <td className="px-6 py-4">04/06/2025</td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <Button size="sm">Voir dossier</Button>
                        <Button variant="outline" size="sm">RDV</Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Recent patients */}
        <Card>
          <CardHeader>
            <CardTitle>Patients récents</CardTitle>
            <CardDescription>
              Patients consultés récemment
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {["Jean Dupont", "Sophie Martin", "Lucas Bernard"].map((name, i) => (
                <div key={i} className="flex items-center justify-between p-3 border rounded-md">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                      {name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium">{name}</div>
                      <div className="text-xs text-muted-foreground flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {i === 0 ? "Consultation aujourd'hui" : i === 1 ? "Il y a 3 jours" : "Il y a 1 semaine"}
                      </div>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Voir dossier</Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorPatients;
