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

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Basic Package */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 flex flex-col h-full shadow-sm">
            <h3 className="text-2xl font-bold mb-2 text-slate-900">Pacote Básico</h3>
            <p className="text-slate-500 mb-6">O essencial para começar</p>
            
            <div className="text-4xl font-black mb-8 text-slate-900">R$ 10,00</div>
            
            <ul className="space-y-4 mb-10 flex-1">
              {['Kit Festa pronto', 'Acesso imediato', 'Produto digital', 'Garantia de 7 dias'].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-700">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col items-center">
              <a href="#" className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-3 sm:py-4 px-4 sm:px-8 rounded-xl transition-colors text-center text-base sm:text-lg shadow-sm">
                QUERO O BÁSICO
              </a>
            </div>
          </div>

          {/* Premium Package (Bento Style) */}
          <div className="bg-purple-900 text-white rounded-3xl p-8 relative overflow-hidden shadow-2xl flex flex-col h-full border border-purple-700">
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">Oferta Premium Recomendada</h3>
                <p className="text-purple-200 text-sm leading-relaxed mb-8">O pacote mais completo com todos os bônus, 360 mil arquivos adicionais e acesso vitalício.</p>
              </div>
              
              <ul className="space-y-3 mb-10 flex-1 font-medium text-purple-100 text-sm">
                {[
                  '+7.500 artes e moldes',
                  'Canva, CorelDraw e Silhouette',
                  'Arquivos editáveis (Convites, Topos, Caixinhas)'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-col gap-6">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="text-purple-300 text-sm block mb-1">Apenas</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-purple-300">R$</span>
                      <span className="text-5xl font-black">19,90</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                     <div className="flex items-center gap-2 text-[10px] font-bold bg-white/10 px-3 py-1.5 rounded-full">✓ Todos os Bônus</div>
                     <div className="flex items-center gap-2 text-[10px] font-bold bg-white/10 px-3 py-1.5 rounded-full">✓ Acesso Vitalício</div>
                  </div>
                </div>
                <CTAButton href="https://pay.wiapy.com/9RRPPHsn5Nf" className="w-full">
                  QUERO O PREMIUM
                </CTAButton>
              </div>
            </div>
            <div className="absolute -right-8 -top-8 w-40 h-40 bg-purple-500 rounded-full blur-[80px] opacity-30"></div>
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
      <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-sm">
        <table className="w-full min-w-[600px] text-left border-collapse">
          <thead>
            <tr className="bg-slate-50">
              <th className="p-6 font-bold text-slate-900 border-b border-slate-200">Recurso</th>
              <th className="p-6 font-bold text-slate-600 text-center border-b border-slate-200">Básico</th>
              <th className="p-6 font-bold text-purple-600 text-center border-b border-slate-200 bg-purple-50/50">Premium</th>
            </tr>
          </thead>
          <tbody>
            {features.map((feature, i) => (
              <tr key={i} className="border-b border-slate-100 last:border-0 hover:bg-slate-50/50 transition-colors">
                <td className="p-4 font-medium text-slate-700 pl-6">{feature.name}</td>
                <td className="p-4 text-center">
                  {feature.basic ? (
                    <Check className="w-5 h-5 text-slate-400 mx-auto" />
                  ) : (
                    <span className="text-slate-300">—</span>
                  )}
                </td>
                <td className="p-4 text-center bg-purple-50/20">
                  {feature.premium ? (
                    <Check className="w-5 h-5 text-purple-600 mx-auto" />
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
