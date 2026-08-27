import React from 'react';
import { SectionBadge, CTAButton } from '../ui/Button';
import { FolderHeart, MonitorSmartphone, CheckCircle, PackageSearch, LayoutList, DownloadCloud, PenTool, Gem, Layers } from 'lucide-react';

export function ProductGrid() {
  const categories = [
    "Kit Festa Infantil", "Kit Festa Adulto", "Convites", "Topos de Bolo",
    "Caixa Milk", "Tubetes", "Sacolinhas", "Bandeirolas",
    "Rótulos", "Lembrancinhas", "Toppers", "Muito mais..."
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Veja o que você encontra dentro do acervo
        </h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto font-medium">
          Uma biblioteca de modelos organizada para facilitar sua rotina de personalizados.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-12 max-w-5xl mx-auto">
        {categories.map((cat, i) => (
          <div key={i} className="bg-slate-50 rounded-xl border border-slate-100 p-4 flex flex-col items-center justify-center text-center aspect-square transition-all hover:bg-slate-100 cursor-pointer">
            <div className="w-12 h-12 bg-purple-200 rounded-lg mb-3 flex items-center justify-center text-purple-700">
               <FolderHeart className="w-6 h-6" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold uppercase leading-tight">{cat}</span>
          </div>
        ))}
      </div>

      <CTAButton href="#oferta" className="mx-auto">
        VER TODO O ACERVO
      </CTAButton>
    </section>
  );
}

export function WhatYouGet() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 text-slate-900">
            Tudo organizado em um único acervo
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 p-6 md:p-8 flex flex-col relative overflow-hidden">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
              <PackageSearch className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-2">ACERVO PRINCIPAL</h3>
            <p className="text-4xl font-black text-purple-600 mb-6">+7.500 <span className="text-xl">artes</span></p>
            
            <p className="text-slate-500 mb-4 font-bold text-sm uppercase tracking-tight">Inclui arquivos para:</p>
            <ul className="grid grid-cols-2 gap-3">
              {['Convites', 'Toppers', 'Caixinhas', 'Kits', 'Lembrancinhas', 'Rótulos', 'Temas variados'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-slate-700 font-medium">
                  <CheckCircle className="w-4 h-4 text-purple-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 p-8 flex flex-col relative overflow-hidden">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
              <MonitorSmartphone className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold mb-6">PROGRAMAS COMPATÍVEIS</h3>
            
            <div className="flex flex-col gap-3 flex-1">
              {['Canva', 'CorelDraw', 'Silhouette Studio'].map((prog, i) => (
                <div key={i} className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl flex items-center gap-4">
                  <PenTool className="w-5 h-5 text-purple-400" />
                  <span className="font-bold text-slate-800">{prog}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-purple-50 p-4 rounded-xl border border-purple-100">
               <p className="text-purple-800 text-xs font-medium">
                 * Os arquivos disponíveis possuem formatos compatíveis conforme o material fornecido no acervo.
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Differentiators() {
  const items = [
    { icon: LayoutList, title: "Arquivos Organizados", desc: "Facilite a busca pelo modelo que precisa." },
    { icon: Layers, title: "Grande Variedade", desc: "Tenha diferentes temas e tipos de personalizados." },
    { icon: PenTool, title: "Compatibilidade", desc: "Arquivos preparados para programas populares, conforme os formatos disponibilizados." },
    { icon: Gem, title: "Uso Profissional", desc: "Ideal para quem trabalha com personalizados." },
    { icon: DownloadCloud, title: "Acesso Digital", desc: "Receba o material de forma digital após a compra." }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto bg-slate-50">
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 max-w-2xl mx-auto">
          Mais do que arquivos: uma biblioteca para facilitar sua rotina
        </h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0 text-purple-600">
              <item.icon className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
