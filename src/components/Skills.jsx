// import { Code, Palette, Server, Shield } from "lucide-react";

// const Skills = () => {
//   const skillCategories = [
//     {
//       title: "Développement Web & Mobile",
//       icon: <Code size={32} />,
//       color: "purple",
//       skills: [
//         "HTML",
//         "CSS",
//         "TailwindCSS",
//         "JavaScript",
//         "PHP",
//         "MySQL",
//         "React.js",
//         "Angular",
//         "Python",
//         "Laravel",
//         "Django",
//         "Django REST",
//         "Flutter",
//       ],
//     },
//     {
//       title: "Design UI/UX",
//       icon: <Palette size={32} />,
//       color: "blue",
//       skills: ["Adobe XD", "Figma"],
//     },
//     {
//       title: "Systèmes & Réseaux",
//       icon: <Server size={32} />,
//       color: "blue",
//       skills: ["Cisco Packet Tracer", "VirtualBox", "VMWare", "GNS3"],
//     },
//     {
//       title: "Cybersécurité",
//       icon: <Shield size={32} />,
//       color: "blue",
//       skills: [
//         "Ethical hacking",
//         "Linux",
//         "Red Team",
//         "Owasp Top 10",
//         "PenTesting",
//         "Metasploit",
//         "Nmap",
//         "OSINT",
//       ],
//     },
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       purple: {
//         border: "border-cyber-purple",
//         bg: "bg-cyber-purple/10",
//         text: "text-cyber-purple",
//         glow: "hover:shadow-neon-purple",
//         skill: "bg-cyber-purple/20 border-cyber-purple/50",
//       },

//       blue: {
//         border: "border-cyber-blue",
//         bg: "bg-cyber-blue/10",
//         text: "text-cyber-blue",
//         glow: "hover:shadow-neon-blue",
//         skill: "bg-cyber-blue/20 border-cyber-blue/50",
//       },
//     };
//     return colors[color];
//   };

//   return (
//     <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4">
//             Compétences
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
//         </div>

//         <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
//           {skillCategories.map((category, index) => {
//             const colors = getColorClasses(category.color);
//             return (
//               <div
//                 key={index}
//                 className={`relative group  transition-all duration-300 ${colors.glow} relative border-2 ${colors.border} ${colors.bg} min-h-[200px] rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105`}
//               >
//                 <div
//                   className={`absolute inset-0 ${colors.bg} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}
//                 ></div>
//                 <div
//                 // className={`relative border-2 ${colors.border} ${colors.bg} min-h-[200px] rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:scale-105`}
//                 >
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className={`${colors.text}`}>{category.icon}</div>
//                     <h3 className={`text-2xl font-bold ${colors.text}`}>
//                       {category.title}
//                     </h3>
//                   </div>
//                   <div className="flex flex-wrap gap-3">
//                     {category.skills.map((skill, skillIndex) => (
//                       <span
//                         key={skillIndex}
//                         className={`px-4 py-2 ${colors.skill} border rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-110 cursor-default`}
//                       >
//                         {skill}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;

import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiReact,
  SiAngular,
  SiPython,
  SiLaravel,
  SiDjango,
  SiFlutter,
  SiFigma,
  SiCisco,
  SiVirtualbox,
  SiVmware,
  SiLinux,
  SiMetasploit,
  SiOwasp,
} from "react-icons/si";
import {
  Network,
  ShieldCheck,
  Swords,
  TerminalSquare,
  Radar,
  Search,
} from "lucide-react";

/* ─────────────────────────────────────────
   Adobe XD doesn't ship as a Simple Icons
   glyph — its mark is literally the "Xd"
   monogram, so it's reproduced as a small
   lettermark instead of an svg import.
───────────────────────────────────────── */
const XdMark = ({ size = 28 }) => (
  <span
    className="inline-flex items-center justify-center font-display font-bold"
    style={{
      width: size,
      height: size,
      fontSize: size * 0.5,
      color: "#FF26BE",
    }}
  >
    Xd
  </span>
);

const skillCategories = [
  {
    title: "Développement Web & Mobile",
    accent: "amber",
    index: "01",
    skills: [
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "TailwindCSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "PHP", Icon: SiPhp, color: "#8892BF" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Angular", Icon: SiAngular, color: "#DD0031" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "Django", Icon: SiDjango, color: "#2F9E5C" },
      { name: "Django REST", Icon: SiDjango, color: "#2F9E5C" },
      { name: "Flutter", Icon: SiFlutter, color: "#54C5F8" },
    ],
  },
  {
    title: "Design UI/UX",
    accent: "teal",
    index: "02",
    skills: [
      { name: "Adobe XD", Icon: XdMark, color: "#FF26BE" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Systèmes & Réseaux",
    accent: "teal",
    index: "03",
    skills: [
      { name: "Cisco Packet Tracer", Icon: SiCisco, color: "#3EC1F3" },
      { name: "VirtualBox", Icon: SiVirtualbox, color: "#4287DB" },
      { name: "VMWare", Icon: SiVmware, color: "#8DDBFF" },
      { name: "GNS3", Icon: Network, color: "#4FA98F", lucide: true },
    ],
  },
  {
    title: "Cybersécurité",
    accent: "teal",
    index: "04",
    skills: [
      {
        name: "Ethical hacking",
        Icon: ShieldCheck,
        color: "#E7A33E",
        lucide: true,
      },
      { name: "Linux", Icon: SiLinux, color: "#FCC624" },
      { name: "Red Team", Icon: Swords, color: "#C1443C", lucide: true },
      { name: "Owasp Top 10", Icon: SiOwasp, color: "#E7A33E" },
      {
        name: "PenTesting",
        Icon: TerminalSquare,
        color: "#4FA98F",
        lucide: true,
      },
      { name: "Metasploit", Icon: SiMetasploit, color: "#3EC1F3" },
      { name: "Nmap", Icon: Radar, color: "#4FA98F", lucide: true },
      { name: "OSINT", Icon: Search, color: "#E7A33E", lucide: true },
    ],
  },
];

const accentClasses = {
  amber: "text-amber",
  teal: "text-teal",
};

const SkillBadge = ({ skill }) => {
  const { name, Icon, color, lucide } = skill;
  return (
    <div className="group flex flex-col items-center gap-2 w-[92px]">
      <div
        className="w-[72px] h-[72px] flex items-center justify-center bg-ink-900 border border-line-strong group-hover:border-current transition-colors duration-200"
        style={{ color }}
      >
        {lucide ? <Icon size={30} strokeWidth={1.6} /> : <Icon size={30} />}
      </div>
      <span className="index-label text-[9px] text-muted text-center leading-tight group-hover:text-paper transition-colors duration-200">
        {name}
      </span>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="index-label text-xs text-amber flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-amber" />
            02 — COMPÉTENCES
          </div>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-paper">
            Stack &amp; outils
          </h2>
        </div>

        <div className="space-y-px bg-line border border-line">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-ink-900 p-8">
              <div className="flex items-center gap-3 mb-7">
                <span
                  className={`index-label text-xs ${accentClasses[category.accent]}`}
                >
                  {category.index}
                </span>
                <h3 className="text-lg font-display font-semibold text-paper">
                  {category.title}
                </h3>
                <span className="flex-1 h-px bg-line ml-2" />
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBadge key={skillIndex} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
