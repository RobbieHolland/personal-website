import Image from 'next/image';
import { FaLinkedin, FaGithub, FaUniversity } from 'react-icons/fa';
import { AiFillGoogleCircle } from 'react-icons/ai';

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="w-48 h-48 relative rounded-full overflow-hidden">
          <Image
            src="/profile_zoomed.jpg"
            alt="Robbie Holland"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-4">Robbie Holland</h1>
          <p className="text-lg text-gray-600 mb-4">
            I am a postdoctoral scholar in Stanford's Artificial Intelligence in Medicine and Imaging (AIMI) Center. My research focuses on developing self-supervised methods for aiding image-based clinical decision making and accelerating the discovery of new, prognostic biomarkers for disease.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            I am now advancing these applications by developing foundation models that integrate longitudinal, multimodal medical data from population-scale cohorts. This website serves as a hub for my academic work, code repositories, and various creative projects.
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/robbie-h/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-colors"
              title="LinkedIn"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/RobbieHolland"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
              title="GitHub"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://scholar.google.com/citations?user=9SerzccAAAAJ&hl=en&authuser=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-500 transition-colors"
              title="Google Scholar"
            >
              <AiFillGoogleCircle size={24} />
            </a>
            <a
              href="https://med.stanford.edu/profiles/robert-holland"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-red-600 transition-colors"
              title="Stanford Profile"
            >
              <FaUniversity size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 