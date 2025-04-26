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
      <h1 className="text-4xl font-bold mb-8">Interactive Visualizations</h1>
      
      <div className="grid gap-6">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Mandelbrot Set</h2>
          <p className="text-gray-600 mb-4">
            Interactive Mandelbrot set viewer. Click and drag to zoom into different regions of this famous fractal.
          </p>
          <a
            href="/fractals/MandelbrotRemade.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4"
          >
            <img
              src="/fractals/mandelbot_preview.png"
              alt="Mandelbrot Set Preview"
              className="w-full h-auto rounded-lg border border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
            />
          </a>
          <a
            href="/fractals/MandelbrotRemade.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Open Mandelbrot Set Viewer
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">2D Physics Simulation (Java)</h2>
          <p className="text-gray-600 mb-4">
            Interactive Java physics simulation. Click the button below to open it in a new window.
          </p>
          <a
            href="/fractals/JavaProgram.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Open Physics Simulation
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Bifurcation Diagram</h2>
          <p className="text-gray-600 mb-4">
            Interactive visualization of the logistic map's bifurcation diagram. Move your mouse over the diagram to see how the system evolves for different parameter values.
          </p>
          <a
            href="/fractals/Bifurcation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-4"
          >
            <img
              src="/fractals/Bifurcation.png"
              alt="Bifurcation Diagram Preview"
              className="w-full h-auto rounded-lg border border-gray-700 cursor-pointer hover:opacity-90 transition-opacity"
            />
          </a>
          <a
            href="/fractals/Bifurcation.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Open Bifurcation Diagram Viewer
          </a>
        </div>
      </div>
    </div>
  );
} 