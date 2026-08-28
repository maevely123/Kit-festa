import React from 'react';
import { SectionBadge, CTAButton } from '../ui/Button';
import { FolderHeart, MonitorSmartphone, CheckCircle, PackageSearch, LayoutList, DownloadCloud, PenTool, Gem, Layers } from 'lucide-react';

export function ProductGrid() {
  const categories = [
    { name: "Kit Festa Infantil", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875244/kit-infantil-B8-OF8XV_onsu0g.webp" },
    { name: "Kit Festa Adulto", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875548/kit-adulto-29CDo1ka_eajlmx.webp" },
    { name: "Convites", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875599/convites-CdZN-1nQ_tszexq.webp" },
    { name: "Topos de Bolo", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875620/topos-B1K_85-1_dbfe45.webp" },
    { name: "Caixas", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875643/caixas-Dz_X9ztD_vpjgrl.webp" },
    { name: "Tubetes", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875713/tubetes-Bi1xO-HX_qstsax.webp" },
    { name: "Sacolinhas", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875756/sacolinhas-DavjCciZ_p6c7li.webp" },
    { name: "Bandeirolas", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875783/bandeirolas-Cj-cazMZ_sonibc.webp" },
    { name: "Rótulos", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875811/rotulos-E8WG0Yxv_oeap46.webp" },
    { name: "Etiquetas", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875846/etiquetas-DP121LHR_slzq3c.webp" },
    { name: "Toppers", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875919/toppers-Badg83HN_hnqb3w.webp" },
    { name: "Diversos", image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1787875951/kit-infantil-B8-OF8XV_ojudau.webp" }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto bg-white">
      <div className="text-center mb-10 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
          Veja o que você encontra dentro do acervo
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4 mb-12 max-w-6xl mx-auto">
        {categories.map((cat, i) => (
          <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden flex flex-col transition-all hover:shadow-lg hover:border-purple-300 cursor-pointer group shadow-sm">
            <div className="w-full aspect-square overflow-hidden bg-slate-50 relative flex items-center justify-center">
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="bg-white p-3 sm:p-4 border-t border-slate-100 flex items-center justify-center min-h-[48px] sm:min-h-[56px]">
               <span className="text-[10px] sm:text-xs font-bold uppercase text-slate-800 leading-tight text-center">{cat.name}</span>
            </div>
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
    <section className="py-8 md:py-16 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl border border-purple-100 shadow-xl shadow-purple-50 p-8 flex flex-col items-center text-center relative overflow-hidden">
          <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
            <MonitorSmartphone className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-bold mb-6">PROGRAMAS COMPATÍVEIS</h3>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            {['Canva', 'CorelDraw', 'Silhouette Studio'].map((prog, i) => (
              <div key={i} className="bg-slate-50 border border-slate-100 px-6 py-4 rounded-xl flex items-center justify-center gap-3">
                <PenTool className="w-5 h-5 text-purple-400" />
                <span className="font-bold text-slate-800">{prog}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-purple-50 p-4 rounded-xl border border-purple-100 w-full">
             <p className="text-purple-800 text-xs font-medium">
               * Os arquivos disponíveis possuem formatos compatíveis conforme o material fornecido no acervo.
             </p>
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
