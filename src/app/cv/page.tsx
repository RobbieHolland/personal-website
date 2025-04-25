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
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Stanford University</h3>
            <p className="text-gray-600">Postdoctoral Scholar, Artificial Intelligence in Medicine and Imaging (AIMI) Center</p>
            <p className="text-gray-500">November 2024 - Present</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Developing self-supervised methods for image-based clinical decision making and discovery of novel prognostic biomarkers</li>
              <li>Building foundation models integrating longitudinal abdominal CT and tabular data from population-scale cohorts</li>
              <li>Leading the AI in Radiology journal club</li>
            </ul>
          </div>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Imperial & King's College Medical Imaging CDT</h3>
            <p className="text-gray-600">PhD, Medical Imaging</p>
            <p className="text-gray-500">October 2020 - October 2024</p>
            <ul className="list-disc pl-6 mt-2">
              <li>Research: Representation learning for improved diagnosis and biomarker discovery in age-related macular degeneration (AMD)</li>
              <li>Featured in RSIP Computer Vision News, November 2023 (MICCAI edition)</li>
              <li>Distinguished Reviewer for IEEE Transactions on Medical Imaging (TMI) 2024</li>
              <li>Research collaboration at AI in Medicine Lab, Technical University Munich (2022-2024)</li>
            </ul>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold">Imperial College London</h3>
            <p className="text-gray-600">MEng Mathematics and Computer Science</p>
            <p className="text-gray-500">October 2015 - August 2019</p>
            <ul className="list-disc pl-6 mt-2">
              <li>First Class Honours in all years</li>
              <li>Best Group Project Prize in 1st and 3rd years (2016, 2018)</li>
              <li>Department Year Representative (2016-2018)</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
} 