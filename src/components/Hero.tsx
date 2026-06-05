/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Terminal, Shield, ArrowDown, ChevronRight, Play, User, MapPin, Sparkles } from 'lucide-react';

const TYPED_TITLES = [
  'AWS Cloud Architecture',
  'Terraform Infrastructure as Code',
  'Kubernetes & Helm Deployments',
  'Automated CI/CD Pipelines',
  'Datadog Observability telemetry',
  'Linux Bash Shell Automation',
  'Microservice Clusters Tuning',
];


interface HeroProps {
  onOpenVault?: (tab: 'resume' | 'cert') => void;
}

export default function Hero({ onOpenVault }: HeroProps) {
  const [titleIdx, setTitleIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [imageError, setImageError] = useState(false);
  

  // High-fidelity typing animation effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullText = TYPED_TITLES[titleIdx];
    const typingSpeed = isDeleting ? 40 : 100;

    const tick = () => {
      if (!isDeleting) {
        // Types character
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        if (currentText === fullText) {
          // Pause before deleting
          timer = setTimeout(() => setIsDeleting(true), 2500);
          return;
        }
      } else {
        // Deletes character
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        if (currentText === '') {
          setIsDeleting(false);
          setTitleIdx((prev) => (prev + 1) % TYPED_TITLES.length);
          return;
        }
      }
      timer = setTimeout(tick, typingSpeed);
    };

    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, titleIdx]);

  // Add this state at the top of the Hero component
const [showScroll, setShowScroll] = useState(true);

// Add this effect below the other useEffect
useEffect(() => {
  const handleScroll = () => {
    setShowScroll(window.scrollY < 50);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


  return (
    <div id="hero-dock" className="min-h-[82vh] lg:min-h-[calc(100vh-10.5rem)] lg:max-h-[calc(100vh-10.5rem)] flex flex-col justify-between relative px-4 md:px-6 pt-1 pb-12 lg:pb-10 text-left">
      
      {/* Main content grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center flex-grow w-full">
        
        {/* Left Column: Hero & About */}
        <div className="col-span-1 lg:col-span-7 flex flex-col gap-3.5 sm:gap-4.5 justify-center">
        {/* Decorative floating badge */}
        <div 
          onClick={() => onOpenVault?.('cert')}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111827]/80 border border-white/10 w-fit backdrop-blur-md animate-float cursor-pointer hover:border-orange-500/20"
        >
          <span className="flex h-2 w-2 rounded-full bg-[#00FFB2] animate-pulse" />
          <span className="text-[10px] font-mono text-gray-300 tracking-wider uppercase font-bold flex items-center gap-1.5">
            <Shield size={10} className="text-[#00E5FF]" />
            AWS Certified SysOps Administrator
          </span>
        </div>

        {/* Main Name Heading */}
        <div className="space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white leading-none uppercase">
            Sahajpal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#7B61FF] to-[#00FFB2]">
              Singh
            </span>
          </h1>

          <p className="text-xs sm:text-sm text-gray-400 font-mono tracking-wider font-semibold">
            Cloud Engineer &bull; Infrastructure Automation Specialist
          </p>
        </div>

        {/* Typing Text Line */}
        <div className="h-11 flex items-center justify-start">
          <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-gray-950/85 border border-white/10 rounded-xl font-mono text-xs text-gray-300 shadow-lg select-none">
            <Terminal size={12} className="text-[#00E5FF] animate-pulse" />
            <span className="text-gray-500 shrink-0">aws-sysops ~ %</span>
            <span className="text-white font-bold inline">{currentText}</span>
            <span className="w-1.5 h-3.5 bg-[#00FFB2] animate-pulse shrink-0" />
          </div>
        </div>

        {/* Hero Narrative Pitch */}
        <p className="max-w-xl text-sm text-gray-400 leading-relaxed font-sans">
          Former Cloud Engineer Intern at <span className="text-white font-semibold">Summit Technology Group (STGi)</span> focusing on cloud infrastructure automation, modular Terraform deployments, and CI/CD pipelines. Passionate about designing cleaner systems and securing robust automation workflows.
        </p>

        {/* Action call triggers matching styling rules */}
        <div className="flex flex-wrap gap-3 mt-1">
          <a
            href="#projects-section"
            className="px-6 py-3 bg-[#00E5FF] text-[#0A0F1E] font-bold font-mono text-xs rounded-lg hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] transition-all cursor-pointer flex items-center gap-2"
          >
            <span>View Projects</span>
            <ChevronRight size={13} />
          </a>

          <a
            href="#cv-section"
            className="px-6 py-3 bg-white/5 border border-white/10 text-white font-bold font-mono text-xs rounded-lg hover:bg-white/10 transition-all cursor-pointer flex items-center gap-1.5"
          >
            <span>Deconstruct CV</span>
          </a>

          <a
            href="#contact-section"
            className="px-6 py-3 bg-transparent border border-[#00FFB2]/30 text-[#00FFB2] hover:bg-[#00FFB2]/10 font-bold font-mono text-xs rounded-lg transition-all cursor-pointer flex items-center gap-2"
          >
            <span className="flex h-1.5 w-1.5 rounded-full bg-[#00FFB2] animate-pulse" />
            <span>Contact Me</span>
          </a>
        </div>

        {/* Metrics Row / Counter */}
        <div className="mt-3 lg:mt-4 grid grid-cols-3 gap-4 border-t border-white/5 pt-3 lg:pt-4 max-w-lg">
          <div 
            onClick={() => onOpenVault?.('cert')}
            className="border-l border-white/10 pl-4 cursor-pointer hover:border-orange-500/45 transition-colors group"
          >
            <div className="text-xl sm:text-2xl font-bold text-white font-display group-hover:text-orange-400 transition-colors">AWS</div>
            <div className="text-[9px] uppercase tracking-widest text-[#00E5FF] font-mono leading-tight">SysOps Certified</div>
          </div>
          <div className="border-l border-white/10 pl-4">
            <div className="text-xl sm:text-2xl font-bold text-white font-display">10+</div>
            <div className="text-[9px] uppercase tracking-widest text-gray-500 font-mono leading-tight">Terraform Modules</div>
          </div>
          <div className="border-l border-white/10 pl-4">
            <div className="text-xl sm:text-2xl font-bold text-white font-display">1st Place</div>
            <div className="text-[9px] uppercase tracking-widest text-[#00FFB2] font-mono leading-tight">RoboSprint Winner</div>
          </div>
        </div>
      </div>

      {/* Right Column: Hero Portrait + Deployment Bento Grid */}
      <div className="col-span-1 lg:col-span-5 flex flex-col gap-6 justify-center relative">
        
        {/* BENTO BLOCK 1: Profile Photo Card */}
        <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-5 relative overflow-hidden group shadow-2xl flex items-center gap-5">
          {/* Subtle glow background */}
          <div className="absolute top-0 right-0 w-24 h-24 bg-[#00FFB2]/5 rounded-full blur-2xl pointer-events-none" />
          
          {/* SQUIRCLE IMAGE FRAME WITH LIGHT SCANNING GRADIENT GLOW */}
          <div className="relative w-28 h-28 sm:w-32 sm:h-32 shrink-0 rounded-2xl border border-white/15 overflow-hidden group bg-gray-950 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-[1.03]">
            {/* Pulsing gradient active frame */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00E5FF]/20 to-[#7B61FF]/20 opacity-40 animate-pulse pointer-events-none" />
            
            {!imageError ? (
              <img
                src="/Sahajpal_Singh.jpg"
                alt="Sahajpal Singh"
                className="w-full h-full object-cover rounded-2xl relative z-10"
                onError={() => setImageError(true)}
                referrerPolicy="no-referrer"
              />
            ) : (
              // Digital Scan Aesthetic Line Art Fallback
              <div className="w-full h-full flex flex-col items-center justify-center p-4 text-center z-10">
                <User size={36} className="text-[#00E5FF] mb-1.5 animate-pulse" />
                <span className="text-[9px] font-mono text-gray-400 font-bold uppercase leading-tight select-all">
                  Upload file as <br />
                  <span className="text-[#00FFB2]">Sahajpal_Singh.jpg</span>
                </span>
              </div>
            )}
            
            {/* Small glowing corner bracket decorations */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-[#00FFB2]/50 z-20" />
            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r border-[#00FFB2]/50 z-20" />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l border-[#00FFB2]/50 z-20" />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-[#00FFB2]/50 z-20" />
          </div>

          {/* Quick Profile Metadata Frame */}
          <div className="space-y-2">
            <div className="flex items-center gap-1.5">
              <Sparkles size={11} className="text-[#00FFB2]" />
              <span className="text-[9px] font-mono text-[#00FFB2] uppercase tracking-wider font-bold bg-[#00FFB2]/10 border border-[#00FFB2]/20 px-2 py-0.5 rounded">
                Certified Cloud Engineer
              </span>
            </div>
            
            <h4 className="text-base font-bold font-display text-white tracking-tight">
              Sahajpal Singh
            </h4>

            {/* Micro details */}
            <div className="space-y-1 text-[10.5px] font-mono text-gray-400">
              <div className="flex items-center gap-1.5">
                <MapPin size={10} className="text-gray-500" />
                <span>Uttarakhand, India</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-ping" />
                <span className="text-gray-300">Status: Active / Available</span>
              </div>
            </div>
          </div>
        </div>

        {/* BENTO BLOCK 2: Interactive Deployment Stack Card */}
        <div className="bg-[#111827]/40 backdrop-blur-xl border border-white/10 rounded-3xl p-4 sm:p-5 relative overflow-hidden group select-none shadow-2xl">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-white">
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20" />
            </svg>
          </div>
          
          <h3 className="text-xs font-semibold uppercase tracking-widest text-[#7B61FF] mb-4 font-mono flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
            Deployment Stack
          </h3>
          
          <div className="space-y-3">
            {/* Terraform Stack Item */}
            <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/40 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center text-[#00E5FF] font-mono text-xs font-bold border border-[#00E5FF]/15">TF</div>
                <div>
                  <div className="text-xs font-bold text-white font-display">Terraform</div>
                  <div className="text-[9px] text-gray-500 font-mono">Infrastructure as Code</div>
                </div>
              </div>
              <span className="text-[9px] bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 px-2 py-0.5 rounded font-mono font-semibold">HANDS-ON</span>
            </div>

            {/* Kubernetes Stack Item */}
            <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/40 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#7B61FF]/10 flex items-center justify-center text-[#7B61FF] font-mono text-xs font-bold border border-[#7B61FF]/15">K8</div>
                <div>
                  <div className="text-xs font-bold text-white font-display">Kubernetes</div>
                  <div className="text-[9px] text-gray-500 font-mono font-semibold">Container Orchestration</div>
                </div>
              </div>
              <span className="text-[9px] bg-[#7B61FF]/10 text-[#7B61FF] border border-[#7B61FF]/20 px-2 py-0.5 rounded font-mono font-semibold">EKS/AKS</span>
            </div>

            {/* GitHub Actions Stack Item */}
            <div className="flex items-center justify-between p-3 sm:p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-[#00E5FF]/40 transition-colors cursor-default">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#00FFB2]/10 flex items-center justify-center text-[#00FFB2] font-mono text-xs font-bold border border-[#00FFB2]/15">GH</div>
                <div>
                  <div className="text-xs font-bold text-white font-display">GitHub Actions</div>
                  <div className="text-[9px] text-gray-500 font-mono">CI/CD Automation</div>
                </div>
              </div>
              <span className="text-[9px] bg-[#00E5FF]/10 text-[#00E5FF] border border-[#00E5FF]/20 px-2 py-0.5 rounded font-mono font-semibold">PIPELINES</span>
            </div>
          </div>
        </div>
      </div>

      </div> {/* Closes Main content grid */}

      {/* Decorative prompt anchor representing scroll logs */}
<div className={`hidden lg:flex fixed bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-gray-500/80 select-none z-10 transition-opacity duration-500 ${showScroll ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
  <span className="text-[9px] font-mono tracking-widest uppercase animate-float">Scroll to inspect logs</span>
  <ArrowDown size={11} className="text-[#7B61FF] animate-bounce" />
</div>

    </div>
  );
}
