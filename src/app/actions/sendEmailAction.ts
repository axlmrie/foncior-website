"use server"; 

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export interface EmailFormState {
    success?: boolean;
    message?: string;
    error?: string;
}

export async function sendEmailAction(
    prevState: EmailFormState, 
    formData: FormData
): Promise<EmailFormState> {
    
    const nom = formData.get('nom')?.toString() || '';
    const prenom = formData.get('prenom')?.toString() || '';
    const email = formData.get('email')?.toString() || '';
    const message = formData.get('message')?.toString() || '';
    const to = formData.get('to')?.toString() || '';

    try {
        await resend.emails.send({
            from: `Foncior <${to}>`, 
            to: [to], 
            subject: `Nouveau message de ${prenom} ${nom}`,
            text: `Email: ${email}\n\nMessage:\n${message}`,
        });
        
        return { success: true, message: "Message envoyé avec succès !" };
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email :", error);
        
        return { success: false, error: "Erreur lors de l'envoi." };
    }
}