import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white text-gray-600">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-block h-8 w-8 rounded-xl bg-white" />
          <span className="text-sm">
            Marinho Limpeza Profissional • Todos os direitos reservados
          </span>
        </div>
        <div className="text-sm">São Paulo • SP • Brasil</div>
      </div>
    </footer>
  );
};
