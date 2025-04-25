'use client';

import { useState } from 'react';

export default function ArtPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Art</h1>
      
      <div className="grid gap-8">
        {/* My Art Section */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-6">My Art</h2>
          <p className="text-gray-600 mb-6">
            Some of these pieces are my recreations of artwork I admired but have lost the original source for. 
            To the original artists - thank you for the inspiration!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="relative aspect-square cursor-pointer"
              onClick={() => handleImageClick('/art/my/art1.png')}
            >
              <img
                src="/art/my/art1.png"
                alt="Artwork 1"
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </div>
            <div 
              className="relative aspect-square cursor-pointer"
              onClick={() => handleImageClick('/art/my/graphics.png')}
            >
              <img
                src="/art/my/graphics.png"
                alt="Graphics"
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </div>
            <div 
              className="relative aspect-square cursor-pointer"
              onClick={() => handleImageClick('/art/my/3.png')}
            >
              <img
                src="/art/my/3.png"
                alt="Artwork 3"
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </div>
            <div 
              className="relative aspect-square cursor-pointer"
              onClick={() => handleImageClick('/art/my/IMG_20201222_221229_607.jpg')}
            >
              <img
                src="/art/my/IMG_20201222_221229_607.jpg"
                alt="Traditional Art"
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>

        {/* Art I Like Section */}
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-6">Art I Like</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div 
              className="relative aspect-square cursor-pointer"
              onClick={() => handleImageClick('/art/liked/1-32●.webp')}
            >
              <img
                src="/art/liked/1-32●.webp"
                alt="Liked Artwork"
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </div>
            <div 
              className="relative aspect-square cursor-pointer"
              onClick={() => handleImageClick('/art/liked/another.jpeg')}
            >
              <img
                src="/art/liked/another.jpeg"
                alt="Another Liked Artwork"
                className="w-full h-full object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <button
              className="absolute -top-10 right-0 text-white hover:text-gray-300"
              onClick={handleCloseModal}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="max-w-full max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
} 