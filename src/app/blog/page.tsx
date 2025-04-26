import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog - Robbie Holland',
  description: 'Thoughts and insights on science, technology, and communication',
};

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Blog</h1>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">
          <Link href="/blog/effective-communication" className="text-blue-600 hover:text-blue-800">
            Effective Communication in Scientific Discourse
          </Link>
        </h2>
        <p className="text-gray-600 mb-2">March 15, 2024</p>
        <p className="text-gray-700">
          Drawing parallels between the art of conversation and scientific writing, exploring how the same principles that make for engaging discussions can enhance our research papers.
        </p>
      </div>
    </div>
  );
} 