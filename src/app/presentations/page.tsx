'use client';

import { useEffect, useState } from 'react';

interface VideoData {
  title: string;
  author_name: string;
  author_url: string;
  thumbnail_url: string;
  html: string;
  description: string;
  publishDate: string;
}

export default function PresentationsPage() {
  const [videoData, setVideoData] = useState<VideoData | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const response = await fetch('/api/youtube?videoId=Tn9o4BUPX-o');
        if (!response.ok) {
          throw new Error('Failed to fetch video data');
        }
        const data = await response.json();
        setVideoData(data);
      } catch (err) {
        setError('Failed to load video information');
        console.error(err);
      }
    };

    fetchVideoData();
  }, []);

  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Recorded Talks</h1>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Talks</h2>
          <p className="text-gray-600">Check back soon for upcoming talks and presentations.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Past Talks</h2>
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <div className="flex gap-6">
                <div className="w-1/2">
                  <div className="relative" style={{ paddingBottom: '75%' }}>
                    <iframe
                      src="https://www.youtube.com/embed/Tn9o4BUPX-o"
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                    ></iframe>
                  </div>
                </div>
                <div className="w-1/2">
                  {error ? (
                    <p className="text-red-500">{error}</p>
                  ) : videoData ? (
                    <>
                      <h3 className="text-xl font-semibold mb-2">{videoData.title}</h3>
                      <p className="text-gray-600 mb-2">By: {videoData.author_name}</p>
                      <p className="text-sm text-gray-500 mb-4">
                        {videoData.publishDate ? `Published: ${formatDate(videoData.publishDate)}` : ''}
                      </p>
                      <div className="prose prose-sm max-w-none mb-4">
                        <p className="text-gray-600">{videoData.description}</p>
                      </div>
                      <a 
                        href={videoData.author_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-sm text-blue-500 hover:text-blue-700"
                      >
                        View on YouTube
                      </a>
                    </>
                  ) : (
                    <>
                      <h3 className="text-xl font-semibold mb-2">Loading...</h3>
                      <p className="text-gray-600 mb-2">Loading description...</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 