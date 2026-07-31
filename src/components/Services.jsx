// import { Globe, Smartphone, Paintbrush, Server, Network, ShieldCheck } from 'lucide-react';

// const Services = () => {
//   const services = [
//     {
//       icon: <Globe size={48} />,
//       title: 'Développement Web',
//       description: 'Création de sites web modernes et performants avec Laravel, Django, React.js et les dernières technologies.',
//       color: 'blue'
//     },
//     {
//       icon: <Smartphone size={48} />,
//       title: 'Développement Mobile',
//       description: 'Applications mobiles natives et cross-platform avec Flutter pour iOS et Android.',
//       color: 'blue'
//     },
//     {
//       icon: <Paintbrush size={48} />,
//       title: 'UI/UX Design',
//       description: 'Conception d\'interfaces utilisateur élégantes et intuitives avec Adobe XD et Figma.',
//       color: 'purple'
//     },
//     {
//       icon: <Server size={48} />,
//       title: 'Administration Système',
//       description: 'Initiation aux environnements Linux et à la virtualisation — avec une curiosité active et une montée en compétences continue sur la gestion et l\'optimisation des systèmes.',
//       color: 'blue'
//     },
//     {
//       icon: <Network size={48} />,
//       title: 'Administration Réseau',
//       description: "Bonnes bases en conception et gestion d'infrastructures réseau, avec un intérêt prononcé pour la sécurité et l'optimisation des performances systèmes.",
//       // description: "Initiation aux infrastructures réseau — avec une compréhension des fondamentaux en sécurité et performance, et une volonté constante d'approfondir mes connaissances dans ce domaine.",
//       color: 'blue'
//     },
//     {
//       icon: <ShieldCheck size={48} />,
//       title: 'Audit & Sécurité',
//       description: "Apprenti chasseur de failles — Bases solides en cybersécurité offensive — curieux, méthodique, et déterminé à maîtriser l'art de la sécurité offensive.",
//       color: 'purple'
//     }
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       purple: {
//         border: 'border-cyber-purple',
//         bg: 'bg-cyber-purple/10',
//         text: 'text-cyber-purple',
//         glow: 'hover:shadow-neon-purple'
//       },
//       blue: {
//         border: 'border-cyber-blue',
//         bg: 'bg-cyber-blue/10',
//         text: 'text-cyber-blue',
//         glow: 'hover:shadow-neon-blue'
//       },
//     };
//     return colors[color];
//   };

//   return (
//     <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4">
//             Services
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
//           <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
//             Des solutions complètes pour tous vos besoins technologiques
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => {
//             const colors = getColorClasses(service.color);
//             return (
//               <div
//                 key={index}
//                 className={`relative group transition-all duration-300 ${colors.glow}`}
//               >
//                 <div className={`absolute inset-0 ${colors.bg} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}></div>
//                 <div className={`relative border-2 ${colors.border} ${colors.bg} rounded-2xl p-8 backdrop-blur-sm transition-all duration-300 group-hover:scale-105 h-full flex flex-col`}>
//                   <div className={`${colors.text} mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
//                     {service.icon}
//                   </div>
//                   <h3 className={`text-2xl font-bold ${colors.text} mb-4`}>
//                     {service.title}
//                   </h3>
//                   <p className="text-gray-300 leading-relaxed flex-grow">
//                     {service.description}
//                   </p>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

import {
  Globe,
  Smartphone,
  Paintbrush,
  Server,
  Network,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    icon: <Globe size={20} />,
    title: "Développement Web",
    description:
      "Création de sites web modernes et performants avec Laravel, Django, React.js et les dernières technologies.",
    accent: "teal",
    image:
      "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?auto=format&fit=crop&w=900&q=75",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Développement Mobile",
    description:
      "Applications mobiles natives et cross-platform avec Flutter pour iOS et Android.",
    accent: "teal",
    image:
      "https://images.unsplash.com/photo-1726066012801-14d892021339?auto=format&fit=crop&w=900&q=75",
  },
  {
    icon: <Paintbrush size={20} />,
    title: "UI/UX Design",
    description:
      "Conception d'interfaces utilisateur élégantes et intuitives avec Adobe XD et Figma.",
    accent: "amber",
    image:
      "https://images.unsplash.com/photo-1725002547198-6c4645564ca5?auto=format&fit=crop&w=900&q=75",
  },
  {
    icon: <Server size={20} />,
    title: "Administration Système",
    description:
      "Initiation aux environnements Linux et à la virtualisation — avec une curiosité active et une montée en compétences continue sur la gestion et l'optimisation des systèmes.",
    accent: "teal",
    image:
      "https://images.unsplash.com/photo-1695668548342-c0c1ad479aee?auto=format&fit=crop&w=900&q=75",
  },
  {
    icon: <Network size={20} />,
    title: "Administration Réseau",
    description:
      "Bonnes bases en conception et gestion d'infrastructures réseau, avec un intérêt prononcé pour la sécurité et l'optimisation des performances systèmes.",
    accent: "teal",
    image:
      "https://images.unsplash.com/photo-1680691257251-5fead813b73e?auto=format&fit=crop&w=900&q=75",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Audit & Sécurité",
    description:
      "Apprenti chasseur de failles — Bases solides en cybersécurité offensive — curieux, méthodique, et déterminé à maîtriser l'art de la sécurité offensive.",
    accent: "amber",
    image:
      "https://images.unsplash.com/photo-1602529710584-458a995c8785?auto=format&fit=crop&w=900&q=75",
  },
];

const accentClasses = {
  amber: {
    text: "text-amber",
    border: "hover:border-amber",
    ring: "border-amber",
  },
  teal: { text: "text-teal", border: "hover:border-teal", ring: "border-teal" },
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="index-label text-xs text-amber flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-amber" />
            03 — SERVICES
          </div>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-paper mb-4">
            Manifeste
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Des solutions complètes pour tous vos besoins technologiques
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const colors = accentClasses[service.accent];
            return (
              <div
                key={index}
                className={`group relative overflow-hidden doc-panel border transition-colors duration-300 ${colors.border}`}
              >
                {/* photo */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
                  />
                  {/* duotone wash — keeps every photo on-palette */}
                  <div
                    className="absolute inset-0 mix-blend-multiply opacity-80 transition-opacity duration-500 group-hover:opacity-50"
                    style={{
                      background:
                        service.accent === "amber"
                          ? "linear-gradient(160deg, #0B0F0D 10%, #8C6423 190%)"
                          : "linear-gradient(160deg, #0B0F0D 10%, #2C6355 190%)",
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900 via-transparent to-transparent" />

                  <span
                    className={`absolute top-3 right-3 index-label text-[10px] px-2 py-1 border bg-ink/70 ${colors.text} ${colors.ring}`}
                  >
                    SVC-{String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={`absolute bottom-3 left-4 ${colors.text}`}>
                    {service.icon}
                  </span>
                </div>

                {/* content */}
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-paper mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
