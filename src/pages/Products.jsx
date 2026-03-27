import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Header from '@/components/layout/Header';
import CartSidebar from '@/components/layout/CartSidebar';
import Footer from '@/components/layout/Footer';

export default function Products() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products-all'],
    queryFn: () => base44.entities.Product.list('-created_date'),
    initialData: [],
  });

  const { data: syrups } = useQuery({
    queryKey: ['syrups-all'],
    queryFn: () => base44.entities.Syrup.list('-created_date'),
    initialData: [],
  });

  const addToCart = (item) => {
    setCartItems(prev => {
      const exists = prev.find(i => i.id === item.id);
      if (exists) return prev.map(i => i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i);
      return [...prev, { ...item, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const updateQuantity = (id, qty) => {
    if (qty <= 0) setCartItems(prev => prev.filter(i => i.id !== id));
    else setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
  };

  return (
    <div className="min-h-screen bg-washed-bone">
      <Header
        cartCount={cartItems.reduce((sum, i) => sum + i.quantity, 0)}
        onCartClick={() => setCartOpen(true)}
      />
      <CartSidebar
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateQuantity}
        onRemove={(id) => setCartItems(prev => prev.filter(i => i.id !== id))}
      />

      <main className="pt-14">
        {/* Hero */}
        <div className="max-w-[1440px] mx-auto px-6 pt-16 md:pt-24 pb-12">
          <p className="font-mono text-[10px] tracking-[0.5em] text-veridian/40 uppercase mb-4">
            Lab Collection
          </p>
          <h1 className="font-display text-5xl md:text-6xl text-veridian leading-tight">
            The
            <br />
            <span className="italic">inventory</span>
          </h1>
        </div>

        {/* Kits */}
        {products.length > 0 && (
          <section className="max-w-[1440px] mx-auto px-6 pb-16">
            <h2 className="font-mono text-[10px] tracking-[0.5em] text-veridian/40 uppercase mb-8">
              Matcha Kits
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {products.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
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
                      <div className="absolute top-3 right-3 w-8 h-8 bg-washed-bone/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ArrowUpRight className="w-4 h-4 text-veridian" />
                      </div>
                    </div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-body text-base font-semibold text-veridian group-hover:text-electric-matcha transition-colors">
                          {product.name}
                        </h3>
                        <p className="font-body text-sm text-veridian/50 mt-1 line-clamp-2">
                          {product.description}
                        </p>
                      </div>
                      <span className="font-mono text-sm text-veridian/70 shrink-0 ml-4">
                        ${product.price?.toFixed(2)}
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => addToCart(product)}
                    className="mt-3 font-mono text-[10px] tracking-[0.3em] text-veridian/50 hover:text-electric-matcha transition-colors uppercase"
                  >
                    + Quick Add
                  </button>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Syrups */}
        {syrups.length > 0 && (
          <section className="bg-syrup-amber/10 py-16 md:py-24">
            <div className="max-w-[1440px] mx-auto px-6">
              <h2 className="font-mono text-[10px] tracking-[0.5em] text-syrup-amber uppercase mb-2">
                Homemade Syrups
              </h2>
              <p className="font-display text-3xl text-veridian italic mb-10">Pair your ritual</p>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                {syrups.map((syrup, i) => (
                  <motion.div
                    key={syrup.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group"
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
                          className="w-full h-full"
                          style={{ backgroundColor: syrup.color_hex || '#C68B59' }}
                        />
                      )}
                    </div>
                    <h3 className="font-body text-sm font-semibold text-veridian">{syrup.name}</h3>
                    <p className="font-body text-xs text-veridian/40 mt-1 line-clamp-2">{syrup.description}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="font-mono text-xs text-veridian/60">${syrup.price?.toFixed(2)}</span>
                      <button
                        onClick={() => addToCart(syrup)}
                        className="font-mono text-[10px] tracking-wider text-veridian/40 hover:text-electric-matcha transition-colors uppercase"
                      >
                        + Add
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {isLoading && (
          <div className="flex items-center justify-center py-32">
            <div className="w-6 h-6 border-2 border-veridian/20 border-t-veridian rounded-full animate-spin" />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}