import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const { slug } = params;
  // Construct the Storyblok asset URL
  const storyblokUrl = `https://a.storyblok.com/f/269997/${slug.join('/')}`;

  try {
    const response = await fetch(storyblokUrl);

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch the asset' },
        { status: response.status }
      );
    }

    // Clone the response and forward headers and content
    const resHeaders = new Headers(response.headers);
    const contentType = resHeaders.get('content-type') || 'application/octet-stream';

    return new NextResponse(response.body, {
      headers: {
        'Content-Type': contentType,
        'Content-Disposition': resHeaders.get('content-disposition') || 'inline',
      },
    });
  } catch (error) {
    console.error('Error proxying the asset:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}