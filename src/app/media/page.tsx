export default function MediaPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Media & Articles</h1>
      
      <div className="space-y-8">
        <div className="border-b pb-6">
          <h2 className="text-2xl font-semibold mb-4">Magazine Features</h2>
          <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <a
              href="https://www.rsipvision.com/ComputerVisionNews-2023November/30/"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover:opacity-80 transition-opacity"
            >
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/3">
                  <img
                    src="/blog_figures/rsip-cv.png"
                    alt="Computer Vision News Magazine Cover"
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-medium">Deep Learning for the Eyes</h3>
                  <p className="text-gray-600">RSIP Vision - Computer Vision News, November 2023 Edition</p>
                  <p className="text-gray-600 mt-2">Featured in an interview about my work on disease trajectories for AMD and biomarker discovery.</p>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Published Blogs</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <a
                href="https://www.technologynetworks.com/informatics/articles/supervised-vs-unsupervised-learning-352077"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src="/blog_figures/supervised-vs-unsupervised-blog.png"
                      alt="Supervised vs Unsupervised Learning article thumbnail"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Supervised vs Unsupervised Learning</h3>
                    <p className="text-gray-600">Technology Networks - Last Updated: March 19, 2025</p>
                    <p className="text-gray-600 mt-2">A comprehensive guide to understanding the differences and applications of supervised and unsupervised learning in machine learning.</p>
                  </div>
                </div>
              </a>
            </div>

            <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
              <a
                href="https://www.technologynetworks.com/informatics/articles/how-good-conversation-benefits-from-data-compression-350363"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:opacity-80 transition-opacity"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src="/blog_figures/autoencoders-good-conversation.png"
                      alt="How Good Conversation Benefits From Data Compression article thumbnail"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">How Good Conversation Benefits From Data Compression</h3>
                    <p className="text-gray-600">Technology Networks - Last Updated: March 18, 2022</p>
                    <p className="text-gray-600 mt-2">Exploring the parallels between data compression techniques and effective communication in scientific discourse.</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 