import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import IconLogo from "../images/logo.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-blue-600  border-blue-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 font-semibold tracking-tight text-white"
        >
          <Image src={IconLogo} alt="Logo" className="h-12 w-12" />
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/sobre" className="hover:underline">
            Quem Somos
          </Link>
          <Link href="/service" className="hover:underline">
            Nossos Serviços
          </Link>
          <Link href="/contato" className="hover:underline">
            Contato
          </Link>
        </nav>
        <Link
          href="/quote"
          className="hidden rounded-tr-2xl rounded-bl-2xl md:inline-flex items-center bg-white px-4 py-2 text-blue-600 text-sm font-medium hover:bg-gray-100 transition"
        >
          Solicite um orçamento
        </Link>

        {/* Botão Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-blue-600 border-t border-blue-700">
          <nav className="flex flex-col items-center py-4 text-white space-y-4 text-sm">
            <a href="" onClick={() => setMenuOpen(false)}>
              Home
            </a>
            <a href="" onClick={() => setMenuOpen(false)}>
              Quem Somos
            </a>
            <a href="" onClick={() => setMenuOpen(false)}>
              Nossos Serviços
            </a>
            <a href="" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
            <a
              href=""
              className=" rounded-tr-2xl rounded-bl-2xl inline-flex items-center bg-white px-4 py-2 text-blue-600 text-sm font-medium hover:bg-gray-100 transition"
              onClick={() => setMenuOpen(false)}
            >
              Solicite um orçamento
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
