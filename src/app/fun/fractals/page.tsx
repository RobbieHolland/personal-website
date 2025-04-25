'use client';

import { useEffect, useRef, useState } from 'react';

interface CNum {
  Re: number;
  Im: number;
}

interface Coord {
  x: number;
  y: number;
}

interface Bound {
  axis: CNum;
  coord: Coord | null;
}

interface RGB {
  red: number;
  green: number;
  blue: number;
}

export default function FractalsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Fractals</h1>
      
      <div className="bg-gray-900 rounded-lg shadow-lg p-6">
        <div className="mb-4">
          <p className="text-gray-400 mb-4">
            Click the image below to open the interactive Mandelbrot set viewer in a new tab.
            Click and drag to zoom into different regions of the fractal.
          </p>
          <a
            href="/fractal.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4"
          >
            <img
              src="/mandelbot_preview.png"
              alt="Mandelbrot Set Preview"
              className="w-full h-auto rounded-lg border border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
            />
          </a>
          <a
            href="/fractal.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Open Mandelbrot Set Viewer (Click & Drag to Zoom)
          </a>
        </div>
      </div>
    </div>
  );
} 