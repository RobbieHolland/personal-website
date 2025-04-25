export default function PapersPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Academic Papers</h1>
      
      <div className="mb-8">
        <a
          href="https://scholar.google.com/citations?user=9SerzccAAAAJ&hl=en&authuser=1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          View Google Scholar Profile
        </a>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Research Areas</h2>
          <p className="text-gray-700">
            Medical Image Analysis; Self-supervised Learning; Foundation Models; Biomarker Discovery; Disease Progression Modeling; Longitudinal Analysis; Multimodal Learning; Retinal Imaging; AMD
          </p>
        </div>

        <div className="border-b pb-4">
          <h2 className="text-2xl font-semibold mb-2">Recent Publications</h2>
          <ul className="space-y-8">
            <li>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S2666914524000794"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src="/paper_figures/deep-clustering.jpg"
                      alt="Deep Learning–Based Clustering of OCT Images paper figure"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Deep Learning–Based Clustering of OCT Images for Biomarker Discovery in Age-Related Macular Degeneration</h3>
                    <p className="text-gray-600">Authors: <strong>Robbie Holland</strong>, Rebecca Kaye, Ahmed M. Hagag, Oliver Leingang, Thomas R.P. Taylor, Hrvoje Bogunović, Ursula Schmidt-Erfurth, Hendrik P.N. Scholl, Daniel Rueckert, Andrew J. Lotery, Sobha Sivaprasad, Martin J. Menten</p>
                    <p className="text-gray-600">Journal: <strong>Ophthalmology Science</strong>, Volume 4, Issue 6, November–December 2024</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.sciencedirect.com/science/article/pii/S1361841524002214"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src="/paper_figures/metadata-enhanced.jpg"
                      alt="Metadata-enhanced contrastive learning paper figure"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Metadata-enhanced contrastive learning from retinal optical coherence tomography images</h3>
                    <p className="text-gray-600">Authors: <strong>Robbie Holland</strong>, Oliver Leingang, Hrvoje Bogunović, Sophie Riedl, Lars Fritsche, Toby Prevost, Hendrik P.N. Scholl, Ursula Schmidt-Erfurth, Sobha Sivaprasad, Andrew J. Lotery, Daniel Rueckert, Martin J. Menten</p>
                    <p className="text-gray-600">Journal: <strong>Medical Image Analysis</strong>, Volume 97, October 2024</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://www.nature.com/articles/s41591-024-03097-1"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src="/paper_figures/evaluating-llms.png"
                      alt="Evaluation and mitigation of the limitations of large language models in clinical decision-making paper figure"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Evaluation and mitigation of the limitations of large language models in clinical decision-making</h3>
                    <p className="text-gray-600">Authors: Paul Hager, Friederike Jungmann, <strong>Robbie Holland</strong>, Kunal Bhagat, Inga Hubrecht, Manuel Knauer, Jakob Vielhauer, Marcus Makowski, Rickmer Braren, Georgios Kaissis, Daniel Rueckert</p>
                    <p className="text-gray-600">Journal: <strong>Nature Medicine</strong>, Volume 30, Pages 2613–2622, July 2024</p>
                  </div>
                </div>
              </a>
            </li>
            <li>
              <a
                href="https://link.springer.com/chapter/10.1007/978-3-031-43990-2_68"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md border border-gray-200 p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="md:w-1/3">
                    <img
                      src="/paper_figures/clustering-trajectories.png"
                      alt="Clustering Disease Trajectories paper figure"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-xl font-medium">Clustering Disease Trajectories in Contrastive Feature Space for Biomarker Proposal in Age-Related Macular Degeneration</h3>
                    <p className="text-gray-600">Authors: <strong>Robbie Holland</strong>, Oliver Leingang, Christopher Holmes, Philipp Anders, Rebecca Kaye, Sophie Riedl, Johannes C. Paetzold, Ivan Ezhov, Hrvoje Bogunović, Ursula Schmidt-Erfurth, Hendrik P. N. Scholl, Sobha Sivaprasad, Andrew J. Lotery, Daniel Rueckert, Martin J. Menten</p>
                    <p className="text-gray-600">Conference: <strong>Medical Image Computing and Computer Assisted Intervention (MICCAI)</strong>, October 2023</p>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 