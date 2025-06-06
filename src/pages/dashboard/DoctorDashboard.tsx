
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, Users, Calendar, Clock, Activity, ScrollText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const DoctorDashboard = () => {
  const [activeTab, setActiveTab] = useState("pending");
  
  return (
    <DashboardLayout role="doctor">
      <div className="space-y-6">
        {/* Welcome header */}
        <div className="dashboard-header p-4 rounded-xl animate-fade-in">
          <h2 className="text-3xl font-bold tracking-tight mb-1">Bonjour, Dr. Marie Laurent</h2>
          <p className="text-white/80">
            Voici un aperçu de votre journée - 8 Mai 2025
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 animate-fade-in">
          <Card className="dashboard-card stat-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Patients du jour</CardTitle>
              <Users className="h-4 w-4 text-white/70" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8</div>
              <p className="text-xs text-white/80">
                3 consultations restantes
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cette semaine</CardTitle>
              <Calendar className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">32</div>
              <p className="text-xs text-muted-foreground">
                +5 par rapport à la semaine dernière
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Prescriptions</CardTitle>
              <ScrollText className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                Émises aujourd'hui
              </p>
            </CardContent>
          </Card>
          
          <Card className="dashboard-card">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de présence</CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">95%</div>
              <p className="text-xs text-muted-foreground">
                +2% ce mois-ci
              </p>
            </CardContent>
          </Card>
        </div>
        
        {/* Search and schedule section */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Patient search */}
          <Card className="dashboard-panel">
            <CardHeader className="dashboard-panel-header">
              <CardTitle>Rechercher un patient</CardTitle>
              <CardDescription>
                Accédez rapidement au dossier d'un patient
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="flex w-full max-w-sm items-center space-x-2">
                <Input 
                  type="text" 
                  placeholder="Nom, prénom ou ID du patient" 
                  className="border-primary/20 focus:border-primary"
                />
                <Button type="submit" className="bg-primary hover:bg-primary/90">
                  <Search className="h-4 w-4 mr-2" />
                  Rechercher
                </Button>
              </div>
              
              <div className="mt-4">
                <h4 className="text-sm font-medium mb-2">Patients récents</h4>
                <div className="space-y-2">
                  {["Jean Dupont", "Sophie Martin", "Lucas Bernard"].map((name, i) => (
                    <div key={i} className="flex items-center justify-between p-2 border rounded-md hover:bg-secondary/50 transition-colors">
                      <div className="flex items-center">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-2 text-primary">
                          {name.charAt(0)}
                        </div>
                        <span>{name}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="text-primary hover:bg-primary/10 hover:text-primary">
                        Voir dossier
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
          
          {/* Today's schedule */}
          <Card className="dashboard-panel">
            <CardHeader className="dashboard-panel-header">
              <CardTitle>Planning du jour</CardTitle>
              <CardDescription>
                Vos prochaines consultations
              </CardDescription>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                <div className="bg-muted/30 p-2 rounded-md">
                  <div className="font-medium text-primary">Maintenant</div>
                  <div className="appointment-item appointment-current hover-scale">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 text-primary">
                          JD
                        </div>
                        <div>
                          <div className="font-medium">Jean Dupont</div>
                          <div className="text-sm text-muted-foreground">Consultation de suivi</div>
                        </div>
                      </div>
                      <Badge className="bg-primary">En cours</Badge>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="font-medium text-muted-foreground">À venir</div>
                  {[
                    { time: "14:30", name: "Sophie Martin", reason: "Première consultation" },
                    { time: "15:15", name: "Lucas Bernard", reason: "Renouvellement ordonnance" },
                    { time: "16:00", name: "Emma Petit", reason: "Contrôle annuel" }
                  ].map((appt, i) => (
                    <div key={i} className="appointment-item appointment-upcoming">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center mr-2 text-accent">
                            {appt.name.charAt(0)}
                          </div>
                          <div>
                            <div className="font-medium">{appt.name}</div>
                            <div className="text-xs text-muted-foreground">{appt.reason}</div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <Clock className="h-3 w-3 mr-1 text-accent" />
                          <span className="text-sm">{appt.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* Patient management tabs */}
        <Card className="dashboard-panel">
          <CardHeader className="dashboard-panel-header">
            <CardTitle>Gestion des patients</CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-4">
                <TabsTrigger value="pending" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  En attente
                </TabsTrigger>
                <TabsTrigger value="prescriptions" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Prescriptions
                </TabsTrigger>
                <TabsTrigger value="reimbursements" className="data-[state=active]:bg-primary data-[state=active]:text-white">
                  Remboursements
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="pending" className="mt-4 rounded-md overflow-hidden border border-border/30">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-primary/5">
                      <tr>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Demande</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Priorité</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white hover:bg-secondary/20 transition-colors">
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Résultats d'analyse</td>
                        <td className="px-6 py-4">Hier</td>
                        <td className="px-6 py-4"><Badge variant="destructive">Urgent</Badge></td>
                        <td className="px-6 py-4"><Button size="sm" className="bg-primary hover:bg-primary/90">Traiter</Button></td>
                      </tr>
                      <tr className="bg-secondary/10 hover:bg-secondary/20 transition-colors">
                        <td className="px-6 py-4">Lucas Bernard</td>
                        <td className="px-6 py-4">Renouvellement</td>
                        <td className="px-6 py-4">2 jours</td>
                        <td className="px-6 py-4"><Badge variant="outline" className="border-primary text-primary">Normal</Badge></td>
                        <td className="px-6 py-4"><Button size="sm" className="bg-primary hover:bg-primary/90">Traiter</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="prescriptions" className="mt-4 rounded-md overflow-hidden border border-border/30">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-primary/5">
                      <tr>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Médicaments</th>
                        <th scope="col" className="px-6 py-3">Date</th>
                        <th scope="col" className="px-6 py-3">Statut</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white hover:bg-secondary/20 transition-colors">
                        <td className="px-6 py-4">Jean Dupont</td>
                        <td className="px-6 py-4">Amoxicilline 500mg</td>
                        <td className="px-6 py-4">Aujourd'hui</td>
                        <td className="px-6 py-4"><Badge className="bg-primary">Émise</Badge></td>
                        <td className="px-6 py-4"><Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">Voir</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
              
              <TabsContent value="reimbursements" className="mt-4 rounded-md overflow-hidden border border-border/30">
                <div className="relative overflow-x-auto">
                  <table className="w-full text-sm text-left">
                    <thead className="text-xs text-muted-foreground uppercase bg-primary/5">
                      <tr>
                        <th scope="col" className="px-6 py-3">Patient</th>
                        <th scope="col" className="px-6 py-3">Type</th>
                        <th scope="col" className="px-6 py-3">Montant</th>
                        <th scope="col" className="px-6 py-3">Statut</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white hover:bg-secondary/20 transition-colors">
                        <td className="px-6 py-4">Sophie Martin</td>
                        <td className="px-6 py-4">Consultation</td>
                        <td className="px-6 py-4">25,00 €</td>
                        <td className="px-6 py-4"><Badge variant="secondary">En attente</Badge></td>
                        <td className="px-6 py-4"><Button size="sm" className="bg-primary hover:bg-primary/90">Approuver</Button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DoctorDashboard;
