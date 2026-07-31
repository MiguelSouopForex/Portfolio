// module.exports = {
//   content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
//   theme: {
//     extend: {
//       colors: {
//         "cyber-purple": "#a855f7",
//         "cyber-blue": "#3b82f6",
//         // 'cyber-blue': '#ec4899',
//         "cyber-blue": "#3b82f6",
//         "cyber-dark": "#0a0a0f",
//         "cyber-darker": "#050508",
//       },
//       boxShadow: {
//         "neon-purple":
//           "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)",
//         "neon-blue":
//           "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
//         // 'neon-blue': '0 0 20px rgba(236, 72, 153, 0.5), 0 0 40px rgba(236, 72, 153, 0.3)',
//         "neon-blue":
//           "0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)",
//       },
//       animation: {
//         "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
//         glow: "glow 2s ease-in-out infinite alternate",
//         float: "float 6s ease-in-out infinite",
//       },
//       keyframes: {
//         glow: {
//           "0%": {
//             boxShadow:
//               "0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3)",
//           },
//           "100%": {
//             boxShadow:
//               "0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(59, 130, 246, 0.4)",
//           },
//           // '100%': { boxShadow: '0 0 30px rgba(236, 72, 153, 0.6), 0 0 60px rgba(236, 72, 153, 0.4)' },
//         },
//         float: {
//           "0%, 100%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-20px)" },
//         },
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B0F0D", // page background
          900: "#0F1512",
          800: "#161D18",
          700: "#1E2620",
          600: "#2A332C",
        },
        paper: "#ECE7DA",
        amber: {
          DEFAULT: "#E7A33E",
          dim: "#8C6423",
          bright: "#F2B75A",
        },
        teal: {
          DEFAULT: "#4FA98F",
          dim: "#2C6355",
          bright: "#69C4A9",
        },
        brick: {
          DEFAULT: "#C1443C",
          dim: "#7A2A25",
        },
        line: "rgba(236,232,218,0.12)",
        "line-strong": "rgba(236,232,218,0.28)",
        muted: "#9CA39A",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "sans-serif"],
        body: ['"IBM Plex Sans"', "sans-serif"],
        mono: ['"IBM Plex Mono"', "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(236,232,218,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(236,232,218,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        blueprint: "36px 36px",
      },
      keyframes: {
        caret: {
          "0%, 45%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        typeline: {
          from: { width: "0%" },
          to: { width: "100%" },
        },
        rise: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        caret: "caret 1s steps(1) infinite",
        rise: "rise 0.6s cubic-bezier(0.2,0.7,0.2,1) both",
        scan: "scan 4s linear infinite",
      },
    },
  },
  plugins: [],
};
