import React, { useState, useEffect } from 'react';

export default function ServiceGallery({ title, images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden'; // Disable scroll
    } else {
      document.body.style.overflow = 'auto'; // Re-enable scroll
    }
  }, [selectedImage]);

  const handleImageClick = (src, index) => {
    setSelectedImage(src);
    setCaption(`${title} ${index + 1}`);
  };

  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`${title} ${idx + 1}`}
            className="w-[220px] h-[220px] object-cover rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
            onClick={() => handleImageClick(src, idx)}
          />
        ))}
      </div>

      {selectedImage && (
  <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
    <div className="relative">
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
      >
        &times;
      </button>
      <img
        src={selectedImage}
        alt={caption}
        className="max-w-full max-h-[85vh] rounded-lg shadow-2xl"
      />
      <p className="text-white text-center mt-4">{caption}</p>
    </div>
  </div>
)}

    </div>
  );
}
