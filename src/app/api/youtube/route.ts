import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const videoId = searchParams.get('videoId');

  if (!videoId) {
    return NextResponse.json({ error: 'Video ID is required' }, { status: 400 });
  }

  try {
    // Fetch oEmbed data for basic info
    const oembedResponse = await fetch(
      `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`
    );

    if (!oembedResponse.ok) {
      throw new Error('Failed to fetch video data');
    }

    const oembedData = await oembedResponse.json();

    // Fetch detailed video info using YouTube Data API
    const apiKey = process.env.YOUTUBE_API_KEY;
    if (!apiKey) {
      throw new Error('YouTube API key is not configured');
    }

    const apiResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${apiKey}`
    );

    if (!apiResponse.ok) {
      throw new Error('Failed to fetch video details');
    }

    const apiData = await apiResponse.json();
    const videoDetails = apiData.items[0]?.snippet;

    return NextResponse.json({
      ...oembedData,
      description: videoDetails?.description || '',
      publishDate: videoDetails?.publishedAt || ''
    });
  } catch (error) {
    console.error('YouTube API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch video information' },
      { status: 500 }
    );
  }
} 