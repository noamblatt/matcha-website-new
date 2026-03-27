import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDownRight } from 'lucide-react';

export default function HeroSection({ heroImage }) {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-washed-bone pt-24">

      {/* Faint background wordmark */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.3 }}
      >
        <span className="font-handwritten text-[28vw] md:text-[20vw] font-bold text-veridian/[0.04] leading-none whitespace-nowrap">
          matchale
        </span>
      </motion.div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-8 py-16">

        {/* LEFT — Brand identity + CTA */}
        <motion.div
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="font-handwritten text-7xl sm:text-8xl md:text-9xl text-veridian leading-none mb-3">
            matchale
          </h1>

          <p className="font-mono text-[10px] tracking-[0.5em] text-veridian/50 uppercase mb-6">
            Handcrafted matcha drinks & DIY kits
          </p>

          <p className="font-body text-lg text-veridian/60 max-w-md leading-relaxed mb-10">
            Cold foams, homemade syrups, and everything you need to make barista-quality matcha drinks at home.
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Link
              to="/products"
              className="inline-flex items-center gap-3 bg-veridian text-washed-bone px-6 py-3 rounded-full font-mono text-xs tracking-[0.2em] uppercase hover:bg-teal-deep transition-colors"
            >
              Shop Now
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-3 group"
            >
              <span className="font-mono text-xs tracking-[0.3em] text-veridian uppercase group-hover:text-electric-matcha transition-colors">
                Build Your Kit
              </span>
              <span className="w-9 h-9 rounded-full border border-veridian/20 flex items-center justify-center group-hover:bg-electric-matcha group-hover:border-electric-matcha transition-all">
                <ArrowDownRight className="w-4 h-4 text-veridian" />
              </span>
            </Link>
          </div>
        </motion.div>

        {/* RIGHT — Product hero image */}
        <motion.div
          className="flex-1 flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="relative w-full max-w-md lg:max-w-xl">
            <img
              src={heroImage}
              alt="Vibrant green matcha drink with cold foam and handmade syrup"
              className="w-full h-auto rounded-2xl shadow-xl"
            />
            <motion.div
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-electric-matcha/20 rounded-full blur-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </div>

      {/* Rotating CTA */}
      <Link
        to="/products"
        className="hidden lg:flex fixed bottom-8 right-8 z-40 w-28 h-28 items-center justify-center group"
        aria-label="Shop matchale"
      >
        <svg className="absolute inset-0 w-full h-full animate-spin-slow" viewBox="0 0 120 120">
          <path id="circlePath" d="M 60, 60 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0" fill="none" />
          <text fill="#2D6B5E" fontFamily="monospace" fontSize="9" letterSpacing="4">
            <textPath href="#circlePath">SHOP MATCHALE • SHOP MATCHALE •&nbsp;</textPath>
          </text>
        </svg>
        <div className="w-12 h-12 bg-electric-matcha rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
          <ArrowDownRight className="w-5 h-5 text-veridian" />
        </div>
      </Link>
    </section>
  );
}