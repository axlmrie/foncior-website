import Link from "next/link";


export interface PricingPlan {
  id: number;
  name: string;
  price: string | null;
  features: string[];
  isPopular?: boolean;
  subPrice?: string | null;
}

export function PricingCard({ plan }: { plan: PricingPlan }) {
  return (
    <div
      className={`relative flex h-auto md:h-auto w-full max-w-sm flex-col rounded-2xl border p-6 shadow-sm ${plan.isPopular ? "border-secondary ring-secondary bg-primary text-light-text scale-105 shadow-md ring-1" : "border-gray-200 bg-white"}`}
    >
      {plan.isPopular && (
        <span className="bg-secondary absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-semibold text-white">
          Le plus choisi
        </span>
      )}
      <div className={`border-muted-foreground mb-4 border-b-2 border-solid pb-6 ${plan.isPopular ? "border-secondary" : "border-primary"}`}>        <h3 className="mb-2 text-xl font-semibold">{plan.name}</h3>
        <div className="mb-6 text-4xl font-bold">
          {plan.price ? (
            <>
              {plan.price} <span className="text-sm font-normal">/mois</span>
            </>
          ) : (
            "Sur devis"
          )}
        </div>
        {plan.subPrice != null && (
          <p className="text-light-text mb-6">
            <span className="group relative inline-block cursor-help">
              + 1€ par bien supplémentaire *
              <span className="pointer-events-none absolute bottom-full left-1/2 z-10 w-max -translate-x-1/2 rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                1€ pour les bien en location longue durée et 3€ pour location
                courte durée
              </span>
            </span>
          </p>
        )}
        <Link href="/beta">
          <button
            className={`w-full rounded-lg py-2.5 font-medium transition-colors ${plan.isPopular ? "bg-secondary text-light-text hover:bg-[#EDA255]" : "bg-gray-100 text-gray-800 hover:bg-gray-200"}`}
          >
            Choisir {plan.name}
          </button>
        </Link>
      </div>
      <h3 className="mb-4 text-lg font-semibold">Fonctionnalités</h3>
      <ul className="mb-8 flex-1 space-y-3">
        {plan.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-sm">
            <span className="mr-2 text-green-500">✔</span> {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
