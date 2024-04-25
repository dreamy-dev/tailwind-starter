import { NextResponse } from 'next/server';

export async function POST(request, res) {
    const email = request.nextUrl.searchParams.get('email')

    const accessToken = process.env.MAILCHIMP_API_KEY;
    const url = process.env.MAILCHIMP_CONTACT_URL
    try {
        const initialResponse = await fetch(url, {
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json',
            },
            method: 'POST',
            body: JSON.stringify({
                "subscribe": true, "mc-SMSPHONE-ack": false, "status": "subscribed",
                "fields": { "2810": email, "2814": "test even more", "2818": "very test" }
            })
        })
        const response = await initialResponse
        console.log("response", response)

        return NextResponse.json({ success: response.stack, status: response.status, response });
    }
    catch (err) {

        return NextResponse.json({ status: err.status, stack: err.stack });
    }
}
