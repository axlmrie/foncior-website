"use server"; 

import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailAction(prevState: any, formData: FormData) {
    const nom = formData.get('nom');
    const prenom = formData.get('prenom');
    const email = formData.get('email');
    const message = formData.get('message');
    const to = formData.get('to');

    try {
        await resend.emails.send({
        from: `Foncior <${to}>`,
        to: [`${to}`],
        subject: `Nouveau message de ${prenom} ${nom}`,
        text: `Email: ${email}\n\nMessage:\n${message}`,
        });
        return { success: true, message: "Message envoyé avec succès !" };
    } catch (error) {
        return { success: false, error: "Erreur lors de l'envoi." };
    }
}