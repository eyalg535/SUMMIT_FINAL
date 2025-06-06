import React from 'react';

export default function ServiceGallery({ title, images }) {
  return (
    <div className="mb-10">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden border shadow-md p-2 bg-white"
          >
            <img
              src={src}
              alt={`${title} ${index + 1}`}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
