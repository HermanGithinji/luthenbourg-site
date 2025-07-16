import Head from 'next/head';
import Link from 'next/link';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export default function About() {
  return (
    <div className={`bg-black text-white min-h-screen ${inter.className}`}>
      <Head>
        <title>About – Luthenbourg Atelier</title>
        <meta name="description" content="Get to know the story behind Luthenbourg Atelier and its founder, Herman Luther." />
      </Head>

      <header className="p-6 flex justify-between items-center border-b border-white/10">
        <h1 className="text-2xl font-bold lowercase">luthenbourg atelier</h1>
        <nav className="space-x-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/divisions">Divisions</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="p-10 md:p-20 max-w-3xl mx-auto">
        <h2 className="text-5xl font-bold mb-6">The Story Behind the Atelier</h2>
        <p className="text-lg mb-4">
          I'm Herman Luther — a Kenyan-born founder, strategist, and creative technologist. I started Luthenbourg Atelier Ltd as a platform to unify diverse creative divisions under one bold vision: build world-class African brands and experiences that speak globally.
        </p>
        <p className="text-lg mb-4">
          From photography to podcasting, design to development, agriculture to AI — we operate at the intersection of story, strategy, and systems.
        </p>
        <p className="text-lg mb-4">
          This isn’t just an agency. It’s a blueprint for what’s possible when African creators refuse to be boxed in. We are curious. We are technical. We are cultural. And most of all — we are Bourg.
        </p>

        <div className="mt-10 text-sm text-white/60">
          Currently based in Kenya. Expanding to Brooklyn & beyond.
        </div>
      </main>

      <footer className="p-6 text-center text-sm text-white/50 border-t border-white/10">
        &copy; {new Date().getFullYear()} Luthenbourg Atelier Ltd.
      </footer>
    </div>
  );
}
