// import { Code } from "lucide-react";

// const Footer = () => {
//   return (
//     <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-cyber-purple/30">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col items-center justify-center space-y-6">
//           <div className="flex items-center gap-2 text-gray-400">
//             <Code size={20} className="text-cyber-purple" />
//             <span>Développé</span>
//             {/* <Heart size={20} className="text-cyber-blue animate-pulse" /> */}
//             <span>par</span>
//             <span className="text-gradient font-bold">Miguel Souop</span>
//           </div>

//           <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
//             <a
//               href="#home"
//               className="hover:text-cyber-purple transition-colors"
//             >
//               Accueil
//             </a>
//             <a
//               href="#about"
//               className="hover:text-cyber-blue transition-colors"
//             >
//               À propos
//             </a>
//             <a
//               href="#skills"
//               className="hover:text-cyber-blue transition-colors"
//             >
//               Compétences
//             </a>
//             <a
//               href="#services"
//               className="hover:text-cyber-purple transition-colors"
//             >
//               Services
//             </a>
//             <a
//               href="#projects"
//               className="hover:text-cyber-blue transition-colors"
//             >
//               Projets
//             </a>
//             <a
//               href="#contact"
//               className="hover:text-cyber-blue transition-colors"
//             >
//               Contact
//             </a>
//           </div>

//           <div className="text-gray-500 text-sm">
//             © {new Date().getFullYear()} Miguel Souop. Tous droits réservés.
//           </div>
//         </div>
//       </div>

//       <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple"></div>
//     </footer>
//   );
// };

// export default Footer;

import { Code } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-cyber-purple/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-2 text-gray-400">
            <Code size={20} className="text-cyber-purple" />
            <span>Développé</span>
            {/* <Heart size={20} className="text-cyber-blue animate-pulse" /> */}
            <span>par</span>
            <span className="text-gradient font-bold">Miguel Souop</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <a
              href="#home"
              className="hover:text-cyber-purple transition-colors"
            >
              Accueil
            </a>
            <a
              href="#about"
              className="hover:text-cyber-blue transition-colors"
            >
              À propos
            </a>
            <a
              href="#skills"
              className="hover:text-cyber-blue transition-colors"
            >
              Compétences
            </a>
            <a
              href="#services"
              className="hover:text-cyber-purple transition-colors"
            >
              Services
            </a>
            <a
              href="#projects"
              className="hover:text-cyber-blue transition-colors"
            >
              Projets
            </a>
            <a
              href="#contact"
              className="hover:text-cyber-blue transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Miguel Souop. Tous droits réservés.
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple"></div>
    </footer>
  );
};

export default Footer;
