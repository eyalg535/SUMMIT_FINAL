// components/ServiceGallery.jsx
import React, { useState } from 'react';

export default function ServiceGallery({ title, images }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="mb-10">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${title} ${index + 1}`}
            className="w-full h-48 object-cover rounded-xl cursor-pointer hover:opacity-80"
            onClick={() => setSelected(img)}
          />
        ))}
      </div>

      {selected && (
        <div
          onClick={() => setSelected(null)}
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        >
          <img src={selected} alt="Enlarged" className="max-w-full max-h-full rounded-xl shadow-xl" />
        </div>
      )}
    </div>
  );
}
