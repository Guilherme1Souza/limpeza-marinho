import { Footer } from "../components/Footer";
import { Navbar } from "../components/Sidenav";
import React from "react";
import Image from "next/image";

import IconLogo from "../images/logo.svg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import womenHeader from "../images/header-men.png";
import productLimpeza from "../images/produto-limpeza.png";
import pisosVinilico from "../images/pisos-vinilico.png";
import pisosArdocia from "../images/pisos-ardocia.png";
import revestimentoPedra from "../images/revestimento-pedra.png";
import pisosEpoxi from "../images/pisos-epoxi.jpeg";
import pisosGranilite from "../images/pisos-granilite.png";

export default function SobrePage() {
  const valores = [
    {
      titulo: "Excelência",
      texto:
        "Somos uma empresa formada por profissionais com mais de 15 anos de experiência em Limpeza de Pisos e Pedras. Oferecemos serviços de qualidade, com produtos e equipamentos de especializados. Obtemos ótimos resultados na limpeza e tratamento de pisos e revestimentos de pedras.",
    },
    {
      titulo: "Qualidade e Segurança",
      texto:
        "Somos uma empresa formada por profissionais com mais de 15 anos de experiência em Limpeza de Pisos e Pedras. Oferecemos serviços de qualidade, com produtos e equipamentos de especializados. Obtemos ótimos resultados na limpeza e tratamento de pisos e revestimentos de pedras.",
    },
    {
      titulo: "Valorização do Ambiente",
      texto:
        "Somos uma empresa formada por profissionais com mais de 15 anos de experiência em Limpeza de Pisos e Pedras. Oferecemos serviços de qualidade, com produtos e equipamentos de especializados. Obtemos ótimos resultados na limpeza e tratamento de pisos e revestimentos de pedras.",
    },
  ];

  const cards = [
    {
      titulo: "Pisos Vinílicos",
      texto:
        "Utilizamos produtos e equipamentos apropriados para remoção da sujeira, riscos, fungos e bactérias da superfície do piso.",
      img: pisosVinilico,
    },
    {
      titulo: "Pisos Ardocia",
      texto:
        "Utilizamos produtos e equipamentos apropriados para remoção da sujeira, riscos, fungos e bactérias da superfície do piso.",
      img: pisosArdocia,
    },
    {
      titulo: "Revestimento em Pedra",
      texto:
        "Utilizamos produtos e equipamentos apropriados para remoção da sujeira, riscos, fungos e bactérias da superfície do piso.",
      img: revestimentoPedra,
    },
    {
      titulo: "Pisos Epóxi",
      texto:
        "Utilizamos produtos e equipamentos apropriados para remoção da sujeira, riscos, fungos e bactérias da superfície do piso.",
      img: pisosEpoxi,
    },
    {
      titulo: "Pisos Granilite",
      texto:
        "Utilizamos produtos e equipamentos apropriados para remoção da sujeira, riscos, fungos e bactérias da superfície do piso.",
      img: pisosGranilite,
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <Navbar />
      <section className="flex flex-col h-full relative overflow-hidden bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-14 px-8 grid lg:grid-cols-2 gap-10">
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
      <section id="valores" className="bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="mb-6 text-3xl sm:text-4xl font-semibold tracking-tight text-white">
            Nossos Valores
          </h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {valores.map((valor, i) => (
              <div
                key={i}
                className=" flex flex-col rounded-3xl border border-blue-300 bg-white p-6 shadow-sm text-blue-600"
              >
                <h3 className="text-xl font-semibold">{valor.titulo}</h3>
                <p className="flex flex-col justify-center items-center leading-relaxed text-base mt-2 text-neutral-700">
                  {valor.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-gray-200 rounded-3xl shadow-lg p-8 flex flex-col items-center text-center relative">
          <div className="absolute -top-12 w-24 h-24 rounded-full bg-gray-400 shadow-inner flex items-center justify-center border-4 border-white">
            <Image src={IconLogo} alt="Logo" className="h-20 w-20" />
          </div>

          <div className="mt-16 space-y-4">
            <div>
              <p className="text-lg font-semibold text-gray-800">
                Emerson Marinho
              </p>
              <p className="text-sm text-gray-500">CEO e Fundador</p>
              <p className="mt-2 text-sm font-medium">Mania de Limpeza</p>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Somos uma empresa formada por profissionais com mais de 15 anos de
              experiência em limpeza, tratamento e conservação de pisos e
              pedras. Oferecemos serviços de alta qualidade, utilizando produtos
              e equipamentos especializados que garantem resultados superiores,
              valorizando e preservando a estética dos ambientes. Com expertise
              em diferentes tipos de revestimentos, realizamos desde a limpeza
              pesada até o tratamento e impermeabilização, sempre com foco na
              durabilidade e na beleza das superfícies. Nosso compromisso é
              oferecer um atendimento personalizado, entendendo as necessidades
              de cada cliente e entregando soluções eficientes e seguras.
              Atendemos a Região Metropolitana de São Paulo, Capital, Interior e
              Litoral, oferecendo serviços para residências, condomínios,
              empresas e indústrias. Com a Mania de Limpeza Profissional, seu
              ambiente ganha um novo padrão de cuidado, limpeza e valorização.
            </p>
          </div>
        </div>
      </section>
      <section id="servicos" className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-blue-600">
            Nossos Serviços
          </h2>
          <div className="mt-10">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={true}
              pagination={{ clickable: true }}
              grabCursor={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
                1280: { slidesPerView: 3 },
              }}
              className="!pb-10"
            >
              {cards.map((card, i) => (
                <SwiperSlide key={i}>
                  <div className="rounded-2xl overflow-hidden bg-white border shadow-sm">
                    <div className="aspect-[4/3] bg-gray-200">
                      <Image
                        src={card.img}
                        alt={card.titulo}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-neutral-900">
                        {card.titulo}
                      </h3>
                      <p className="mt-2 text-sm text-neutral-700">
                        {card.texto}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
