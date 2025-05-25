
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  // Redirect to dashboard or other pages as needed
  // For now, show some placeholder links
  
  useEffect(() => {
    // Add page load animation
    document.body.classList.add('page-loaded');
    
    return () => {
      document.body.classList.remove('page-loaded');
    };
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary/5 dark:bg-primary/10 py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-primary">HealthConnect</h1>
            <nav>
              <ul className="flex space-x-4">
                <li><a href="#" className="text-sm font-medium hover:text-primary">Accueil</a></li>
                <li><a href="#" className="text-sm font-medium hover:text-primary">À propos</a></li>
                <li><a href="#" className="text-sm font-medium hover:text-primary">Contact</a></li>
                <li><Link to="/ui" className="text-sm font-medium hover:text-primary">UI Components</Link></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <section className="py-12 md:py-20 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">Bienvenue sur HealthConnect</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-muted-foreground animate-fade-in">
              Votre plateforme centralisée pour la gestion médicale et le suivi patients.
            </p>
            <div className="space-y-4 md:space-y-0 md:space-x-4 flex flex-col md:flex-row justify-center">
              <Link to="/patient/dashboard" className="animate-scale-in">
                <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Accès Patient
                </button>
              </Link>
              <Link to="/doctor/dashboard" className="animate-scale-in delay-100">
                <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Accès Médecin
                </button>
              </Link>
              <Link to="/pharmacist/dashboard" className="animate-scale-in delay-200">
                <button className="bg-gradient-to-r from-emerald-500 to-emerald-600 text-white px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                  Accès Pharmacien
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center">Accès par profil</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
              <Link to="/patient/dashboard" className="card-hover transition-all">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border/50 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Patient</h3>
                  <p className="text-muted-foreground text-sm">Accédez à votre dossier médical et vos rendez-vous.</p>
                </div>
              </Link>
              
              <Link to="/doctor/dashboard" className="card-hover transition-all">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border/50 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Médecin</h3>
                  <p className="text-muted-foreground text-sm">Gérez vos patients et consultations.</p>
                </div>
              </Link>
              
              <Link to="/pharmacist/dashboard" className="card-hover transition-all">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border/50 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Pharmacien</h3>
                  <p className="text-muted-foreground text-sm">Gérez les prescriptions et le stock de médicaments.</p>
                </div>
              </Link>
              
              <Link to="/laboratory/dashboard" className="card-hover transition-all">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border/50 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Laboratoire</h3>
                  <p className="text-muted-foreground text-sm">Gérez les analyses et les résultats.</p>
                </div>
              </Link>
              
              <Link to="/insurance/dashboard" className="card-hover transition-all">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-border/50 flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-bold mb-2">Assurance</h3>
                  <p className="text-muted-foreground text-sm">Gérez les remboursements et les assurés.</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
        
        <section className="py-12 md:py-16 bg-primary/5 dark:bg-primary/10">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Accédez à votre profil</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Link to="/patient/profile" className="btn-profile bg-gradient-to-r from-pink-500 to-pink-600 text-white py-4 px-6 rounded-lg text-center font-medium hover:shadow-lg transition-transform hover:-translate-y-1">
                Profil Patient
              </Link>
              <Link to="/doctor/profile" className="btn-profile bg-gradient-to-r from-purple-500 to-purple-600 text-white py-4 px-6 rounded-lg text-center font-medium hover:shadow-lg transition-transform hover:-translate-y-1">
                Profil Médecin
              </Link>
              <Link to="/pharmacist/profile" className="btn-profile bg-gradient-to-r from-emerald-500 to-emerald-600 text-white py-4 px-6 rounded-lg text-center font-medium hover:shadow-lg transition-transform hover:-translate-y-1">
                Profil Pharmacien
              </Link>
              <Link to="/laboratory/profile" className="btn-profile bg-gradient-to-r from-amber-500 to-amber-600 text-white py-4 px-6 rounded-lg text-center font-medium hover:shadow-lg transition-transform hover:-translate-y-1">
                Profil Laboratoire
              </Link>
              <Link to="/insurance/profile" className="btn-profile bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 px-6 rounded-lg text-center font-medium hover:shadow-lg transition-transform hover:-translate-y-1">
                Profil Assurance
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <footer className="py-6 bg-secondary text-center text-muted-foreground">
        <div className="container mx-auto px-4">
          <p>© 2025 HealthConnect. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
