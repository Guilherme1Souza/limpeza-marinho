/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // gera site estático (pasta out/)
  trailingSlash: true, // cria /service/index.html (URL /service funciona)
  images: { unoptimized: true }, // evita depender do otimizador do Vercel
};

module.exports = nextConfig;
