import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Logo from '@/components/ui/Logo';

export default function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-veridian text-washed-bone">
      <div className="max-w-[1440px] mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

          {/* Batch Numbers */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] tracking-[0.4em] text-electric-matcha uppercase mb-6">
              Batch Log
            </h3>
            <div className="space-y-3 font-mono text-xs text-washed-bone/50">
              <div className="flex justify-between">
                <span>Batch #2026-0327</span>
                <span>Uji, Kyoto</span>
              </div>
              <div className="flex justify-between">
                <span>Batch #2026-0315</span>
                <span>Nishio, Aichi</span>
              </div>
              <div className="flex justify-between">
                <span>Batch #2026-0301</span>
                <span>Yame, Fukuoka</span>
              </div>
              <div className="border-t border-washed-bone/10 pt-3 mt-4">
                <p className="text-washed-bone/30 text-[10px] tracking-wider">FRESHNESS GUARANTEE: 14 DAYS</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-6 md:px-8">
            <h3 className="font-handwritten text-4xl md:text-5xl text-washed-bone mb-3">
              Whisk With Us
            </h3>
            <p className="font-body text-sm text-washed-bone/50 mb-6 max-w-md">
              Join our laboratory. Receive new batch alerts, syrup recipes, and ritual guides.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-washed-bone/20 text-washed-bone placeholder:text-washed-bone/30 font-mono text-xs rounded-sm h-10 focus:border-electric-matcha"
              />
              <Button
                className="bg-electric-matcha text-veridian hover:bg-washed-bone font-mono text-xs tracking-wider rounded-sm h-10 px-4 transition-colors"
                aria-label="Subscribe to newsletter"
              >
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Legal / Nutritional Label Grid */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] tracking-[0.4em] text-electric-matcha uppercase mb-6">
              Lab Info
            </h3>
            <div className="space-y-2 font-mono text-xs text-washed-bone/40">
              <div className="border border-washed-bone/10 p-2 rounded-sm">
                <div className="flex justify-between border-b border-washed-bone/10 pb-1 mb-1">
                  <span>Est.</span>
                  <span>2024</span>
                </div>
                <div className="flex justify-between border-b border-washed-bone/10 pb-1 mb-1">
                  <span>Origin</span>
                  <span>Japan</span>
                </div>
                <div className="flex justify-between border-b border-washed-bone/10 pb-1 mb-1">
                  <span>Grade</span>
                  <span>Ceremonial</span>
                </div>
                <div className="flex justify-between">
                  <span>Syrups</span>
                  <span>Handmade</span>
                </div>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="hover:text-electric-matcha transition-colors">IG</a>
                <a href="#" className="hover:text-electric-matcha transition-colors">TK</a>
                <a href="#" className="hover:text-electric-matcha transition-colors">TW</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-6 border-t border-washed-bone/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <Logo variant="icon" size="sm" linkTo="/" />
            <p className="font-mono text-[10px] tracking-[0.2em] text-washed-bone/30 uppercase">
              © 2026 matchale. All rights reserved.
            </p>
          </div>
          <div className="flex gap-6 font-mono text-[10px] tracking-wider text-washed-bone/30 uppercase">
            <a href="#" className="hover:text-electric-matcha transition-colors">Privacy</a>
            <a href="#" className="hover:text-electric-matcha transition-colors">Terms</a>
            <a href="#" className="hover:text-electric-matcha transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
}