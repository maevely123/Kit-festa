import React from 'react';
import { CTAButton, SectionBadge } from '../ui/Button';
import { motion } from 'motion/react';
import { CheckCircle2, LayoutTemplate, Layers, Star } from 'lucide-react';

export function UrgencyBar() {
  return (
    <div className="bg-purple-700 text-white py-2 px-4 text-center text-xs font-bold tracking-widest uppercase">
      OFERTA ESPECIAL • ACESSO IMEDIATO
    </div>
  );
}

export function Hero() {
  return (
    <section className="pt-6 pb-8 md:pt-10 md:pb-12 px-4 md:px-8 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <SectionBadge>
          <LayoutTemplate className="w-4 h-4" />
          Acervo Profissional de Moldes
        </SectionBadge>
        
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight max-w-4xl leading-tight mb-4">
          Tenha um <span className="text-purple-600">acervo profissional</span> com milhares de moldes prontos em <span className="text-purple-600 underline">poucos minutos</span>
        </h1>
        
        <p className="text-sm md:text-lg text-slate-600 max-w-3xl mb-6 md:mb-8 leading-relaxed">
          Mais de <strong className="text-slate-800">7.500 artes e moldes editáveis</strong>, compatíveis com Canva, CorelDraw e Silhouette Studio. Agilidade, variedade e praticidade para o seu negócio.
        </p>

        <div className="relative w-full max-w-5xl mx-auto mb-12 group">
          <div className="absolute inset-0 bg-purple-500 opacity-5 blur-3xl rounded-full"></div>
          <div className="relative rounded-3xl shadow-2xl overflow-hidden bg-white border border-slate-100 flex items-center justify-center">
            <img 
              src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1787797155/ChatGPT_Image_26_de_ago._de_2026_23_14_17_s9nbik.png" 
              alt="Prévia do Acervo de Moldes" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        <CTAButton href="#oferta">
          QUERO RECEBER O ACERVO COMPLETO
        </CTAButton>

        <p className="text-sm text-slate-500 mt-6 max-w-md mx-auto">
          Você compra online e recebe o acesso ao material digital. Nenhum produto físico será enviado.
        </p>
      </motion.div>
    </section>
  );
}

export function Numbers() {
  const stats = [
    { value: '7.500+', label: 'arquivos profissionais' },
    { value: '3', label: 'programas compatíveis' },
    { value: '12+', label: 'categorias organizadas' },
    { value: 'IMEDIATO', label: 'acesso após a compra' },
  ];

  return (
    <section className="py-8 md:py-12 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="bg-white rounded-3xl border border-purple-100 shadow-lg p-6 flex flex-col justify-center items-center text-center">
              <div className="text-3xl md:text-4xl font-black text-purple-600 mb-2 leading-none">{stat.value}</div>
              <div className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
