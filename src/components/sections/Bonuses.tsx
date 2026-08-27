import React from 'react';
import { Gift, Star, Users, MessageSquareHeart } from 'lucide-react';

export function Bonuses() {
  const bonuses = [
    { title: "Convites Editáveis", desc: "Modelos prontos para personalizar." },
    { title: "8.000 Caixinhas", desc: "Variedade de temas e formatos." },
    { title: "1.500 Topos", desc: "Modelos prontos para personalização." },
    { title: "Kit Festa Adulto", desc: "Temas para diferentes comemorações." },
    { title: "Guia de Organização", desc: "Material para ajudar na organização dos arquivos e pedidos." },
    { title: "360 mil arquivos", desc: "Conteúdo extra/acervo adicional complementar aos +7.500 arquivos principais." }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-200 rounded-full text-purple-700 mb-6">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
            E para deixar seu acervo ainda mais completo...
          </h2>
          <p className="text-lg md:text-xl text-slate-600 font-medium">
            Você também recebe materiais extras junto do pacote Premium.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bonuses.map((bonus, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-purple-100 flex flex-col relative overflow-hidden group hover:shadow-md transition-all">
              <span className="text-purple-600 font-black text-sm tracking-widest uppercase mb-2">BÔNUS 0{i + 1}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{bonus.title}</h3>
              <p className="text-slate-600 font-medium text-sm">{bonus.desc}</p>
            </div>
          ))}
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
    <section className="py-12 md:py-24 px-4 md:px-8 bg-white max-w-5xl mx-auto text-center border-b border-slate-100">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">
        Esse acervo foi criado para quem quer trabalhar com mais praticidade
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {audiences.map((aud, i) => (
          <div key={i} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm flex items-center justify-center text-center">
            <p className="font-bold text-slate-700 text-sm">{aud}</p>
          </div>
        ))}
      </div>

      <div className="bg-purple-50 p-6 rounded-3xl inline-block max-w-3xl border border-purple-100">
        <p className="text-purple-800 font-medium text-base">
          Mesmo que você esteja começando, o acervo foi pensado para facilitar sua busca por modelos e agilizar sua produção.
        </p>
      </div>
    </section>
  );
}

export function SocialProof() {
  const testimonials = [
    {
      name: "Mariana",
      text: "Eu demorava horas para achar um molde na internet. Agora eu abro o acervo e encontro quase tudo. Agilizou muito meu atendimento no WhatsApp!",
      stars: 5
    },
    {
      name: "Juliana",
      text: "Comprei para ter os kits festa, mas os topos de bolo salvaram minha vida essa semana. Muito organizado e fácil de usar no Canva.",
      stars: 5
    },
    {
      name: "Camila",
      text: "Só a variedade de caixinhas já vale o valor. Tem tema que eu nem sabia que existia e o cliente pediu. Foi só pegar e editar.",
      stars: 5
    }
  ];

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Quem já utiliza o acervo
        </h2>
        <p className="text-lg text-slate-600 font-medium">
          Veja experiências de pessoas que já utilizam o material.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((test, i) => (
          <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex flex-col gap-4">
            <div className="flex gap-1 text-amber-400">
              {[...Array(test.stars)].map((_, j) => (
                <Star key={j} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <p className="text-slate-700 italic text-lg leading-relaxed">"{test.text}"</p>
            <div className="mt-auto pt-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                <Users className="w-5 h-5" />
              </div>
              <span className="font-bold text-slate-900">{test.name}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
