import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TeaCollection from './components/TeaCollection';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TeaCollection />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
