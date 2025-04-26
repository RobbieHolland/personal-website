import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/playlists/${params.id}`,
      {
        headers: {
          'Authorization': `Bearer ${process.env.SPOTIFY_ACCESS_TOKEN}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to fetch playlist data');
    }

    const data = await response.json();
    return NextResponse.json({
      name: data.name,
      description: data.description,
    });
  } catch (error) {
    console.error('Error fetching Spotify playlist:', error);
    return NextResponse.json(
      { error: 'Failed to fetch playlist data' },
      { status: 500 }
    );
  }
} 