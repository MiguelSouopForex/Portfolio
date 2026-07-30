import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  return (
    <HelmetProvider>
      <div className="relative min-h-screen bg-cyber-darker">
        <Helmet>
          <title>Miguel Souop | Développeur Fullstack & Pentesteur Junior</title>
          <meta
            name="description"
            // content="Portfolio de Miguel Souop : expert Laravel, Django, React et Pentesting. Découvrez mes projets comme Situr et mes labs CTF."
            content="Miguel Souop - Développeur Full-Stack Laravel & Django, Designer Web/Mobile, Ethical Hacker"
          />
          <meta
            name="keywords"
            content="Miguel Souop, Développeur Fullstack, Cybersecurity, Pentester, Laravel, Django, React, Situr, Cameroun"
          />
          <link rel="canonical" href="https://ton-portfolio.vercel.app/" />
        </Helmet>

        <div className="cyber-grid fixed inset-0 opacity-30"></div>
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Services />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
