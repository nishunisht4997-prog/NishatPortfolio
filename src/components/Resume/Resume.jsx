import { useMemo, useCallback } from "react";
import {
  FaDownload,
  FaFilePdf,
  FaGraduationCap,
  FaBriefcase,
  FaCertificate,
  FaAward,
  FaCalendarAlt,
  FaMapMarkerAlt
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import SEOHead from "../SEO/SEOHead";
import { SEO_CONFIGS } from "../SEO/seoConfigs";
import { motion } from "framer-motion";

function Resume() {
  const handleDownloadPDF = useCallback(() => {
    const link = document.createElement("a");
    link.href = "/documents/Nishat Anjum Resume.pdf";
    link.download = "Nishat Anjum Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  /* ================= EXPERIENCE ================= */
  const experiences = useMemo(
    () => [
      {
        title: "Web Developer",
        company: "Geinca Futuristic Tech",
        period: "Aug 2026 – Present",
        location: "Bhubaneswar, Odisha, India",
        type: "Full-Time / Contract",
        tags: [
          "React.js",
          "Node.js",
          "PHP",
          "MySQL",
          "MongoDB",
          "Three.js",
          "Tailwind CSS",
          "JavaScript"
        ],
        achievements: [
          "Architected and engineered the official corporate web platform (geinca.com) using PHP, HTML5/CSS3, JavaScript, MySQL, and Tailwind CSS.",
          "Developed high-performance client applications and portals utilizing React.js, Node.js, MongoDB, Three.js, and modern full-stack workflows.",
          "Implemented secure server-side logic, consultation booking workflows, and optimized relational MySQL and MongoDB database schemas.",
          "Managed domain mapping, SSL configuration, and production web deployments via Hostinger cPanel server infrastructure.",
        ],
      },
      {
        title: "Web Developer Intern",
        company: "Zaalima Technology",
        period: "May 2026 – Jul 2026",
        location: "Remote, India",
        type: "Internship (Remote)",
        tags: ["React.js", "Tailwind CSS", "RESTful APIs", "State Management"],
        achievements: [
          "Engineered reusable, high-performance UI components and responsive layouts using React.js and Tailwind CSS.",
          "Assisted with frontend state management, REST API consumption, and mobile-first responsiveness fixes.",
        ],
      },
      {
        title: "Web Developer Intern",
        company: "Internship Studio",
        period: "Feb 2025 – Mar 2025",
        location: "Remote, India",
        type: "Internship",
        tags: ["HTML5", "CSS3", "JavaScript", "React", "Git"],
        achievements: [
          "Built interactive, responsive web interfaces using HTML5, CSS3, JavaScript, and modern React design patterns.",
          "Applied Git version control for code collaboration, feature branching, and structured project deployments.",
        ],
      },
    ],
    []
  );

  /* ================= EDUCATION ================= */
  const education = useMemo(
    () => [
      {
        degree: "Master of Computer Applications (MCA)",
        institution: "Suddhananda School of Mgmt. & CS",
        period: "Pursuing – 2nd Year",
        location: "Odisha, India",
        details:
          "Advanced study in computer applications, full-stack web engineering, database architecture, and cloud deployment.",
      },
      {
        degree: "Bachelor of Science (B.Sc.)",
        institution: "Suddhananda Degree Science College",
        period: "2022 – 2025",
        location: "Odisha, India",
        details:
          "Graduated with core competencies in computing, logical algorithms, and software problem-solving.",
      },
      {
        degree: "Higher Secondary – Science (PCM, IT)",
        institution: "Shishu Ananta Mahavidyalaya",
        period: "2020 – 2022",
        location: "Odisha, India",
        details:
          "Completed higher secondary education in Physics, Chemistry, Mathematics, and Information Technology.",
      },
    ],
    []
  );

  /* ================= CERTIFICATIONS & TRAININGS ================= */
  const certifications = useMemo(
    () => [
      {
        name: "Web Development Internship Certification",
        issuer: "Zaalima Technology",
        year: "2026",
        details:
          "Hands-on industrial remote internship training focused on modern frontend architecture, reusable React components, and responsive web design.",
      },
      {
        name: "Web Development Internship Certification",
        issuer: "Internship Studio",
        year: "2025",
        details:
          "Hands-on industrial training building production-grade web interfaces and full-stack solutions.",
      },
    ],
    []
  );

  return (
    <>
      <SEOHead {...SEO_CONFIGS.resume} />

      <section className="section-padding py-24 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[130px] pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-teal-500/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">

          {/* ================= HEADER ================= */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <HiSparkles />
              <span>Career & Background</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Work Experience &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Education
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mt-3">
              A timeline of engineering client portals, industrial internships, and academic excellence.
            </p>
          </motion.div>

          {/* ================= TIMELINE: EXPERIENCE ================= */}
          <div className="mb-24">
            <div className="relative pl-6 md:pl-8 border-l-2 border-cyan-500/30 space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Glowing Node Dot on Timeline */}
                  <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-neutral-950 border-2 border-cyan-400 group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-md shadow-cyan-500/50" />

                  {/* Card Content - Compact on Mobile */}
                  <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300">
                    <div className="flex flex-wrap items-center justify-between gap-2.5 mb-3 sm:mb-4">
                      <div>
                        <span className="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 uppercase tracking-wider">
                          {exp.type}
                        </span>
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mt-1.5 sm:mt-2 group-hover:text-cyan-400 transition-colors">
                          {exp.title}
                        </h3>
                        <p className="text-sm sm:text-base font-semibold text-emerald-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      <div className="text-[11px] sm:text-xs text-neutral-400 flex flex-col items-start sm:items-end gap-0.5 sm:gap-1 font-mono">
                        <span className="flex items-center gap-1.5">
                          <FaCalendarAlt className="text-cyan-400" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <FaMapMarkerAlt className="text-cyan-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-1.5 sm:space-y-2.5 mb-4 sm:mb-6 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {exp.achievements.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-neutral-800/80">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 text-[10px] sm:text-xs font-medium rounded-md bg-neutral-800/70 text-neutral-300 border border-neutral-700/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* ================= EDUCATION & CERTIFICATIONS ================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">

            {/* EDUCATION */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                  <FaGraduationCap className="text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Academic Journey</h3>
                  <p className="text-xs text-neutral-400">Degrees & Qualifications</p>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/30 backdrop-blur-xl transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <h4 className="text-base font-bold text-white mb-1">
                      {edu.degree}
                    </h4>
                    <p className="text-xs font-semibold text-emerald-400 mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-neutral-400 font-mono mb-2">
                      {edu.period} • {edu.location}
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {edu.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CERTIFICATIONS */}
            <div>
              <div className="flex items-center gap-2.5 mb-6">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <FaCertificate className="text-lg" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Certifications & Training</h3>
                  <p className="text-xs text-neutral-400">Verified Professional Skills</p>
                </div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    className="p-4 sm:p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/30 backdrop-blur-xl transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <FaAward className="text-emerald-400 text-sm" />
                      <h4 className="text-base font-bold text-white">
                        {cert.name}
                      </h4>
                    </div>
                    <p className="text-xs text-neutral-400 font-mono mb-2">
                      {cert.issuer} • {cert.year}
                    </p>
                    <p className="text-xs text-neutral-300 leading-relaxed">
                      {cert.details}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* ================= RESUME DOWNLOAD BANNER ================= */}
          <motion.div
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-neutral-900/90 via-neutral-900/90 to-neutral-950/90 border border-cyan-500/30 backdrop-blur-xl text-center relative overflow-hidden shadow-2xl shadow-cyan-500/5"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 max-w-xl mx-auto">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-cyan-400 to-emerald-400 flex items-center justify-center text-neutral-950 text-2xl mx-auto mb-4 shadow-lg shadow-cyan-500/30">
                <FaFilePdf />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
                Want to review the full resume?
              </h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                Download a clean, formatted PDF copy of my latest resume including technical skills, projects, and contact info.
              </p>
              <button
                onClick={handleDownloadPDF}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-neutral-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:scale-105 shadow-lg shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
              >
                <FaDownload className="text-sm" />
                <span>Download Resume (PDF)</span>
              </button>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}

export default Resume;
