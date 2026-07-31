// import { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { name: "Accueil", href: "#home" },
//     { name: "À propos", href: "#about" },
//     { name: "Compétences", href: "#skills" },
//     { name: "Services", href: "#services" },
//     { name: "Projets", href: "#projects" },
//     { name: "Contact", href: "#contact" },
//   ];

//   return (
//     <nav
//       className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-cyber-darker/95 backdrop-blur-md shadow-neon-purple"
//           : "bg-transparent"
//       }`}
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-20">
//           <div className="flex-shrink-0">
//             <h1 className="text-2xl font-bold text-gradient">MS.HACK-DEV</h1>
//           </div>

//           <div className="hidden md:block">
//             <div className="ml-10 flex items-baseline space-x-8">
//               {navLinks.map((link) => (
//                 <a
//                   key={link.name}
//                   href={link.href}
//                   className="text-gray-300 hover:text-cyber-blue transition-colors duration-300 px-3 py-2 text-sm font-medium relative group"
//                 >
//                   {link.name}
//                   <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple group-hover:w-full transition-all duration-300"></span>
//                 </a>
//               ))}
//             </div>
//           </div>

//           <div className="md:hidden">
//             <button
//               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//               className="text-gray-300 hover:text-cyber-blue transition-colors"
//             >
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-cyber-dark/98 backdrop-blur-md border-t border-cyber-purple/30">
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {navLinks.map((link) => (
//               <a
//                 key={link.name}
//                 href={link.href}
//                 onClick={() => setIsMobileMenuOpen(false)}
//                 className="text-gray-300 hover:text-cyber-blue hover:bg-cyber-purple/10 block px-3 py-2 rounded-md text-base font-medium transition-all duration-300"
//               >
//                 {link.name}
//               </a>
//             ))}
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Accueil", href: "#home" },
    { name: "À propos", href: "#about" },
    { name: "Compétences", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Projets", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 border-b ${
        isScrolled
          ? "bg-ink/95 backdrop-blur-md border-line"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logotype */}
          <a href="#home" className="flex items-center gap-2 group">
            <span className="font-display font-semibold text-lg tracking-tight text-paper">
              MIGUEL<span className="text-amber">.</span>SOUOP
            </span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                className="group flex items-center gap-2 px-4 py-2 text-sm text-muted hover:text-paper transition-colors duration-200"
              >
                <span className="index-label text-[10px] text-amber/70 group-hover:text-amber">
                  0{i}
                </span>
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-paper"
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-ink border-t border-line">
          <div className="px-4 py-2">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 py-3 border-b border-line last:border-none text-muted hover:text-paper transition-colors"
              >
                <span className="index-label text-[10px] text-amber/70">
                  0{i}
                </span>
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
