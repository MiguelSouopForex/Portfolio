// import { useRef, useState, useEffect, useCallback } from "react";
// import {
//   luxura,
//   vsecurity,
//   reseau,
//   siturApk,
//   fynoq,
//   siturWeb,
//   facebook,
//   designVsecurity,
//   smcontruction,
//   bigBazzar,
//   designSitur,
//   designSiturMobile,
//   carrefourFR,
//   hotelApp,
//   vulnmarket,
//   raven,
//   raven2,
//   app_learning_uml,
//   rh_uml,
//   aragog,
// } from "../assets/img";
// import { ChevronLeft, ChevronRight, X, Eye } from "lucide-react";

// /* ─────────────────────────────────────────
//    DATA
// ───────────────────────────────────────── */
// const allProjects = [
//   {
//     title: "Dashboard Web Situr",
//     description:
//       "Tableau de bord analytique en temps réel de SITUR une application web de gestion de données clients , employés , bus etc... avec Laravel et visualisation de données avancées.",
//     tags: [
//       "Laravel",
//       "TailwindCSS",
//       "Chart.js",
//       "MySQL",
//       "Livewire",
//       "Websockets",
//       "Moneroo",
//       "Firebase Cloud Messaging",
//     ],
//     color: "blue",
//     category: "web",
//     image: siturWeb,
//   },
//   {
//     title: "BigBazzar",
//     description:
//       "une application web de gestion des produits , des clients et des stocks pour boutique",
//     tags: ["Laravel", "TailwindCSS", "Chart.js", "MySQL"],
//     color: "purple",
//     category: "web",
//     image: bigBazzar,
//   },
//   {
//     title: "Raven 1 machine virtuelle",
//     description:
//       "Pentest sur une machine virtuelle volontairement vulnérable pour pratiquer le pentesting et l'identification de vulnérabilités systèmes et réseaux avec Kali Linux et divers outils de pentesting",
//     tags: ["Linux", "CTF", "Cyber sécurité", "Test de pénétration"],
//     color: "blue",
//     category: "hacking",
//     image: raven,
//   },
//   {
//     title: "Vuln-Market",
//     description:
//       "Test de pénétration sur une application web volontairement vulnérable pour pratiquer le pentesting et l'identification de vulnérabilités web avec Burp Suite ",
//     tags: ["Burp Suite", "OWASP", "Test de pénétration", "Vulnérabilités Web"],
//     color: "purple",
//     category: "hacking",
//     image: vulnmarket,
//   },
//   {
//     title: "Raven 2 machine virtuelle",
//     description:
//       "Pentest sur la deuxième version de la machine virtuelle Raven avec des vulnérabilités plus avancées pour approfondir les compétences en pentesting et en identification de vulnérabilités ",
//     tags: ["Linux", "CTF", "Cyber sécurité", "Test de pénétration"],
//     color: "blue",
//     category: "hacking",
//     image: raven2,
//   },
//   {
//     title: "Aragog machine virtuelle",
//     description:
//       "Pentest sur une machine virtuelle volontairement vulnérable nommée Aragog , avec access initial au système via une vulnérabilité de type RCE (Remote Code Execution) , et escalade de privilèges pour obtenir les droits administrateurs",
//     tags: [
//       "Linux",
//       "CTF",
//       "Metasploit",
//       "Cyber sécurité",
//       "Test de pénétration",
//     ],
//     color: "blue",
//     category: "hacking",
//     image: aragog,
//   },
//   {
//     title: "VSecurity",
//     description:
//       "Application web pour système contrôle d'accès temps réel avec suivi des flux d'entrée/sortie.",
//     tags: ["Laravel", "MySQL", "TailwindCSS", "Chart.js"],
//     color: "blue",
//     category: "web",
//     image: vsecurity,
//   },
//   {
//     title: "Carrefour Market",
//     description:
//       "Reproduction du site web de Carrefour Market France avec TailwindCSS, gestion de produits.",
//     tags: ["HTML", "CSS", "TailwindCSS"],
//     color: "purple",
//     category: "web",
//     image: carrefourFR,
//   },
//   {
//     title: "Application Mobile Situr",
//     description:
//       "Développement d'une application d'automatisation du transport urbain avec Flutter et scan de QR codes.",
//     tags: [
//       "Flutter",
//       "API Laravel",
//       "Architecture MVVM",
//       "Pusher",
//       "Firebase Cloud Messaging",
//       "Moneroo",
//     ],
//     color: "blue",
//     category: "mobile",
//     image: siturApk,
//   },
//   {
//     title: "Application Mobile Hôtelier",
//     description:
//       "Application mobile de gestion de service hôtelier avec Flutter",
//     tags: ["Flutter"],
//     color: "blue",
//     category: "mobile",
//     image: hotelApp,
//   },
//   {
//     title: "Application Mobile Facebook",
//     description:
//       "Reproduction du très populaire réseau social Facebook avec Flutter.",
//     tags: ["Flutter"],
//     color: "blue",
//     category: "mobile",
//     image: facebook,
//   },
//   {
//     title: "Design Mobile",
//     description:
//       "Design mobile d'une solution de mise en relation entre client et prestataire.",
//     tags: ["Figma"],
//     color: "blue",
//     category: "design",
//     image: fynoq,
//   },
//   {
//     title: "Design Web",
//     description:
//       "Design d'une solution logicielle complète de gestion hôtelière fonctionnant sur un modèle SaaS avec interfaces utilisateurs et BackOffice admin.",
//     tags: ["Adobe XD"],
//     color: "purple",
//     category: "design",
//     image: luxura,
//   },

//   {
//     title: "Design Web",
//     description:
//       "Design du site web SM contruction , pour une entreprise de contruction et travaux public",
//     tags: ["Adobe XD"],
//     color: "blue",
//     category: "design",
//     image: smcontruction,
//   },

//   {
//     title: "Design Web",
//     description:
//       "Design de l'application web de sécurité de gestion de suivi de visiteurs dashboard admin.",
//     tags: ["Adobe XD"],
//     color: "purple",
//     category: "design",
//     image: designVsecurity,
//   },
//   {
//     title: "Design Web",
//     description:
//       "Design de l'application web gestion des transports interurbains SITUR .",
//     tags: ["Figma"],
//     color: "blue",
//     category: "design",
//     image: designSitur,
//   },
//   {
//     title: "Design Mobile",
//     description:
//       "Design de l'application mobile gestion des transports interurbains SITUR .",
//     tags: ["Figma"],
//     color: "purple",
//     category: "design",
//     image: designSiturMobile,
//   },

//   {
//     title: "Infrastructure Réseau",
//     description:
//       "Conception et Simulation d'un réseau informatique sur Cisco Packet Tracer.",
//     tags: ["Cisco", "Réseau informatique"],
//     color: "blue",
//     category: "autres",
//     image: reseau,
//   },
//   {
//     title: "Analyse et Conception UML",
//     description:
//       "Analyse et Conception UML d'un système de gestion des ressources humaines pour une entreprise",
//     tags: ["UML", "Conception logicielle"],
//     color: "purple",
//     category: "autres",
//     image: rh_uml,
//   },
//   {
//     title: "Analyse et Conception UML",
//     description:
//       "Analyse et Conception UML d'une application d'apprentissage simplifiant l'accès à des ressources éducatives pour les étudiants, en cas de crises ou d'absence du professeur.",
//     tags: ["UML", "Conception logicielle"],
//     color: "blue",
//     category: "autres",
//     image: app_learning_uml,
//   },
// ];

// const FILTERS = [
//   { key: "tous", label: "Tous" },
//   { key: "web", label: "Web" },
//   { key: "mobile", label: "Mobile" },
//   { key: "design", label: "Design" },
//   { key: "hacking", label: "Hacking" },
//   { key: "autres", label: "Autres" },
// ];

// /* ─────────────────────────────────────────
//    CONSTANTS
// ───────────────────────────────────────── */
// const VISIBLE_CARDS = 3;
// // Viewport width that shows exactly 3 full cards
// const AUTO_INTERVAL_MS = 3200;
// const TRANSITION_MS = 600;

// /* ─────────────────────────────────────────
//    RESPONSIVE CONSTANTS
// ───────────────────────────────────────── */
// const BREAKPOINTS = {
//   mobile: {
//     cards: 1,
//     cardWidth: 320,
//     gap: 16,
//     showArrows: false,
//     containerPadding: "px-4",
//   },
//   tablet: {
//     cards: 2,
//     cardWidth: 360,
//     gap: 24,
//     showArrows: true,
//     containerPadding: "px-6",
//   },
//   desktop: {
//     cards: 3,
//     cardWidth: 400,
//     gap: 28,
//     showArrows: true,
//   },
// };

// /* ─────────────────────────────────────────
//    COLOR MAP
// ───────────────────────────────────────── */
// const COLOR = {
//   purple: {
//     border: "border-cyber-purple",
//     bg: "bg-cyber-purple/10",
//     text: "text-cyber-purple",
//     glow: "0_0_32px_rgba(139,92,246,0.3)",
//     tag: "bg-cyber-purple/20 border-cyber-purple/50 text-purple-200",
//     btn: "bg-cyber-purple/20 border-cyber-purple/60 text-cyber-purple hover:bg-cyber-purple/40",
//     arrowClasses:
//       "border-cyber-purple text-cyber-purple hover:bg-cyber-purple/20 hover:border-cyber-purple",
//   },
//   blue: {
//     border: "border-cyber-blue",
//     bg: "bg-cyber-blue/10",
//     text: "text-cyber-blue",
//     glow: "0_0_32px_rgba(56,182,255,0.3)",
//     tag: "bg-cyber-blue/20 border-cyber-blue/50 text-blue-200",
//     btn: "bg-cyber-blue/20 border-cyber-blue/60 text-cyber-blue hover:bg-cyber-blue/40",
//     arrowClasses:
//       "border-cyber-blue text-cyber-blue hover:bg-cyber-blue/20 hover:border-cyber-blue",
//   },
// };

// /* ─────────────────────────────────────────
//    IMAGE MODAL
// ───────────────────────────────────────── */
// const ImageModal = ({ project, onClose, onPrev, onNext, canPrev, canNext }) => {
//   const colors = COLOR[project.color];

//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") onClose();
//       if (e.key === "ArrowLeft" && canPrev) onPrev();
//       if (e.key === "ArrowRight" && canNext) onNext();
//     };
//     window.addEventListener("keydown", onKey);
//     // Prevent body scroll while open
//     document.body.style.overflow = "hidden";
//     return () => {
//       window.removeEventListener("keydown", onKey);
//       document.body.style.overflow = "";
//     };
//   }, [onClose, onPrev, onNext, canPrev, canNext]);

//   return (
//     <div
//       className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
//       style={{
//         backgroundColor: "rgba(0,0,0,0.88)",
//         backdropFilter: "blur(8px)",
//       }}
//       onClick={(e) => {
//         if (e.target === e.currentTarget) onClose();
//       }}
//     >
//       {/* Flèche Gauche */}
//       {canPrev && (
//         <button
//           onClick={onPrev}
//           className={`absolute left-4 sm:left-8 z-20 flex items-center justify-center rounded-full border border-cyber-blue/50 bg-black/60 text-cyber-blue backdrop-blur-sm hover:bg-cyber-blue/20 hover:border-cyber-blue active:scale-95 transition-all duration-200 w-12 h-12 ${colors.arrowClasses}`}
//           aria-label="Projet précédent"
//         >
//           <ChevronLeft size={24} />
//         </button>
//       )}

//       <div
//         className={`relative w-full rounded-2xl overflow-hidden border-2 ${colors.border}`}
//         style={{
//           maxWidth: "1100px",
//           maxHeight: "90vh",
//           boxShadow: `0 ${colors.glow}`,
//           animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
//         }}
//       >
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/70 border border-white/20 text-white hover:bg-white/15 active:scale-95 transition-all duration-150"
//         >
//           <X size={18} />
//         </button>

//         {/* Image */}
//         <div
//           className="w-full bg-black flex items-center justify-center"
//           style={{ maxHeight: "72vh" }}
//         >
//           <img
//             src={project.image}
//             alt={project.title}
//             className="w-full object-contain"
//             style={{ maxHeight: "72vh" }}
//           />
//         </div>

//         {/* Footer */}
//         <div className="px-6 py-4 bg-black/80 backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-3">
//           <div className="min-w-0">
//             <h3 className={`text-lg font-bold truncate ${colors.text}`}>
//               {project.title}
//             </h3>
//             <p className="text-gray-400 text-sm mt-0.5 line-clamp-2">
//               {project.description}
//             </p>
//           </div>
//           <div className="flex flex-wrap gap-2 flex-shrink-0">
//             {project.tags.map((tag, i) => (
//               <span
//                 key={i}
//                 className={`px-3 py-1 border rounded-lg text-xs font-medium ${colors.tag}`}
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Flèche Droite */}
//       {canNext && (
//         <button
//           onClick={onNext}
//           className={`absolute right-4 sm:right-8 z-20 flex items-center justify-center rounded-full border border-cyber-blue/50 bg-black/60 text-cyber-blue backdrop-blur-sm hover:bg-cyber-blue/20 hover:border-cyber-blue active:scale-95 transition-all duration-200 w-12 h-12 ${colors.arrowClasses}`}
//           aria-label="Projet suivant"
//         >
//           <ChevronRight size={24} />
//         </button>
//       )}

//       <style>{`
//         @keyframes modalIn {
//           from { opacity: 0; transform: scale(0.92) translateY(16px); }
//           to   { opacity: 1; transform: scale(1)    translateY(0); }
//         }
//       `}</style>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────
//    PROJECT CARD
// ───────────────────────────────────────── */
// const ProjectCard = ({ project, onView, cardWidth }) => {
//   const colors = COLOR[project.color];

//   return (
//     /*
//       Outer wrapper: flex-shrink-0 + explicit width.
//       Overflow VISIBLE so the glow / scale on hover bleeds outside
//       without being clipped by the track container.
//     */
//     <div
//       className="flex-shrink-0 group w-full"
//       style={{ width: cardWidth, overflow: "visible" }}
//     >
//       {/*
//         Inner card: scale on hover lives here.
//         We use a plain div (not `overflow-hidden`) as the hover target,
//         and let the inner card handle the border-radius + overflow.
//       */}
//       <div
//         className="relative transition-transform duration-300 ease-out group-hover:scale-[1.03]"
//         style={{ borderRadius: "1rem" }}
//       >
//         {/* Ambient glow behind card */}
//         <div
//           className={`
//             absolute -inset-3 rounded-3xl opacity-0 group-hover:opacity-100
//             transition-opacity duration-500 blur-2xl pointer-events-none ${colors.bg}
//           `}
//         />

//         {/* Card surface */}
//         <div
//           className={`relative rounded-2xl overflow-hidden border-2 ${colors.border} ${colors.bg}`}
//           style={{ minHeight: 460 }}
//         >
//           {/* ── Image ── */}
//           <div className="relative h-52 overflow-hidden">
//             <img
//               src={project.image}
//               alt={project.title}
//               className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//             />
//             <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

//             {/* "Voir" overlay button */}
//             <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <button
//                 onClick={() => onView(project)}
//                 className={`
//                   flex items-center gap-2 px-5 py-2.5
//                   rounded-full border text-sm font-semibold
//                   backdrop-blur-sm cursor-pointer
//                   transition-all duration-200 active:scale-95
//                   ${colors.btn}
//                 `}
//               >
//                 <Eye size={15} />
//                 Voir
//               </button>
//             </div>
//           </div>

//           {/* ── Content ── */}
//           <div className="p-6">
//             <h3 className={`text-xl font-bold ${colors.text} mb-2`}>
//               {project.title}
//             </h3>
//             <p className="text-gray-300 text-sm leading-relaxed mb-4">
//               {project.description}
//             </p>
//             <div className="flex flex-wrap gap-2">
//               {project.tags.map((tag, i) => (
//                 <span
//                   key={i}
//                   className={`px-3 py-1 border rounded-lg text-xs font-medium ${colors.tag}`}
//                 >
//                   {tag}
//                 </span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// /* ─────────────────────────────────────────
//    ARROW BUTTON
// ───────────────────────────────────────── */

// const ArrowBtn = ({ onClick, label, children, isMobile }) => (
//   <button
//     onClick={onClick}
//     aria-label={label}
//     className={`
//       flex-shrink-0 flex items-center justify-center
//       rounded-full border border-cyber-blue/50 bg-black/60
//       text-cyber-blue backdrop-blur-sm
//       hover:bg-cyber-blue/20 hover:scale-110 hover:border-cyber-blue
//       active:scale-95 transition-all duration-200 z-10
//       ${isMobile ? "w-10 h-10" : "w-12 h-12"}
//     `}
//   >
//     {children}
//   </button>
// );

// /* ─────────────────────────────────────────
//    HOOK: Get Responsive Config
// ───────────────────────────────────────── */
// const useResponsiveConfig = () => {
//   const [config, setConfig] = useState(BREAKPOINTS.desktop);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setConfig(BREAKPOINTS.mobile);
//       } else if (window.innerWidth < 1024) {
//         setConfig(BREAKPOINTS.tablet);
//       } else {
//         setConfig(BREAKPOINTS.desktop);
//       }
//     };

//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return config;
// };

// /* ─────────────────────────────────────────
//    MAIN SECTION
// ───────────────────────────────────────── */
// const Projects = () => {
//   const config = useResponsiveConfig();
//   const [activeFilter, setActiveFilter] = useState("tous");
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const [offset, setOffset] = useState(0);
//   const [modalProject, setModalProject] = useState(null);
//   const [modalProjectIndex, setModalProjectIndex] = useState(0);

//   const autoRef = useRef(null);
//   const transitionRef = useRef(null);

//   const filtered =
//     activeFilter === "tous"
//       ? allProjects
//       : allProjects.filter((p) => p.category === activeFilter);

//   // const VISIBLE_CARDS = config.cards;
//   const CARD_WIDTH = config.cardWidth;
//   const CARD_GAP = config.gap;
//   const CARD_STEP = CARD_WIDTH + CARD_GAP;
//   const TRACK_WIDTH =
//     VISIBLE_CARDS * CARD_WIDTH + (VISIBLE_CARDS - 1) * CARD_GAP;

//   const singleLen = filtered.length;
//   const items = singleLen > 0 ? [...filtered, ...filtered, ...filtered] : [];
//   const loopStart = singleLen * CARD_STEP;

//   /* ── advance one card ── */
//   const advance = useCallback(
//     (dir) => {
//       setOffset((prev) => prev + dir * CARD_STEP);
//       setIsTransitioning(true);
//       clearTimeout(transitionRef.current);
//       transitionRef.current = setTimeout(
//         () => setIsTransitioning(false),
//         TRANSITION_MS + 60,
//       );
//     },
//     [CARD_STEP],
//   );

//   /* ── auto-scroll ── */
//   const startAuto = useCallback(() => {
//     clearInterval(autoRef.current);
//     autoRef.current = setInterval(() => advance(1), AUTO_INTERVAL_MS);
//   }, [advance]);

//   const stopAuto = () => clearInterval(autoRef.current);

//   /* ── reset when filter changes ── */
//   useEffect(() => {
//     stopAuto();
//     clearTimeout(transitionRef.current);
//     setIsTransitioning(false);
//     setOffset(singleLen * CARD_STEP);
//     const t = setTimeout(startAuto, 700);
//     return () => {
//       stopAuto();
//       clearTimeout(t);
//     };
//   }, [activeFilter]); // eslint-disable-line

//   /* ── seamless infinite loop jump ── */
//   useEffect(() => {
//     if (isTransitioning || singleLen === 0) return;
//     const max = loopStart + singleLen * CARD_STEP;
//     if (offset >= max) setOffset(offset - singleLen * CARD_STEP);
//     else if (offset < loopStart) setOffset(offset + singleLen * CARD_STEP);
//   }, [isTransitioning]); // eslint-disable-line

//   const handlePrev = () => {
//     stopAuto();
//     advance(-1);
//     setTimeout(startAuto, AUTO_INTERVAL_MS + 300);
//   };
//   const handleNext = () => {
//     stopAuto();
//     advance(+1);
//     setTimeout(startAuto, AUTO_INTERVAL_MS + 300);
//   };

//   /* ── active dot index ── */
//   const normalizedOffset =
//     singleLen > 0
//       ? (((offset - loopStart) % (singleLen * CARD_STEP)) +
//           singleLen * CARD_STEP) %
//         (singleLen * CARD_STEP)
//       : 0;
//   const activeIdx = Math.round(normalizedOffset / CARD_STEP) % (singleLen || 1);

//   /* ── Modal navigation ── */
//   const handleModalPrev = () => {
//     setModalProjectIndex((prev) => (prev - 1 + singleLen) % singleLen);
//   };

//   const handleModalNext = () => {
//     setModalProjectIndex((prev) => (prev + 1) % singleLen);
//   };

//   const handleOpenModal = (project) => {
//     const index = filtered.findIndex((p) => p === project);
//     setModalProjectIndex(index);
//     setModalProject(project);
//   };

//   useEffect(() => {
//     if (modalProject && filtered.length > 0) {
//       setModalProject(filtered[modalProjectIndex]);
//     }
//   }, [modalProjectIndex, filtered, modalProject]);

//   return (
//     <>
//       {modalProject && (
//         <ImageModal
//           project={modalProject}
//           onClose={() => setModalProject(null)}
//           onPrev={handleModalPrev}
//           onNext={handleModalNext}
//           canPrev={singleLen > 1}
//           canNext={singleLen > 1}
//         />
//       )}

//       <section id="projects" className="py-24 relative">
//         {/* Wider container — fills up to 1400 px */}
//         <div className={`max-w-[1400px] mx-auto ${config.containerPadding}`}>
//           {/* Header */}
//           <div className="text-center mb-12">
//             <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4">
//               Projets
//             </h2>
//             <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple mx-auto rounded-full" />
//             <p className="text-gray-400 text-lg mt-5 max-w-2xl mx-auto">
//               Découvrez quelques-uns de mes projets récents
//             </p>
//           </div>

//           {/* Filters */}
//           <div className="flex flex-wrap justify-center gap-3 mb-14">
//             {FILTERS.map((f) => (
//               <button
//                 key={f.key}
//                 onClick={() => setActiveFilter(f.key)}
//                 className={`
//                   px-6 py-2 rounded-full border text-sm font-semibold transition-all duration-300
//                   ${
//                     activeFilter === f.key
//                       ? "border-cyber-blue text-cyber-blue bg-cyber-blue/20 scale-105 shadow-[0_0_18px_rgba(56,182,255,0.4)]"
//                       : "border-gray-600 text-gray-400 hover:border-cyber-blue/50 hover:text-cyber-blue/80"
//                   }
//                 `}
//               >
//                 {f.label}
//               </button>
//             ))}
//           </div>

//           {/* Carousel */}
//           {filtered.length === 0 ? (
//             <div className="text-center text-gray-500 py-16 sm:py-20 text-base sm:text-lg">
//               Aucun projet enregistré pour l'instant.
//             </div>
//           ) : (
//             <div className="relative">
//               <div className="flex items-center gap-3 sm:gap-4">
//                 {/* ✨ Flèches cachées sur mobile, visibles sur tablette+ */}
//                 {config.showArrows && (
//                   <ArrowBtn
//                     onClick={handlePrev}
//                     label="Précédent"
//                     isMobile={false}
//                   >
//                     <ChevronLeft size={24} />
//                   </ArrowBtn>
//                 )}

//                 {/*
//                   Carousel track: responsive padding et overflow
//                 */}
//                 <div
//                   style={{
//                     flex: "1 1 auto",
//                     maxWidth: TRACK_WIDTH,
//                     overflowX: "hidden",
//                     overflowY: "visible",
//                     paddingTop: "12px",
//                     paddingBottom: "12px",
//                   }}
//                   onMouseEnter={stopAuto}
//                   onMouseLeave={() => setTimeout(startAuto, 300)}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       gap: CARD_GAP,
//                       transform: `translateX(-${offset}px)`,
//                       transition: isTransitioning
//                         ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`
//                         : "none",
//                       willChange: "transform",
//                     }}
//                   >
//                     {items.map((project, index) => (
//                       <ProjectCard
//                         key={`${project.title}-${index}`}
//                         project={project}
//                         onView={handleOpenModal}
//                         cardWidth={CARD_WIDTH}
//                       />
//                     ))}
//                   </div>
//                 </div>

//                 {/* ✨ Flèches cachées sur mobile, visibles sur tablette+ */}
//                 {config.showArrows && (
//                   <ArrowBtn
//                     onClick={handleNext}
//                     label="Suivant"
//                     isMobile={false}
//                   >
//                     <ChevronRight size={24} />
//                   </ArrowBtn>
//                 )}
//               </div>

//               {/* Dots: toujours visibles, tactiles sur mobile */}
//               <div className="flex justify-center gap-2 mt-6 sm:mt-8">
//                 {filtered.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => {
//                       stopAuto();
//                       const newOffset = loopStart + i * CARD_STEP;
//                       setOffset(newOffset);
//                       setIsTransitioning(true);
//                       clearTimeout(transitionRef.current);
//                       transitionRef.current = setTimeout(
//                         () => setIsTransitioning(false),
//                         TRANSITION_MS + 60,
//                       );
//                       setTimeout(startAuto, AUTO_INTERVAL_MS + 300);
//                     }}
//                     className={`
//                       rounded-full transition-all duration-300 cursor-pointer
//                       hover:bg-cyber-blue/60
//                       ${
//                         i === activeIdx
//                           ? "w-7 h-2 bg-cyber-blue"
//                           : "w-2 h-2 bg-gray-600"
//                       }
//                     `}
//                     aria-label={`Aller au projet ${i + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;

import { useRef, useState, useEffect, useCallback } from "react";
import {
  luxura,
  vsecurity,
  reseau,
  siturApk,
  fynoq,
  siturWeb,
  facebook,
  designVsecurity,
  smcontruction,
  bigBazzar,
  designSitur,
  designSiturMobile,
  carrefourFR,
  hotelApp,
  vulnmarket,
  raven,
  raven2,
  app_learning_uml,
  rh_uml,
  aragog,
} from "../assets/img";
import { ChevronLeft, ChevronRight, X, Eye } from "lucide-react";

/* ─────────────────────────────────────────
   DATA
───────────────────────────────────────── */
const allProjects = [
  {
    title: "Dashboard Web Situr",
    description:
      "Tableau de bord analytique en temps réel de SITUR une application web de gestion de données clients , employés , bus etc... avec Laravel et visualisation de données avancées.",
    tags: [
      "Laravel",
      "TailwindCSS",
      "Chart.js",
      "MySQL",
      "Livewire",
      "Websockets",
      "Moneroo",
      "Firebase Cloud Messaging",
    ],
    color: "blue",
    category: "web",
    image: siturWeb,
  },
  {
    title: "BigBazzar",
    description:
      "une application web de gestion des produits , des clients et des stocks pour boutique",
    tags: ["Laravel", "TailwindCSS", "Chart.js", "MySQL"],
    color: "purple",
    category: "web",
    image: bigBazzar,
  },
  {
    title: "Raven 1 machine virtuelle",
    description:
      "Pentest sur une machine virtuelle volontairement vulnérable pour pratiquer le pentesting et l'identification de vulnérabilités systèmes et réseaux avec Kali Linux et divers outils de pentesting",
    tags: ["Linux", "CTF", "Cyber sécurité", "Test de pénétration"],
    color: "blue",
    category: "hacking",
    image: raven,
  },
  {
    title: "Vuln-Market",
    description:
      "Test de pénétration sur une application web volontairement vulnérable pour pratiquer le pentesting et l'identification de vulnérabilités web avec Burp Suite ",
    tags: ["Burp Suite", "OWASP", "Test de pénétration", "Vulnérabilités Web"],
    color: "purple",
    category: "hacking",
    image: vulnmarket,
  },
  {
    title: "Raven 2 machine virtuelle",
    description:
      "Pentest sur la deuxième version de la machine virtuelle Raven avec des vulnérabilités plus avancées pour approfondir les compétences en pentesting et en identification de vulnérabilités ",
    tags: ["Linux", "CTF", "Cyber sécurité", "Test de pénétration"],
    color: "blue",
    category: "hacking",
    image: raven2,
  },
  {
    title: "Aragog machine virtuelle",
    description:
      "Pentest sur une machine virtuelle volontairement vulnérable nommée Aragog , avec access initial au système via une vulnérabilité de type RCE (Remote Code Execution) , et escalade de privilèges pour obtenir les droits administrateurs",
    tags: [
      "Linux",
      "CTF",
      "Metasploit",
      "Cyber sécurité",
      "Test de pénétration",
    ],
    color: "blue",
    category: "hacking",
    image: aragog,
  },
  {
    title: "VSecurity",
    description:
      "Application web pour système contrôle d'accès temps réel avec suivi des flux d'entrée/sortie.",
    tags: ["Laravel", "MySQL", "TailwindCSS", "Chart.js"],
    color: "blue",
    category: "web",
    image: vsecurity,
  },
  {
    title: "Carrefour Market",
    description:
      "Reproduction du site web de Carrefour Market France avec TailwindCSS, gestion de produits.",
    tags: ["HTML", "CSS", "TailwindCSS"],
    color: "purple",
    category: "web",
    image: carrefourFR,
  },
  {
    title: "Application Mobile Situr",
    description:
      "Développement d'une application d'automatisation du transport urbain avec Flutter et scan de QR codes.",
    tags: [
      "Flutter",
      "API Laravel",
      "Architecture MVVM",
      "Pusher",
      "Firebase Cloud Messaging",
      "Moneroo",
    ],
    color: "blue",
    category: "mobile",
    image: siturApk,
  },
  {
    title: "Application Mobile Hôtelier",
    description:
      "Application mobile de gestion de service hôtelier avec Flutter",
    tags: ["Flutter"],
    color: "blue",
    category: "mobile",
    image: hotelApp,
  },
  {
    title: "Application Mobile Facebook",
    description:
      "Reproduction du très populaire réseau social Facebook avec Flutter.",
    tags: ["Flutter"],
    color: "blue",
    category: "mobile",
    image: facebook,
  },
  {
    title: "Design Mobile",
    description:
      "Design mobile d'une solution de mise en relation entre client et prestataire.",
    tags: ["Figma"],
    color: "blue",
    category: "design",
    image: fynoq,
  },
  {
    title: "Design Web",
    description:
      "Design d'une solution logicielle complète de gestion hôtelière fonctionnant sur un modèle SaaS avec interfaces utilisateurs et BackOffice admin.",
    tags: ["Adobe XD"],
    color: "purple",
    category: "design",
    image: luxura,
  },
  {
    title: "Design Web",
    description:
      "Design du site web SM contruction , pour une entreprise de contruction et travaux public",
    tags: ["Adobe XD"],
    color: "blue",
    category: "design",
    image: smcontruction,
  },
  {
    title: "Design Web",
    description:
      "Design de l'application web de sécurité de gestion de suivi de visiteurs dashboard admin.",
    tags: ["Adobe XD"],
    color: "purple",
    category: "design",
    image: designVsecurity,
  },
  {
    title: "Design Web",
    description:
      "Design de l'application web gestion des transports interurbains SITUR .",
    tags: ["Figma"],
    color: "blue",
    category: "design",
    image: designSitur,
  },
  {
    title: "Design Mobile",
    description:
      "Design de l'application mobile gestion des transports interurbains SITUR .",
    tags: ["Figma"],
    color: "purple",
    category: "design",
    image: designSiturMobile,
  },
  {
    title: "Infrastructure Réseau",
    description:
      "Conception et Simulation d'un réseau informatique sur Cisco Packet Tracer.",
    tags: ["Cisco", "Réseau informatique"],
    color: "blue",
    category: "autres",
    image: reseau,
  },
  {
    title: "Analyse et Conception UML",
    description:
      "Analyse et Conception UML d'un système de gestion des ressources humaines pour une entreprise",
    tags: ["UML", "Conception logicielle"],
    color: "purple",
    category: "autres",
    image: rh_uml,
  },
  {
    title: "Analyse et Conception UML",
    description:
      "Analyse et Conception UML d'une application d'apprentissage simplifiant l'accès à des ressources éducatives pour les étudiants, en cas de crises ou d'absence du professeur.",
    tags: ["UML", "Conception logicielle"],
    color: "blue",
    category: "autres",
    image: app_learning_uml,
  },
];

const FILTERS = [
  { key: "tous", label: "Tous" },
  { key: "web", label: "Web" },
  { key: "mobile", label: "Mobile" },
  { key: "design", label: "Design" },
  { key: "hacking", label: "Hacking" },
  { key: "autres", label: "Autres" },
];

/* ─────────────────────────────────────────
   CONSTANTS
───────────────────────────────────────── */
const AUTO_INTERVAL_MS = 3200;
const TRANSITION_MS = 600;

/* ─────────────────────────────────────────
   RESPONSIVE CONSTANTS
───────────────────────────────────────── */
const BREAKPOINTS = {
  mobile: {
    cards: 1,
    cardWidth: 320,
    gap: 16,
    showArrows: false,
    containerPadding: "px-4",
  },
  tablet: {
    cards: 2,
    cardWidth: 360,
    gap: 24,
    showArrows: true,
    containerPadding: "px-6",
  },
  desktop: {
    cards: 3,
    cardWidth: 400,
    gap: 28,
    showArrows: true,
    containerPadding: "px-4 sm:px-6 lg:px-8",
  },
};

/* ─────────────────────────────────────────
   COLOR MAP — "blue" / "purple" are the data keys already
   used across every project entry; only their rendered
   tokens change here (teal / amber).
───────────────────────────────────────── */
const COLOR = {
  purple: {
    border: "border-amber/50",
    text: "text-amber",
    tag: "border-amber/40 text-amber",
    btn: "border-amber text-amber hover:bg-amber hover:text-ink",
    code: "AMB",
  },
  blue: {
    border: "border-teal/50",
    text: "text-teal",
    tag: "border-teal/40 text-teal",
    btn: "border-teal text-teal hover:bg-teal hover:text-ink",
    code: "TEA",
  },
};

const CATEGORY_LABEL = {
  web: "WEB",
  mobile: "MOBILE",
  design: "DESIGN",
  hacking: "SEC",
  autres: "AUTRE",
};

/* ─────────────────────────────────────────
   IMAGE MODAL
───────────────────────────────────────── */
const ImageModal = ({ project, onClose, onPrev, onNext, canPrev, canNext }) => {
  const colors = COLOR[project.color];

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && canPrev) onPrev();
      if (e.key === "ArrowRight" && canNext) onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext, canPrev, canNext]);

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
      style={{
        backgroundColor: "rgba(11,15,13,0.92)",
        backdropFilter: "blur(6px)",
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {canPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 sm:left-8 z-20 flex items-center justify-center border border-line-strong bg-ink/80 text-paper hover:border-paper active:scale-95 transition-all duration-200 w-11 h-11"
          aria-label="Projet précédent"
        >
          <ChevronLeft size={22} />
        </button>
      )}

      <div
        className={`relative w-full doc-panel border-2 ${colors.border} overflow-hidden`}
        style={{
          maxWidth: "1100px",
          maxHeight: "90vh",
          animation: "modalIn 0.25s cubic-bezier(0.34,1.56,0.64,1) both",
        }}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-line index-label text-[11px] text-muted">
          <span>
            CASE-{colors.code} / {CATEGORY_LABEL[project.category]}
          </span>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center border border-line-strong text-paper hover:border-amber hover:text-amber transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        <div
          className="w-full bg-black flex items-center justify-center"
          style={{ maxHeight: "68vh" }}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full object-contain"
            style={{ maxHeight: "68vh" }}
          />
        </div>

        <div className="px-6 py-5 bg-ink-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="min-w-0">
            <h3
              className={`text-lg font-display font-semibold truncate ${colors.text}`}
            >
              {project.title}
            </h3>
            <p className="text-muted text-sm mt-1 line-clamp-2">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap gap-2 flex-shrink-0">
            {project.tags.map((tag, i) => (
              <span
                key={i}
                className={`index-label px-2.5 py-1 border rounded-none text-[11px] ${colors.tag}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {canNext && (
        <button
          onClick={onNext}
          className="absolute right-4 sm:right-8 z-20 flex items-center justify-center border border-line-strong bg-ink/80 text-paper hover:border-paper active:scale-95 transition-all duration-200 w-11 h-11"
          aria-label="Projet suivant"
        >
          <ChevronRight size={22} />
        </button>
      )}

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
};

/* ─────────────────────────────────────────
   PROJECT CARD
───────────────────────────────────────── */
const ProjectCard = ({ project, onView, cardWidth }) => {
  const colors = COLOR[project.color];

  return (
    <div
      className="flex-shrink-0 group w-full"
      style={{ width: cardWidth, overflow: "visible" }}
    >
      <div
        className={`doc-panel cut-corner-sm relative overflow-hidden border ${colors.border}`}
        style={{ minHeight: 460 }}
      >
        {/* header strip */}
        <div className="flex items-center justify-between px-4 py-2.5 border-b border-line index-label text-[10px] text-muted">
          <span>{CATEGORY_LABEL[project.category]}</span>
          <span className={colors.text}>
            {colors.code}-{String(Math.abs(project.title.length))}
          </span>
        </div>

        {/* image */}
        <div className="relative h-48 overflow-hidden border-b border-line">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover grayscale-[35%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-70" />

          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink/40">
            <button
              onClick={() => onView(project)}
              className={`flex items-center gap-2 px-5 py-2.5 border text-sm font-semibold index-label cursor-pointer transition-all duration-200 active:scale-95 bg-ink/80 ${colors.btn}`}
            >
              <Eye size={15} />
              VOIR
            </button>
          </div>
        </div>

        {/* content */}
        <div className="p-6">
          <h3
            className={`text-lg font-display font-semibold ${colors.text} mb-2`}
          >
            {project.title}
          </h3>
          <p className="text-muted text-sm leading-relaxed mb-4 line-clamp-3">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 4).map((tag, i) => (
              <span
                key={i}
                className={`index-label px-2.5 py-1 border text-[10px] ${colors.tag}`}
              >
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="index-label px-2.5 py-1 border border-line-strong text-[10px] text-muted">
                +{project.tags.length - 4}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/* ─────────────────────────────────────────
   ARROW BUTTON
───────────────────────────────────────── */
const ArrowBtn = ({ onClick, label, children }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="flex-shrink-0 flex items-center justify-center border border-line-strong bg-ink-900 text-paper hover:border-amber hover:text-amber active:scale-95 transition-all duration-200 z-10 w-11 h-11"
  >
    {children}
  </button>
);

/* ─────────────────────────────────────────
   HOOK: Get Responsive Config
───────────────────────────────────────── */
const useResponsiveConfig = () => {
  const [config, setConfig] = useState(BREAKPOINTS.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setConfig(BREAKPOINTS.mobile);
      else if (window.innerWidth < 1024) setConfig(BREAKPOINTS.tablet);
      else setConfig(BREAKPOINTS.desktop);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return config;
};

/* ─────────────────────────────────────────
   MAIN SECTION
───────────────────────────────────────── */
const Projects = () => {
  const config = useResponsiveConfig();
  const [activeFilter, setActiveFilter] = useState("tous");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [offset, setOffset] = useState(0);
  const [modalProject, setModalProject] = useState(null);
  const [modalProjectIndex, setModalProjectIndex] = useState(0);

  const autoRef = useRef(null);
  const transitionRef = useRef(null);

  const filtered =
    activeFilter === "tous"
      ? allProjects
      : allProjects.filter((p) => p.category === activeFilter);

  const CARD_WIDTH = config.cardWidth;
  const CARD_GAP = config.gap;
  const CARD_STEP = CARD_WIDTH + CARD_GAP;

  const singleLen = filtered.length;
  const items = singleLen > 0 ? [...filtered, ...filtered, ...filtered] : [];
  const loopStart = singleLen * CARD_STEP;

  const advance = useCallback(
    (dir) => {
      setOffset((prev) => prev + dir * CARD_STEP);
      setIsTransitioning(true);
      clearTimeout(transitionRef.current);
      transitionRef.current = setTimeout(
        () => setIsTransitioning(false),
        TRANSITION_MS + 60,
      );
    },
    [CARD_STEP],
  );

  const startAuto = useCallback(() => {
    clearInterval(autoRef.current);
    autoRef.current = setInterval(() => advance(1), AUTO_INTERVAL_MS);
  }, [advance]);

  const stopAuto = () => clearInterval(autoRef.current);

  useEffect(() => {
    stopAuto();
    clearTimeout(transitionRef.current);
    setIsTransitioning(false);
    setOffset(singleLen * CARD_STEP);
    const t = setTimeout(startAuto, 700);
    return () => {
      stopAuto();
      clearTimeout(t);
    };
  }, [activeFilter]); // eslint-disable-line

  useEffect(() => {
    if (isTransitioning || singleLen === 0) return;
    const max = loopStart + singleLen * CARD_STEP;
    if (offset >= max) setOffset(offset - singleLen * CARD_STEP);
    else if (offset < loopStart) setOffset(offset + singleLen * CARD_STEP);
  }, [isTransitioning]); // eslint-disable-line

  const handlePrev = () => {
    stopAuto();
    advance(-1);
    setTimeout(startAuto, AUTO_INTERVAL_MS + 300);
  };
  const handleNext = () => {
    stopAuto();
    advance(1);
    setTimeout(startAuto, AUTO_INTERVAL_MS + 300);
  };

  const normalizedOffset =
    singleLen > 0
      ? (((offset - loopStart) % (singleLen * CARD_STEP)) +
          singleLen * CARD_STEP) %
        (singleLen * CARD_STEP)
      : 0;
  const activeIdx = Math.round(normalizedOffset / CARD_STEP) % (singleLen || 1);

  const handleModalPrev = () => {
    setModalProjectIndex((prev) => (prev - 1 + singleLen) % singleLen);
  };
  const handleModalNext = () => {
    setModalProjectIndex((prev) => (prev + 1) % singleLen);
  };
  const handleOpenModal = (project) => {
    const index = filtered.findIndex((p) => p === project);
    setModalProjectIndex(index);
    setModalProject(project);
  };

  useEffect(() => {
    if (modalProject && filtered.length > 0) {
      setModalProject(filtered[modalProjectIndex]);
    }
  }, [modalProjectIndex, filtered, modalProject]);

  const TRACK_WIDTH = config.cards * CARD_WIDTH + (config.cards - 1) * CARD_GAP;

  return (
    <>
      {modalProject && (
        <ImageModal
          project={modalProject}
          onClose={() => setModalProject(null)}
          onPrev={handleModalPrev}
          onNext={handleModalNext}
          canPrev={singleLen > 1}
          canNext={singleLen > 1}
        />
      )}

      <section id="projects" className="py-24 relative">
        <div className={`max-w-[1400px] mx-auto ${config.containerPadding}`}>
          <div className="mb-14">
            <div className="index-label text-xs text-amber flex items-center gap-2 mb-4">
              <span className="w-8 h-px bg-amber" />
              04 — PROJETS
            </div>
            <h2 className="font-display font-semibold text-4xl sm:text-5xl text-paper mb-4">
              Archives
            </h2>
            <p className="text-muted text-lg max-w-2xl">
              Découvrez quelques-uns de mes projets récents
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-12 border-b border-line pb-6">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`index-label px-4 py-2 text-xs border transition-all duration-200 ${
                  activeFilter === f.key
                    ? "border-amber text-amber bg-amber/10"
                    : "border-line-strong text-muted hover:text-paper hover:border-paper/40"
                }`}
              >
                {f.label.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Carousel */}
          {filtered.length === 0 ? (
            <div className="text-center text-muted py-16 sm:py-20 text-base sm:text-lg">
              Aucun projet enregistré pour l'instant.
            </div>
          ) : (
            <div className="relative">
              <div className="flex items-center gap-3 sm:gap-4">
                {config.showArrows && (
                  <ArrowBtn onClick={handlePrev} label="Précédent">
                    <ChevronLeft size={20} />
                  </ArrowBtn>
                )}

                <div
                  style={{
                    flex: "1 1 auto",
                    maxWidth: TRACK_WIDTH,
                    overflowX: "hidden",
                    overflowY: "visible",
                    paddingTop: "8px",
                    paddingBottom: "8px",
                  }}
                  onMouseEnter={stopAuto}
                  onMouseLeave={() => setTimeout(startAuto, 300)}
                >
                  <div
                    style={{
                      display: "flex",
                      gap: CARD_GAP,
                      transform: `translateX(-${offset}px)`,
                      transition: isTransitioning
                        ? `transform ${TRANSITION_MS}ms cubic-bezier(0.4,0,0.2,1)`
                        : "none",
                      willChange: "transform",
                    }}
                  >
                    {items.map((project, index) => (
                      <ProjectCard
                        key={`${project.title}-${index}`}
                        project={project}
                        onView={handleOpenModal}
                        cardWidth={CARD_WIDTH}
                      />
                    ))}
                  </div>
                </div>

                {config.showArrows && (
                  <ArrowBtn onClick={handleNext} label="Suivant">
                    <ChevronRight size={20} />
                  </ArrowBtn>
                )}
              </div>

              {/* Dots */}
              <div className="flex justify-center gap-2 mt-8">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      stopAuto();
                      const newOffset = loopStart + i * CARD_STEP;
                      setOffset(newOffset);
                      setIsTransitioning(true);
                      clearTimeout(transitionRef.current);
                      transitionRef.current = setTimeout(
                        () => setIsTransitioning(false),
                        TRANSITION_MS + 60,
                      );
                      setTimeout(startAuto, AUTO_INTERVAL_MS + 300);
                    }}
                    className={`transition-all duration-300 cursor-pointer hover:bg-amber/60 ${
                      i === activeIdx
                        ? "w-6 h-1.5 bg-amber"
                        : "w-1.5 h-1.5 bg-line-strong"
                    }`}
                    aria-label={`Aller au projet ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Projects;
