// import { Download, Mail } from "lucide-react";

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
//     >
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-pulse-slow"></div>
//         <div
//           className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-slow"
//           style={{ animationDelay: "1s" }}
//         ></div>
//         <div
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyber-blue/20 rounded-full blur-3xl animate-pulse-slow"
//           style={{ animationDelay: "2s" }}
//         ></div>
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <div className="space-y-8 animate-float">
//           <div className="space-y-4">
//             <h2 className="text-cyber-blue text-lg sm:text-xl font-semibold tracking-wider uppercase animate-pulse">
//               Bienvenue sur mon portfolio
//             </h2>
//             <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold">
//               <span className="text-gradient glow-text-blue">Miguel Souop</span>
//             </h1>
//           </div>

//           <div className="space-y-4 max-w-4xl mx-auto">
//             <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium leading-relaxed">
//               <span className="text-cyber-purple glow-text-purple">
//                 Développeur Full-Stack
//               </span>
//               <span className="text-white"> Laravel & Django</span>
//             </p>
//             <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
//               Web/Mobile • Designer Web & Mobile
//             </p>
//             <p className="text-lg sm:text-xl md:text-2xl text-gray-300">
//               Administrateur Réseau & Système •{" "}
//               <span className="text-cyber-blue glow-text-blue sm:text-2xl md:text-3xl ">
//                 Ethical Hacker
//               </span>
//             </p>
//           </div>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
//             <a
//               href="#contact"
//               className="group relative px-8 py-4 bg-gradient-to-r from-cyber-purple  to-cyber-blue rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon-blue"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <Mail size={20} />
//                 Me Contacter
//               </span>
//               <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//             </a>

//             <a
//               href="/c:\Users\Bachelor Du Code\Downloads\CV_SOUOP_TEWA_MIGUEL.pdf.pdf"
//               download
//               className="group relative px-8 py-4 border-2 border-cyber-purple rounded-full font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-neon-purple hover:bg-cyber-purple/20"
//             >
//               <span className="relative z-10 flex items-center gap-2">
//                 <Download size={20} />
//                 Télécharger CV
//               </span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

import { useState, useEffect, useRef } from "react";
import { Download, Mail, ArrowUpRight } from "lucide-react";

const TERMINAL_LINES = [
  {
    prompt: "whoami",
    output: "Miguel Souop — Full-Stack Dev & Ethical Hacker",
  },
  {
    prompt: "cat stack.txt",
    output: "Laravel · Django · React · Flutter · PenTesting",
  },
  {
    prompt: "./availability.sh",
    output: "[OK] Disponible pour de nouveaux projets",
  },
];

const useTypedTerminal = (lines) => {
  const [rendered, setRendered] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [phase, setPhase] = useState("prompt"); // prompt -> output -> done
  const startedRef = useRef(false);

  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
  }, []);

  useEffect(() => {
    if (lineIndex >= lines.length) return;
    const current = lines[lineIndex];
    const target = phase === "prompt" ? current.prompt : current.output;

    if (charIndex <= target.length) {
      const t = setTimeout(
        () => setCharIndex((c) => c + 1),
        phase === "prompt" ? 45 : 18,
      );
      return () => clearTimeout(t);
    }

    if (phase === "prompt") {
      const t = setTimeout(() => {
        setPhase("output");
        setCharIndex(0);
      }, 250);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setRendered((r) => [...r, current]);
      setLineIndex((i) => i + 1);
      setPhase("prompt");
      setCharIndex(0);
    }, 350);
    return () => clearTimeout(t);
  }, [charIndex, phase, lineIndex, lines]);

  const current = lines[lineIndex];
  const partial =
    current && phase === "prompt"
      ? { prompt: current.prompt.slice(0, charIndex), output: null }
      : current && phase === "output"
        ? { prompt: current.prompt, output: current.output.slice(0, charIndex) }
        : null;

  return { rendered, partial, done: lineIndex >= lines.length };
};

const Hero = () => {
  const { rendered, partial, done } = useTypedTerminal(TERMINAL_LINES);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          {/* ── Left: identity ── */}
          <div className="space-y-8">
            {/* <div className="index-label text-xs text-amber flex items-center gap-2">
              <span className="w-8 h-px bg-amber" />
              PORTFOLIO — DÉV &amp; SÉCURITÉ
            </div> */}

            <h1 className="font-display font-semibold text-5xl sm:text-6xl lg:text-7xl leading-[1.02] text-paper">
              Miguel
              <br />
              Souop
            </h1>

            <div className="space-y-2 max-w-xl">
              <p className="text-xl sm:text-2xl text-paper font-medium leading-relaxed">
                <span className="text-amber">Développeur Full-Stack</span>{" "}
                Laravel &amp; Django
              </p>
              <p className="text-base sm:text-lg text-muted">
                Web/Mobile • Designer Web &amp; Mobile
              </p>
              <p className="text-base sm:text-lg text-muted">
                Administrateur Réseau &amp; Système •{" "}
                <span className="text-teal font-medium">Ethical Hacker</span>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber text-ink font-semibold text-sm tracking-wide hover:bg-amber-bright transition-colors duration-200"
              >
                <Mail size={17} />
                ME CONTACTER
              </a>

              <a
                href="CV_SOUOP_TEWA_MIGUEL.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-line-strong text-paper font-semibold text-sm tracking-wide hover:border-amber hover:text-amber transition-colors duration-200"
              >
                <Download size={17} />
                TÉLÉCHARGER CV
                <ArrowUpRight size={15} className="opacity-60" />
              </a>
            </div>
          </div>

          {/* ── Right: terminal signature ── */}
          <div className="relative">
            <div className="doc-panel cut-corner relative overflow-hidden">
              {/* title bar */}
              <div className="flex items-center justify-between px-5 py-3 border-b border-line index-label text-[11px] text-muted">
                <span>root@miguel:~</span>
                <span className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-line-strong" />
                  <span className="w-2 h-2 rounded-full bg-line-strong" />
                  <span className="w-2 h-2 rounded-full bg-amber/70" />
                </span>
              </div>

              {/* body */}
              <div className="relative px-5 py-6 font-mono text-sm space-y-4 min-h-[220px]">
                <div className="scan-line absolute inset-0 pointer-events-none" />
                {rendered.map((line, i) => (
                  <div key={i}>
                    <p className="text-muted">
                      <span className="text-teal">$</span> {line.prompt}
                    </p>
                    <p className="text-paper pl-4">
                      {"> "}
                      {line.output}
                    </p>
                  </div>
                ))}

                {partial && (
                  <div>
                    <p className="text-muted">
                      <span className="text-teal">$</span> {partial.prompt}
                      {partial.output === null && (
                        <span className="caret">&nbsp;</span>
                      )}
                    </p>
                    {partial.output !== null && (
                      <p className="text-paper pl-4">
                        {"> "}
                        {partial.output}
                        <span className="caret">&nbsp;</span>
                      </p>
                    )}
                  </div>
                )}

                {done && (
                  <p className="text-muted">
                    <span className="text-teal">$</span>{" "}
                    <span className="caret">&nbsp;</span>
                  </p>
                )}
              </div>
            </div>

            <div className="index-label text-[11px] text-muted mt-3 pl-1">
              LOG — SESSION ACTIVE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
