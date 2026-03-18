"use client";

import Image from "next/image";
import { sendEmailAction } from "../actions/sendEmailAction";
import { useActionState } from "react";
import { toast } from "sonner";

export default function Beta() {
    const [state, formAction, isPending] = useActionState(sendEmailAction, {});
  return (
      <div className="w-full h-full pb-12 bg-[url('/bg-beta.png')] bg-cover bg-center">
          <p className="w-1/2 mx-auto text-center text-2xl font-bold text-white pt-24">
              Application en construction, inscrivez-vous pour être informer de la sortie de l’application. Cette inscription vous octroie un droit d’accès à la version bêta de la solution.
          </p>
          <Image src={"/FonciorBlancOr.png"} alt={"Logo de Foncior"} width={300} height={300} className="mx-auto mt-12" />
          <form action={formAction} className="w-full max-w-sm mx-auto my-12">
              <input type="text" name="nom" required placeholder="Votre nom" className="w-full bg-white mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
              <input type="email" name="email" required placeholder="Votre adresse e-mail" className="w-full bg-white mb-6 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
              <div className="flex  mb-6 justify-between items-center">
                <input type="checkbox" name="consent" required className="mr-2" />
                <p className="text-white">j’accepte que les informations saisies soient utilisées dans le cadre de ma demande et de la relation commerciale qui peut en découler.</p>
              </div>
              <input type="email" name="to" value="contact@foncior.com" className="hidden"  />
              <button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-secondary hover:bg-[#EDA255] text-white py-3 rounded-md text-lg font-semibold transition-colors duration-300"
              >
                  {isPending ? "Inscription en cours..." : "S'inscrire à la Beta"}
                  
              </button>
              {state?.success && (
                  toast.success(state.success, {
                      description: state.message,
                  })
                )}
              {state?.error && (
                  toast.error(state.error, {
                      description: state.error,
                  })
              )}
          </form>
    </div>
  );
}