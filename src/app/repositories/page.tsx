'use client';

import { useEffect, useState } from 'react';

interface Repository {
  name: string;
  description: string;
  html_url: string;
  language: string;
  stargazers_count: number;
}

export default function RepositoriesPage() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/RobbieHolland/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch repositories');
        }
        const data = await response.json();
        // Sort repositories by stars in descending order
        const sortedRepos = data.sort((a: Repository, b: Repository) => b.stargazers_count - a.stargazers_count);
        setRepos(sortedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Code Repositories</h1>
        <div className="text-center">Loading repositories...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Code Repositories</h1>
        <div className="text-red-600">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Code Repositories</h1>
      
      <div className="grid gap-6">
        {repos.map((repo) => (
          <div
            key={repo.name}
            className="border rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-semibold mb-2">
              <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                {repo.name}
              </a>
            </h2>
            <p className="text-gray-600 mb-4">{repo.description || 'No description available'}</p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              {repo.language && (
                <span className="flex items-center">
                  <span className="w-3 h-3 rounded-full bg-blue-500 mr-1"></span>
                  {repo.language}
                </span>
              )}
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    clipRule="evenodd"
                  />
                </svg>
                {repo.stargazers_count}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 