import React from 'react';

export default function ProductGallery({ product }) {
  const images = [product.image_url, product.image_url_2].filter(Boolean);

  if (images.length === 0) {
    return (
      <div className="aspect-square bg-veridian/5 rounded-sm flex items-center justify-center">
        <span className="font-mono text-xs text-veridian/30 tracking-wider">NO IMAGE</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="aspect-square overflow-hidden rounded-sm bg-veridian/5">
        <img
          src={images[0]}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      {images[1] && (
        <div className="aspect-[3/2] overflow-hidden rounded-sm bg-veridian/5">
          <img
            src={images[1]}
            alt={`${product.name} - detail view`}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </div>
  );
}