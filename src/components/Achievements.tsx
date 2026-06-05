/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, MouseEvent } from 'react';
import { Award, Check, Copy, ShieldCheck, Trophy, Globe, Zap } from 'lucide-react';

interface AchievementsProps {
  onOpenVault?: (tab: 'resume' | 'cert') => void;
}

export default function Achievements({ onOpenVault }: AchievementsProps) {
  const [copiedId, setCopiedId] = useState(false);

  const handleCopyId = (e: MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText('6e5df301038d4587ac15e55dfef682bf');
    setCopiedId(true);
    setTimeout(() => setCopiedId(false), 2000);
  };

  return (
    <div id="achievements-bento" className="space-y-12">
      
      {/* Block Header */}
      <div>
        <span className="text-xs font-mono uppercase text-[#7B61FF] font-semibold tracking-wider block mb-1">
          [VERIFIED MILESTONES & CREDENTIALS]
        </span>
        <h3 className="text-2xl font-bold font-display text-white">Awards & Achievements</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* BENTO CARD 1: AWS Certified SysOps (span 2 cols) */}
        <div 
          onClick={() => onOpenVault?.('cert')}
          className="md:col-span-2 group relative rounded-2xl border border-white/5 bg-gradient-to-tr from-[#111827] via-gray-900 to-[#111827] p-6 glass flex flex-col justify-between overflow-hidden cursor-pointer"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none group-hover:bg-orange-500/20 transition-all duration-500" />
          
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-orange-500/10 border border-orange-500/30 rounded-xl text-orange-400">
                <ShieldCheck size={28} />
              </div>
              <span className="font-mono text-[9px] uppercase tracking-widest text-[#00FFB2] border border-[#00FFB2]/30 px-2.5 py-0.5 rounded bg-[#00FFB2]/10 font-bold">
                Active Certificate
              </span>
            </div>

            <h4 className="text-xl font-bold font-display text-white mt-2 group-hover:text-orange-400 transition-colors">
              AWS Certified SysOps Administrator
            </h4>
            <span className="text-[10px] font-mono text-[#00E5FF] uppercase font-bold block mt-1 tracking-wider">
              Associate Level — Amazon Web Services
            </span>
            <p className="text-gray-400 text-xs mt-3 leading-relaxed font-sans">
              Validation of technical expertise in deploying, managing, operating, and securing high-availability cloud environments, container orchestration workloads, CI/CD automated deployment schemas, and monitoring integrations on AWS.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-white/5 pt-4">
            {/* Clickable inline Verification Copy */}
            <div 
              onClick={handleCopyId}
              title="Copy Credential Verification Number"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 hover:border-white/20 border border-white/5 text-[10.5px] font-mono text-gray-400 hover:text-white transition-all cursor-pointer active:scale-95"
            >
              {copiedId ? (
                <>
                  <Check size={11} className="text-[#00FFB2]" />
                  <span className="text-[#00FFB2] font-semibold">Copied Code</span>
                </>
              ) : (
                <>
                  <Copy size={11} className="text-gray-500" />
                  <span>ID: 6e5df301038d...</span>
                </>
              )}
            </div>

            <span className="text-[#00E5FF] text-[10.5px] font-mono font-bold group-hover:underline flex items-center gap-1">
              View Verified Certification &rarr;
            </span>
          </div>
        </div>

        {/* BENTO CARD 2: RoboSprint Winner (1st Place, span 2 cols) */}
        <div className="md:col-span-2 group relative rounded-2xl border border-white/5 bg-gray-900/40 p-6 glass flex flex-col justify-between overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-500/10 rounded-full blur-xl pointer-events-none group-hover:bg-yellow-500/20 transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-xl text-yellow-400">
                <Trophy size={28} />
              </div>
              <span className="font-mono text-[10px] uppercase bg-yellow-400/20 text-yellow-400 border border-yellow-400/30 font-bold px-2.5 py-0.5 rounded-full">
                1st Place Winner
              </span>
            </div>

            <h4 className="text-xl font-bold font-display text-white mt-1 group-hover:text-yellow-400 transition-colors">
              RoboSprint Championship
            </h4>
            <span className="text-[10px] font-mono text-[#7B61FF] uppercase font-bold block mt-1 tracking-wider">
              Robotics-Based Environmental Clean Solutions
            </span>
            <p className="text-gray-400 text-xs mt-3 leading-relaxed font-sans">
              Ranked <strong className="text-[#00E5FF]">1st out of participating peer engineering teams</strong> in my batch, creating an embedded hardware robotics system engineered to discover, capture, and filter water-borne waste objects autonomously.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-500 flex justify-between">
            <span>Engineering Robotics Exhibition</span>
            <span className="text-gray-400 font-bold uppercase">College Level</span>
          </div>
        </div>

        {/* BENTO CARD 3: Kalp Build Hackathon Winner (span 2 cols) */}
        <div className="md:col-span-2 group relative rounded-2xl border border-white/5 bg-gray-900/40 p-6 glass flex flex-col justify-between overflow-hidden">
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#00FFB2]/5 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#00FFB2]/10 border border-[#00FFB2]/30 rounded-xl text-[#00FFB2]">
                <Zap size={28} />
              </div>
              <span className="font-mono text-[10px] uppercase bg-violet-400/15 text-[#7B61FF] border border-[#7B61FF]/30 font-bold px-2.5 py-0.5 rounded-full">
                Grand Winner
              </span>
            </div>

            <h4 className="text-xl font-bold font-display text-white mt-1 group-hover:text-[#00FFB2] transition-colors">
              Kalp Build Hackathon Winner
            </h4>
            <span className="text-[10px] font-mono text-gray-400 uppercase font-bold block mt-1">
              Blockchain-Based Voting System
            </span>
            <p className="text-gray-400 text-xs mt-3 leading-relaxed font-sans">
              Competed and won grand honors among <strong className="text-white">100+ participants</strong> by conceptualizing and designing a distributed, tamper-proof blockchain voting register, securing <strong className="text-[#00FFB2]">INR 10,000</strong>.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-500 flex justify-between">
            <span>Decentralized Tech Hackathon</span>
            <span className="text-gray-400 font-bold uppercase">Hackathon Award</span>
          </div>
        </div>

        {/* BENTO CARD 4: Blue Marble Global Program (span 2 cols) */}
        <div className="md:col-span-2 group relative rounded-2xl border border-white/5 bg-gradient-to-tr from-[#111827] via-gray-900 to-[#111827] p-6 glass flex flex-col justify-between overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-[#00E5FF]/10 border border-[#00E5FF]/30 rounded-xl text-[#00E5FF]">
                <Globe size={28} className="animate-spin" style={{ animationDuration: '30s' }} />
              </div>
              <span className="font-mono text-[10px] uppercase bg-[#00E5FF]/20 text-[#00E5FF] border border-[#00E5FF]/30 font-bold px-2.5 py-0.5 rounded-full">
                Global Cohort Selection
              </span>
            </div>

            <h4 className="text-xl font-bold font-display text-white mt-1 group-hover:text-[#00E5FF] transition-colors">
              Blue Marble Study Program
            </h4>
            <span className="text-[10px] font-mono text-gray-400 uppercase font-bold block mt-1">
              Deakin University Host, Melbourne, Australia
            </span>
            <p className="text-gray-400 text-xs mt-3 leading-relaxed font-sans">
              Handpicked as part of a highly selective cohort of only <strong className="text-white">28 student representatives globally</strong> for Deakin University&apos;s flagship Blue Marble Global Study Program, addressing system processes, engineering leadership, and international growth.
            </p>
          </div>

          <div className="mt-8 pt-4 border-t border-white/5 text-[10px] font-mono text-gray-500 flex justify-between">
            <span>Engineering Leadership Cohort</span>
            <span className="text-gray-400 font-bold uppercase">Study Tour</span>
          </div>
        </div>

      </div>

    </div>
  );
}
