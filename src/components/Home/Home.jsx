import { useEffect, useRef, useState } from "react";
import TypeWriter from "./TypeWriter";
import ThreeBackground from "./ThreeBackground";
import { FaArrowRight, FaLinkedin, FaFileDownload, FaCode, FaRocket, FaShieldAlt } from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";
import gsap from "gsap";

function Home() {
  const heroRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const ctx = gsap.context(() => {
      // Cinematic staggered entrance
      gsap.fromTo(
        ".gsap-hero-elem",
        {
          y: 35,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: "power3.out",
        }
      );

      // Subtle breathing glow animation
      gsap.to(".hero-glow-orb", {
        scale: 1.15,
        opacity: 0.25,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-[92vh] flex items-center justify-center section-padding pt-32 pb-20 overflow-hidden"
    >
      {/* Three.js Interactive 3D Background */}
      <ThreeBackground />

      {/* Cyber Ambient Glowing Orbs */}
      <div className="hero-glow-orb absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/10 via-emerald-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center px-4">
        {/* Availability Pill */}
        <div className="gsap-hero-elem flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-neutral-900/80 border border-emerald-500/30 backdrop-blur-md shadow-lg shadow-emerald-500/5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-xs md:text-sm font-medium text-emerald-300 tracking-wide">
              Available for Full-Stack Opportunities & Freelance
            </span>
            <HiSparkles className="text-emerald-400 text-sm ml-0.5" />
          </div>
        </div>

        {/* Main Headline */}
        <div className="gsap-hero-elem space-y-3 mb-6">
          <p className="text-neutral-400 text-sm md:text-base font-mono tracking-wider uppercase">
            Full-Stack Web Developer & Engineer
          </p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-white leading-none">
            Nishat{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              Anjum
            </span>
          </h1>
        </div>

        {/* Dynamic TypeWriter Subheading */}
        <div className="gsap-hero-elem mb-6">
          <div className="inline-flex items-center gap-2 text-xl md:text-3xl font-semibold text-neutral-200">
            <span className="text-cyan-400 font-mono">&gt;</span>
            <TypeWriter
              texts={[
                "Full-Stack Web Developer",
                "Healthcare & Clinical Platforms",
                "Next.js & React Applications",
                "PHP & MySQL Backend Architecture",
                "Cloud Deployments on Render & Netlify"
              ]}
              delay={isMobile ? 90 : 70}
              deleteDelay={isMobile ? 40 : 25}
            />
          </div>
        </div>

        {/* Impact Subtitle */}
        <p className="gsap-hero-elem text-neutral-300 text-base md:text-lg leading-relaxed max-w-3xl mx-auto mb-10">
          Crafting modern, high-performance web applications with production-grade architecture. 
          Specializing in responsive frontends with <span className="text-cyan-400 font-medium">React.js & Next.js</span>, and robust backend systems powered by <span className="text-emerald-400 font-medium">PHP, Node.js & MySQL</span>.
        </p>

        {/* CTA Action Buttons */}
        <div className="gsap-hero-elem flex flex-wrap justify-center items-center gap-4 mb-14">
          <button
            onClick={() => handleScrollTo("projects")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold text-neutral-950 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 hover:opacity-95 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          >
            <span>Explore Featured Projects</span>
            <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="/documents/Nishat Anjum Resume.pdf"
            download="Nishat Anjum Resume.pdf"
            className="inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-medium text-neutral-200 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-[1.02]"
          >
            <FaFileDownload className="text-cyan-400" />
            <span>Download CV</span>
          </a>

          <a
            href="https://www.linkedin.com/in/nishat-anjum-a10668206"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-xl text-neutral-300 hover:text-cyan-400 bg-neutral-900/90 hover:bg-neutral-800 border border-neutral-700/80 hover:border-cyan-500/50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-xl" />
          </a>
        </div>

        {/* Quick Credibility Stats Ribbon */}
        <div className="gsap-hero-elem grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl mx-auto pt-4 border-t border-neutral-800/80">
          <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Full-Stack
            </div>
            <div className="text-xs text-neutral-400 font-medium mt-0.5">Web Developer & Engineer</div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Frontend
            </div>
            <div className="text-xs text-neutral-400 font-medium mt-0.5">React.js • Next.js • Tailwind</div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Backend
            </div>
            <div className="text-xs text-neutral-400 font-medium mt-0.5">PHP • Node.js • MySQL • APIs</div>
          </div>

          <div className="p-3.5 rounded-xl bg-neutral-900/40 border border-neutral-800/60 backdrop-blur-sm">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              MCA
            </div>
            <div className="text-xs text-neutral-400 font-medium mt-0.5">Computer Applications Scholar</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
