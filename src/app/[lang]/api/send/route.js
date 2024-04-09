import { Resend } from 'resend';
import { EmailTemplate } from '@/src/components/email-template/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['cecile.hefti@gateb.com'],
            subject: 'Contact Page',
            react: EmailTemplate({ firstName: 'John' }),
        });

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
