'use client';

import { useEffect, useState } from 'react';

interface YouTubeVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
}

export default function MediaPage() {
  const [videos, setVideos] = useState<YouTubeVideo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoData = async () => {
      try {
        const videoIds = ['pY7Jr7fizS0', 'clEoMLP6XoU'];
        const videoData = await Promise.all(
          videoIds.map(async (id) => {
            const response = await fetch(`https://noembed.com/embed?url=https://www.youtube.com/watch?v=${id}`);
            const data = await response.json();
            return {
              id,
              title: data.title,
              thumbnail: `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
              publishedAt: '2024-01-01' // We'll update this with actual dates later
            };
          })
        );
        setVideos(videoData);
      } catch (error) {
        console.error('Error fetching video data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideoData();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-4xl font-bold mb-8">Music and Videos</h1>
      
      <div className="mb-8">
        <a
          href="https://www.youtube.com/@rapperrobb6015"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-red-600 hover:bg-red-700"
        >
          Visit YouTube Channel
        </a>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div key={video.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <a
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="relative aspect-video">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    onLoad={(e) => {
                      // Try to upgrade to maxresdefault if available
                      const img = e.target as HTMLImageElement;
                      const maxresUrl = `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`;
                      const tempImg = new Image();
                      tempImg.onload = () => {
                        img.src = maxresUrl;
                      };
                      tempImg.src = maxresUrl;
                    }}
                    onError={(e) => {
                      const img = e.target as HTMLImageElement;
                      // Try different thumbnail qualities in order
                      const qualities = ['hqdefault', 'mqdefault', 'default'];
                      let currentIndex = qualities.indexOf(img.src.split('/').pop()?.split('.')[0] || '');
                      
                      if (currentIndex < qualities.length - 1) {
                        img.src = `https://img.youtube.com/vi/${video.id}/${qualities[currentIndex + 1]}.jpg`;
                      }
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-500 text-sm">
                    {new Date(video.publishedAt).toLocaleDateString()}
                  </p>
                </div>
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 