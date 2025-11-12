// NEXT.JS + TAILWIND starter for SparkChan
// Project structure and file contents below. Create these files in a new repo named `sparkchan-web`.

// package.json
{
  "name": "sparkchan-web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "13.5.6",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "framer-motion": "10.12.18"
  },
  "devDependencies": {
    "autoprefixer": "10.4.14",
    "postcss": "8.4.23",
    "tailwindcss": "3.4.7"
  }
}

// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
}

// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

// pages/_app.js
import '../styles/globals.css'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}

// pages/index.js
import Head from 'next/head'
import Hero from '../components/Hero'
export default function Home() {
  return (
    <>
      <Head>
        <title>SouthPark-Chan | zk-meme runtime</title>
        <meta name="description" content="Privacy-preserving, meme-powered runtime for the new internet." />
        <meta property="og:title" content="SouthPark-Chan | zk-meme runtime" />
        <meta property="og:description" content="Privacy-preserving, meme-powered runtime for the new internet." />
        <meta property="og:image" content="/og-preview.png" />
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#050505] text-white">
        <Hero />
      </div>
    </>
  )
}

// components/Hero.jsx
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Hero(){
  return (
    <section className="w-full max-w-6xl p-6 text-center">
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="mx-auto max-w-4xl">
          <div className="mb-6">
            <Image src="/a140ee6c-0798-429e-8a30-7843aa1df891.png" alt="SouthPark-Chan" width={900} height={500} />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">$SPARKCHAN — a zk-Meme Runtime</h1>
          <p className="text-gray-300 mb-6">Privacy-native runtime for cultural computation. Compile to RISC-V, generate zkSNARK proofs automatically, and deploy meme-powered private apps that are verifiable and programmable.</p>
          <div className="flex items-center justify-center gap-4">
            <a className="inline-flex items-center gap-2 bg-white text-black font-bold py-3 px-6 rounded-lg shadow-lg" href="https://x.com/SouthPark_Chan" target="_blank" rel="noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 1227" className="w-5 h-5 fill-black"><path d="M714.163 519.284L1160.89 0H1058.69L668.898 450.887L356.205 0H0L468.771 681.821L0 1226.37H102.195L515.679 751.508L843.795 1226.37H1200L714.137 519.284H714.163ZM569.165 686.238L520.373 617.356L139.428 79.6961H306.615L611.412 516.077L660.204 584.959L1058.76 1150.3H891.573L569.165 686.238Z"/></svg>
              ⚡ Follow on X
            </a>
            <a className="inline-flex items-center gap-2 border border-gray-700 text-gray-200 font-semibold py-3 px-6 rounded-lg" href="#about">Read more</a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

// public/README: place your hero image and og-preview here:
// - a140ee6c-0798-429e-8a30-7843aa1df891.png
// - og-preview.png

// styles/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

html, body, #__next {
  height: 100%;
}

// README.md (short)
# sparkchan-web

Next.js + Tailwind starter for SparkChan.

## Quick start
1. npm i
2. npm run dev

// Deployment: push to GitHub → Import to Vercel → set root to project
