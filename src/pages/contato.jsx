import React, { useState, useEffect } from "react";

import { useForm, ValidationError } from "@formspree/react";
import { Navbar } from "../components/Sidenav";
import { Footer } from "../components/Footer";

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
      <div className="flex flex-col md:flex-row gap-8 p-6 md:p-12 bg-gray-50">
        <form
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
        </form>

        <aside className="w-full md:w-1/3 bg-white shadow-lg rounded-2xl p-6">
          <h4 className="text-xl font-semibold text-gray-800 border-b pb-3 mb-6">
            Canais de atendimento
          </h4>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-700 text-xl">
                📧
              </div>
              <div>
                <strong className="block text-gray-800">E-mail</strong>
                <p className="text-gray-600 text-sm">
                  Envie um e-mail e fale diretamente com nossa equipe.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-green-100 text-green-700 text-xl">
                📱
              </div>
              <div>
                <strong className="block text-gray-800">WhatsApp</strong>
                <p className="text-gray-600 text-sm">
                  Fale direto no seu WhatsApp com nossos atendentes.
                </p>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <Footer />
    </div>
  );
}
