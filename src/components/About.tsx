/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Target, Server, ShieldCheck, Cpu, Database, Award } from 'lucide-react';

const STATS = [
  { target: 1, suffix: '+ Years', label: 'Verified Internship Experience', icon: <Server size={16} /> },
  { target: 10, suffix: '+ Modules', label: 'Terraform IaC Authored', icon: <Cpu size={16} /> },
  { target: 20, suffix: '+ Reviews', label: 'Infrastructure Pull Requests', icon: <ShieldCheck size={16} /> },
  { target: 1, suffix: 'st Place', label: 'RoboSprint exhibition', icon: <Target size={16} /> },
];

export default function About() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0, 0]);

  // Animated numbers increment loop
  useEffect(() => {
    const duration = 2000; // ms
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    let currentFrame = 0;

    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / totalFrames;
      
      // Easing function (easeOutQuad)
      const easeVal = progress * (2 - progress);

      const nextCounts = STATS.map((stat) => {
        const val = Math.floor(stat.target * easeVal);
        return val > stat.target ? stat.target : val;
      });

      setCounts(nextCounts);

      if (currentFrame >= totalFrames) {
        clearInterval(timer);
        setCounts(STATS.map(s => s.target));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, []);

  return (
    <div id="about-sahaj" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      {/* BIO COLUMN (7 cols) */}
      <div className="lg:col-span-7 space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-[#00E5FF] font-semibold tracking-widest block">
            [SYS_BIO_INITIALIZATION]
          </span>
          <h3 className="text-2xl font-bold font-display text-white tracking-tight">
            Bridging Modular Development, Cloud Automation & Reliable Infrastructure
          </h3>
        </div>

        <p className="text-sm text-gray-300 leading-relaxed font-sans">
          I am a passionate <strong className="text-white">Cloud Engineer and AWS Certified SysOps Administrator</strong> dedicated to automating cloud operations, strengthening infrastructure reliability, and eliminating manual configuration bottlenecks. With core hands-on competency in Infrastructure as Code (IaC), container orchestration, and automated CI/CD validation patterns, I enjoy translating complex requirements into clean architectures.
        </p>

        <p className="text-sm text-gray-400 leading-relaxed">
          During my internship experience at <strong className="text-[#7B61FF]">Summit Technology Group (STGi)</strong>, I engineered modular Terraform configurations for AWS environments, upgraded multi-subnet resources, configured node configurations for Amazon EKS clusters, and deployed Datadog dashboards and metrics monitors. I thrive on collaborating with technical teams, exploring modern DevOps automation tracks, and learning continuously to deploy robust production systems.
        </p>

        {/* Highlight Values Bullet layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3 text-xs font-mono">
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
            <span className="text-gray-300">AWS Certified SysOps Administrator</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
            <span className="text-gray-300">Terraform (IaC) Architecture Specialist</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
            <span className="text-gray-300">Kubernetes EKS Container Orchestrator</span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
            <span className="text-gray-300">Automation & AI Technology Integrations</span>
          </div>
        </div>
      </div>

      {/* STATS COUNTERS GRID COLUMN (5 cols) */}
      <div className="lg:col-span-5 grid grid-cols-2 gap-4">
        {STATS.map((stat, idx) => (
          <div
            key={stat.label}
            className="p-5 rounded-2xl border border-white/5 bg-gray-900/30 glass flex flex-col justify-between h-[135px] hover:border-[#7B61FF]/30 transition-colors duration-300"
          >
            <div className="flex items-center justify-between text-[#00E5FF] mb-1">
              {stat.icon}
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
            </div>

            <div>
              <span className="text-3xl font-bold font-display tracking-tight text-white block mt-3">
                {counts[idx]}
                <span className="text-lg font-mono text-[#7B61FF] ml-0.5">{stat.suffix}</span>
              </span>
              <span className="text-[11px] font-semibold text-gray-400 block font-sans tracking-tight mt-1">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
