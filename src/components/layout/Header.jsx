import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Header({ cartCount = 0, onCartClick }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftLinks = [
    { label: 'HOME', path: '/' },
    { label: 'KITS', path: '/products' },
  ];

  const rightLinks = [
    { label: 'SYRUPS', path: '/products' },
    { label: 'THE PROCESS', path: '/' },
  ];

  const allLinks = [...leftLinks, ...rightLinks];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-24 backdrop-blur-xl bg-sage-light/80 border-b border-veridian/10">
        <div className="h-full max-w-[1440px] mx-auto px-6 relative flex items-center justify-between">

          {/* Left nav (desktop) */}
          <nav className="hidden md:flex items-center gap-8 flex-1 justify-end pr-10">
            {leftLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="font-mono text-xs tracking-[0.2em] text-veridian/70 hover:text-veridian transition-colors uppercase"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Centered logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:flex md:items-center md:justify-center md:shrink-0">
            <Logo variant="icon" size="xl" useTransparent />
          </div>

          {/* Right nav + cart (desktop) */}
          <div className="hidden md:flex items-center gap-8 flex-1 pl-10">
            {rightLinks.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className="font-mono text-xs tracking-[0.2em] text-veridian/70 hover:text-veridian transition-colors uppercase"
              >
                {item.label}
              </Link>
            ))}

            <div className="ml-auto">
              <button
                onClick={onCartClick}
                className="relative flex items-center gap-2 font-mono text-xs tracking-wider text-veridian hover:text-electric-matcha transition-colors focus:outline-none focus:ring-2 focus:ring-electric-matcha focus:ring-offset-2 rounded-sm"
                aria-label="Open cart"
              >
                <ShoppingBag className="w-4 h-4" />
                <span className="uppercase">Lab Inventory</span>
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-4 w-4 h-4 bg-electric-matcha text-veridian text-[10px] font-bold flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Mobile: hamburger (left) + cart (right) */}
          <div className="flex md:hidden items-center gap-4">
            <button
              onClick={() => setMenuOpen(true)}
              className="text-veridian focus:outline-none focus:ring-2 focus:ring-electric-matcha rounded-sm"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          <div className="flex md:hidden items-center">
            <button
              onClick={onCartClick}
              className="relative flex items-center gap-2 font-mono text-xs tracking-wider text-veridian hover:text-electric-matcha transition-colors focus:outline-none focus:ring-2 focus:ring-electric-matcha focus:ring-offset-2 rounded-sm"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 w-4 h-4 bg-electric-matcha text-veridian text-[10px] font-bold flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen curtain menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[60] bg-veridian flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-4 right-6 text-washed-bone focus:outline-none focus:ring-2 focus:ring-electric-matcha rounded-sm"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>

            <nav className="flex flex-col items-center gap-8">
              {allLinks.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="font-handwritten text-4xl sm:text-6xl text-washed-bone hover:text-electric-matcha transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
