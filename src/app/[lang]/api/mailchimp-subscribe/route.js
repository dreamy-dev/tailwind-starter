import { NextResponse } from 'next/server';

export async function POST(request) {
    const formData = await request.formData();
    const email = formData.get('email');
    const firma = formData.get('firma');
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');

    const accessToken = process.env.MAILCHIMP_API_KEY;
    const url = `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`;

    try {
        const initialResponse = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                email_address: email,
                status: 'subscribed',
                merge_fields: {
                    FNAME: firstName,
                    LNAME: lastName,
                    FIRMA: firma,
                },
            }),
        });
        const response = await initialResponse.json();

        return NextResponse.json(response);
    } catch (err) {
        return NextResponse.json(err);
    }
}
