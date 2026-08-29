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
          <div className="bg-white rounded-[2rem] p-8 md:p-10 border border-slate-200 flex flex-col items-center text-center h-full shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Pacote Básico</h3>
            <p className="text-slate-500 mb-8 font-medium">O essencial para começar a trabalhar</p>
            
            <div className="flex items-baseline justify-center gap-1 mb-8">
              <span className="text-2xl font-bold text-slate-400">R$</span>
              <span className="text-5xl font-black text-slate-900 tracking-tight">10,00</span>
            </div>
            
            <div className="flex-1 flex flex-col w-full mb-10">
              <ul className="space-y-4 text-left w-full">
                {['Kit Festa pronto', 'Acesso imediato', 'Produto digital', 'Garantia de 7 dias'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                    <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="#" className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold py-4 px-8 rounded-2xl transition-colors text-center text-lg">
              QUERO O BÁSICO
            </a>
          </div>

          {/* Premium Package */}
          <div className="bg-white rounded-[2rem] p-8 md:p-10 relative overflow-hidden shadow-[0_20px_50px_rgba(34,197,94,0.15)] flex flex-col items-center text-center h-full border-2 border-green-400 md:scale-105 transform z-10">
            {/* Top gradient line */}
            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-green-400 via-emerald-500 to-green-400"></div>
            
            {/* Best seller badge */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 md:top-6 md:right-6 md:left-auto md:translate-x-0 bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-md px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap z-20">
              Mais Vendido
            </div>

            <div className="relative z-10 h-full flex flex-col w-full mt-8 md:mt-0">
              <div className="mb-8 flex flex-col items-center">
                <h3 className="text-2xl font-bold mb-3 text-slate-900">Oferta Premium</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">O pacote mais completo com todos os bônus, 360 mil arquivos adicionais e acesso vitalício.</p>
              </div>
              
              <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-slate-400">R$</span>
                  <span className="text-6xl font-black text-slate-900 tracking-tight">19,90</span>
                </div>
                <span className="text-sm font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-md uppercase tracking-wider">Único</span>
              </div>
              
              <div className="flex-1 flex flex-col w-full mb-10">
                <ul className="space-y-4 inline-block text-left mx-auto font-medium text-slate-700">
                  {[
                    '+7.500 artes e moldes',
                    'Canva, CorelDraw e Silhouette',
                    'Arquivos editáveis (Convites, Topos, Caixinhas)',
                    'Todos os Bônus Exclusivos',
                    'Acesso Vitalício'
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <CTAButton href="https://pay.wiapy.com/9RRPPHsn5Nf" className="w-full text-lg">
                QUERO O PREMIUM AGORA
              </CTAButton>
            </div>
            
            {/* Subtle glow effects for light theme */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-green-200 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-emerald-200 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
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
