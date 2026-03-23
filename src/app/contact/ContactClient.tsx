"use client";

import { toast } from "sonner";
import { Header } from "../_components/Header";
import { sendContactAction } from "../actions/sendEmailAction";
import { useActionState, useEffect } from "react";
import { Turnstile } from '@marsidev/react-turnstile';

export default function ContactClient() {
    const [state, formAction, isPending] = useActionState(sendContactAction, {});
    
    useEffect(() => {
        if (state?.success) {
            toast.success("Succès !", { 
                description: state.message,
            });
        } else if (state?.error) {
            toast.error("Erreur", {
                description: state.error,
            });
        }
    }, [state]);

    return (
        <div className="pb-16">
            <Header
                title="Contactez-nous"
                subtitle="Une question, une suggestion ou besoin d'aide ? Notre équipe est là pour vous aider."
                buttonText={null}
            />

            <div className="mx-auto max-w-5xl mt-12 px-4 sm:px-6">
                <div className="flex flex-col md:flex-row gap-10 md:gap-16 bg-white md:border border-gray-200 md:shadow-sm rounded-2xl md:p-10">
                    
                    <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                            Nous contacter
                        </h2>
                        
                        <p className="hidden md:block text-gray-600 leading-relaxed mb-4">
                            Une question technique, une suggestion pour améliorer l’application, ou besoin d’aide pour passer à la version Premium ?
                        </p>
                        
                        <p className="text-gray-600 leading-relaxed">
                            Laissez-nous un message. Notre équipe lit tous vos retours et vous répondra dans les plus brefs délais.
                        </p>
                    </div>

                    <form action={formAction} className="md:w-1/2 w-full flex flex-col gap-4">                    
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input 
                                name="prenom"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors placeholder:text-gray-400" 
                                type="text" 
                                placeholder="Prénom" 
                                required
                            />
                            <input 
                                name="nom"
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors placeholder:text-gray-400" 
                                type="text" 
                                placeholder="Nom" 
                                required
                            />
                        </div>

                        <input 
                            name="email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors placeholder:text-gray-400" 
                            type="email" 
                            placeholder="Email" 
                            required
                        />
                        
                        <textarea 
                            name="message"
                            className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors placeholder:text-gray-400 min-h-30 resize-y" 
                            placeholder="Votre message..."
                            required
                        ></textarea>
                        
                        <div className="mt-2 flex sm:justify-end">
                            <Turnstile siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!} />
                        </div>

                        <button 
                            type="submit"
                            disabled={isPending}
                            className="mt-2 w-full sm:w-auto sm:self-end bg-primary text-light-text font-medium py-3 px-8 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-sm disabled:opacity-50"
                        >
                            {isPending ? "Envoi..." : "Envoyer"}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}