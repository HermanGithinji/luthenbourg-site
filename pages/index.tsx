// Updated to use the same font stack as David Amunga's site
// Likely font: Inter via Google Fonts

import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function Home() {
  return (
    <div className={`bg-black text-white min-h-screen ${inter.className}`}>
      <Head>
        <title>Luthenbourg Atelier</title>
        <meta name="description" content="The official site of Luthenbourg Atelier Ltd - Creative Agency." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold lowercase tracking-wide">luthenbourg atelier</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/divisions" className="hover:underline">Divisions</Link>
          <Link href="/portfolio" className="hover:underline">Portfolio</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
        </nav>
      </header>

      <main className="p-10 md:p-20">
        <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Welcome to Luthenbourg Atelier</h2>
        <p className="text-lg max-w-2xl">
          We are a multidisciplinary creative agency pushing the boundaries across media, tech, and culture. From
          production studios to farm innovation — we create with bold purpose.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold">Bourg Studios</h3>
            <p>Photography & Videography — capturing culture, emotion, and impact.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold">Bourg Concepts</h3>
            <p>Design & Digital Marketing — branding with bold identity and performance-first strategy.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-2xl shadow-xl">
            <h3 className="text-xl font-semibold">Unit Watch App</h3>
            <p>Smart power token tracking for Kenya & Tanzania. Intelligent, simple, and fast.</p>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-sm text-white/50 border-t border-white/10">
        &copy; {new Date().getFullYear()} Luthenbourg Atelier Ltd. All rights reserved.
      </footer>
    </div>
  );
}
