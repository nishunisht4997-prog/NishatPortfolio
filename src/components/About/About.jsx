import { motion } from "framer-motion";
import { 
  FaCode, 
  FaServer, 
  FaGraduationCap, 
  FaMapMarkerAlt, 
  FaHeartbeat, 
  FaRocket,
  FaCheckCircle 
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

function About() {
  return (
    <section className="section-padding py-24 relative overflow-hidden">
      {/* Subtle ambient background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3">
            <HiSparkles />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            About <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mt-3">
            A developer passionate about solving real-world challenges through robust full-stack architecture.
          </p>
        </motion.div>

        {/* ================= BENTO GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
          
          {/* Bento Card 1: Main Story (Spans 2 columns on desktop) */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 p-6 md:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-cyan-500/30 bg-neutral-800 flex-shrink-0">
                  <img
                    src="/PortfollioAbout.jpeg"
                    alt="Nishat Anjum"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    Nishat Anjum
                    <span className="text-cyan-400 text-xs font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                      Full-Stack Dev
                    </span>
                  </h3>
                  <p className="text-xs text-neutral-400 mt-1">MCA Scholar • Web Developer</p>
                </div>
              </div>

              <h4 className="text-xl font-bold text-neutral-100 mb-3 leading-snug">
                Building reliable healthcare portals, ed-tech systems & commercial business apps.
              </h4>
              <p className="text-neutral-300 text-sm leading-relaxed mb-4">
                Results-driven Full-Stack Web Developer with hands-on expertise building and deploying modern web applications across modern JavaScript ecosystems (<span className="text-cyan-400 font-medium">React.js, Next.js, Node.js</span>) as well as robust <span className="text-cyan-400 font-medium">PHP & MySQL</span> architectures.
              </p>
              <p className="text-neutral-400 text-sm leading-relaxed">
                Demonstrated record delivering high-availability client platforms with seamless database integration, customized role-based dashboards, and live cloud hosting on <span className="text-neutral-200">Hostinger cPanel, Render, and Netlify</span>.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-neutral-800/80 flex flex-wrap gap-4 text-xs font-medium text-neutral-300">
              <span className="inline-flex items-center gap-1.5 text-emerald-400">
                <FaCheckCircle className="text-xs" /> Clean Architecture
              </span>
              <span className="inline-flex items-center gap-1.5 text-cyan-400">
                <FaCheckCircle className="text-xs" /> Responsive UX
              </span>
              <span className="inline-flex items-center gap-1.5 text-teal-400">
                <FaCheckCircle className="text-xs" /> Live Cloud Deployments
              </span>
            </div>
          </motion.div>

          {/* Bento Card 2: Healthcare & Domain Specialization */}
          <motion.div
            className="md:col-span-1 lg:col-span-2 p-6 md:p-8 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/30 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-xl mb-4 group-hover:scale-110 transition-transform">
                <FaHeartbeat />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Healthcare & Clinic Platforms</h3>
              <p className="text-neutral-400 text-sm leading-relaxed mb-4">
                Specialized experience developing real-world healthcare websites and diagnostic systems with appointment booking, service catalogs, and doctor profiles.
              </p>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-neutral-800/40 border border-neutral-800">
                  <div className="font-semibold text-emerald-400">Dr. Mayank Clinic</div>
                  <div className="text-neutral-500 text-[11px]">Consultation Portal</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-800/40 border border-neutral-800">
                  <div className="font-semibold text-emerald-400">Delhi Diagno</div>
                  <div className="text-neutral-500 text-[11px]">Pathology & Diagnostic</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-800/40 border border-neutral-800">
                  <div className="font-semibold text-emerald-400">Dr. Sushma Agarwal</div>
                  <div className="text-neutral-500 text-[11px]">Patient Services</div>
                </div>
                <div className="p-2.5 rounded-lg bg-neutral-800/40 border border-neutral-800">
                  <div className="font-semibold text-emerald-400">Dr. Kumar Abhijit</div>
                  <div className="text-neutral-500 text-[11px]">Medical Practice</div>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 text-xs text-neutral-400 border-t border-neutral-800/80">
              Trusted by practicing doctors & clinical centers.
            </div>
          </motion.div>

          {/* Bento Card 3: Cloud Hosting & Infrastructure */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-cyan-500/30 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 text-lg mb-4 group-hover:scale-110 transition-transform">
                <FaServer />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Cloud & Deployment</h3>
              <p className="text-neutral-400 text-xs leading-relaxed mb-3">
                Hands-on production setups on Hostinger cPanel, Render, Netlify, custom domain mapping, and SSL configurations.
              </p>
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded text-[11px] bg-neutral-800 text-neutral-300">Hostinger</span>
              <span className="px-2 py-0.5 rounded text-[11px] bg-neutral-800 text-neutral-300">Render</span>
              <span className="px-2 py-0.5 rounded text-[11px] bg-neutral-800 text-neutral-300">Netlify</span>
              <span className="px-2 py-0.5 rounded text-[11px] bg-neutral-800 text-neutral-300">Git/GitHub</span>
            </div>
          </motion.div>

          {/* Bento Card 4: Academic Foundation */}
          <motion.div
            className="md:col-span-1 lg:col-span-2 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-indigo-500/30 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-lg mb-4 group-hover:scale-110 transition-transform">
                <FaGraduationCap />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Education & Academics</h3>
              <p className="text-xs text-indigo-400 font-medium mb-3">
                Master of Computer Applications (MCA) — 2nd Year
              </p>
              <p className="text-neutral-400 text-xs leading-relaxed">
                Suddhananda School of Mgmt. & CS • Strong foundation in data structures, database optimization, algorithms, and modern distributed web systems.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-400">
              <span>B.Sc. (2022–2025)</span>
              <span className="text-neutral-300 font-mono">Odisha, India</span>
            </div>
          </motion.div>

          {/* Bento Card 5: Location & Availability */}
          <motion.div
            className="md:col-span-1 lg:col-span-1 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800/80 hover:border-emerald-500/30 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 text-lg mb-4 group-hover:scale-110 transition-transform">
                <FaMapMarkerAlt />
              </div>
              <h3 className="text-base font-bold text-white mb-2">Location & Status</h3>
              <p className="text-neutral-300 text-xs font-medium">Odisha, India</p>
              <p className="text-neutral-400 text-xs leading-relaxed mt-1">
                Open to remote roles, onsite opportunities, and freelance projects globally.
              </p>
            </div>
            <div className="mt-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-xs font-semibold text-emerald-300">Ready to Interview</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default About;
