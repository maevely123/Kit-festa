import React, { useState } from 'react';
import { CTAButton } from '../ui/Button';
import { ChevronDown, MessageCircleHeart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export function Faq() {
  const faqs = [
    {
      q: "Posso usar os moldes para vender personalizados?",
      a: "Sim. Os arquivos podem ser utilizados para criar produtos físicos personalizados para seus clientes, conforme as condições de uso do material."
    },
    {
      q: "Funciona no Canva?",
      a: "Sim. O acervo inclui arquivos em formatos compatíveis com o Canva, permitindo que você edite os modelos diretamente pela plataforma."
    },
    {
      q: "Funciona no CorelDraw?",
      a: "Sim. O material disponibiliza arquivos em formatos nativos ou compatíveis para edição profissional dentro do CorelDraw."
    },
    {
      q: "Funciona no Silhouette Studio?",
      a: "Sim. Há arquivos preparados e compatíveis para você abrir e utilizar no Silhouette Studio."
    },
    {
      q: "Preciso saber design?",
      a: "Não é necessário ser designer profissional para começar a utilizar os modelos, mas é necessário saber realizar as edições básicas necessárias ao seu trabalho."
    },
    {
      q: "Como recebo o acesso?",
      a: "O acesso é digital e as instruções são enviadas para o seu e-mail imediatamente após a confirmação do pagamento."
    },
    {
      q: "É produto físico?",
      a: "Não. É um produto 100% digital. Você não receberá nada em sua casa."
    },
    {
      q: "O acesso é vitalício?",
      a: "Sim, adquirindo o pacote Premium, o seu acesso ao material é vitalício."
    },
    {
      q: "O que são os 360 mil arquivos?",
      a: "Trata-se de um conteúdo adicional/bônus gigante entregue no pacote Premium, não devendo ser confundido com os +7.500 moldes de alta qualidade do acervo principal."
    },
    {
      q: "Serve para quem está começando?",
      a: "Sim. O acervo pode ajudar quem está começando a montar uma biblioteca de referências e modelos para iniciar suas vendas."
    },
    {
      q: "Serve para quem já trabalha com papelaria?",
      a: "Sim. Ele foi pensado também para quem já recebe pedidos e precisa encontrar modelos com rapidez sem perder tempo criando do zero."
    },
    {
      q: "Tem garantia?",
      a: "Sim, você possui 7 dias de garantia incondicional."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-12 md:py-24 px-4 md:px-8 max-w-4xl mx-auto bg-white">
      <div className="text-center mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
          Perguntas Frequentes
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="border border-slate-200 rounded-2xl overflow-hidden bg-white hover:border-purple-200 transition-colors">
            <button
              className="w-full px-6 py-5 text-left font-bold text-slate-800 flex justify-between items-center gap-4 text-lg"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <span>{faq.q}</span>
              <ChevronDown className={`w-5 h-5 text-purple-500 transition-transform flex-shrink-0 ${openIndex === i ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-5 text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Closing() {
  return (
    <section className="py-12 md:py-24 px-4 md:px-8 bg-[#FDFBFF] text-center relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-8">
          <MessageCircleHeart className="w-8 h-8 text-purple-600" />
        </div>
        
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-8 leading-tight text-slate-900">
          Seu próximo cliente pode pedir um tema que você ainda não tem.
        </h2>
        
        <p className="text-xl md:text-2xl text-slate-600 mb-16 font-medium max-w-3xl leading-relaxed">
          Em vez de começar do zero, tenha um grande acervo à sua disposição para procurar, editar e produzir seus personalizados com mais praticidade.
        </p>

        <div className="bg-white p-6 md:p-12 rounded-[2rem] border border-purple-100 shadow-xl shadow-purple-50 w-full mb-12">
          <p className="text-purple-600 font-bold tracking-widest uppercase mb-4 text-xs md:text-sm">Toda venda começa quando você consegue responder:</p>
          <h3 className="text-2xl sm:text-4xl md:text-6xl font-black text-slate-900 italic">
            "Sim, eu tenho esse tema."
          </h3>
        </div>

        <CTAButton href="#oferta" className="w-full">
          QUERO ACESSAR O ACERVO AGORA
        </CTAButton>
      </div>
    </section>
  );
}
