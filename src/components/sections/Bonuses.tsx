import React from 'react';
import { Gift, Star, Users, CheckCircle2, BadgeCheck, Quote } from 'lucide-react';
import { CTAButton } from '../ui/Button';

export function Bonuses() {
  const bonuses = [
    { title: "Editáveis", desc: "Modelos prontos para personalizar", anchor: "R$ 39,90" },
    { title: "8.000 Caixinhas", desc: "Variedade de temas e formatos", anchor: "R$ 47,00" },
    { title: "1.500 Topos", desc: "Prontos para imprimir", anchor: "R$ 29,90" },
    { title: "Kit Festa Adulto", desc: "Temas exclusivos para adultos", anchor: "R$ 35,00" },
    { title: "Guia de Organização", desc: "Para ajudar na sua rotina", anchor: "R$ 29,90" },
    { title: "360 mil arquivos", desc: "Acervo complementar gigante", anchor: "R$ 67,00" }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 bg-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Bônus <span className="text-emerald-500">Exclusivos</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-500 font-medium max-w-2xl mx-auto">
            Materiais complementares que você obtém junto ao acervo, sem custo adicional.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-6 md:gap-x-8 pt-6 mb-16">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-white rounded-[2rem] border border-slate-200 shadow-md pt-12 pb-8 px-6 flex flex-col items-center text-center relative hover:-translate-y-1 transition-transform duration-300">
              {/* Floating Top Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-emerald-500 text-white px-5 py-1.5 rounded-full font-extrabold text-[11px] sm:text-xs tracking-widest shadow-md whitespace-nowrap">
                BÔNUS 0{i + 1}
              </div>
              
              {/* Gift Emoji */}
              <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-4xl mb-6 shadow-sm border border-slate-100">
                🎁
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-2">{bonus.title}</h3>
              <p className="text-slate-500 font-medium text-sm sm:text-base leading-relaxed mb-6">{bonus.desc}</p>
              
              <div className="mt-auto pt-4 border-t border-slate-100 w-full flex flex-col items-center">
                <span className="text-sm font-bold text-slate-400 line-through mb-1">De {bonus.anchor}</span>
                <span className="text-lg font-black text-emerald-500 uppercase tracking-tight">Por R$ 0,00</span>
              </div>
            </div>
          ))}
        </div>

        {/* Objection breaker and CTA */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-[2rem] p-8 md:p-12 text-center max-w-3xl mx-auto shadow-sm">
          <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-4">
            Levando hoje, você economiza <span className="text-emerald-600">R$ 248,70</span>
          </h3>
          <p className="text-lg text-slate-600 font-medium mb-8">
            O valor total de todos esses bônus vendidos separadamente é de R$ 248,70. Mas finalizando sua compra agora, você leva <strong>TUDO DE GRAÇA!</strong>
          </p>
          <div className="flex justify-center">
            <CTAButton href="#oferta" className="w-full sm:w-auto min-w-[300px]">
              QUERO TODOS OS BÔNUS
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
}

export function WhoIsItFor() {
  const audiences = [
    "Quem já vende personalizados",
    "Quem recebe pedidos pelo WhatsApp",
    "Quem trabalha com papelaria personalizada",
    "Quem quer encontrar modelos rapidamente",
    "Quem está montando seu primeiro grande acervo",
    "Quem quer centralizar seus arquivos em uma biblioteca"
  ];

  return (
    <section className="py-12 md:py-20 px-4 md:px-8 bg-white max-w-4xl mx-auto text-center">
      <h2 className="text-[28px] sm:text-3xl md:text-4xl font-extrabold text-[#0f172a] mb-10 leading-tight max-w-lg mx-auto tracking-tight">
        Esse acervo foi criado para quem quer trabalhar com mais praticidade
      </h2>

      <ul className="flex flex-col gap-5 max-w-lg mx-auto text-left mb-12">
        {audiences.map((aud, i) => (
          <li key={i} className="flex items-center gap-4">
            <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
            <span className="font-bold text-slate-700 text-lg">{aud}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function SocialProof() {
  const testimonials = [
    {
      name: "Mariana Vasconcelos",
      role: "Trabalha com Papelaria há 2 anos",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
      text: "Eu demorava horas para achar um molde na internet. Agora eu abro o acervo e encontro quase tudo. Agilizou muito meu atendimento no WhatsApp!",
      stars: 5,
      time: "Há 2 dias"
    },
    {
      name: "Juliana Mendes",
      role: "Iniciante em Personalizados",
      image: "https://res.cloudinary.com/dvg6hojfs/image/upload/v1768931079/download_4_omlg1u.jpg",
      text: "Comprei para ter os kits festa, mas os topos de bolo salvaram minha vida essa semana. Muito organizado e fácil de usar no Canva. Recomendo muito!",
      stars: 5,
      time: "Há 1 semana"
    },
    {
      name: "Camila Rodrigues",
      role: "Dona de Ateliê",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
      text: "Só a variedade de caixinhas já vale o valor. Tem tema que eu nem sabia que existia e o cliente pediu. Foi só pegar, editar e mandar para a cliente.",
      stars: 5,
      time: "Há 2 semanas"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto mb-12">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          O que dizem sobre o acervo
        </h2>
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="flex gap-1 text-amber-400">
            {[...Array(5)].map((_, j) => (
              <Star key={j} className="w-6 h-6 fill-current" />
            ))}
          </div>
          <p className="text-lg text-slate-600 font-medium">
            <span className="font-bold text-slate-900">4.9/5</span> de avaliação média por mais de <span className="font-bold text-slate-900">450 clientes</span>
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((test, i) => (
          <div key={i} className="bg-white p-8 rounded-[2rem] shadow-sm border border-slate-200/60 flex flex-col relative hover:shadow-md transition-shadow">
            <Quote className="absolute top-8 right-8 w-10 h-10 text-slate-100" />

            <div className="flex items-center gap-4 mb-6 relative z-10">
              <img src={test.image} alt={test.name} className="w-14 h-14 rounded-full object-cover border-2 border-purple-100" />
              <div>
                <h4 className="font-bold text-slate-900 text-lg flex items-center gap-1">
                  {test.name}
                  <BadgeCheck className="w-4 h-4 text-emerald-500" />
                </h4>
                <p className="text-sm text-slate-500 font-medium">{test.role}</p>
              </div>
            </div>

            <div className="flex gap-1 text-amber-400 mb-4">
              {[...Array(test.stars)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-current" />
              ))}
            </div>
            
            <p className="text-slate-700 leading-relaxed font-medium flex-1">"{test.text}"</p>
            
            <div className="mt-6 pt-6 border-t border-slate-100 flex justify-between items-center text-sm text-slate-400 font-medium">
              <span className="flex items-center gap-1 text-emerald-600 bg-emerald-50 px-2 py-1 rounded-md text-xs font-bold uppercase tracking-wide">
                <BadgeCheck className="w-3.5 h-3.5" /> Compra verificada
              </span>
              <span>{test.time}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
