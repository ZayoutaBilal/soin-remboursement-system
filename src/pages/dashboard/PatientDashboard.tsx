
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, Activity } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

const PatientDashboard = () => {
  return (
    <DashboardLayout role="patient">
      <div className="space-y-6">
        {/* Welcome header */}
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Bonjour, Jean Dupont</h2>
          <p className="text-muted-foreground">
            Bienvenue dans votre espace santé personnel
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Consultations</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                +2 dans les 30 derniers jours
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4</div>
              <p className="text-xs text-muted-foreground">
                1 prescription active
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Analyses</CardTitle>
              <Activity className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">
                1 analyse en attente
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Médicaments</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">7</div>
              <p className="text-xs text-muted-foreground">
                3 en cours de traitement
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Main content area */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Upcoming appointments */}
          <Card className="col-span-2">
            <CardHeader>
              <CardTitle>Prochains Rendez-vous</CardTitle>
              <CardDescription>
                Vos consultations à venir
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[1, 2].map((_, i) => (
                  <div key={i} className="flex items-center border rounded-lg p-3">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Dr. Marie Laurent</div>
                      <div className="text-sm text-muted-foreground flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        {i === 0 ? "15 Mai 2025, 14:30" : "22 Mai 2025, 10:00"}
                      </div>
                    </div>
                    <Badge variant={i === 0 ? "default" : "secondary"}>
                      {i === 0 ? "Confirmé" : "En attente"}
                    </Badge>
                  </div>
                ))}
                <Button variant="outline" className="w-full">
                  Voir tous les rendez-vous
                </Button>
              </div>
            </CardContent>
          </Card>
          
          {/* Active prescriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Prescriptions Actives</CardTitle>
              <CardDescription>
                Médicaments à prendre
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Amoxicilline 500mg</span>
                    <span className="text-sm text-muted-foreground">75%</span>
                  </div>
                  <Progress value={75} />
                  <div className="text-sm text-muted-foreground">3 fois par jour - 6 jours restants</div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">Paracetamol 1000mg</span>
                    <span className="text-sm text-muted-foreground">25%</span>
                  </div>
                  <Progress value={25} />
                  <div className="text-sm text-muted-foreground">Si douleur - 2 jours restants</div>
                </div>
                
                <Button variant="outline" className="w-full">
                  Voir toutes les prescriptions
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PatientDashboard;
