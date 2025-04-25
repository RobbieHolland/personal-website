export default function PapersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Academic Papers</h1>
      
      <div className="mb-8">
        <a
          href="https://scholar.google.com/citations?user=YOUR_SCHOLAR_ID"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          View Google Scholar Profile
        </a>
      </div>

      <div className="space-y-6">
        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold mb-2">Recent Publications</h2>
          <ul className="space-y-4">
            <li>
              <h3 className="text-xl font-medium">Paper Title 1</h3>
              <p className="text-gray-600">Authors: Robbie Holland, et al.</p>
              <p className="text-gray-600">Journal/Conference: Example Journal, 2023</p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            </li>
            <li>
              <h3 className="text-xl font-medium">Paper Title 2</h3>
              <p className="text-gray-600">Authors: Robbie Holland, et al.</p>
              <p className="text-gray-600">Journal/Conference: Example Conference, 2022</p>
              <a
                href="#"
                className="text-blue-600 hover:text-blue-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Paper
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Machine Learning and Artificial Intelligence</li>
            <li>Computer Vision</li>
            <li>Natural Language Processing</li>
            <li>Distributed Systems</li>
          </ul>
        </div>
      </div>
    </div>
  );
} 