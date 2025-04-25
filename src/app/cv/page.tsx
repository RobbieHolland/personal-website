export default function CVPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Curriculum Vitae</h1>
      
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Download PDF Version</h2>
        <a
          href="/cv.pdf"
          download
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          Download CV (PDF)
        </a>
      </div>

      <div className="prose max-w-none">
        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Experience</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">Postdoctoral Researcher</h3>
            <p className="text-gray-600">Stanford University</p>
            <p className="text-gray-600">Supervisors: Dr. Akshay Chaudhari, Dr. Sergios Gatidis</p>
            <p className="text-gray-500">2024 - Present</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developing foundation models for clinical decision making and biomarker discovery</li>
              <li>Using sparse autoencoders for discovery in longitudinal abdominal CT and tabular data</li>
              <li>Leading the AI in Radiology journal club</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">PhD in Self-supervised Representation Learning for Retinal Image Analysis</h3>
            <p className="text-gray-600">Imperial College London</p>
            <p className="text-gray-600">Supervisors: Dr. Martin Menten, Prof. Daniel Rueckert</p>
            <p className="text-gray-500">2020 - 2024</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>Developed novel deep learning methods for analyzing longitudinal medical images</li>
              <li>Published in top-tier conferences and journals including Medical Image Analysis and MICCAI</li>
              <li>Collaborated with leading ophthalmology centers across Europe</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold">MEng in Mathematics and Computer Science</h3>
            <p className="text-gray-600">Imperial College London</p>
            <p className="text-gray-600">Supervisor: Prof. Bernhard Kainz</p>
            <p className="text-gray-500">2019 - 2020</p>
            <ul className="list-disc list-inside mt-2 text-gray-700">
              <li>First Class Honours</li>
              <li>Specialized in medical image analysis and machine learning</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 