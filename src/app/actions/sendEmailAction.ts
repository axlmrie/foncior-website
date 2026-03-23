"use server"; 

import { Resend } from 'resend';
import { ContactConfirmationEmail } from '@/app/_components/email/ContactConfirmationEmail';
import { BetaSignupEmail } from '@/app/_components/email/BetaSignupEmail';
import { NewBetaAdminEmail } from '@/app/_components/email/NewBetaAdminEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface ActionState {
    success?: boolean;
    message?: string;
    error?: string;
}

export async function sendContactAction(
    prevState: ActionState | null, 
    formData: FormData
): Promise<ActionState> {
    const nom = (formData.get('nom') as string) ?? '';
    const prenom = (formData.get('prenom') as string) ?? '';
    const email = (formData.get('email') as string) ?? '';
    const message = (formData.get('message') as string) ?? '';

    try {
        await resend.emails.send({
            from: 'Foncior <contact@foncior.com>', 
            to: [email], 
            bcc: ['contact@foncior.com'],
            subject: `Confirmation de votre demande de contact`,
            react: ContactConfirmationEmail({ nom, prenom, messageClient: message }),
        });
        
        return { success: true, message: "Message envoyé avec succès !" };
    } catch (error) {
        console.error("Erreur Contact:", error);
        return { success: false, error: "Erreur lors de l'envoi." };
    }
}

export async function sendBetaSignupAction(
    prevState: ActionState | null, 
    formData: FormData
): Promise<ActionState> {
    const nom = (formData.get('nom') as string) ?? '';
    const prenom = (formData.get('prenom') as string) ?? '';
    const email = (formData.get('email') as string) ?? '';

    try {
        await Promise.all([
            resend.emails.send({
                from: 'Foncior Bêta <beta@foncior.com>', 
                to: [email],
                subject: `Bienvenue dans la bêta de Foncior !`,
                react: BetaSignupEmail({ prenom, nom }), 
            }),

            resend.emails.send({
                from: 'Foncior Système <beta@foncior.com>', 
                to: ['beta@foncior.com'],
                subject: `🔥 Nouvelle inscription Bêta : ${prenom} ${nom}`,
                react: NewBetaAdminEmail({ prenom, nom, email }), 
            })
        ]);
        
        return { success: true, message: "Inscription à la bêta confirmée !" };
    } catch (error) {
        console.error("Erreur Inscription Bêta:", error);
        return { success: false, error: "Erreur lors de l'inscription." };
    }
}