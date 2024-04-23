import { NextResponse } from 'next/server';

export async function POST(request, res) {
    const email = request.nextUrl.searchParams.get('email')

    const accessToken = process.env.MAILCHIMP_API_KEY;
    // const url = `https://${process.env.MAILCHIMP_API_SERVER}.api.mailchimp.com/3.0/lists/be8e58f4ee/members`

    const url = `https://${process.env.MAILCHIMP_API_SERVER}.list-manage.com/contact-form/post?u=7e29f428e402a1b5e2a54d074&form_id=2e74855d6562cb5c25c57cd2c93d2fdf`
    try {
        const initialResponse = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "subscribe": true, "mc-SMSPHONE-ack": false, "status": "subscribed",
                "fields": { "2810": email, "2814": "test even more", "2818": "very test" }
            })
        })
        const response = await initialResponse.json()
        console.log("response", response)

        return NextResponse.json({ success: response });
    }
    catch (err) {

        return NextResponse.json({ status: err.status });
    }
}
