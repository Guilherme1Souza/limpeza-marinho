import React, { useState, useEffect } from "react";

import { useForm, ValidationError } from "@formspree/react";
import { Navbar } from "../components/Sidenav";
import { Footer } from "../components/Footer";
import SEO from "../components/SEO";

export default function Contato() {
  const [state, handleSubmit] = useForm("xzzanzej");
  const [formValues, setFormValues] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    empresa: "",
    colaboradores: "",
    descoberta: "",
  });
  const [checked, setChecked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [modalAberta, setModalAberta] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    // Cria um objeto FormData com os dados do estado
    const formData = new FormData();
    Object.entries(formValues).forEach(([key, value]) => {
      formData.append(key, value);
    });
    handleSubmit(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setModalAberta(true);
      setFormValues({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        empresa: "",
        colaboradores: "",
        descoberta: "",
      });
      setChecked(false);
    }
  }, [state.succeeded]);

  return (
    <div>
      <Navbar />
      <SEO
        title="Mestre de Pisos - Contato"
        description="Especialistas em limpeza, polimento e conservação de pisos. Excelência e qualidade para seu ambiente."
        keywords="contato mestre de pisos, orçamento limpeza de pisos, serviços de polimento"
        canonical="https://mestrepisos.com.br"
        siteName="Mestre de Pisos"
        favicon="/favicon.ico"
      />
      <div className="flex flex-col  md:flex-row gap-8 p-6 md:p-12 bg-gray-100 min-h-screen">
        <div className="bg-white shadow-md rounded-tr-2xl rounded-bl-2xl p-6 md:p-10 w-full">
          {/* <form
          onSubmit={onSubmitForm}
          className="flex-1 bg-white shadow-md rounded-2xl p-6 md:p-10 space-y-5"
        >
          <h3 className="text-xl font-semibold text-gray-800">
            Deixe sua mensagem que entraremos em contato
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="nome"
              placeholder="Nome"
              required
              value={formValues.nome}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-600 text-gray-900"
            />
            <input
              type="text"
              name="sobrenome"
              placeholder="Sobrenome"
              required
              value={formValues.sobrenome}
              onChange={handleChange}
              className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-600 text-gray-900"
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formValues.email}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-600 text-gray-900"
          />

          <input
            type="tel"
            name="telefone"
            placeholder="Telefone"
            value={formValues.telefone}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-600 text-gray-900"
          />

          <input
            type="text"
            name="empresa"
            placeholder="Empresa"
            value={formValues.empresa}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-600 text-gray-900"
          />

          <select
            name="colaboradores"
            required
            value={formValues.colaboradores}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-600 text-gray-500"
          >
            <option value="" hidden>
              Número de colaboradores?
            </option>
            <option value="1-20">1-20</option>
            <option value="20-50">20-50</option>
            <option value="50-200">50-200</option>
            <option value="200-500">200-500</option>
            <option value="500+">500+</option>
          </select>

          <select
            name="descoberta"
            required
            value={formValues.descoberta}
            onChange={handleChange}
            className="border rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-600 text-gray-500"
          >
            <option value="" hidden>
              Como você conheceu o Mestre de Pisos?
            </option>
            <option value="instagram">Instagram</option>
            <option value="linkedin">Linkedin</option>
            <option value="indicação">Indicação</option>
            <option value="google">Google</option>
            <option value="evento">Evento</option>
          </select>

          <label className="flex items-start gap-2 text-sm  text-gray-700">
            <input
              type="checkbox"
              required
              checked={checked}
              onChange={(e) => setChecked(e.target.checked)}
              className="mt-1"
            />
            Confirmo a exatidão das informações pessoais, ciente de seu envio ao
            Mestre de Pisos e da minha responsabilidade sobre elas.
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 cursor-pointer rounded-tr-2xl rounded-bl-2xl text-white px-6 py-3 w-full md:w-auto hover:bg-blue-700 transition disabled:opacity-50"
          >
            {submitting ? "Enviando..." : "Enviar formulário"}
          </button>

          {modalAberta && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <div className="bg-white p-6 rounded-tr-2xl rounded-bl-2xl shadow-md max-w-sm w-full text-center">
                <h4 className="text-lg font-semibold text-blue-600">
                  Obrigado!
                </h4>
                <p className="text-gray-600 mt-2">
                  Recebemos sua mensagem e entraremos em contato em breve.
                </p>
                <button
                  onClick={() => setModalAberta(false)}
                  className="mt-4 cursor-pointer rounded-tr-2xl rounded-bl-2xl bg-blue-600 text-white px-4 py-2 hover:bg-blue-700"
                >
                  Fechar
                </button>
              </div>
            </div>
          )}
        </form> */}

          <section className="w-full justify-start flex flex-col md:flex-row">
            {/* Coluna da esquerda - Endereço */}
            <div className="flex-1 flex flex-col justify-center p-8">
              <h3 className="text-2xl font-semibold text-gray-800 border-b-2 pb-3 mb-6">
                Nosso Endereço
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Rua Padre Jacome de Queiroz, 136
                <br />
                São Paulo - SP
                <br />
                CEP: 01234-567
              </p>

              <p className="text-gray-600">
                <strong>Horário de atendimento:</strong> Segunda a sábado, das
                8h às 18h
              </p>

              {/* Mapa Google incorporado */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-md">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.9999999999995!2d-46.655!3d-23.564!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c1a9c4b1b9%3A0x87a0a78db9990e83!2sRua%20Padre%20Jacome%20de%20Queiroz%2C%20136%20-%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1718403232467!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Coluna da direita - Canais de atendimento */}
            <aside className="flex-1 p-8 flex flex-col mb-16 justify-start">
              <h2 className="text-2xl font-semibold text-gray-800 border-b-2 pb-3 mb-16 text-start">
                Canais de atendimento
              </h2>

              <div className="space-y-8 mt-16">
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-blue-700 text-2xl">
                    📧
                  </div>
                  <div>
                    <strong className="block text-gray-800 text-lg">
                      E-mail
                    </strong>
                    <p className="text-gray-600 text-sm">
                      Envie um e-mail e fale diretamente com nossa equipe.
                    </p>
                    <a
                      href="mailto:emersonmarinho016@gmail.com"
                      className="text-blue-600 text-sm hover:underline"
                    >
                      emersonmarinho016@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 text-green-700 text-2xl">
                    📱
                  </div>
                  <div>
                    <strong className="block text-gray-800 text-lg">
                      WhatsApp
                    </strong>
                    <p className="text-gray-600 text-sm">
                      Fale direto no seu WhatsApp com nossos atendentes.
                    </p>
                    <a
                      href="https://wa.me/5511911430748"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 text-sm hover:underline"
                    >
                      (11) 91143-0748
                    </a>
                  </div>
                </div>
              </div>
            </aside>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
