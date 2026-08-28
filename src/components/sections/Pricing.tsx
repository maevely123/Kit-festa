import React from 'react';
import { CTAButton, SectionBadge } from '../ui/Button';
import { Check, ShieldCheck, Lock, Zap } from 'lucide-react';

export function Pricing() {
  return (
    <section id="oferta" className="py-12 md:py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 text-slate-900">
            Escolha o pacote ideal para você
          </h2>
          <p className="text-xl text-slate-600 font-medium">
            Comece com o essencial ou tenha acesso ao pacote mais completo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
          {/* Basic Package */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 flex flex-col h-full shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Pacote Básico</h3>
            <p className="text-slate-500 mb-8 font-medium">O essencial para começar a trabalhar</p>
            
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-2xl font-bold text-slate-400">R$</span>
              <span className="text-5xl font-black text-slate-900 tracking-tight">10,00</span>
            </div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['Kit Festa pronto', 'Acesso imediato', 'Produto digital', 'Garantia de 7 dias'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <a href="#" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-8 rounded-2xl transition-colors text-center text-lg">
              QUERO O BÁSICO
            </a>
          </div>

          {/* Premium Package */}
          <div className="bg-[#0f172a] text-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-2xl flex flex-col h-full border border-slate-700 md:scale-105 transform z-10">
            {/* Best seller badge */}
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-purple-500 via-emerald-400 to-purple-500"></div>
            <div className="absolute top-6 right-6 bg-purple-500/20 text-purple-300 border border-purple-500/30 px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
              Mais Vendido
            </div>

            <div className="relative z-10 h-full flex flex-col">
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-3 pr-24">Oferta Premium</h3>
                <p className="text-slate-400 text-sm leading-relaxed font-medium">O pacote mais completo com todos os bônus, 360 mil arquivos adicionais e acesso vitalício.</p>
              </div>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-2xl font-bold text-slate-400">R$</span>
                <span className="text-6xl font-black text-white tracking-tight">19,90</span>
                <span className="text-sm font-bold text-emerald-400 ml-2 bg-emerald-400/10 px-2 py-1 rounded-md">Único</span>
              </div>
              
              <ul className="space-y-4 mb-10 flex-1 font-medium text-slate-300">
                {[
                  '+7.500 artes e moldes',
                  'Canva, CorelDraw e Silhouette',
                  'Arquivos editáveis (Convites, Topos, Caixinhas)',
                  'Todos os Bônus Exclusivos',
                  'Acesso Vitalício'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <CTAButton href="https://pay.wiapy.com/9RRPPHsn5Nf" className="w-full text-lg shadow-[0_0_20px_rgba(52,211,153,0.3)]">
                QUERO O PREMIUM AGORA
              </CTAButton>
            </div>
            
            {/* Glow effects */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-purple-600 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-600 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Comparison() {
  const features = [
    { name: "Kit Festa", basic: true, premium: true },
    { name: "+7.500 artes e moldes", basic: false, premium: true },
    { name: "Arquivos editáveis", basic: false, premium: true },
    { name: "Convites", basic: false, premium: true },
    { name: "Topos", basic: false, premium: true },
    { name: "Caixinhas", basic: false, premium: true },
    { name: "Bônus", basic: false, premium: true },
    { name: "Conteúdo extra", basic: false, premium: true },
    { name: "Acesso imediato", basic: true, premium: true },
    { name: "Garantia", basic: true, premium: true },
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-4xl mx-auto bg-white">
      <div className="rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-4 sm:p-6 font-bold text-slate-900 border-b border-slate-200 text-sm sm:text-base">Recurso</th>
              <th className="p-4 sm:p-6 font-bold text-slate-600 text-center border-b border-slate-200 text-sm sm:text-base">Básico</th>
              <th className="p-4 sm:p-6 font-bold text-purple-600 text-center border-b border-slate-200 bg-purple-50/50 text-sm sm:text-base">Premium</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                <td className="p-3 sm:p-4 font-medium text-slate-700 pl-4 sm:pl-6 text-xs sm:text-base">{feature.name}</td>
                <td className="p-3 sm:p-4 text-center">
                  {feature.basic ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 mx-auto" />
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </td>
                <td className="p-3 sm:p-4 text-center bg-purple-50/20">
                  {feature.premium ? (
                    <Check className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 mx-auto" />
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export function Guarantee() {
  return (
    <section className="py-8 md:py-16 px-4 md:px-8 max-w-5xl mx-auto my-6 md:my-12">
      <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-12 shadow-sm flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/3 flex justify-center">
           <div className="relative">
             <ShieldCheck className="w-32 h-32 text-purple-600 relative z-10" />
             <div className="absolute inset-0 bg-purple-200 blur-2xl rounded-full"></div>
           </div>
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-6 uppercase tracking-tight">
            Compre com tranquilidade
          </h2>
          
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
             <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 text-sm">7 Dias de Garantia</span>
             </div>
             <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <Lock className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 text-sm">Pagamento Seguro</span>
             </div>
             <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <Zap className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 text-sm">Acesso Imediato</span>
             </div>
             <div className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-bold text-slate-700 text-sm">Produto 100% Digital</span>
             </div>
          </div>
          
          <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed">
            Você pode conhecer o material e, caso decida que não é para você, contar com a garantia informada na oferta. Risco zero.
          </p>
        </div>
      </div>
    </section>
  );
}
