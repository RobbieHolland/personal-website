'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [isFunDropdownOpen, setIsFunDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold text-gray-800">
                Robbie Holland
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/about" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                About
              </Link>
              <Link href="/cv" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                CV
              </Link>
              <Link href="/papers" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Academic Papers
              </Link>
              <Link href="/presentations" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Recorded Talks
              </Link>
              <Link href="/media" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Media
              </Link>
              <Link href="/repositories" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300">
                Code Repositories
              </Link>
              <div className="relative inline-block">
                <button
                  onClick={() => setIsFunDropdownOpen(!isFunDropdownOpen)}
                  className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-gray-300 h-full"
                >
                  Fun
                </button>
                {isFunDropdownOpen && (
                  <div className="absolute left-0 top-full mt-1 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1">
                      <Link href="/fun/fractals" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Fractals
                      </Link>
                      <Link href="/fun/art" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Art
                      </Link>
                      <Link href="/fun/media" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Music and Videos
                      </Link>
                      <Link href="/fun/blog" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Emerging Thoughts Blog
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 