import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function Divisions() {
  return (
    <div className={`bg-black text-white min-h-screen ${inter.className}`}>
      <Head>
        <title>Divisions – Luthenbourg Atelier</title>
        <meta name="description" content="Explore all divisions under Luthenbourg Atelier Ltd." />
      </Head>

      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold lowercase">luthenbourg atelier</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="p-10 md:p-20 max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-10">Our Divisions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Bourg Studios</h3>
            <p>Photography & Videography — capturing identity, motion, and memory.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Bourg Concepts</h3>
            <p>Design & Digital Marketing — visual identities, campaigns, and digital growth.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Bourg Podcasts</h3>
            <p>Recording & Distribution — sonic storytelling, studio setups, and platform publishing.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Bourg Development</h3>
            <p>Apps & Software — mobile, web, and custom systems like Unit Watch.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Bourg Farm</h3>
            <p>AgriTech & Sustainability — animals, crops, and innovative farming practices.</p>
          </div>
          <div className="bg-white text-black p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold">Unit Watch</h3>
            <p><p>Flagship App — real-time token tracking for Kenya & Tanzania&apos;s electricity users.</p>
          </div>
        </div>
      </main>

      <footer className="p-6 text-center text-sm text-white/50 border-t border-white/10">
        &copy; {new Date().getFullYear()} Luthenbourg Atelier Ltd.
      </footer>
    </div>
  );
}
