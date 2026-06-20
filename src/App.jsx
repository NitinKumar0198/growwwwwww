import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Ticker from './sections/Ticker';
import Services from './sections/Services';
import HowItWorks from './sections/HowItWorks';
import Results from './sections/Results';
import Pricing from './sections/Pricing';
import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import './App.css';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Services />
        <HowItWorks />
        <Results />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
