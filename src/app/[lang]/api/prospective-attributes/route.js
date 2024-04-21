import { NextResponse } from 'next/server';

export async function GET(req, res) {

    const accessToken = process.env.PROSPECTIVE_API_TOKEN
    const url = `${process.env.PROSPECTIVE_API_BASE_URL}/attributes/?lang=de`

    try {

        const initialResponse = await fetch(url, {
            headers: {
                Authorization: `Bearer ${accessToken}`,
            },
        })
        const attributes = await initialResponse.json()

        return NextResponse.json(attributes);
    }
    catch (err) {
        return NextResponse.json({});
    }
}
