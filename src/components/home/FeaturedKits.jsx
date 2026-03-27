import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function FeaturedKits({ products }) {
  if (!products || products.length === 0) return null;

  return (
    <section className="bg-washed-bone py-24 md:py-32">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16">
          <div>
            <p className="font-mono text-[10px] tracking-[0.5em] text-veridian/40 uppercase mb-4">
              The Kits
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-veridian leading-tight">
              Drinks &
              <br />
              <span className="italic">DIY Kits</span>
            </h2>
          </div>
          <Link
            to="/products"
            className="font-mono text-xs tracking-[0.2em] text-veridian/50 hover:text-veridian transition-colors uppercase mt-6 sm:mt-0 flex items-center gap-2"
          >
            View All
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link to={`/product?id=${product.id}`} className="group block">
                <div className="relative overflow-hidden rounded-sm bg-veridian/5 aspect-[4/5] mb-4">
                  {product.image_url && (
                    <img
                      src={product.image_url}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  )}
                  <div className="absolute inset-0 bg-veridian/0 group-hover:bg-veridian/10 transition-colors duration-500" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-body text-base font-semibold text-veridian group-hover:text-electric-matcha transition-colors">
                      {product.name}
                    </h3>
                    <p className="font-body text-sm text-veridian/50 mt-1 line-clamp-1">
                      {product.description}
                    </p>
                  </div>
                  <span className="font-mono text-sm text-veridian/70 shrink-0 ml-4">
                    ${product.price?.toFixed(2)}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}