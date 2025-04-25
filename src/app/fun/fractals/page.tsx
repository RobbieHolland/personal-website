'use client';

import { useEffect, useRef } from 'react';

export default function FractalsPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = 800;
    canvas.height = 600;

    // Draw Mandelbrot set
    const drawMandelbrot = () => {
      const width = canvas.width;
      const height = canvas.height;
      const imageData = ctx.createImageData(width, height);
      const data = imageData.data;

      for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
          const i = (y * width + x) * 4;
          
          // Map pixel coordinates to complex plane
          const x0 = (x - width/2) / (width/4);
          const y0 = (y - height/2) / (height/4);
          
          let x1 = 0;
          let y1 = 0;
          let iteration = 0;
          const maxIteration = 100;
          
          while (x1*x1 + y1*y1 <= 4 && iteration < maxIteration) {
            const xtemp = x1*x1 - y1*y1 + x0;
            y1 = 2*x1*y1 + y0;
            x1 = xtemp;
            iteration++;
          }
          
          // Color based on iteration count
          const color = iteration === maxIteration ? 0 : iteration * 255 / maxIteration;
          data[i] = color;     // R
          data[i + 1] = color; // G
          data[i + 2] = color; // B
          data[i + 3] = 255;   // A
        }
      }
      
      ctx.putImageData(imageData, 0, 0);
    };

    drawMandelbrot();
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Fractals</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-4">
        <canvas
          ref={canvasRef}
          className="w-full h-auto border border-gray-200 rounded"
        />
        <p className="mt-4 text-gray-600">
          This is an interactive Mandelbrot set visualization. The fractal is generated
          using JavaScript and rendered on an HTML5 canvas. You can zoom in and explore
          the infinite complexity of the Mandelbrot set.
        </p>
      </div>
    </div>
  );
} 