/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Shield, Sparkles, Orbit, Cpu, Compass, Layers, CheckCircle } from 'lucide-react';

const SKILLS_DATA = [
  { name: 'AWS Cloud platform', category: 'infrastructure', levelLabel: 'CERTIFIED', icon: '☁️', desc: 'EC2, S3, IAM, VPC, CloudWatch, EKS integration' },
  { name: 'Terraform IaC', category: 'infrastructure', levelLabel: 'HANDS-ON', icon: '🛠️', desc: 'IaC automation & reusable multi-subnet custom registry modules' },
  { name: 'Kubernetes', category: 'infrastructure', levelLabel: 'HANDS-ON', icon: '⚓', desc: 'AWS EKS cluster configurations, stable resource setups' },
  { name: 'Docker Compose', category: 'infrastructure', levelLabel: 'HANDS-ON', icon: '🐋', desc: 'Container building, microservice setups, local configurations' },
  { name: 'Helm Packagers', category: 'infrastructure', levelLabel: 'PRACTICAL', icon: '☸️', desc: 'Package setups for containerized microservice architectures' },
  { name: 'GitHub Actions', category: 'automation', levelLabel: 'HANDS-ON', icon: '🚀', desc: 'CI/CD pipelines, automated validation checks, PR workflows' },
  { name: 'Linux OS / Bash', category: 'automation', levelLabel: 'HANDS-ON', icon: '🐧', desc: 'System environment deployments and custom admin scripts' },
  { name: 'Prometheus', category: 'observability', levelLabel: 'PRACTICAL', icon: '📈', desc: 'Retrieval queries, scrapers, baseline status metrics' },
  { name: 'Grafana dashboards', category: 'observability', levelLabel: 'PRACTICAL', icon: '📊', desc: 'Metrics panels, stable target telemetry visuals' },
  { name: 'Datadog monitoring', category: 'observability', levelLabel: 'INTERNSHIP', icon: '🐕', desc: 'Dashboard tracking, log alerts, APM configurations' },
  { name: 'Node.js backend', category: 'software', levelLabel: 'PRACTICAL', icon: '🟢', desc: 'REST representation endpoints, JWT auth token logic' },
  { name: 'Vue.js frontend', category: 'software', levelLabel: 'INTERNSHIP', icon: '🟢', desc: 'STGi frontend frameworks, loan portals maintenance' },
];

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'infrastructure' | 'automation' | 'observability' | 'software'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<typeof SKILLS_DATA[0] | null>(null);

  const filteredSkills = selectedCategory === 'all' 
    ? SKILLS_DATA 
    : SKILLS_DATA.filter(s => s.category === selectedCategory);

  const getBadgeStyle = (label: string) => {
    switch (label) {
      case 'CERTIFIED':
        return 'bg-orange-500/10 text-orange-400 border-orange-500/30';
      case 'HANDS-ON':
        return 'bg-[#00E5FF]/10 text-[#00E5FF] border-[#00E5FF]/30';
      case 'INTERNSHIP':
        return 'bg-[#7B61FF]/10 text-[#7B61FF] border-[#7B61FF]/30';
      default:
        return 'bg-[#00FFB2]/10 text-[#00FFB2] border-[#00FFB2]/30';
    }
  };

  return (
    <div id="skills-interactive" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* LEFT COMPONENT (5 cols): Orbiting Cloud Solar System */}
      <div className="lg:col-span-5 flex flex-col items-center justify-center relative bg-gray-950/40 border border-white/5 p-8 rounded-2xl h-[450px] overflow-hidden glass">
        <div className="absolute top-4 left-4 flex items-center gap-1.5 text-xs text-gray-500 font-mono">
          <Orbit size={13} className="text-[#00E5FF] animate-spin" style={{ animationDuration: '6s' }} />
          <span>Active Skill Orbits</span>
        </div>

        {/* Orbit container */}
        <div className="w-64 h-64 relative flex items-center justify-center">
          
          {/* Inner Pulsing Core: AWS Planet */}
          <div className="absolute z-10 w-16 h-16 rounded-full bg-gradient-to-tr from-[#7B61FF] to-[#00E5FF] flex items-center justify-center shadow-[0_0_35px_rgba(123,97,255,0.4)] animate-pulse border border-white/20">
            <Cpu className="text-white w-7 h-7" />
            <span className="absolute -bottom-6 text-[10px] font-mono text-center text-white bg-[#0A0F1E] border border-white/10 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">stgi_core</span>
          </div>

          {/* Orbit System 1: Infra ring */}
          <div className="absolute w-40 h-40 rounded-full border border-dashed border-[#00E5FF]/20 animate-spin" style={{ animationDuration: '15s' }}>
            <div className="absolute -top-3 left-1/2 w-6 h-6 rounded-full bg-gray-900 border border-[#00E5FF] flex items-center justify-center text-xs shadow-[0_0_10px_rgba(0,229,255,0.3)] group cursor-pointer" title="Terraform">
              🛠️
            </div>
            <div className="absolute -bottom-3 left-1/2 w-6 h-6 rounded-full bg-gray-900 border border-[#00E5FF] flex items-center justify-center text-xs shadow-[0_0_10px_rgba(0,229,255,0.3)] group cursor-pointer" title="EKS">
              ⚓
            </div>
          </div>

          {/* Orbit System 2: Automation ring */}
          <div className="absolute w-52 h-52 rounded-full border border-dashed border-[#7B61FF]/20 animate-spin" style={{ animationDuration: '24s', animationDirection: 'reverse' }}>
            <div className="absolute -right-3 top-1/2 w-6 h-6 rounded-full bg-gray-900 border border-[#7B61FF] flex items-center justify-center text-xs shadow-[0_0_10px_rgba(123,97,255,0.3)] cursor-pointer" title="GitHub Actions">
              🚀
            </div>
            <div className="absolute -left-3 top-1/2 w-6 h-6 rounded-full bg-gray-900 border border-[#7B61FF] flex items-center justify-center text-xs shadow-[0_0_10px_rgba(123,97,255,0.3)] cursor-pointer" title="Linux">
              🐧
            </div>
          </div>

          {/* Orbit System 3: Observability ring */}
          <div className="absolute w-60 h-60 rounded-full border border-dashed border-[#00FFB2]/20 animate-spin" style={{ animationDuration: '32s' }}>
            <div className="absolute right-12 top-2 w-6 h-6 rounded-full bg-gray-900 border border-[#00FFB2] flex items-center justify-center text-xs shadow-[0_0_10px_rgba(0,255,178,0.3)] cursor-pointer" title="Datadog">
              🐕
            </div>
            <div className="absolute left-12 bottom-2 w-6 h-6 rounded-full bg-gray-900 border border-[#00FFB2] flex items-center justify-center text-xs shadow-[0_0_10px_rgba(0,255,178,0.3)] cursor-pointer" title="Grafana">
              📊
            </div>
          </div>

        </div>

        {/* Orbit Telemetry panel */}
        <div className="mt-4 w-full h-[65px] bg-[#0A0F1E]/50 border border-white/5 rounded-lg px-3 py-2 text-xs font-mono flex items-center justify-center text-center text-gray-400">
          {hoveredSkill ? (
            <div>
              <span className="text-[#00E5FF] font-bold uppercase">{hoveredSkill.name}</span>
              <span className="text-gray-300"> — {hoveredSkill.desc}</span>
            </div>
          ) : (
            <p className="italic">Hover over skills on the right categories to map telemetry metrics and see descriptions</p>
          )}
        </div>
      </div>

      {/* RIGHT COMPONENT (7 cols): Responsive Detailed Skill Dashboard */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Category Navigation Controls */}
        <div className="flex flex-wrap gap-2 border-b border-white/10 pb-4">
          {[
            { id: 'all', label: 'All Stack' },
            { id: 'infrastructure', label: 'Cloud Infra' },
            { id: 'automation', label: 'CI/CD & DevOps' },
            { id: 'observability', label: 'Monitoring' },
            { id: 'software', label: 'Backend/JS' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id as any)}
              className={`px-3 py-1.5 rounded-md font-mono text-xs transition-colors cursor-pointer ${
                selectedCategory === cat.id 
                  ? 'bg-gradient-to-r from-[#7B61FF] to-[#00E5FF] text-white font-semibold' 
                  : 'bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Skills List with Hover Triggers */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[320px] overflow-y-auto pr-1">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
              className="p-3.5 rounded-xl border border-white/5 bg-gray-900/40 hover:bg-gray-800/40 hover:border-[#00E5FF]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="text-sm select-none">{skill.icon}</span>
                  <span className="text-sm font-semibold text-white tracking-tight group-hover:text-[#00E5FF] transition-colors">{skill.name}</span>
                </div>
                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border uppercase ${getBadgeStyle(skill.levelLabel)}`}>
                  {skill.levelLabel}
                </span>
              </div>

              <span className="text-[11px] font-mono text-gray-400 leading-tight block">
                {skill.desc}
              </span>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}
