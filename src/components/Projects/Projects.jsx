import { useState, useMemo, useCallback } from "react";
import {
  FaExternalLinkAlt,
  FaStar,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import { useProjects, getProjectCategories } from "../../hooks/useProjects";
import SEOHead from "../SEO/SEOHead";
import { SEO_CONFIGS } from "../SEO/seoConfigs";
import { motion, AnimatePresence } from "framer-motion";

function Projects() {
  const [filter, setFilter] = useState("all");
  const {
    projects = [],
    loading,
    error,
    filteredProjects = [],
  } = useProjects(filter);

  const categories = useMemo(
    () => getProjectCategories(Array.isArray(projects) ? projects : []),
    [projects]
  );

  const handleFilterChange = useCallback((newFilter) => {
    setFilter(newFilter);
  }, []);

  if (loading) {
    return (
      <section className="section-padding py-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="w-48 h-10 bg-neutral-800/50 rounded-xl mx-auto mb-4 animate-pulse" />
            <div className="w-96 h-6 bg-neutral-800/50 rounded-lg mx-auto animate-pulse" />
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="section-padding py-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-400 text-xl mb-4">Error loading projects</p>
          <p className="text-neutral-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <SEOHead {...SEO_CONFIGS.projects} />
      <section className="section-padding py-24 relative overflow-hidden">
        {/* Ambient glow effects */}
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wider uppercase mb-3">
              <HiSparkles />
              <span>Production Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <p className="text-neutral-400 text-base md:text-lg max-w-2xl mx-auto mt-3">
              Commercial E-Commerce platforms, Healthcare portals, SaaS ERPs, and Interactive Ed-Tech applications.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-2.5 mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleFilterChange(category.value)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  filter === category.value
                    ? "bg-gradient-to-r from-cyan-500 via-teal-500 to-emerald-500 text-neutral-950 font-semibold shadow-lg shadow-cyan-500/20 scale-[1.02]"
                    : "bg-neutral-900/80 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800"
                }`}
              >
                <span>{category.label}</span>
                <span
                  className={`px-2 py-0.5 rounded-md text-[11px] ${
                    filter === category.value
                      ? "bg-neutral-950/20 text-neutral-950 font-bold"
                      : "bg-neutral-800 text-neutral-400"
                  }`}
                >
                  {category.count}
                </span>
              </button>
            ))}
          </motion.div>

          {/* Projects List with Mac Mockup Style */}
          <div className="space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-neutral-400">No projects found in this category</p>
            </motion.div>
          )}
        </div>
      </section>
    </>
  );
}

// macOS Browser Frame Project Card with Cinematic Spotlight & Compact Mobile Layout
function ProjectCard({ project, index }) {
  const [imageError, setImageError] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Extract clean domain for browser address bar
  const cleanDomain = useMemo(() => {
    if (!project.demoUrl) return "localhost";
    try {
      const url = new URL(project.demoUrl);
      return url.hostname.replace("www.", "");
    } catch {
      return project.demoUrl;
    }
  }, [project.demoUrl]);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 25, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      className="group relative"
    >
      <div
        className={`relative rounded-2xl border bg-neutral-900/70 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-0.5 ${
          project.featured
            ? "border-cyan-500/30 hover:border-cyan-400/60 shadow-xl shadow-cyan-500/5"
            : "border-neutral-800 hover:border-neutral-700"
        }`}
      >
        {/* Cinematic interactive spotlight gradient */}
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
          style={{
            background: `radial-gradient(450px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.14), transparent 60%)`,
          }}
        />

        {/* macOS Browser Header Bar (Compact on mobile) */}
        <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-neutral-950/90 border-b border-neutral-800/80 flex items-center justify-between gap-2 text-xs relative z-20">
          {/* Traffic light dots */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500/80 inline-block"></span>
          </div>

          {/* Browser Address Bar */}
          <div className="flex-1 max-w-md mx-auto hidden sm:flex items-center justify-center gap-2 px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400 font-mono text-[11px]">
            <FaLock className="text-emerald-400 text-[10px]" />
            <span className="truncate">{cleanDomain}</span>
          </div>

          {/* Live Status indicator */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium text-emerald-400 font-mono uppercase tracking-wider">
              Live
            </span>
          </div>
        </div>

        {/* Card Content Grid - Streamlined & Compact on Mobile */}
        <div className="flex flex-col lg:flex-row relative z-20">
          {/* Visual Preview Section (Height bounded on mobile) */}
          <div className="lg:w-[380px] xl:w-[420px] flex-shrink-0 relative bg-neutral-950/60 flex items-center justify-center p-2.5 sm:p-4 lg:p-6 border-b lg:border-b-0 lg:border-r border-neutral-800/60">
            <div className="w-full aspect-[16/9] sm:aspect-[16/10] max-h-44 sm:max-h-56 lg:max-h-none rounded-xl overflow-hidden border border-neutral-800/80 bg-neutral-950 relative flex items-center justify-center group-hover:border-cyan-500/40 transition-colors shadow-inner">
              {!imageError && project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-500"
                  onError={() => setImageError(true)}
                  loading="lazy"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-cyan-500/30 flex items-center justify-center text-xl font-bold text-cyan-400 mb-1.5">
                    {project.title.charAt(0)}
                  </div>
                  <span className="text-xs font-mono text-neutral-400 line-clamp-1">
                    {cleanDomain}
                  </span>
                </div>
              )}

              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-2 right-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-amber-600 text-neutral-950 text-[10px] font-bold shadow-md">
                    <FaStar className="w-2.5 h-2.5" />
                    Featured
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Details Section (Compact typography on mobile) */}
          <div className="flex-1 p-3.5 sm:p-5 md:p-6 lg:p-7 flex flex-col justify-between">
            <div>
              {/* Category & Title */}
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="text-neutral-500 text-xs sm:hidden font-mono truncate max-w-[170px]">
                  {cleanDomain}
                </span>
              </div>

              <h3 className="text-base sm:text-xl md:text-2xl font-bold text-white mb-1.5 sm:mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-snug sm:leading-relaxed mb-3 sm:mb-4 line-clamp-2 md:line-clamp-3">
                {project.description}
              </p>
            </div>

            {/* Bottom Row: Tech Tags & Action Button */}
            <div className="flex items-center justify-between gap-2.5 pt-2.5 sm:pt-4 border-t border-neutral-800/80">
              <div className="flex flex-wrap gap-1 sm:gap-1.5 max-w-[62%] sm:max-w-md">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 text-[10px] sm:text-xs font-medium bg-neutral-800/80 text-neutral-300 rounded-md border border-neutral-700/50"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Direct Live Demo CTA Button */}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 text-neutral-950 text-xs sm:text-sm font-bold shadow-lg shadow-cyan-500/20 hover:scale-[1.03] transition-all duration-300 shrink-0"
                >
                  <span>Visit Live</span>
                  <FaExternalLinkAlt className="text-[10px] sm:text-xs" />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export default Projects;
