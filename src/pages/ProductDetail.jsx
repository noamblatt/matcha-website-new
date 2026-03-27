import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from 'lucide-react';
import Header from '@/components/layout/Header';
import CartSidebar from '@/components/layout/CartSidebar';
import Footer from '@/components/layout/Footer';
import ProductGallery from '@/components/product/ProductGallery';
import ProductInfo from '@/components/product/ProductInfo';
import SyrupCarousel from '@/components/product/SyrupCarousel';

export default function ProductDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get('id');

  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [selectedSyrup, setSelectedSyrup] = useState(null);

  const { data: products } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => base44.entities.Product.filter({ id: productId }),
    enabled: !!productId,
  });

  const { data: syrups } = useQuery({
    queryKey: ['syrups'],
    queryFn: () => base44.entities.Syrup.list(),
    initialData: [],
  });

  const product = products?.[0];

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

  if (!product) {
    return (
      <div className="min-h-screen bg-washed-bone flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-veridian/20 border-t-veridian rounded-full animate-spin" />
      </div>
    );
  }

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
        {/* Breadcrumb */}
        <div className="max-w-[1440px] mx-auto px-6 pt-8">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-[0.2em] text-veridian/40 hover:text-veridian transition-colors uppercase"
          >
            <ArrowLeft className="w-3 h-3" />
            Back to Inventory
          </Link>
        </div>

        {/* Product Layout */}
        <div className="max-w-[1440px] mx-auto px-6 py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <div className="lg:sticky lg:top-24 lg:self-start">
              <ProductGallery product={product} />
            </div>
            <ProductInfo
              product={product}
              onAddToCart={() => addToCart(product)}
            />
          </div>
        </div>

        {/* Syrup Carousel */}
        <SyrupCarousel
          syrups={syrups}
          selectedSyrup={selectedSyrup}
          onSelect={setSelectedSyrup}
          onAddSyrup={addToCart}
        />
      </main>

      <Footer />
    </div>
  );
}