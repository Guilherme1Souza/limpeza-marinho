import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Sidenav";
import React from "react";
import Image from "next/image";

import womenHeader from "@/images/header-men.png";
import productLimpeza from "@/images/produto-limpeza.png";

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <Navbar />
      <section
        id="home"
        className="flex flex-col h-full relative overflow-hidden bg-blue-600 text-white"
      >
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8  grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
              Confie em quem entende de limpeza profissional, confie na mania de
              limpeza
            </h1>
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-blue-100">
              Prolongue a vida útil do seu piso, evite desgastes e mantenha um
              ambiente seguro e agradável com nossos serviços especializados.
            </p>
            <div className="mt-8">
              <a
                href="#contato"
                className="inline-flex items-center rounded-tr-2xl rounded-bl-2xl bg-white px-5 py-3 text-blue-600 font-medium hover:bg-blue-50 transition"
              >
                Solicite um orçamento
              </a>
            </div>
          </div>
          <div className="flex justify-end items-end relative">
            <div className="w-60 sm:w-80 md:w-96 max-w-full">
              <Image
                className="w-full h-auto object-cover"
                src={womenHeader}
                alt="Imagem de destaque"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <section id="sobre" className="relative bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="mb-6 text-3xl sm:text-4xl font-semibold tracking-tight text-blue-600 max-w-md">
              Somos uma empresa de limpeza de pisos
            </h2>
            <div className="flex flex-col">
              <p className="mt-4 text-gray-500 leading-relaxed font-light text-base">
                Somos uma empresa especializada em limpeza e conservação de
                pisos, oferecendo soluções profissionais para manter ambientes
                sempre limpos, seguros e com aparência impecável. Movidos pelo
                compromisso com a excelência, unimos experiência técnica e
                produtos de alta qualidade para proporcionar resultados
                duradouros, valorizando cada espaço e garantindo conforto e
                bem-estar.
              </p>
              <p className="mt-4 text-gray-500 leading-relaxed text-base font-light">
                Nossa missão é ser referência em limpeza de pisos, oferecendo
                serviços inovadores e personalizados que atendam às necessidades
                de residências, empresas e ambientes comerciais. Acreditamos que
                um piso bem cuidado é fundamental para transmitir organização,
                higiene e credibilidade, além de contribuir para a durabilidade
                do revestimento. Por isso, investimos constantemente em
                tecnologia, capacitação de equipe e processos eficientes, sempre
                com foco na satisfação de nossos clientes e no cuidado com cada
                detalhe.
              </p>
            </div>
          </div>
          <div className="hidden lg:block absolute top-0 right-0 h-full w-1/2">
            <Image
              className="w-full h-full object-cover"
              src={productLimpeza}
              alt="Produto de Limpeza"
            />
          </div>
          <div className="lg:hidden mt-8">
            <Image
              className="w-full h-64 object-cover rounded-xl"
              src={productLimpeza}
              alt="Produto de Limpeza"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
