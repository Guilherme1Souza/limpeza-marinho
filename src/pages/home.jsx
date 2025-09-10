import { Home, Store, Building2, School, Hotel, Church } from "lucide-react";

import { Footer } from "../components/Footer";
import { Navbar } from "../components/Sidenav";
import React from "react";
import Image from "next/image";

import womenHeader from "../images/header-men.png";

export default function HomePage() {
  const diferenciais = [
    {
      titulo: "Experiência",
      texto:
        "Profissionais com mais de 15 anos de atuação, entregando qualidade em limpeza e conservação de pisos e pedras.",
    },
    {
      titulo: "Tecnologia",
      texto:
        "Usamos equipamentos modernos e produtos adequados, sempre priorizando segurança e sustentabilidade.",
    },
    {
      titulo: "Atendimento",
      texto:
        "Cada cliente é único. Oferecemos soluções personalizadas para residências, empresas, indústrias e condomínios.",
    },
  ];

  const depoimentos = [
    {
      nome: "Carla Souza",
      cargo: "Síndica de Condomínio",
      texto:
        "Excelente trabalho! O hall do prédio ficou impecável após a limpeza, e o atendimento foi muito profissional.",
    },
    {
      nome: "André Lima",
      cargo: "Gerente de Fábrica",
      texto:
        "O piso da área industrial nunca esteve tão bem cuidado. Recomendo a todos que buscam confiança e resultado.",
    },
    {
      nome: "Mariana Alves",
      cargo: "Arquiteta",
      texto:
        "A equipe da Marinho Limpeza trouxe vida nova ao meu projeto. Dedicação e capricho em cada detalhe!",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-neutral-800">
      <Navbar />

      {/* HERO */}
      <section className="flex flex-col h-full relative overflow-hidden bg-blue-600 text-white">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 pt-20 px-6 grid lg:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Cuidamos dos seus pisos com excelência e dedicação
            </h1>
            <p className="mt-6 text-base sm:text-lg lg:text-xl leading-relaxed text-blue-100">
              Serviços profissionais de limpeza e tratamento que valorizam seus
              ambientes e garantem durabilidade, beleza e segurança.
            </p>
            <div className="mt-8">
              <a
                href="#servicos"
                className="inline-flex items-center rounded-tr-2xl rounded-bl-2xl bg-white px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 transition text-sm sm:text-base"
              >
                Conheça nossos serviços
              </a>
            </div>
          </div>
          <div className="flex justify-end items-end relative">
            <div className="w-52 sm:w-80 md:w-96 max-w-full">
              <Image
                className="w-full h-auto object-cover"
                src={womenHeader}
                alt="Equipe em ação"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 text-center">
            Por que escolher a Marinho Limpeza?
          </h2>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {diferenciais.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-50 p-6 shadow-sm text-center"
              >
                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
                  {item.titulo}
                </h3>
                <p className="mt-3 text-base sm:text-lg text-neutral-700 leading-relaxed">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-blue-600 text-center mb-12">
            Nossos Serviços
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <Home className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
                Residências
              </h3>
              <p className="mt-2 text-base sm:text-lg text-neutral-700">
                Residências, apartamentos e condomínios
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Store className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
                Comércios
              </h3>
              <p className="mt-2 text-base sm:text-lg text-neutral-700">
                Lojas, galerias, shoppings, bares e restaurantes
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Building2 className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
                Empresas
              </h3>
              <p className="mt-2 text-base sm:text-lg text-neutral-700">
                Empresas em todos os segmentos, indústrias, galpões e
                estacionamentos
              </p>
            </div>

            <div className="flex flex-col items-center">
              <School className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
                Escolas
              </h3>
              <p className="mt-2 text-base sm:text-lg text-neutral-700">
                Escolas particulares, faculdades e escolas de idiomas
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Hotel className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
                Hotéis e Clubes
              </h3>
              <p className="mt-2 text-base sm:text-lg text-neutral-700">
                Hotéis, hostels, pousadas e clubes
              </p>
            </div>

            <div className="flex flex-col items-center">
              <Church className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-neutral-900">
                Igrejas
              </h3>
              <p className="mt-2 text-base sm:text-lg text-neutral-700">
                Igrejas, templos e mosteiros
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-blue-600 mb-12">
            O que nossos clientes dizem
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {depoimentos.map((dep, i) => (
              <div
                key={i}
                className="rounded-2xl bg-gray-50 p-6 shadow-md flex flex-col"
              >
                <p className="text-base sm:text-lg text-neutral-700 italic mb-4">
                  “{dep.texto}”
                </p>
                <span className="font-semibold text-neutral-900 text-sm sm:text-base">
                  {dep.nome}
                </span>
                <span className="text-xs sm:text-sm text-neutral-500">
                  {dep.cargo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
            Quer um ambiente renovado e impecável?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-blue-100">
            Solicite um orçamento agora mesmo e descubra como podemos
            transformar o seu espaço com cuidado profissional.
          </p>
          <div className="mt-6">
            <a
              href="#contato"
              className="inline-flex items-center rounded-tr-2xl rounded-bl-2xl bg-white px-6 py-3 text-blue-600 font-medium hover:bg-blue-50 transition text-sm sm:text-base"
            >
              Solicite um orçamento
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
