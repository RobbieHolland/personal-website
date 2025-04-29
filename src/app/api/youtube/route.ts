import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
  }

  try {
    // Fetch oEmbed data
    const oembedResponse = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    );

    if (!oembedResponse.ok) {
      throw new Error('Failed to fetch video data');
    }

    const oembedData = await oembedResponse.json();

    // Fetch video page to get description and date
    const videoPageResponse = await fetch(
      `https://www.youtube.com/watch?v=${videoId}`
    );
    const videoPageHtml = await videoPageResponse.text();
    
    // Extract description from meta tags
    const descriptionMatch = videoPageHtml.match(/<meta name="description" content="([^"]+)"/);
    const description = descriptionMatch ? descriptionMatch[1] : '';

    // Extract publish date
    const dateMatch = videoPageHtml.match(/"publishDate":"([^"]+)"/);
    const publishDate = dateMatch ? dateMatch[1] : '';

    return NextResponse.json({
      ...oembedData,
      description,
      publishDate
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch video information' },
      { status: 500 }
    );
  }
} 