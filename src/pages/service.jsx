import React from "react";
import Image from "next/image";
import { Navbar } from "../components/Sidenav";
import { Footer } from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Estilos do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../images/servicos/servico1.jpg";
import img2 from "../images/servicos/servico2.jpg";
import img3 from "../images/servicos/servico3.jpg";
import img4 from "../images/servicos/servico4.jpg";
import img5 from "../images/servicos/servico5.jpg";
import img6 from "../images/servicos/servico6.jpg";
import img7 from "../images/servicos/servico7.jpg";
import img8 from "../images/servicos/servico8.jpg";
import img9 from "../images/servicos/servico9.jpg";
import img10 from "../images/servicos/servico10.jpg";
import img11 from "../images/servicos/servico11.jpg";

const images = [img1, img2, img3, img4, img5, img6];
const moreImages = [img7, img8, img9, img10, img11];

export default function ServicePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 text-neutral-800">
        {/* Hero */}
        <section className="w-full bg-gray-100 py-20 px-5 text-center">
          <h1 className="text-5xl md:text-6xl font-semibold text-black mb-10">
            Galeria
            <span className="block text-2xl md:text-3xl mt-3 text-gray-500">
              Alguns de nossos serviços
            </span>
          </h1>
        </section>

        {/* Carrossel com Swiper */}
        <section className="max-w-6xl mx-auto px-4 mb-16">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation
            grabCursor={true}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="!pb-10"
          >
            {[...images, ...moreImages].map((img, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src={img}
                    alt={`Serviço ${index + 1}`}
                    width={350}
                    height={350}
                    className="w-full h-[300px] md:h-[350px] object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="/contato"
            className="inline-flex h-[45px] w-[253px] items-center justify-center rounded-md bg-blue-600 px-6 text-white text-lg font-bold shadow-md transition-colors duration-200 hover:bg-white hover:text-black hover:border hover:border-white"
          >
            Solicitar Orçamento
          </a>
        </div>

        {/* Seção de Serviços */}
        <section className="py-20 px-5 text-center">
          <h2 className="text-5xl md:text-6xl font-semibold text-black mb-10">
            O que oferecemos
            <span className="block text-2xl md:text-3xl mt-3 text-gray-500">
              Excelência em limpeza e tratamento de pisos
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-[18px] leading-7 text-gray-800">
            A <strong>Mestre Pisos</strong> é especializada em limpeza,
            polimento e restauração de pisos. Atuamos com dedicação para
            devolver o brilho e a durabilidade aos mais diversos tipos de
            superfície, garantindo ambientes mais bonitos, higienizados e
            valorizados.
          </p>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Limpeza Profunda",
                desc: "Remoção de sujeiras difíceis e manchas em pisos de porcelanato, granito, mármore e outros.",
              },
              {
                title: "Polimento e Cristalização",
                desc: "Tratamento que devolve o brilho natural ao piso, aumentando a resistência e durabilidade.",
              },
              {
                title: "Restauração de Pisos",
                desc: "Recuperação de pisos desgastados, eliminando riscos e deixando a superfície renovada.",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="rounded-xl bg-blue-600 p-10 shadow-lg transition-transform duration-200 hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-white text-2xl mb-6 font-semibold">
                  {card.title}
                </h3>
                <p className="text-blue-50 text-[14px]">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
