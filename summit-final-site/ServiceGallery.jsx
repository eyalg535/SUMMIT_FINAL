// components/ServiceGallery.jsx
import React from 'react';

export default function ServiceGallery({ title, images }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((src, index) => (
          <div key={index} className="overflow-hidden rounded-xl border shadow-sm">
            <img
              src={src}
              alt={`${title} ${index + 1}`}
              className="w-full h-auto max-h-[300px] object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}