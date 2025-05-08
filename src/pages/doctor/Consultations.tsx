
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, Clock, User, FileText } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { useState } from "react";

const DoctorConsultations = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <DashboardLayout role="doctor">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Consultations</h2>
          <p className="text-muted-foreground">
            Gestion de vos consultations et rendez-vous
          </p>
        </div>

        {/* Calendar and schedule view */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="md:col-span-1">
            <CardHeader>
              <CardTitle>Calendrier</CardTitle>
              <CardDescription>
                Sélectionnez une date pour voir les rendez-vous
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="border rounded-md p-3"
              />
            </CardContent>
          </Card>
          
          <Card className="md:col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Planning du jour</CardTitle>
              <CardDescription>
                {date?.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-muted/30 p-2 rounded-md">
                  <div className="font-medium">Matin</div>
                  <div className="space-y-2 mt-1">
                    {[
                      { time: "09:00", name: "Jean Dupont", reason: "Consultation de suivi", status: "Terminé" },
                      { time: "10:00", name: "Sophie Martin", reason: "Première consultation", status: "Terminé" },
                      { time: "11:30", name: "Lucas Bernard", reason: "Renouvellement ordonnance", status: "En cours" }
                    ].map((appt, i) => (
                      <div key={i} className="flex items-center justify-between bg-white p-3 rounded-md border">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            {appt.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">{appt.name}</div>
                            <div className="text-sm text-muted-foreground">{appt.reason}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge 
                            variant={appt.status === "Terminé" ? "outline" : appt.status === "En cours" ? "default" : "secondary"}
                            className="mr-3"
                          >
                            {appt.status}
                          </Badge>
                          <div className="text-sm flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {appt.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-muted/30 p-2 rounded-md">
                  <div className="font-medium">Après-midi</div>
                  <div className="space-y-2 mt-1">
                    {[
                      { time: "14:30", name: "Sophie Martin", reason: "Première consultation", status: "En attente" },
                      { time: "15:15", name: "Lucas Bernard", reason: "Renouvellement ordonnance", status: "En attente" },
                      { time: "16:00", name: "Emma Petit", reason: "Contrôle annuel", status: "En attente" }
                    ].map((appt, i) => (
                      <div key={i} className="flex items-center justify-between bg-white p-3 rounded-md border">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                            {appt.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">{appt.name}</div>
                            <div className="text-sm text-muted-foreground">{appt.reason}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Badge 
                            variant={appt.status === "Terminé" ? "outline" : appt.status === "En cours" ? "default" : "secondary"}
                            className="mr-3"
                          >
                            {appt.status}
                          </Badge>
                          <div className="text-sm flex items-center">
                            <Clock className="h-3 w-3 mr-1" />
                            {appt.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex justify-end space-x-2">
                  <Button variant="outline">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    Vue semaine
                  </Button>
                  <Button>
                    <User className="h-4 w-4 mr-2" />
                    Nouveau RDV
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Consultation history */}
        <Card>
          <CardHeader>
            <CardTitle>Historique des consultations</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="all">Toutes</TabsTrigger>
                <TabsTrigger value="follow">Suivi</TabsTrigger>
                <TabsTrigger value="first">Premières consultations</TabsTrigger>
                <TabsTrigger value="emergency">Urgences</TabsTrigger>
              </TabsList>
              <TabsContent value="all" className="mt-4">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                      <tr>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Observations</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b">
                        <td className="px-6 py-4">10/05/2025</td>
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Suivi</td>
                        <td className="px-6 py-4">Examen normal, pas de symptômes</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-1" />
                              Notes
                            </Button>
                            <Button size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                      <tr className="bg-muted/20 border-b">
                        <td className="px-6 py-4">09/05/2025</td>
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Première consultation</td>
                        <td className="px-6 py-4">Tension artérielle élevée</td>
                        <td className="px-6 py-4">
                          <div className="flex space-x-2">
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-1" />
                              Notes
                            </Button>
                            <Button size="sm">Détails</Button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              <TabsContent value="follow" className="mt-4">
                <div className="text-center p-4 text-muted-foreground">
                  Consultations de suivi listées ici
                </div>
              </TabsContent>
              <TabsContent value="first" className="mt-4">
                <div className="text-center p-4 text-muted-foreground">
                  Premières consultations listées ici
                </div>
              </TabsContent>
              <TabsContent value="emergency" className="mt-4">
                <div className="text-center p-4 text-muted-foreground">
                  Consultations d'urgence listées ici
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorConsultations;
