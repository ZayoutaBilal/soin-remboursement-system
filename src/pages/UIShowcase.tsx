
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useCustomToast } from "@/components/ui/custom-toast";
import { AlertCircle, Bell, Check, CheckCheck, Info, X } from "lucide-react";
import { ConfirmationModal } from "@/components/ui/modal/ConfirmationModal";
import { InputModal } from "@/components/ui/modal/InputModal";
import { FormModal } from "@/components/ui/modal/FormModal";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";

const UIShowcase = () => {
  const toast = useCustomToast();
  const [confirmModalOpen, setConfirmModalOpen] = useState(false);
  const [inputModalOpen, setInputModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [currentRole, setCurrentRole] = useState<"patient" | "doctor" | "pharmacist" | "laboratory" | "insurance">("doctor");

  const showToast = (type: "success" | "error" | "warning" | "info") => {
    toast[type]({
      title: `Toast ${type}`,
      description: `This is a ${type} toast notification.`
    });
  };

  return (
    <div className="container max-w-6xl mx-auto p-6 space-y-8 animate-fade-in">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">UI Components</h1>
        <p className="text-muted-foreground">Showcase of available UI components and their variations</p>
      </div>

      <Tabs defaultValue="buttons" className="w-full">
        <TabsList className="grid grid-cols-5 mb-8">
          <TabsTrigger value="buttons">Buttons</TabsTrigger>
          <TabsTrigger value="cards">Cards</TabsTrigger>
          <TabsTrigger value="modals">Modals</TabsTrigger>
          <TabsTrigger value="toast">Toast</TabsTrigger>
          <TabsTrigger value="badges">Badges</TabsTrigger>
        </TabsList>
        
        <TabsContent value="buttons" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Role-based Buttons</CardTitle>
              <CardDescription>Buttons styled based on user roles</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex flex-wrap gap-4">
                <Button variant="patient" onClick={() => setCurrentRole("patient")}>Patient</Button>
                <Button variant="doctor" onClick={() => setCurrentRole("doctor")}>Doctor</Button>
                <Button variant="pharmacist" onClick={() => setCurrentRole("pharmacist")}>Pharmacist</Button>
                <Button variant="laboratory" onClick={() => setCurrentRole("laboratory")}>Laboratory</Button>
                <Button variant="insurance" onClick={() => setCurrentRole("insurance")}>Insurance</Button>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Button Variants</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="link">Link</Button>
                  <Button variant="success">Success</Button>
                  <Button variant="warning">Warning</Button>
                  <Button variant="info">Info</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h3 className="text-lg font-semibold mb-3">Button Sizes</h3>
                <div className="flex flex-wrap items-center gap-4">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="xl">Extra Large</Button>
                  <Button size="icon"><Bell /></Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="card-gradient">
              <CardHeader>
                <CardTitle>Gradient Card</CardTitle>
                <CardDescription>Card with gradient background</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card uses a gradient background effect.</p>
              </CardContent>
              <CardFooter>
                <Button variant={currentRole} className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Glass Card</CardTitle>
                <CardDescription>Card with glassmorphism effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card uses a glassmorphism style with backdrop blur.</p>
              </CardContent>
              <CardFooter>
                <Button variant={currentRole} className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card className="hover-scale">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Card with hover effects</CardDescription>
              </CardHeader>
              <CardContent>
                <p>This card scales up slightly when hovered.</p>
              </CardContent>
              <CardFooter>
                <Button variant={currentRole} className="w-full">Action</Button>
              </CardFooter>
            </Card>

            <Card className="stat-panel text-white">
              <CardHeader>
                <CardTitle>Stat Panel</CardTitle>
                <CardDescription className="text-white/80">Statistical information card</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold">98.2%</div>
                <p>Completion rate</p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="bg-white/20 border-white/40 text-white hover:bg-white/30 w-full">Details</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="modals" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Modal Dialogs</CardTitle>
              <CardDescription>Various types of modal dialogs</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant={currentRole} 
                  onClick={() => setConfirmModalOpen(true)}
                >
                  Confirmation Modal
                </Button>
                <Button 
                  variant={currentRole} 
                  onClick={() => setInputModalOpen(true)}
                >
                  Input Modal
                </Button>
                <Button 
                  variant={currentRole} 
                  onClick={() => setFormModalOpen(true)}
                >
                  Form Modal
                </Button>
              </div>
            </CardContent>
          </Card>

          <ConfirmationModal
            open={confirmModalOpen}
            onOpenChange={setConfirmModalOpen}
            title="Confirmer l'action"
            description="Êtes-vous sûr de vouloir continuer avec cette action ? Cette action ne peut pas être annulée."
            confirmLabel="Confirmer"
            cancelLabel="Annuler"
            role={currentRole}
            onConfirm={() => {
              setConfirmModalOpen(false);
              toast.success({
                title: "Action confirmée",
                description: "L'action a été confirmée avec succès."
              });
            }}
          />

          <InputModal
            open={inputModalOpen}
            onOpenChange={setInputModalOpen}
            title="Entrer une valeur"
            description="Veuillez saisir la valeur requise ci-dessous."
            label="Valeur"
            placeholder="Entrez votre valeur ici..."
            role={currentRole}
            onConfirm={(value) => {
              toast.success({
                title: "Valeur enregistrée",
                description: `La valeur "${value}" a été enregistrée.`
              });
            }}
          />

          <FormModal
            open={formModalOpen}
            onOpenChange={setFormModalOpen}
            title="Formulaire"
            description="Veuillez remplir tous les champs obligatoires."
            role={currentRole}
            onSubmit={() => {
              setFormModalOpen(false);
              toast.success({
                title: "Formulaire soumis",
                description: "Le formulaire a été soumis avec succès."
              });
            }}
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Prénom</Label>
                  <Input id="first-name" placeholder="Prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Nom</Label>
                  <Input id="last-name" placeholder="Nom" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="email@exemple.com" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Votre message ici..." />
              </div>
            </div>
          </FormModal>
        </TabsContent>

        <TabsContent value="toast" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Toast Notifications</CardTitle>
              <CardDescription>Various types of toast notifications</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <div className="flex flex-wrap gap-4">
                <Button 
                  variant="success" 
                  onClick={() => showToast("success")}
                  className="gap-2"
                >
                  <Check className="h-4 w-4" />
                  Success Toast
                </Button>
                <Button 
                  variant="destructive" 
                  onClick={() => showToast("error")}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Error Toast
                </Button>
                <Button 
                  variant="warning" 
                  onClick={() => showToast("warning")}
                  className="gap-2"
                >
                  <AlertCircle className="h-4 w-4" />
                  Warning Toast
                </Button>
                <Button 
                  variant="info" 
                  onClick={() => showToast("info")}
                  className="gap-2"
                >
                  <Info className="h-4 w-4" />
                  Info Toast
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="badges" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
              <CardDescription>Badge variants and styles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Standard Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="outline">Outline</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Status Badges</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-success text-success-foreground">Completed</Badge>
                    <Badge className="bg-warning text-warning-foreground">Pending</Badge>
                    <Badge className="bg-info text-info-foreground">Processing</Badge>
                    <Badge className="bg-destructive text-destructive-foreground">Failed</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Badges with Icons</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="flex items-center gap-1">
                      <Check className="h-3 w-3" /> Verified
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Bell className="h-3 w-3" /> Notification
                    </Badge>
                    <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200 flex items-center gap-1">
                      <CheckCheck className="h-3 w-3" /> Approved
                    </Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default UIShowcase;
