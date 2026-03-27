import React from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';

export default function SyrupCarousel({ syrups, selectedSyrup, onSelect, onAddSyrup }) {
  if (!syrups || syrups.length === 0) return null;

  return (
    <div className="bg-veridian/5 py-12 md:py-16">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="flex justify-between items-end mb-8">
          <div>
            <p className="font-mono text-[10px] tracking-[0.5em] text-syrup-amber uppercase mb-2">
              Pair a Syrup
            </p>
            <h3 className="font-display text-2xl md:text-3xl text-veridian italic">
              Complete the ritual
            </h3>
          </div>
        </div>

        <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 -mx-2 px-2 scrollbar-hide">
          {syrups.map((syrup, i) => (
            <motion.div
              key={syrup.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="shrink-0 w-48 md:w-56"
            >
              <button
                onClick={() => onSelect(syrup)}
                className={`w-full text-left group rounded-sm transition-all duration-300 ${
                  selectedSyrup?.id === syrup.id
                    ? 'ring-2 ring-electric-matcha'
                    : ''
                }`}
                aria-label={`Select ${syrup.name} syrup`}
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm bg-washed-bone mb-3">
                  {syrup.image_url ? (
                    <img
                      src={syrup.image_url}
                      alt={syrup.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div
                      className="w-full h-full flex items-center justify-center"
                      style={{ backgroundColor: syrup.color_hex || '#C68B59' }}
                    >
                      <span className="font-mono text-xs text-white/70">{syrup.name?.[0]}</span>
                    </div>
                  )}
                </div>
                <h4 className="font-body text-sm font-semibold text-veridian group-hover:text-electric-matcha transition-colors">
                  {syrup.name}
                </h4>
                <p className="font-mono text-xs text-veridian/50 mt-1">${syrup.price?.toFixed(2)}</p>
              </button>

              {selectedSyrup?.id === syrup.id && (
                <motion.button
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  onClick={() => onAddSyrup(syrup)}
                  className="mt-2 flex items-center gap-1 font-mono text-[10px] tracking-wider text-electric-matcha hover:text-veridian transition-colors uppercase"
                >
                  <Plus className="w-3 h-3" />
                  Add to Lab
                </motion.button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}