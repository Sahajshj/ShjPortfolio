/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Menu, X, Cpu, Server, Terminal, Monitor, Code, ShieldCheck, Mail } from 'lucide-react';
import BackgroundEffects from './components/BackgroundEffects';
import Hero from './components/Hero';
import About from './components/About';
import CloudArchitecture from './components/CloudArchitecture';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import ResumeViewer from './components/ResumeViewer';
import Contact from './components/Contact';
import CredentialModal from './components/CredentialModal';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVaultOpen, setIsVaultOpen] = useState(false);

  const openVault = () => {
    setIsVaultOpen(true);
  };

  // Monitor scroll states to link active navigation circles
  useEffect(() => {
    const sections = [
      'hero-section',
      'about-section',
      'cloud-section',
      'skills-section',
      'experience-section',
      'projects-section',
      'achievements-section',
      'cv-section',
      'contact-section',
    ];

    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      for (let i = 0; i < sections.length; i++) {
        const id = sections[i];
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const bottom = top + el.offsetHeight;
          if (scrollPos >= top && scrollPos <= bottom) {
            setActiveSection(id.replace('-section', ''));
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'hero', label: 'Start' },
    { id: 'about', label: 'Profile' },
    { id: 'cloud', label: 'Cloud' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Timeline' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Honors' },
    { id: 'cv', label: 'Resume' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <div className="relative min-h-screen bg-[#0A0F1E] text-white selection:bg-[#00E5FF]/35 selection:text-white">
      
      {/* Background canvas particles & aurora mesh */}
      <BackgroundEffects />

      {/* Floating Glassmorphism Navigation Bar */}
      <header className="fixed top-4 left-4 right-4 z-50 rounded-2xl glass border border-white/5 mx-auto max-w-6xl flex items-center justify-between px-6 py-3.5 scroll-smooth animate-fade-in">
        
        {/* Brand identity from Design style guides */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#00E5FF] to-[#7B61FF] flex items-center justify-center font-mono font-bold text-white shadow-md shadow-[#7B61FF]/20">
            S
          </div>
          <div className="flex items-baseline gap-1.5">
            <span className="text-base sm:text-lg font-bold tracking-tight text-white block">
              Sahajpal<span className="text-[#00E5FF]">.</span>Singh
            </span>
            <span className="hidden sm:inline h-3 w-px bg-white/15 mx-1" />
            <span className="hidden sm:inline-block text-[9px] font-mono uppercase text-[#00FFB2] tracking-widest leading-none">SysOps</span>
          </div>
        </div>

        {/* Desktop Navigation anchors */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}-section`}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-gradient-to-r from-[#7B61FF]/15 to-[#00E5FF]/15 text-[#00E5FF] border border-[#00E5FF]/25 shadow-[0_0_10px_rgba(0,229,255,0.1)]' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5 border border-transparent'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons matching requested design */}
        <div className="flex items-center gap-3">
          <a
            href="#contact-section"
            className="inline-flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#7B61FF]/20 hover:bg-[#7B61FF]/30 border border-[#7B61FF]/30 text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all active:scale-95 cursor-pointer"
          >
            <Mail size={11} className="text-[#00FFB2]" />
            HIRE
          </a>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-colors"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-y-0 right-0 w-64 z-40 bg-gray-950/95 border-l border-white/10 p-6 flex flex-col justify-between pt-24 animate-slide-in">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-widest text-gray-500 block mb-2 border-b border-white/5 pb-1">Navigation node</span>
            <div className="space-y-2 flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}-section`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2 rounded-lg text-xs font-mono uppercase tracking-wider text-left transition-colors ${
                    activeSection === item.id 
                      ? 'bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/25' 
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/5 pt-4 space-y-3">
            <a
              href="#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-[#7B61FF] to-[#00E5FF] text-white font-mono text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2"
            >
              <Mail size={13} />
              Deploy request
            </a>
          </div>
        </div>
      )}

      {/* MAIN VIEWPORT LAYOUT WRAPPER */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-36 pb-32 lg:pt-20 pt-28">
        
        {/* Section 1: HERO */}
        <section id="hero-section" className="scroll-mt-24 transition-all">
          <Hero onOpenVault={openVault} />
        </section>

        {/* Section 2: ABOUT STORY & METRICS */}
        <section id="about-section" className="scroll-mt-36 transition-all">
          <About />
        </section>

        {/* Section 3: AWS INTERACTIVE PLAYGROUND SANDBOX */}
        <section id="cloud-section" className="scroll-mt-36 transition-all">
          <CloudArchitecture />
        </section>

        {/* Section 4: ORBITING SKILLS */}
        <section id="skills-section" className="scroll-mt-36 transition-all">
          <Skills />
        </section>

        {/* Section 5: EXPERIENCE TIMELINE */}
        <section id="experience-section" className="scroll-mt-36 transition-all">
          <Experience />
        </section>

        {/* Section 6: FEATURED PROJECTS */}
        <section id="projects-section" className="scroll-mt-36 transition-all">
          <Projects />
        </section>

        {/* Section 7: BENTO CREDENTIALS */}
        <section id="achievements-section" className="scroll-mt-36 transition-all">
          <Achievements onOpenVault={openVault} />
        </section>

        {/* Section 8: HARD Resume CV DISPLAY */}
        <section id="cv-section" className="scroll-mt-36 transition-all">
          <ResumeViewer />
        </section>

        {/* Section 9: TELEMETRY CONTACT COMPOSER */}
        <section id="contact-section" className="scroll-mt-36 transition-all">
          <Contact />
        </section>

      </main>

      {/* FOOTER BAR FROM THEME SPECIFICATION */}
      <footer className="relative z-10 border-t border-white/5 bg-[#0A0F1E]/50 py-8 text-gray-500 text-xs font-mono select-none">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-6 items-center">
            <a href="https://github.com/Sahajshj" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/sahajshj" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              <span>LinkedIn</span>
            </a>
            <span className="hidden sm:inline text-gray-700">&bull;</span>
            <span className="hidden sm:inline text-[11px] text-gray-500">&copy; {new Date().getFullYear()} Sahajpal Singh</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-gray-500 text-[11px]">
            <span className="uppercase text-gray-600 block">VERIFIED DEPLOYMENT</span>
            <span className="h-4 w-px bg-white/10 hidden sm:inline" />
            <span>EST. 2026</span>
            <span className="h-4 w-px bg-white/10 hidden sm:inline" />
            <span className="text-[#00FFB2] font-semibold flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2] animate-pulse" />
              STATUS: OPERATIONAL
            </span>
          </div>
        </div>
      </footer>

      <CredentialModal 
        isOpen={isVaultOpen} 
        onClose={() => setIsVaultOpen(false)} 
      />

    </div>
  );
}
