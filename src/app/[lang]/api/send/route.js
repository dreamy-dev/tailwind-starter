import { Resend } from 'resend';
import { EmailTemplate } from '@/src/components/email-template/EmailTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
    const formData = await request.formData();
    const name = formData.get('first_name');
    const lastName = formData.get('last_name');
    const subject = formData.get('subject');
    const street = formData.get('street');
    const number = formData.get('number');
    const zip = formData.get('zip');
    const city = formData.get('city');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');

    try {
        const data = await resend.emails.send({
            from: 'GateB Test <info@gateb-test-domain.site>',
            to: ['cecile.hefti@outlook.com'],
            subject: 'Hello world',
            react: EmailTemplate({
                first_name: name,
                last_name: lastName,
                subject: subject,
                street: street,
                number: number,
                zip: zip,
                city: city,
                email: email,
                phone: phone,
                message: message,
            }),
        });
        console.log(data);

        return Response.json(data);
    } catch (error) {
        return Response.json({ error });
    }
}
