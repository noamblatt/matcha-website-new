import React, { useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/layout/Header';
import CartSidebar from '@/components/layout/CartSidebar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import ProcessSection from '@/components/home/ProcessSection';
import FeaturedKits from '@/components/home/FeaturedKits';
import SyrupBanner from '@/components/home/SyrupBanner';

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const { data: products } = useQuery({
    queryKey: ['products-featured'],
    queryFn: () => base44.entities.Product.filter({ featured: true }),
    initialData: [],
  });

  const updateQuantity = (id, qty) => {
    if (qty <= 0) {
      setCartItems(prev => prev.filter(i => i.id !== id));
    } else {
      setCartItems(prev => prev.map(i => i.id === id ? { ...i, quantity: qty } : i));
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prev => prev.filter(i => i.id !== id));
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
        onRemove={removeFromCart}
      />

      <HeroSection heroImage="https://media.base44.com/images/public/69c68ea8ad04082f2770efa3/96867ff54_generated_6db67f9d.png" />
      <ProcessSection
        whiskImage="https://media.base44.com/images/public/69c68ea8ad04082f2770efa3/1f8727042_generated_6d7d9edb.png"
        powderImage="https://media.base44.com/images/public/69c68ea8ad04082f2770efa3/d08187dd0_generated_2fee63d1.png"
      />
      <FeaturedKits products={products} />
      <SyrupBanner syrupImage="https://media.base44.com/images/public/69c68ea8ad04082f2770efa3/7b7413b7c_generated_01d92689.png" />
      <Footer />
    </div>
  );
}