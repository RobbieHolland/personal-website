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
        <h2 className="text-2xl font-semibold mb-4">HTML Version</h2>
        
        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <ul className="list-disc pl-6">
            <li>PhD in Computer Science, University of Example, 2020-2024</li>
            <li>MSc in Computer Science, University of Example, 2018-2020</li>
            <li>BSc in Computer Science, University of Example, 2014-2018</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Research Experience</h3>
          <ul className="list-disc pl-6">
            <li>Research Assistant, University of Example, 2020-2024</li>
            <li>Research Intern, Example Lab, 2019</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Skills</h3>
          <ul className="list-disc pl-6">
            <li>Programming Languages: Python, JavaScript, C++, Java</li>
            <li>Web Development: React, Next.js, Node.js</li>
            <li>Machine Learning: TensorFlow, PyTorch</li>
            <li>Languages: English (Native), Spanish (Intermediate)</li>
          </ul>
        </section>
      </div>
    </div>
  );
} 