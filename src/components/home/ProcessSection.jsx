import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Sourced',
    description: 'We start with premium ceremonial-grade matcha — vibrant, sweet, and never bitter.',
  },
  {
    number: '02',
    title: 'Crafted',
    description: 'Our cold foams and syrups are made fresh in small batches with real ingredients. Lavender, vanilla, honey — no shortcuts.',
  },
  {
    number: '03',
    title: 'Poured',
    description: 'Order a ready-to-drink creation, or grab a DIY Kit — syrups, cold foam, a whisk, and a glass — delivered to your door.',
  },
  {
    number: '04',
    title: 'Enjoyed',
    description: 'Sip it straight or make it yourself. Either way, it takes two minutes and tastes like a café.',
  },
];

export default function ProcessSection({ whiskImage, powderImage }) {
  return (
    <section className="relative bg-veridian py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left - Images */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={whiskImage}
                alt="Vibrant green matcha latte with velvety cold foam on top"
                className="w-full max-w-sm rounded-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-6 ml-auto max-w-[240px]"
            >
              <img
                src={powderImage}
                alt="Homemade syrup bottle on stone surface"
                className="w-full rounded-2xl"
              />
            </motion.div>
          </div>

          {/* Right - Steps */}
          <div className="lg:col-span-7">
            <p className="font-mono text-[10px] tracking-[0.5em] text-electric-matcha uppercase mb-4">
              How It Works
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-washed-bone mb-16 leading-tight">
              From us
              <br />
              <span className="italic">to your glass</span>
            </h2>

            <div className="space-y-12">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex gap-6 group"
                >
                  <span className="font-mono text-xs text-electric-matcha/40 mt-1 shrink-0">
                    {step.number}
                  </span>
                  <div className="border-t border-washed-bone/10 pt-6 flex-1">
                    <h3 className="font-display text-2xl text-washed-bone mb-3 group-hover:text-electric-matcha transition-colors">
                      {step.title}
                    </h3>
                    <p className="font-body text-base text-washed-bone/50 leading-relaxed max-w-md">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}