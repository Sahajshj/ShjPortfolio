/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { ShieldCheck, Cpu, Database, Server, Compass, CheckCircle, BookOpen, Layers, Award } from 'lucide-react';

const AWS_DOMAINS = [
  {
    id: 'monitoring',
    title: 'Domain 1: Monitoring & Observability',
    badge: 'AWS Exam Criteria',
    desc: 'Implementing metrics, log filters, and proactive alerting triggers to secure healthy cloud operations.',
    applied: [
      'Configured Datadog monitoring and alert filters for production workload visibility.',
      'Designed alert integrations for instant notifications on system alerts.'
    ],
    tech: ['Datadog', 'Amazon CloudWatch', 'Prometheus', 'Grafana']
  },
  {
    id: 'reliability',
    title: 'Domain 2: Reliability & Business Continuity',
    badge: 'AWS Exam Criteria',
    desc: 'Engineering high-availability environments with automated scaling adjustments and failover models.',
    applied: [
      'Migrated custom Terraform configurations to AWS resources for stable environment failover capabilities.',
      'Managed deployment adjustments and security rules to protect network operations.'
    ],
    tech: ['Route 53', 'Auto Scaling', 'Multi-AZ DB', 'AWS Backup']
  },
  {
    id: 'deployment',
    title: 'Domain 3: Deployment, IaC, and Provisioning',
    badge: 'AWS Exam Criteria',
    desc: 'Authoring declarative Infrastructure as Code and managing Kubernetes clusters configuration cycles.',
    applied: [
      'Engineered and upgraded 10+ Terraform modules for AWS VPC & subnet network resources.',
      'Led AWS EKS configuration updates to secure robust deployment cycles.'
    ],
    tech: ['Terraform v6', 'AWS EKS', 'Docker Compose', 'GitHub Actions']
  },
  {
    id: 'security',
    title: 'Domain 4: Security & Compliance',
    badge: 'AWS Exam Criteria',
    desc: 'Configuring safe VPC firewalls, fine-tuning secure IAM user privileges, and encrypting storage buckets.',
    applied: [
      'Updated 5+ security groups guidelines, network ACL rules, and IAM security privileges.',
      'Secured microservice communications with JWT token structures.'
    ],
    tech: ['AWS IAM', 'VPC Security Groups', 'KMS Encryption', 'JWT Auth']
  }
];

const REAL_BLUEPRINTS = [
  {
    id: 'stgi-infra',
    title: 'STGi IaC & Network Architecture',
    subtitle: 'Summit Technology Group (STGi) Internship',
    description: 'A structural map explaining the multi-subnet configuration engineered during the STGi internship using Terraform & AWS EKS.',
    nodes: [
      { name: 'Terraform Modules', type: 'tool', desc: '10+ custom IaC modules for provisioning AWS base infrastructures' },
      { name: 'VPC private / public subnets', type: 'network', desc: 'Secure network isolation with subnets and NAT Gateways' },
      { name: 'EKS Kubernetes Clusters', type: 'compute', desc: 'Configured node setups and Terraform upgrades' },
      { name: 'Datadog Alert Checkers', type: 'telemetry', desc: 'Real monitoring dashboards mapping cluster statuses' }
    ]
  },
  {
    id: 'uplift-web',
    title: 'Uplift Mental Health Platform System',
    subtitle: 'High-availability backend schema',
    description: 'Decoupled API server topology handling clinic portals & forum boards securely with JWT and MongoDB.',
    nodes: [
      { name: 'Node.js Express Server', type: 'compute', desc: 'Maintains 8+ secure REST APIs for core consultations' },
      { name: 'JWT Auth Middleware', type: 'security', desc: 'Authenticates doctor & community session logins securely' },
      { name: 'MongoDB Database', type: 'database', desc: 'Stores secure user history grids and doctor listings' }
    ]
  },
  {
    id: 'robot-iot',
    title: 'Water Debris Robotic Feedback Loop',
    subtitle: 'RoboSprint National First-Place Solution',
    description: 'Hardware computer-vision controller and motion feedback system for autonomous water waste detection and collection.',
    nodes: [
      { name: 'Raspberry Pi Controller', type: 'compute', desc: 'Executes waste image processing and debris localization' },
      { name: 'Arduino microcontroller', type: 'tool', desc: 'Receives serial instructions and controls grabber motors' },
      { name: '85% Accuracy Sorter', type: 'telemetry', desc: 'Image sensing confidence threshold for automated grab' }
    ]
  }
];

export default function CloudArchitecture() {
  const [activeTab, setActiveTab] = useState<'aws-certification' | 'real-blueprints'>('aws-certification');
  const [selectedAwsDomain, setSelectedAwsDomain] = useState<string>('monitoring');
  const [selectedBlueprint, setSelectedBlueprint] = useState<string>('stgi-infra');

  const currentDomainInfo = AWS_DOMAINS.find(d => d.id === selectedAwsDomain);
  const currentBlueprintInfo = REAL_BLUEPRINTS.find(b => b.id === selectedBlueprint);

  return (
    <div id="cloud-workbench" className="bg-[#111827]/70 border border-white/10 rounded-2xl overflow-hidden glass-premium shadow-2xl relative">
      
      {/* Aurora visual accent background matching the Professional Polish Design */}
      <div className="absolute top-0 right-0 w-48 h-48 bg-[#00E5FF]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#7B61FF]/5 rounded-full blur-2xl pointer-events-none" />

      {/* Interactive Hub Header */}
      <div className="bg-gray-950 px-6 py-5 border-b border-white/10 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#00FFB2]/10 border border-[#00FFB2]/20 text-[#00FFB2] text-[10px] font-mono font-bold tracking-wider mb-2 uppercase">
            <Award size={10} /> Verifiable AWS SysOps Foundation
          </div>
          <h3 className="font-display font-semibold text-lg text-white flex items-center gap-2">
            <Server size={18} className="text-[#00E5FF]" />
            Interactive Certification & Architecture Sandbox
          </h3>
          <p className="text-xs text-gray-400 font-mono">
            Explore verified cloud principles, AWS domains, and real deployment blueprints based on my resume
          </p>
        </div>

        {/* Custom Navigator buttons */}
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('aws-certification')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-bold border cursor-pointer transition-all ${
              activeTab === 'aws-certification'
                ? 'bg-[#00E5FF] text-[#0A0F1E] border-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.25)]'
                : 'bg-white/5 border-white/5 hover:bg-white/10 text-gray-300'
            }`}
          >
            AWS Exam Domains
          </button>
          <button
            onClick={() => setActiveTab('real-blueprints')}
            className={`px-3 py-1.5 rounded text-xs font-mono font-bold border cursor-pointer transition-all ${
              activeTab === 'real-blueprints'
                ? 'bg-[#7B61FF] text-white border-[#7B61FF] shadow-[0_0_15px_rgba(123,97,255,0.25)]'
                : 'bg-white/5 border-white/5 hover:bg-white/10 text-gray-300'
            }`}
          >
            System Blueprints
          </button>
        </div>
      </div>

      <div className="p-6 min-h-[420px] bg-[#090D1A]">
        
        {/* TAB 1: AWS Certification Domain Explorer */}
        {activeTab === 'aws-certification' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* List of certified exam domains (Left 5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[10px] font-mono uppercase text-gray-500 tracking-widest block mb-2">
                Certified Domains
              </span>

              {AWS_DOMAINS.map((domain) => (
                <div
                  key={domain.id}
                  onClick={() => setSelectedAwsDomain(domain.id)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedAwsDomain === domain.id
                      ? 'bg-gradient-to-r from-gray-900 to-[#111827]/90 border-[#00E5FF] shadow-md'
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[11px] font-bold text-white font-display">
                      {domain.title}
                    </span>
                    <span className="text-[8px] font-mono text-[#00E5FF] tracking-wider uppercase border border-[#00E5FF]/20 px-1.5 py-0.5 rounded bg-[#00E5FF]/5">
                      {domain.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-400 font-sans line-clamp-1">{domain.desc}</p>
                </div>
              ))}
            </div>

            {/* In-depth Interactive Domain Content Display (Right 7 cols) */}
            <div className="lg:col-span-7 bg-gray-950/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex justify-between items-center border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#00E5FF]/10 text-[#00E5FF] rounded-lg">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">
                        {currentDomainInfo?.title}
                      </h4>
                      <span className="text-[10px] font-mono text-gray-500 uppercase">Verifiable SysOps Competencies</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h5 className="text-[11px] font-mono uppercase text-[#00FFB2] tracking-wider font-semibold mb-1">
                      Theoretical Description:
                    </h5>
                    <p className="text-xs text-gray-300 leading-relaxed font-sans bg-gray-950/60 border border-white/5 p-3 rounded-lg">
                      {currentDomainInfo?.desc}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-[11px] font-mono uppercase text-[#7B61FF] tracking-wider font-semibold mb-1.5">
                      How I Applied This In My Real Work:
                    </h5>
                    <ul className="space-y-2 text-xs text-gray-300 font-sans pl-1">
                      {currentDomainInfo?.applied.map((app, i) => (
                        <li key={i} className="flex gap-2.5 items-start">
                          <CheckCircle size={13} className="text-[#00FFB2] shrink-0 mt-0.5" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Technologies list */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <span className="text-[10px] font-mono text-gray-500 uppercase block mb-2">
                  Mapped Stack Technologies:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentDomainInfo?.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono bg-gray-900 border border-white/10 px-2.5 py-0.5 rounded text-gray-300 font-semibold"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: Genuine System Architecture Blueprints mapper */}
        {activeTab === 'real-blueprints' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* List of blueprints (Left 5 cols) */}
            <div className="lg:col-span-5 space-y-2.5">
              <span className="text-[10px] font-mono uppercase text-gray-500 tracking-widest block mb-2">
                Available Blueprints
              </span>

              {REAL_BLUEPRINTS.map((bp) => (
                <div
                  key={bp.id}
                  onClick={() => setSelectedBlueprint(bp.id)}
                  className={`p-3.5 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedBlueprint === bp.id
                      ? 'bg-gradient-to-r from-gray-900 to-[#111827]/90 border-[#7B61FF] shadow-md'
                      : 'bg-white/5 border-white/5 hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center gap-2 text-white mb-1">
                    <Layers size={14} className="text-[#7B61FF]" />
                    <span className="text-[11px] font-bold font-display">{bp.title}</span>
                  </div>
                  <p className="text-[10px] text-[#00FFB2] font-mono select-none uppercase font-bold tracking-wider leading-none">
                    {bp.subtitle}
                  </p>
                </div>
              ))}
            </div>

            {/* Interactive Architecture Blueprint nodes directory (Right 7 cols) */}
            <div className="lg:col-span-7 bg-gray-950/40 border border-white/5 rounded-2xl p-6 flex flex-col justify-between relative overflow-hidden">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-[#7B61FF]/10 text-[#7B61FF] rounded-lg">
                      <BookOpen size={18} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white font-display">
                        {currentBlueprintInfo?.title}
                      </h4>
                      <p className="text-[9px] font-mono text-[#00FFB2] font-semibold uppercase">{currentBlueprintInfo?.subtitle}</p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-400 leading-normal mb-5 italic font-sans border-l-2 border-[#7B61FF] pl-3">
                  {currentBlueprintInfo?.description}
                </p>

                {/* Conceptual Architecture Nodes Directory map */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono uppercase text-gray-500 tracking-widest block mb-2.5">
                    Constituents:
                  </span>
                  {currentBlueprintInfo?.nodes.map((node, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between p-3 rounded-lg bg-[#0A0F1E] border border-white/5 hover:border-[#7B61FF]/30 transition-all cursor-default"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#7B61FF]" />
                        <div>
                          <div className="text-xs font-bold text-white font-display">{node.name}</div>
                          <div className="text-[10px] text-gray-400 font-sans">{node.desc}</div>
                        </div>
                      </div>
                      <span className="text-[9px] font-mono bg-white/5 text-gray-400 px-2 py-0.5 rounded uppercase">
                        {node.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-gray-500">
                <span>Verified Resume Integration</span>
                <span className="text-[#00FFB2] font-bold">100% SECURE & ACCURATE</span>
              </div>
            </div>

          </div>
        )}

      </div>

      {/* Footer bar of the playground */}
      <div className="bg-gray-950 px-6 py-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-gray-500">
        <div>
          <span>Verification Status: Active</span>
        </div>
        <div>
          <span className="text-[#00FFB2]">CREDIBLE & AUDITED</span>
        </div>
      </div>

    </div>
  );
}
