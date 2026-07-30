import { Code, Palette, Server, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Développement Web & Mobile",
      icon: <Code size={32} />,
      color: "purple",
      skills: [
        "HTML",
        "CSS",
        "TailwindCSS",
        "JavaScript",
        "PHP",
        "MySQL",
        "React.js",
        "Angular",
        "Python",
        "Laravel",
        "Django",
        "Django REST",
        "Flutter",
      ],
    },
    {
      title: "Design UI/UX",
      icon: <Palette size={32} />,
      color: "blue",
      skills: ["Adobe XD", "Figma"],
    },
    {
      title: "Systèmes & Réseaux",
      icon: <Server size={32} />,
      color: "blue",
      skills: ["Cisco Packet Tracer", "VirtualBox", "VMWare", "GNS3"],
    },
    {
      title: "Cybersécurité",
      icon: <Shield size={32} />,
      color: "blue",
      skills: [
        "Ethical hacking",
        "Linux",
        "Red Team",
        "Owasp Top 10",
        "PenTesting",
        "Metasploit",
        "Nmap",
        "OSINT",
      ],
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: {
        border: "border-cyber-purple",
        bg: "bg-cyber-purple/10",
        text: "text-cyber-purple",
        glow: "hover:shadow-neon-purple",
        skill: "bg-cyber-purple/20 border-cyber-purple/50",
      },

      blue: {
        border: "border-cyber-blue",
        bg: "bg-cyber-blue/10",
        text: "text-cyber-blue",
        glow: "hover:shadow-neon-blue",
        skill: "bg-cyber-blue/20 border-cyber-blue/50",
      },
    };
    return colors[color];
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4">
            Compétences
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const colors = getColorClasses(category.color);
            return (
              <div
                key={index}
                className={`relative group  transition-all duration-300 ${colors.glow} relative border-2 ${colors.border} ${colors.bg} min-h-[200px] rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105`}
              >
                <div
                  className={`absolute inset-0 ${colors.bg} rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity`}
                ></div>
                <div
                // className={`relative border-2 ${colors.border} ${colors.bg} min-h-[200px] rounded-2xl p-6 backdrop-blur-sm transition-all duration-300 group-hover:scale-105`}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`${colors.text}`}>{category.icon}</div>
                    <h3 className={`text-2xl font-bold ${colors.text}`}>
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className={`px-4 py-2 ${colors.skill} border rounded-lg text-sm font-medium text-white transition-all duration-300 hover:scale-110 cursor-default`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
