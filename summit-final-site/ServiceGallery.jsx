import React, { useState, useEffect } from 'react';

export default function ServiceGallery({ title, images }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');

  useEffect(() => {
    document.body.style.overflow = selectedImage ? 'hidden' : 'auto';
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
    <div className="flex flex-wrap gap-4">
  {images.map((src, idx) => (
    <div
      key={idx}
      className="w-[235px] h-[315px] overflow-hidden rounded-xl shadow-md cursor-pointer hover:scale-105 transition"
      onClick={() => handleImageClick(src, idx)}
    >
      <img
        src={src}
        alt={`${title} ${idx + 1}`}
        className="w-full h-full object-cover"
      />
    </div>
  ))}
</div>


  ))}
</div>


      {selectedImage && (
  <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
    <div className="relative max-w-[90vw] max-h-[90vh]">
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-red-400"
      >
        &times;
      </button>
      <img
        src={selectedImage}
        alt={caption}
        className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
      />
      <p className="text-white text-center mt-4">{caption}</p>
    </div>
  </div>
)}

    </div>
  );
}
