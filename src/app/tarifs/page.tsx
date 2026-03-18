"use client"; 

import { useState } from "react";
import {PricingCard} from "@/app/_components/PricingCard";
import { Header } from "../_components/Header";

 export interface PricingPlan {
  id: number;
  name: string;
  price: string | null;
  features: string[];
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[]= [
  { id: 1, name: "Gratuit", price: "0€", features: ["Gestion de 1 bien", "Suivi des baux et séjours", "Configuration des options", "Inventaire de base", "Accès multi-support", "Support via FAQ & Communauté"] },
  { id: 2, name: "Pro", price: "29€", features: ["Gestion de 10 biens immobilier", "Calculateur de rentabilité", "Génération de documents officiels", "Gestion de stock avancée", "Suivi automatique des baux", "Accès prioritaire aux futures fonctions"], isPopular: true },
  { id: 3, name: "Entreprise", price: null, features: ["Volume de biens important", "Accompagnement personnalisé", "Coffre-fort numérique illimité", "Gestion multi-utilisateurs", "Statistiques consolidées", "Support Premium dédié"] },
];

export default function Tarifs() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const nextPlan = () => {
    if (currentIndex < pricingPlans.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const prevPlan = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div className="w-full pb-12">
        <Header
            title="Nos Tarifs"
            subtitle="Découvrez nos offres adaptées à vos besoins, que vous soyez un particulier ou une entreprise."
            onButtonClick={() => {}}
            buttonText={null}
        />
      <div id="test" className="hidden md:mt-20 md:flex justify-center items-center gap-6">
        {pricingPlans.map((plan) => (
          <PricingCard key={plan.id} plan={plan} />
        ))}
      </div>


      <div id="test" className="flex pt-27 md:hidden flex-col items-center">
        <div className="flex items-center justify-between w-full max-w-md">
          
          <button 
            onClick={prevPlan} 
            disabled={currentIndex === 0}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-30 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </button>

          <div className="w-full mx-2 flex-1">
            {pricingPlans[currentIndex] ? (
              <PricingCard plan={pricingPlans[currentIndex]} />
            ) : null}
          </div>

          <button 
            onClick={nextPlan} 
            disabled={currentIndex === pricingPlans.length - 1}
            className="p-2 rounded-full bg-gray-200 disabled:opacity-30 transition-opacity"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </button>
        </div>

        <div className="flex gap-2 mt-6">
          {pricingPlans.map((_, idx) => (
            <div 
              key={idx} 
              className={`h-2.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-2.5 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}