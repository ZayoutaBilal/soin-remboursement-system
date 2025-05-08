
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pill, FileText, Calendar } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import DashboardLayout from "@/components/layout/DashboardLayout";

const PatientPrescriptions = () => {
  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Mes Prescriptions</h2>
          <p className="text-muted-foreground">
            Médicaments prescrits et historique des ordonnances
          </p>
        </div>

        {/* Active prescriptions */}
        <Card>
          <CardHeader>
            <CardTitle>Prescriptions actives</CardTitle>
            <CardDescription>
              Médicaments à prendre actuellement
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Amoxicilline 500mg</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} />
                  <div className="text-sm text-muted-foreground">3 fois par jour - 6 jours restants</div>
                  <div className="text-xs text-muted-foreground">Prescrit par Dr. Marie Laurent le 10/05/2025</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Paracetamol 1000mg</span>
                    <span className="text-sm text-muted-foreground">25%</span>
                  </div>
                  <Progress value={25} />
                  <div className="text-sm text-muted-foreground">Si douleur - 2 jours restants</div>
                  <div className="text-xs text-muted-foreground">Prescrit par Dr. Marie Laurent le 10/05/2025</div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Vitamine D 1000 UI</span>
                    <span className="text-sm text-muted-foreground">50%</span>
                  </div>
                  <Progress value={50} />
                  <div className="text-sm text-muted-foreground">1 fois par jour - 15 jours restants</div>
                  <div className="text-xs text-muted-foreground">Prescrit par Dr. Jean Lefevre le 28/04/2025</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prescription history */}
        <Card>
          <CardHeader>
            <CardTitle>Historique des ordonnances</CardTitle>
            <CardDescription>
              Vos prescriptions passées
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                {
                  date: "10/05/2025",
                  doctor: "Dr. Marie Laurent",
                  medications: ["Amoxicilline 500mg", "Paracétamol 1000mg"],
                  status: "Active"
                },
                {
                  date: "28/04/2025",
                  doctor: "Dr. Jean Lefevre",
                  medications: ["Vitamine D 1000 UI"],
                  status: "Active"
                },
                {
                  date: "15/03/2025",
                  doctor: "Dr. Jean Lefevre",
                  medications: ["Amlodipine 5mg", "Aspirine 100mg"],
                  status: "Terminée"
                },
              ].map((prescription, i) => (
                <div key={i} className="flex items-center border rounded-lg p-4">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="font-medium">Ordonnance du {prescription.date}</div>
                    <div className="text-sm text-muted-foreground">{prescription.doctor}</div>
                    <div className="text-sm mt-1">
                      {prescription.medications.join(", ")}
                    </div>
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge variant={prescription.status === "Active" ? "default" : "outline"}>
                      {prescription.status}
                    </Badge>
                    <Button variant="ghost" size="sm" className="mt-2">
                      Voir détails
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default PatientPrescriptions;
