// import { Sparkles } from "lucide-react";

// const About = () => {
//   return (
//     <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
//       <div className="max-w-6xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4 inline-flex items-center gap-3">
//             <Sparkles className="text-cyber-blue" size={40} />
//             À propos
//             <Sparkles className="text-cyber-blue" size={40} />
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
//         </div>

//         <div className="gradient-border max-w-4xl mx-auto">
//           <div className="gradient-border-content">
//             <div className="flex flex-col md:flex-row items-center gap-10">
//               {/* <div className="flex-shrink-0">
//                 <div className="relative w-48 h-48 rounded-full bg-gradient-to-br from-cyber-blue via-cyber-blue to-cyber-purple p-1 animate-glow">
//                   <div className="w-full h-full rounded-full bg-cyber-dark flex items-center justify-center">
//                     <Code2 size={80} className="text-cyber-blue" />
//                   </div>
//                 </div>
//               </div> */}

//               <div className="relative">
//                 {/* Main card */}
//                 <div className="glass-card p-8 relative overflow-hidden">
//                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-neon" />

//                   {/* Code snippet decoration */}
//                   <div className="font-mono text-md space-y-2 text-muted-foreground">
//                     <p>
//                       <span className="text-cyber-purple">const</span>{" "}
//                       <span className="text-cyber-blue">developer</span> = {"{"}
//                     </p>
//                     <p className="pl-4">
//                       <span className="text-cyber-purple">name</span>:{" "}
//                       <span className="text-foreground">"Miguel Souop"</span>,
//                     </p>
//                     <p className="pl-4">
//                       <span className="text-cyber-purple">role</span>:{" "}
//                       <span className="text-foreground">
//                         "Full-Stack Dev et Hacker "
//                       </span>
//                       ,
//                     </p>
//                     <p className="pl-4">
//                       <span className="text-cyber-purple">skills</span>: [
//                     </p>
//                     <p className="pl-8">
//                       <span className="text-cyber-blue">"Laravel"</span>,{" "}
//                       <span className="text-cyber-purple">"Django"</span>,
//                     </p>
//                     <p className="pl-8">
//                       <span className="text-cyber-purple">"Flutter"</span>,{" "}
//                       <span className="text-cyber-blue">"Angular"</span>
//                     </p>
//                     <p className="pl-8">
//                       <span className="text-cyber-blue">"Linux"</span>,{" "}
//                       <span className="text-cyber-purple">"PenTesting"</span>
//                     </p>
//                     <p className="pl-4">],</p>
//                     <p className="pl-4">
//                       <span className="text-cyber-blue">passion</span>:{" "}
//                       <span className="text-cyber-purple">∞</span>
//                     </p>
//                     <p>{"}"}</p>
//                   </div>

//                   {/* Decorative elements */}
//                   <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-purple-pink rounded-full blur-2xl opacity-30" />
//                 </div>

//                 {/* Floating badges */}
//                 <div className="absolute -top-6 -right-6 bg-gray-900 rounded-md px-4 py-2 animate-float">
//                   <span className="text-sm font-semibold text-cyber-blue">
//                     2+ ans exp.
//                   </span>
//                 </div>
//                 <div
//                   className="absolute -bottom-6 -left-6 bg-gray-900 rounded-md px-4 py-2 animate-float"
//                   style={{ animationDelay: "1s" }}
//                 >
//                   <span className="text-sm font-semibold text-cyber-purple">
//                     10+ projets
//                   </span>
//                 </div>
//               </div>

//               <div className="flex-1 space-y-6">
//                 <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
//                   Je suis{" "}
//                   <span className="text-cyber-purple font-semibold glow-text-purple">
//                     Miguel Souop
//                   </span>
//                   , développeur full-stack passionné et Ethical Hacker,
//                   spécialisé en{" "}
//                   <span className="text-cyber-blue font-semibold">Laravel</span>
//                   ,
//                   <span className="text-cyber-blue font-semibold"> Django</span>
//                   ,
//                   <span className="text-cyber-blue font-semibold">
//                     {" "}
//                     Flutter
//                   </span>
//                   ,
//                   <span className="text-cyber-blue font-semibold">
//                     {" "}
//                     Angular
//                   </span>
//                   ,
//                   <span className="text-cyber-blue font-semibold">
//                     {" "}
//                     PenTesting
//                   </span>{" "}
//                   et en
//                   <span className="text-cyber-purple font-semibold">
//                     {" "}
//                     design UI/UX
//                   </span>
//                   .
//                 </p>
//                 <p className="text-lg text-gray-300 leading-relaxed">
//                   J'accompagne entreprises et particuliers dans la création
//                   d'applications web, mobiles, plateformes sur mesure ainsi que
//                   dans la sécurisation et l'administration de systèmes et
//                   réseaux.
//                 </p>

//                 <p className="text-lg text-gray-300 leading-relaxed">
//                   {" "}
//                   J'ai travaillé sur de nombres projets parmis lesquels "SITUR"
//                   où j'ai été le chef d'une équipe de brillants développeurs !
//                 </p>
//                 <div className="flex flex-wrap gap-4 pt-4">
//                   <div className="px-4 py-2 bg-cyber-purple/20 border border-cyber-purple rounded-lg">
//                     <span className="text-cyber-purple font-semibold">
//                       +2 ans d'expérience
//                     </span>
//                   </div>
//                   <div className="px-4 py-2 bg-cyber-blue/20 border border-cyber-blue rounded-lg">
//                     <span className="text-cyber-blue font-semibold">
//                       +10 Projets réussis
//                     </span>
//                   </div>
//                   <div className="px-4 py-2 bg-cyber-blue/20 border border-cyber-blue rounded-lg">
//                     <span className="text-cyber-blue font-semibold">
//                       Passionné de tech
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="index-label text-xs text-amber flex items-center gap-2 mb-4">
            <span className="w-8 font-display h-px bg-amber" />
            01 — À PROPOS
          </div>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-paper">
            Profil
          </h2>
        </div>

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
          {/* ── Profile card ── */}
          <div>
            <div className="doc-panel cut-corner overflow-hidden">
              <div className="flex items-center justify-between px-5 py-3 border-b border-line index-label text-[11px] text-muted">
                <span>profile.json</span>
                <span className="text-amber/70">RO</span>
              </div>
              <div className="p-6 font-mono text-sm space-y-1.5 text-muted leading-relaxed">
                <p>
                  <span className="text-teal">const</span>{" "}
                  <span className="text-amber">developer</span> = {"{"}
                </p>
                <p className="pl-4">
                  <span className="text-teal">name</span>:{" "}
                  <span className="text-paper">"Miguel Souop"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-teal">role</span>:{" "}
                  <span className="text-paper">"Full-Stack Dev et Hacker"</span>
                  ,
                </p>
                <p className="pl-4">
                  <span className="text-teal">skills</span>: [
                </p>
                <p className="pl-8">
                  <span className="text-amber">"Laravel"</span>,{" "}
                  <span className="text-teal">"Django"</span>,
                </p>
                <p className="pl-8">
                  <span className="text-teal">"Flutter"</span>,{" "}
                  <span className="text-amber">"Angular"</span>,
                </p>
                <p className="pl-8">
                  <span className="text-amber">"Linux"</span>,{" "}
                  <span className="text-teal">"PenTesting"</span>
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                  <span className="text-amber">passion</span>:{" "}
                  <span className="text-teal">∞</span>
                </p>
                <p>{"}"}</p>
              </div>
            </div>

            {/* stat rail */}
            <div className="flex mt-6 border border-line divide-x divide-line">
              <div className="flex-1 px-5 py-4">
                <p className="font-display text-2xl text-amber">02+</p>
                <p className="index-label text-[10px] text-muted mt-1">
                  ANS D'EXPÉRIENCE
                </p>
              </div>
              <div className="flex-1 px-5 py-4">
                <p className="font-display text-2xl text-teal">10+</p>
                <p className="index-label text-[10px] text-muted mt-1">
                  PROJETS RÉUSSIS
                </p>
              </div>
            </div>
          </div>

          {/* ── Bio ── */}
          <div className="space-y-6">
            <p className="text-lg sm:text-xl text-paper leading-relaxed">
              Je suis{" "}
              <span className="text-amber font-semibold">Miguel Souop</span>,
              développeur full-stack passionné et Ethical Hacker, spécialisé en{" "}
              <span className="text-teal font-medium">Laravel</span>,
              <span className="text-teal font-medium"> Django</span>,
              <span className="text-teal font-medium"> Flutter</span>,
              <span className="text-teal font-medium"> Angular</span>,
              <span className="text-teal font-medium"> PenTesting</span> et en{" "}
              <span className="text-amber font-medium">design UI/UX</span>.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              J'accompagne entreprises et particuliers dans la création
              d'applications web, mobiles, plateformes sur mesure ainsi que dans
              la sécurisation et l'administration de systèmes et réseaux.
            </p>
            <p className="text-lg text-muted leading-relaxed">
              J'ai travaillé sur de nombres projets parmis lesquels "SITUR" où
              j'ai été le chef d'une équipe de brillants développeurs !
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <span className="index-label text-xs px-3.5 py-2 border border-line-strong text-paper">
                +2 ANS D'EXPÉRIENCE
              </span>
              <span className="index-label text-xs px-3.5 py-2 border border-line-strong text-paper">
                +10 PROJETS RÉUSSIS
              </span>
              <span className="index-label text-xs px-3.5 py-2 border border-line-strong text-paper">
                PASSIONNÉ DE TECH
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
