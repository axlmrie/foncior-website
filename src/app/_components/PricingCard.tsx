
export  function PricingCard({ plan }: { plan: any }) {
  return (
    <div className={`relative p-6 h-[60vh]  border rounded-2xl shadow-sm flex flex-col w-full max-w-sm ${plan.isPopular ? 'border-secondary shadow-md ring-1 ring-secondary scale-105 bg-primary text-light-text' : 'border-gray-200 bg-white'}`}>
      {plan.isPopular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white px-3 py-1 rounded-full text-xs font-semibold">
          Le plus choisi
        </span>
      )}
        <div className="pb-6 mb-4 border-muted-foreground border-solid border-b-2" >
            <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
            <div className="text-4xl font-bold mb-6">{plan.price ? <>{plan.price} <span className="text-sm font-normal">/mois</span></>  : 'Sur devis'}</div>
            <button className={`w-full py-2.5 rounded-lg font-medium transition-colors ${plan.isPopular ? 'bg-light-text text-primary  hover:bg-sidebar-ring' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}>
                Choisir {plan.name}
            </button>
        </div>
        <h3 className="text-lg font-semibold mb-4">Fonctionnalités</h3>
      <ul className="mb-8 space-y-3 flex-1">
        {plan.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-sm ">
             <span className="mr-2 text-green-500">✔</span> {feature}
          </li>
        ))}
      </ul>
      

    </div>
  );
}