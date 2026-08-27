import React from 'react';
import { SectionBadge, CTAButton } from '../ui/Button';
import { MessageCircle, Clock, CheckCircle2, Zap, Palette, Layers, Search, MousePointerClick, Printer } from 'lucide-react';
import { motion } from 'motion/react';

export function Problem() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-5xl mx-auto bg-slate-50">
      <div className="text-center mb-16">
        <SectionBadge>O Problema de quem trabalha com personalizados</SectionBadge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 max-w-2xl mx-auto">
          Quantas vezes um cliente pede um tema que você ainda não tem?
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* WhatsApp Mockup */}
        <div className="bg-white rounded-[2.5rem] shadow-xl border-8 border-slate-100 overflow-hidden max-w-sm mx-auto w-full">
          <div className="bg-[#075e54] text-white p-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" alt="Cliente" className="w-full h-full object-cover" />
            </div>
            <div>
              <p className="font-bold">Cliente</p>
              <p className="text-xs text-white/80">online</p>
            </div>
          </div>
          <div className="bg-[#efeae2] p-4 flex flex-col gap-3 min-h-[300px]">
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm w-fit max-w-[85%] text-slate-800 relative">
              Você tem esse tema?
              <span className="text-[10px] text-slate-400 absolute right-2 bottom-1">09:41</span>
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm w-fit max-w-[85%] text-slate-800 relative">
              Preciso de um kit nesse personagem.
              <span className="text-[10px] text-slate-400 absolute right-2 bottom-1">09:42</span>
            </div>
            <div className="bg-white p-3 rounded-2xl rounded-tl-sm shadow-sm w-fit max-w-[85%] text-slate-800 relative">
              Tem como fazer essas caixinhas?
              <span className="text-[10px] text-slate-400 absolute right-2 bottom-1">09:45</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 rounded-2xl border-l-4 border-red-400 shadow-sm">
            <h3 className="flex items-center gap-2 text-red-500 font-bold text-lg mb-2">
              <Clock className="w-5 h-5" /> SEM UM ACERVO
            </h3>
            <p className="text-slate-600 font-medium">
              Você perde tempo procurando, cria arquivos do zero ou precisa recusar determinados pedidos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-2xl border-l-4 border-green-500 shadow-sm">
            <h3 className="flex items-center gap-2 text-green-600 font-bold text-lg mb-2">
              <CheckCircle2 className="w-5 h-5" /> COM UM ACERVO
            </h3>
            <p className="text-slate-600 font-medium">
              Você encontra modelos, adapta o arquivo e consegue responder ao cliente muito mais rápido.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Transformation() {
  const benefits = [
    {
      icon: Zap,
      title: "Responda mais rápido",
      desc: "Encontre modelos para responder aos pedidos dos seus clientes."
    },
    {
      icon: Layers,
      title: "Milhares de temas",
      desc: "Tenha variedade para diferentes personagens, festas e ocasiões."
    },
    {
      icon: Palette,
      title: "Edite com facilidade",
      desc: "Abra os arquivos nos programas compatíveis e faça as alterações necessárias."
    },
    {
      icon: Printer,
      title: "Produza seu pedido",
      desc: "Depois de editar, basta produzir o personalizado conforme sua necessidade."
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto text-center bg-white">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 max-w-3xl mx-auto mb-6">
        Chega de procurar um arquivo toda vez que aparece um pedido.
      </h2>
      <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-16 font-medium">
        Tenha uma biblioteca de modelos à sua disposição para encontrar rapidamente diferentes temas, formatos e ocasiões.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {benefits.map((b, i) => (
          <div key={i} className="bg-purple-50 rounded-2xl p-8 flex flex-col items-center text-center border border-purple-100 hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-purple-600 mb-6 shadow-sm">
              <b.icon className="w-7 h-7" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">{b.title}</h3>
            <p className="text-slate-600">{b.desc}</p>
          </div>
        ))}
      </div>

      <CTAButton href="#oferta" className="mx-auto">
        QUERO TER ESSE ACERVO
      </CTAButton>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: Search,
      title: "Encontre o Tema",
      desc: "Pesquise entre os modelos disponíveis."
    },
    {
      num: "02",
      icon: MousePointerClick,
      title: "Edite",
      desc: "Abra o arquivo no programa compatível e personalize conforme seu pedido."
    },
    {
      num: "03",
      icon: Printer,
      title: "Produza",
      desc: "Imprima, corte, monte e entregue o personalizado ao seu cliente."
    }
  ];

  return (
    <section className="py-8 md:py-24 px-4 md:px-8 max-w-4xl mx-auto my-6 md:my-12">
      <div className="bg-green-50 rounded-3xl border border-green-100 p-6 md:p-12 flex flex-col justify-center">
        <h4 className="text-green-800 font-bold text-lg md:text-xl mb-8 flex items-center gap-3">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span> Como funciona:
        </h4>
        <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-full bg-green-200 text-green-700 flex items-center justify-center text-sm font-black shrink-0">
                {step.num}
              </div>
              <div>
                <p className="text-sm md:text-base leading-tight font-bold text-green-900 mb-2">{step.title}</p>
                <p className="text-xs md:text-sm text-green-800/80 font-medium">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
