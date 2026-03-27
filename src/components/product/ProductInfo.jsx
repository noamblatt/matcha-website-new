import React from 'react';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductInfo({ product, onAddToCart }) {
  const details = [
    { label: 'Origin', value: product.origin },
    { label: 'Flavor Profile', value: product.flavor_profile },
    { label: 'Ingredients', value: product.ingredients },
  ].filter(d => d.value);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="font-mono text-[10px] tracking-[0.5em] text-veridian/40 uppercase mb-3">
          {product.category?.replace(/_/g, ' ') || 'Matcha Kit'}
        </p>
        <h1 className="font-display text-4xl md:text-5xl text-veridian mb-4 leading-tight">
          {product.name}
        </h1>
        <p className="font-mono text-xl text-veridian/70 mb-6">
          ${product.price?.toFixed(2)}
        </p>
        <p className="font-body text-base text-veridian/60 leading-relaxed mb-8 max-w-lg">
          {product.long_description || product.description}
        </p>

        <Button
          onClick={onAddToCart}
          className="bg-veridian text-washed-bone hover:bg-electric-matcha hover:text-veridian font-mono text-xs tracking-[0.2em] uppercase h-12 px-8 rounded-sm transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-electric-matcha"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add to Lab
        </Button>

        {!product.in_stock && (
          <p className="font-mono text-xs text-destructive mt-3 tracking-wider">OUT OF STOCK</p>
        )}
      </motion.div>

      {details.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 border-t border-veridian/10 pt-8 space-y-6"
        >
          {details.map((detail) => (
            <div key={detail.label}>
              <h3 className="font-mono text-[10px] tracking-[0.4em] text-veridian/40 uppercase mb-2">
                {detail.label}
              </h3>
              <p className="font-body text-base text-veridian/70 leading-relaxed">
                {detail.value}
              </p>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}