import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function CartSidebar({ isOpen, onClose, cartItems, onUpdateQuantity, onRemove }) {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-veridian/40 z-[70]"
            onClick={onClose}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-washed-bone z-[80] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-veridian/10">
              <h2 className="font-mono text-sm tracking-[0.3em] text-veridian uppercase">
                Lab Inventory
              </h2>
              <button
                onClick={onClose}
                className="text-veridian hover:text-electric-matcha transition-colors focus:outline-none focus:ring-2 focus:ring-electric-matcha rounded-sm"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-12 h-12 text-veridian/20 mb-4" />
                  <p className="font-body text-veridian/50 text-lg">Your lab is empty</p>
                  <p className="font-mono text-xs text-veridian/30 mt-2 tracking-wider">ADD SPECIMENS TO BEGIN</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      {item.image_url && (
                        <img
                          src={item.image_url}
                          alt={item.name}
                          className="w-20 h-20 object-cover rounded-sm"
                        />
                      )}
                      <div className="flex-1">
                        <h3 className="font-body text-sm font-semibold text-veridian">{item.name}</h3>
                        <p className="font-mono text-xs text-veridian/60 mt-1">${item.price.toFixed(2)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                            className="w-6 h-6 flex items-center justify-center border border-veridian/20 text-veridian hover:bg-veridian hover:text-washed-bone transition-colors rounded-sm"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="font-mono text-xs text-veridian">{item.quantity}</span>
                          <button
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                            className="w-6 h-6 flex items-center justify-center border border-veridian/20 text-veridian hover:bg-veridian hover:text-washed-bone transition-colors rounded-sm"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-veridian/30 hover:text-destructive transition-colors self-start"
                        aria-label={`Remove ${item.name}`}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {cartItems.length > 0 && (
              <div className="p-6 border-t border-veridian/10">
                <div className="flex justify-between items-center mb-4">
                  <span className="font-mono text-xs tracking-[0.2em] text-veridian/60 uppercase">Subtotal</span>
                  <span className="font-display text-xl text-veridian">${subtotal.toFixed(2)}</span>
                </div>
                <Button className="w-full bg-veridian text-washed-bone hover:bg-electric-matcha hover:text-veridian font-mono text-xs tracking-[0.2em] uppercase h-12 rounded-sm transition-all duration-300">
                  Complete Experiment
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}