/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Briefcase, Calendar, MapPin, ChevronRight, Layers, Cpu, ShieldAlert, BarChart } from 'lucide-react';

const EXPERIENCE_METRICS = [
  { label: 'Industry Experience', value: '1+ Years', desc: 'Real industry experience gained as a Cloud and DevOps Engineer Intern' },
  { label: 'Infrastructure reviews', value: '20+', desc: 'Infrastructure pull requests successfully verified and modularized' },
  { label: 'CGPA', value: '8.94', desc: 'Cumulative Grade Point Average demonstrating deep theoretical diligence' },
  { label: 'Terraform Modules', value: '10+', desc: 'Reusable custom configurations built for multi-subnet cloud resources' },
];

export default function Experience() {
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [selectedTaskLog, setSelectedTaskLog] = useState<string>('terraform');

  return (
    <div id="experience-dashboard" className="space-y-12">
      
      {/* Intro line */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold font-display text-white">Engineering Timeline</h3>
          <p className="text-xs text-gray-400 font-mono">Exploring over a year of verified industry internship experience</p>
        </div>
        <div className="flex gap-2 text-xs font-mono bg-white/5 border border-white/5 px-3 py-1.5 rounded-lg text-gray-300 animate-pulse">
          <Briefcase size={13} className="text-[#00E5FF]" />
          <span>Role Completed: Developer & Cloud Engineer Intern</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* TIMELINE COLUMN (7 cols) */}
        <div className="lg:col-span-7 space-y-8">
          
          <div className="relative border-l-2 border-[#7B61FF]/35 pl-6 ml-4 space-y-10">
            
            {/* STGi Job Item */}
            <div className="relative">
              {/* Completed Bullet */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-gray-950 border-2 border-[#7B61FF] flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00FFB2]" />
              </div>

              {/* Title Header */}
              <div className="mb-4">
                <span className="text-[10px] font-mono uppercase bg-[#7B61FF]/10 text-[#7B61FF] border border-[#7B61FF]/25 px-2.5 py-0.5 rounded-full font-bold">
                  19 May 2025 – 31 May 2026
                </span>
                <h4 className="text-lg font-bold font-display text-white mt-2 leading-tight">
                  Developer & Cloud Engineer Intern
                </h4>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-gray-400 font-mono mt-1">
                  <span className="text-white font-semibold">Summit Technology Group (STGi)</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin size={11} className="text-[#00FFB2]" />
                    Panchkula, India (Hybrid)
                  </span>
                </div>
              </div>

              {/* Collapsible interactive tasks */}
              <div className="space-y-4">
                <p className="text-xs text-gray-400 italic font-sans leading-relaxed">
                  Contributed to professional technology and cloud services frameworks, engineering automated tooling and clean system configuration processes.
                </p>

                <div className="space-y-3">
                  {[
                    {
                      label: 'Terraform IaC Modularity',
                      desc: 'Engineered and upgraded 10+ reusable Terraform modules for AWS environment resource provisioning.',
                      type: 'terraform',
                    },
                    {
                      label: 'AWS EKS Cluster Setup',
                      desc: 'Managed Terraform configurations and Amazon EKS cluster resource definitions for stable environment configurations.',
                      type: 'kubernetes',
                    },
                    {
                      label: 'Continuous Integration Reviews',
                      desc: 'Reviewed and submitted over 20+ cloud configuration pull requests, maintaining structured automated validations.',
                      type: 'cicd',
                    }
                  ].map((task) => (
                    <div 
                      key={task.label}
                      onClick={() => setSelectedTaskLog(task.type)}
                      className={`p-3 rounded-lg border text-left transition-all cursor-pointer group ${
                        selectedTaskLog === task.type 
                          ? 'bg-[#7B61FF]/10 border-[#7B61FF]' 
                          : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-white/10'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-white font-sans group-hover:text-[#00E5FF] transition-colors">
                          {task.label}
                        </span>
                        <span className="text-[10px] font-mono text-gray-400 group-hover:text-white flex items-center gap-0.5">
                          View Details <ChevronRight size={10} />
                        </span>
                      </div>
                      <p className="text-xs text-gray-400 leading-normal">{task.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <span className="text-[10.5px] font-mono text-gray-500 uppercase font-bold block mb-2">Technologies Deployments:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {['AWS EKS', 'Terraform v6', 'Docker', 'GitHub Actions', 'Datadog', 'Prometheus', 'Vue.js'].map(t => (
                      <span key={t} className="text-[10px] font-mono bg-gray-900 border border-white/5 px-2 py-0.5 rounded text-gray-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

        {/* INTERACTIVE METRICS GRID & LOGS VIEW (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Active stats metrics */}
          <div className="bg-gray-950/40 border border-white/5 p-6 rounded-2xl glass space-y-4">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#00E5FF] uppercase border-b border-white/5 pb-2">
              Cloud Impact Performance
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {EXPERIENCE_METRICS.map((metric, i) => (
                <div 
                  key={metric.label}
                  onMouseEnter={() => setActiveMetric(i)}
                  onMouseLeave={() => setActiveMetric(null)}
                  className={`p-3 rounded-lg border transition-all duration-300 ${
                    activeMetric === i ? 'bg-[#00FFB2]/10 border-[#00FFB2]' : 'bg-white/5 border-white/5'
                  }`}
                >
                  <span className="text-2xl font-bold font-display text-white block">
                    {metric.value}
                  </span>
                  <span className="text-xs font-semibold text-gray-300 block mb-1">
                    {metric.label}
                  </span>
                  <p className="text-[9.5px] font-mono text-gray-500 leading-tight">
                    {metric.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Deep Dive Detail Card */}
          <div className="bg-gray-950/40 border border-white/5 p-5 rounded-2xl glass relative overflow-hidden flex flex-col justify-between min-h-[300px]">
            {/* Ambient subtle light vector accent */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-[#7B61FF]/5 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest flex items-center gap-1.5 font-bold">
                  <Layers size={12} className="text-[#00E5FF]" />
                  Experience Impact Spec
                </span>
                <span className="text-[9px] font-mono bg-[#00FFB2]/10 text-[#00FFB2] border border-[#00FFB2]/20 px-2 py-0.5 rounded uppercase font-bold">
                  Verified Timeline
                </span>
              </div>
              
              {selectedTaskLog === 'terraform' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold font-display text-white">Terraform IaC Modularity</h5>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">May 2025 - May 2026</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#E2E8F0] tracking-wider block mb-0.5">Challenge</span>
                      <p className="text-xs text-gray-400 leading-normal font-sans">
                        Managing complex and repetitive AWS environment resources manually, leading to high human error rates and environment drift.
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#00E5FF] tracking-wider block mb-0.5">Contribution</span>
                      <p className="text-xs text-gray-300 leading-normal font-sans">
                        Engineered and upgraded 10+ reusable, modular custom Terraform configurations defining VPC structures and multi-subnet layouts.
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#00FFB2] tracking-wider block mb-0.5">Outcome</span>
                      <p className="text-xs text-gray-300 leading-normal font-sans">
                        Successfully standardized resources across sandbox cycles, reducing manual infrastructure provisioning effort by 40%.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedTaskLog === 'kubernetes' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold font-display text-white">AWS EKS Cluster Setup</h5>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">May 2025 - May 2026</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#E2E8F0] tracking-wider block mb-0.5">Challenge</span>
                      <p className="text-xs text-gray-400 leading-normal font-sans">
                        Coordinating configuration changes and AWS resource schema updates for multi-node deployments securely.
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#00E5FF] tracking-wider block mb-0.5">Contribution</span>
                      <p className="text-xs text-gray-300 leading-normal font-sans">
                        Managed stable Terraform specifications and monitored Amazon EKS cluster resource configurations on AWS.
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#00FFB2] tracking-wider block mb-0.5">Outcome</span>
                      <p className="text-xs text-gray-300 leading-normal font-sans">
                        Ensured highly stable container environment setups during continuous release pipelines.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {selectedTaskLog === 'cicd' && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h5 className="text-sm font-bold font-display text-white">Continuous Integration Reviews</h5>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">May 2025 - May 2026</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#E2E8F0] tracking-wider block mb-0.5">Challenge</span>
                      <p className="text-xs text-gray-400 leading-normal font-sans">
                        Verifying incoming branch code changes from multiple developers without introducing pipeline deployment regressions.
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#00E5FF] tracking-wider block mb-0.5">Contribution</span>
                      <p className="text-xs text-gray-300 leading-normal font-sans">
                        Reviewed, verified and modularized 20+ infrastructure configuration Pull Requests integrated with automated stage validations.
                      </p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase font-bold text-[#00FFB2] tracking-wider block mb-0.5">Outcome</span>
                      <p className="text-xs text-gray-300 leading-normal font-sans">
                        Kept code integrations seamless with full automated verification audits and a consistent 0-downtime deployment pipeline registry.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-4 pt-3 border-t border-white/5 text-[9px] font-mono text-gray-500 flex justify-between select-none">
              <span>* Select a task in the timeline to view details</span>
              <span>READ_ONLY</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
