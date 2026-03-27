import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const offerings = [
  { emoji: '🍵', label: 'Cold Foam Matcha', desc: 'Thick, velvety cold foam on vibrant ceremonial matcha.' },
  { emoji: '🫙', label: 'Homemade Syrups', desc: 'Lavender vanilla, honey ginger, vanilla bean — made fresh.' },
  { emoji: '📦', label: 'DIY Kits', desc: 'Syrups, cold foam, a whisk & glass. Make it at home.' },
];

export default function SyrupBanner({ syrupImage }) {
  return (
    <section className="relative bg-syrup-amber/10 py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-mono text-[10px] tracking-[0.5em] text-syrup-amber uppercase mb-4">
              What We Make
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-veridian leading-tight mb-8">
              More than
              <br />
              <span className="italic">just matcha</span>
            </h2>

            <div className="space-y-6 mb-10">
              {offerings.map((o) => (
                <div key={o.label} className="flex gap-4 items-start">
                  <span className="text-2xl mt-0.5">{o.emoji}</span>
                  <div>
                    <h3 className="font-body text-base font-semibold text-veridian">{o.label}</h3>
                    <p className="font-body text-sm text-veridian/55 leading-relaxed">{o.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/products"
              className="inline-block font-mono text-xs tracking-[0.3em] text-veridian border-b-2 border-syrup-amber pb-1 hover:text-syrup-amber transition-colors uppercase"
            >
              See Everything →
            </Link>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <img
              src={syrupImage}
              alt="Handmade syrup being poured into a matcha drink"
              className="w-full max-w-lg rounded-2xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}