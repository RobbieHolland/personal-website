export default function MediaPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Music and Videos</h1>
      
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Featured Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/EXAMPLE_VIDEO_ID"
                title="Example Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/ANOTHER_VIDEO_ID"
                title="Another Example Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Music</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <iframe
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/EXAMPLE_TRACK_ID"
                width="100%"
                height="166"
                allow="autoplay"
                className="rounded-lg"
              />
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <iframe
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/ANOTHER_TRACK_ID"
                width="100%"
                height="166"
                allow="autoplay"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Local Media</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <video
                controls
                className="w-full rounded-lg"
                poster="/video-thumbnail.jpg"
              >
                <source src="/local-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <audio controls className="w-full">
                <source src="/local-audio.mp3" type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 