import { motion } from 'framer-motion';
import SEOHead from '../SEO/SEOHead';
import { SEO_CONFIGS } from '../SEO/seoConfigs';
import {
  SiReact,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPostgresql,
  SiPhp,
  SiGit,
  SiNextdotjs,
  SiPostman,
  SiNetlify,
  SiRender,
  SiHostinger,
  SiGithub,
  SiExpress,
  SiJavascript,
  SiHtml5
} from 'react-icons/si';
import { FaCode, FaNode, FaCss3Alt, FaDatabase, FaServer, FaTools } from 'react-icons/fa';
import { VscVscode } from "react-icons/vsc";
import { HiSparkles } from "react-icons/hi2";

function TechStack() {
  const skillCategories = [
    {
      title: "Frontend Engineering",
      icon: FaCode,
      color: "from-cyan-500/20 to-teal-500/20",
      accent: "text-cyan-400",
      borderColor: "hover:border-cyan-500/40",
      description: "Building responsive, accessible, high-performance user interfaces.",
      skills: [
        { name: "React.js", icon: SiReact, color: "#61DAFB", level: "Advanced" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff", level: "Proficient" },
        { name: "JavaScript (ES6+)", icon: SiJavascript, color: "#F7DF1E", level: "Advanced" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4", level: "Expert" },
        { name: "HTML5", icon: SiHtml5, color: "#E34F26", level: "Expert" },
        { name: "CSS3", icon: FaCss3Alt, color: "#1572B6", level: "Advanced" }
      ]
    },
    {
      title: "Backend & RESTful APIs",
      icon: FaServer,
      color: "from-emerald-500/20 to-teal-500/20",
      accent: "text-emerald-400",
      borderColor: "hover:border-emerald-500/40",
      description: "Designing secure server logic, auth workflows, and REST services.",
      skills: [
        { name: "Node.js", icon: FaNode, color: "#6DB33F", level: "Proficient" },
        { name: "Express.js", icon: SiExpress, color: "#ffffff", level: "Proficient" },
        { name: "PHP", icon: SiPhp, color: "#777BB4", level: "Proficient" },
        { name: "RESTful APIs", icon: FaCode, color: "#FF6B6B", level: "Advanced" },
        { name: "Auth & Sessions", icon: FaTools, color: "#10B981", level: "Proficient" }
      ]
    },
    {
      title: "Databases & Architecture",
      icon: FaDatabase,
      color: "from-indigo-500/20 to-cyan-500/20",
      accent: "text-indigo-400",
      borderColor: "hover:border-indigo-500/40",
      description: "Relational schema design, query optimization, and NoSQL stores.",
      skills: [
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1", level: "Proficient" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1", level: "Advanced" },
        { name: "MongoDB", icon: SiMongodb, color: "#47A248", level: "Proficient" },
        { name: "Schema Design", icon: FaDatabase, color: "#F59E0B", level: "Advanced" }
      ]
    },
    {
      title: "Cloud, Hosting & Tools",
      icon: FaTools,
      color: "from-purple-500/20 to-pink-500/20",
      accent: "text-purple-400",
      borderColor: "hover:border-purple-500/40",
      description: "Continuous deployments, server administration, and version control.",
      skills: [
        { name: "Hostinger cPanel", icon: SiHostinger, color: "#673DE6", level: "Production" },
        { name: "Render", icon: SiRender, color: "#46E3B7", level: "Production" },
        { name: "Netlify", icon: SiNetlify, color: "#00C7B7", level: "Production" },
        { name: "Git", icon: SiGit, color: "#F05032", level: "Advanced" },
        { name: "GitHub", icon: SiGithub, color: "#ffffff", level: "Advanced" },
        { name: "Postman", icon: SiPostman, color: "#FF6C37", level: "Proficient" },
        { name: "VS Code", icon: VscVscode, color: "#007ACC", level: "Expert" }
      ]
    }
  ];

  return (
    <>
      <SEOHead {...SEO_CONFIGS.techStack} />

      <section className="section-padding py-24 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <HiSparkles />
              <span>Skills & Technologies</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Technical{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mt-3">
              Production-tested tech stack powering scalable healthcare portals, SaaS ERPs, and cloud applications.
            </p>
          </motion.div>

          {/* Skill Bento Grid (4 Categories) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillCategories.map((cat, idx) => (
              <motion.div
                key={cat.title}
                className={`p-6 md:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 ${cat.borderColor} backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} border border-neutral-800 flex items-center justify-center ${cat.accent} text-xl group-hover:scale-110 transition-transform`}>
                      <cat.icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {cat.title}
                      </h3>
                      <p className="text-xs text-neutral-400">{cat.description}</p>
                    </div>
                  </div>

                  {/* Skills Pills / Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-6">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80 hover:border-cyan-500/40 hover:bg-neutral-800/60 transition-all duration-200 flex flex-col items-center justify-center text-center group/item"
                      >
                        <skill.icon
                          className="text-2xl mb-1.5 transition-transform group-hover/item:scale-110"
                          style={{ color: skill.color }}
                        />
                        <span className="text-xs font-semibold text-neutral-200 line-clamp-1">
                          {skill.name}
                        </span>
                        <span className="text-[10px] text-neutral-400 font-mono mt-0.5">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
                  <span>Stack Coverage</span>
                  <span className={`font-mono font-medium ${cat.accent}`}>
                    {cat.skills.length} Core Technologies
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default TechStack;
