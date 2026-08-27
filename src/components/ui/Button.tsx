import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function CTAButton({ href, children, className = '' }: ButtonProps) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
        href={href}
        className="bg-green-500 hover:bg-green-600 text-white text-center py-4 px-4 sm:px-8 rounded-xl font-bold text-base sm:text-lg shadow-lg shadow-green-200 transform transition-all active:scale-95 flex items-center justify-center gap-3 w-full max-w-lg leading-tight"
      >
        <span>{children}</span>
      </motion.a>
      <div className='flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-slate-400 font-medium px-2'>
        <span className='flex items-center gap-1'>✓ Acesso imediato</span>
        <span className='flex items-center gap-1'>✓ Pix ou Cartão</span>
        <span className='flex items-center gap-1'>✓ 7 Dias de Garantia</span>
      </div>
    </div>
  );
}

export function SectionBadge({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  return (
    <span className={`inline-flex items-center justify-center gap-1.5 px-3 py-1.5 bg-purple-100 text-purple-700 rounded-full text-[10px] font-bold uppercase tracking-wider mb-3 w-fit ${className}`}>
      {children}
    </span>
  );
}
