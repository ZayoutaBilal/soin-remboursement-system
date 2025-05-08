
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, User, FileText } from "lucide-react";
import DashboardLayout from "@/components/layout/DashboardLayout";

const PatientConsultations = () => {
  return (
    <DashboardLayout role="patient">
      <div className="space-y-6 animate-fade-in">
        <div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Mes Consultations
          </h2>
          <p className="text-muted-foreground">
            Historique et prochaines consultations
          </p>
        </div>

        {/* Upcoming consultations */}
        <Card className="overflow-hidden border-2 border-primary/10 shadow-lg rounded-xl">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle>Consultations à venir</CardTitle>
            <CardDescription>
              Vos prochains rendez-vous médicaux
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="space-y-4">
              {[
                {
                  doctor: "Dr. Marie Laurent",
                  specialty: "Médecin généraliste",
                  date: "15 Mai 2025",
                  time: "14:30",
                  status: "Confirmé"
                },
                {
                  doctor: "Dr. Jean Lefevre",
                  specialty: "Cardiologue",
                  date: "22 Mai 2025",
                  time: "10:00",
                  status: "En attente"
                }
              ].map((appointment, i) => (
                <div 
                  key={i} 
                  className="flex items-center border rounded-xl p-4 hover:shadow-md transition-all duration-200 hover:border-primary/30 bg-gradient-to-r from-white to-secondary/30"
                >
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <Calendar className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">{appointment.doctor}</div>
                    <div className="text-sm text-muted-foreground">{appointment.specialty}</div>
                    <div className="text-sm text-muted-foreground flex items-center mt-1">
                      <Clock className="h-3 w-3 mr-1" />
                      {appointment.date}, {appointment.time}
                    </div>
                  </div>
                  <Badge 
                    variant={appointment.status === "Confirmé" ? "default" : "secondary"} 
                    className="rounded-full px-3 py-1"
                  >
                    {appointment.status}
                  </Badge>
                </div>
              ))}
              <Button variant="outline" className="w-full rounded-xl border-2 border-primary/20 hover:border-primary/50 shadow-sm">
                Prendre un nouveau rendez-vous
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Past consultations */}
        <Card className="overflow-hidden border-2 border-primary/10 shadow-lg rounded-xl">
          <CardHeader className="bg-gradient-to-r from-primary/5 to-accent/5">
            <CardTitle>Historique des consultations</CardTitle>
            <CardDescription>
              Vos consultations passées
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="relative overflow-x-auto rounded-xl border border-border/50">
              <table className="w-full text-sm text-left">
                <thead className="text-xs text-muted-foreground uppercase bg-muted/80">
                  <tr>
                    <th scope="col" className="px-6 py-3 rounded-tl-lg">Date</th>
                    <th scope="col" className="px-6 py-3">Médecin</th>
                    <th scope="col" className="px-6 py-3">Motif</th>
                    <th scope="col" className="px-6 py-3">Observations</th>
                    <th scope="col" className="px-6 py-3 rounded-tr-lg">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4">10/04/2025</td>
                    <td className="px-6 py-4">Dr. Marie Laurent</td>
                    <td className="px-6 py-4">Consultation de suivi</td>
                    <td className="px-6 py-4">Examen normal, pas de symptômes</td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm" className="rounded-lg flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        Détails
                      </Button>
                    </td>
                  </tr>
                  <tr className="bg-muted/20 border-b hover:bg-secondary/30 transition-colors">
                    <td className="px-6 py-4">15/03/2025</td>
                    <td className="px-6 py-4">Dr. Jean Lefevre</td>
                    <td className="px-6 py-4">Examen cardiaque</td>
                    <td className="px-6 py-4">Prescription d'analyses complémentaires</td>
                    <td className="px-6 py-4">
                      <Button variant="ghost" size="sm" className="rounded-lg flex items-center gap-1">
                        <FileText className="h-4 w-4" />
                        Détails
                      </Button>
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

export default PatientConsultations;
