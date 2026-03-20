"use client";

import Image from "next/image";
import { sendEmailAction } from "../actions/sendEmailAction";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

export default function BetaClient() {
    const [state, formAction, isPending] = useActionState(sendEmailAction, {});

    useEffect(() => {
        if (state?.success) {
            toast.success("Inscription réalisée avec succès !", {
                description: "Vous serez bientôt informé de la sortie de l’application.",
            });
        } else if (state?.error) {
            toast.error("Erreur", {
                description: state.error,
            });
        }
    }, [state]);

    return (
        <div className="w-full h-full pb-12 bg-[url('/bg-beta.png')] bg-cover bg-center min-h-[80vh]">
            <p className="w-1/2 mx-auto text-center text-2xl font-bold text-white pt-24">
                Application en construction, inscrivez-vous pour être informer de la sortie de l’application.</p>
            <p className="w-1/2 mx-auto text-center text-2xl font-bold text-white pt-4">
                Cette inscription vous octroie un droit d’accès à la version bêta de la solution.
            </p>
            <Image src={"/FonciorBlancOr.png"} alt={"Logo de Foncior"} width={300} height={300} className="mx-auto mt-12" />
            
            <form action={formAction} className="w-full max-w-sm mx-auto my-12 px-4">
                <input type="text" name="nom" required placeholder="Votre nom" className="w-full bg-white mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="text" name="prenom" required placeholder="Votre prénom" className="w-full bg-white mb-4 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
                <input type="email" name="email" required placeholder="Votre adresse e-mail" className="w-full bg-white mb-6 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary" />
                
                <div className="flex mb-6 items-start">
                    <input type="checkbox" name="consent" required className="mt-1 mr-3" id="consent" />
                    <label htmlFor="consent" className="text-white text-sm">
                        J’accepte que les informations saisies soient utilisées dans le cadre de ma demande et de la relation commerciale qui peut en découler.
                    </label>
                </div>
                
                <input type="email" name="to" defaultValue="beta@foncior.com" className="hidden" />
                
                <button
                    type="submit"
                    disabled={isPending}
                    className="w-full bg-secondary hover:bg-[#EDA255] text-white py-3 rounded-md text-lg font-semibold transition-colors duration-300 disabled:opacity-50"
                >
                    {isPending ? "Inscription en cours..." : "S'inscrire à la Beta"}
                </button>
            </form>
        </div>
    );
}