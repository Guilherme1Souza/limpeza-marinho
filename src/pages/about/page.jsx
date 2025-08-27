import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Sidenav";
import React from "react";
import Image from "next/image";

import womenHeader from "@/images/header-men.png";

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

      <Footer />
    </main>
  );
}
