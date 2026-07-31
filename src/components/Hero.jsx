import { Download, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-float">
          <div className="space-y-4">
            <h2 className="text-cyber-blue text-lg sm:text-xl font-semibold tracking-wider uppercase animate-pulse">
              Bienvenue sur mon portfolio
            </h2>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              <span className="text-gradient glow-text-blue">Miguel Souop</span>
            </h1>
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium leading-relaxed">
              <span className="text-cyber-purple glow-text-purple">
                Développeur Full-Stack
              </span>
              <span className="text-white"> Laravel & Django</span>
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Web/Mobile • Designer Web & Mobile
            </p>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
              Administrateur Réseau & Système •{" "}
              <span className="text-cyber-blue glow-text-blue sm:text-2xl md:text-3xl font-semibold">
                Ethical Hacker
              </span>
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="#contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-cyber-purple  to-cyber-blue rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon-blue"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Mail size={20} />
                Me Contacter
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <a
              href="CV_SOUOP_TEWA_MIGUEL.pdf"
              download
              className="group relative px-8 py-4 border-2 border-cyber-purple rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon-purple hover:bg-cyber-purple/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Download size={20} />
                Télécharger CV
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
