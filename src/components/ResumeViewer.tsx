/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Download, Copy, Check, Printer, Building2, Calendar, MapPin, Award, BookOpen, Target, Sparkles, FolderGit2 } from 'lucide-react';

export default function ResumeViewer() {
  const [copiedText, setCopiedText] = useState<'email' | 'phone' | 'github' | 'linkedin' | null>(null);
  const [isInIframe, setIsInIframe] = useState(false);

  useEffect(() => {
    try {
      setIsInIframe(window.self !== window.top);
    } catch (e) {
      setIsInIframe(true);
    }
  }, []);

  const copyToClipboard = (text: string, type: 'email' | 'phone' | 'github' | 'linkedin') => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleDownloadPDF = () => {
    const link = document.createElement('a');
    link.href = '/Sahajpal_Singh_Cloud_Engineer.pdf';
    link.download = 'Sahajpal_Singh_Cloud_Engineer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="resume-container" className="glass-premium rounded-2xl p-6 md:p-8 max-w-4xl mx-auto my-8 relative overflow-hidden">
      {/* Decorative Top Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#00E5FF] via-[#7B61FF] to-[#00FFB2]" />

      {/* Control Actions (Always Hidden on browser native prints) */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-white/10 print:hidden">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-xs text-sans font-mono text-gray-400 ml-2">sysops_cv_final.sh</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownloadPDF}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium text-xs font-mono transition-all border active:scale-95 cursor-pointer bg-emerald-600 hover:bg-emerald-500 border-emerald-500/20"
          >
            <Download size={14} className="text-[#00FFB2]" />
            Download Resume PDF
          </button>
          <button
            onClick={() => copyToClipboard('sahajpal1905@gmail.com', 'email')}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#7B61FF]/20 hover:bg-[#7B61FF]/30 text-white font-medium text-xs font-mono transition-all border border-[#7B61FF]/30 active:scale-95 cursor-pointer"
          >
            {copiedText === 'email' ? <Check size={14} className="text-[#00FFB2]" /> : <Copy size={14} />}
            {copiedText === 'email' ? 'Email Copied!' : 'Copy Email'}
          </button>
        </div>
      </div>

      {/* Printable Sheet Wrapper */}
      <div 
        id="printable-resume-sheet" 
        className="print-content bg-transparent text-white transition-all duration-300 print:text-black print:bg-white print:p-0"
      >
        
        {/* CV Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5 mb-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold font-display tracking-tight text-white header-name">
              SAHAJPAL SINGH
            </h1>
            <p className="text-[#00E5FF] font-mono text-sm uppercase mt-1.5 tracking-wider font-semibold header-tagline">
              Cloud Engineer | AWS Certified SysOps Administrator | DevOps Engineer
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 text-xs font-mono text-gray-300 contact-details-container">
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-[#7B61FF] contact-icon" />
              <span>Uttarakhand, India</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => copyToClipboard('sahajpal1905@gmail.com', 'email')}>
              <span className="text-[#00FFB2] contact-icon">✉</span>
              <span className="hover:underline">sahajpal1905@gmail.com</span>
              {copiedText === 'email' && <span className="text-[9px] text-[#00FFB2]">copied</span>}
            </div>
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => copyToClipboard('+91 8941998996', 'phone')}>
              <span className="text-[#00E5FF] contact-icon">☎</span>
              <span className="hover:underline">+91 8941998996</span>
              {copiedText === 'phone' && <span className="text-[9px] text-[#00E5FF]">copied</span>}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 contact-icon">🔗</span>
              <a href="https://linkedin.com/in/sahajshj" target="_blank" rel="noreferrer" className="hover:underline">linkedin.com/in/sahajshj</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-gray-400 contact-icon">🐙</span>
              <a href="https://github.com/Sahajshj" target="_blank" rel="noreferrer" className="hover:underline">github.com/Sahajshj</a>
            </div>
          </div>
        </div>

        {/* Executive Summary */}
        <div className="mb-6">
          <h2 className="section-title text-xs uppercase font-mono tracking-widest text-[#00E5FF] border-b border-white/10 pb-1 mb-2 font-bold flex items-center gap-2">
            <span>[01]</span> EXECUTIVE SUMMARY
          </h2>
          <p className="text-sm font-sans leading-relaxed text-gray-300 body-text">
            AWS Certified SysOps Administrator and Cloud Engineer with 1+ year of experience designing, automating, and managing AWS infrastructure using Terraform, Docker, Kubernetes, and CI/CD pipelines. Skilled in Infrastructure as Code (IaC), AWS EKS, Helm chart deployments, Linux administration, cloud monitoring with Prometheus and Grafana, and deployment automation. Experienced in building scalable cloud-native solutions while improving reliability, security, and operational efficiency.
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-6">
          <h2 className="section-title text-xs uppercase font-mono tracking-widest text-[#7B61FF] border-b border-white/10 pb-1 mb-3.5 font-bold flex items-center gap-2">
            <span>[02]</span> PROFESSIONAL EXPERIENCE
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 mb-1">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-white company-name text-base">STGi (The Summit Group)</span>
                  <span className="text-xs text-gray-400 location-text">| Panchkula, India</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-gray-400 date-text">
                  <Calendar size={11} />
                  <span>May 2025 – May 2026</span>
                </div>
              </div>
              <div className="text-sm text-[#00E5FF] font-mono font-semibold mb-2 flex items-center gap-2 role-text">
                <Building2 size={13} />
                <span>Developer & Cloud Engineer</span>
              </div>
              <p className="text-xs italic text-gray-400 mb-2 company-description">
                Provider of cutting-edge technology and professional services to federal customers across health, IT, and education sectors.
              </p>
              <ul className="space-y-1.5 text-xs text-gray-300 list-disc list-inside bullet-points">
                <li>Engineered and maintained <strong className="text-white strong-text">10+ Terraform IaC modules</strong> for AWS environments, reducing manual provisioning time by 40%.</li>
                <li>Updated <strong className="text-white strong-text">5+ Terraform registry modules</strong>, IAM policies, and security rules, improving compliance coverage across environments.</li>
                <li>Led Terraform v6 migration and <strong className="text-white strong-text">AWS EKS (Kubernetes)</strong> configuration updates, reducing deployment failures by 30% and improving cluster stability.</li>
                <li>Reviewed and merged <strong className="text-white strong-text">20+ infrastructure Pull Requests</strong> through GitHub Actions CI/CD pipelines, maintaining a 0-downtime deployment record.</li>
                <li>Configured <strong className="text-white strong-text">Datadog monitoring and alerting</strong> dashboards, improving incident detection and mean time to resolution (MTTR).</li>
                <li>Built and maintained <strong className="text-white strong-text">3+ frontend features</strong> for a multi-tenant Loan Origination System using Vue.js, serving 500+ users.</li>
                <li>Collaborated with backend engineers and QA teams to resolve <strong className="text-white strong-text">15+ production issues</strong>, improving workflow usability by 25%.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <h2 className="section-title text-xs uppercase font-mono tracking-widest text-[#00FFB2] border-b border-white/10 pb-1 mb-3 font-bold flex items-center gap-2">
            <span>[03]</span> EDUCATIONAL TIMELINE
          </h2>
          <div className="space-y-2.5 text-xs timeline-container">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center">
              <div>
                <h4 className="font-semibold text-white institution-name text-sm">Chitkara University</h4>
                <p className="text-[11px] text-gray-400 font-mono degree-text">B.Tech in Computer Science & Engineering | 2022 – 2026</p>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-[#7B61FF]/15 text-[#7B61FF] scorecard-badge mt-1 sm:mt-0">
                CGPA: 8.44
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 border-t border-white/5 divider-line">
              <div>
                <h4 className="font-semibold text-white institution-name text-sm">CBSE Class XII (High School)</h4>
                <p className="text-[11px] text-gray-400 font-mono degree-text">Science Streams, Schooling | 2020 – 2021</p>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-gray-300 scorecard-badge mt-1 sm:mt-0">
                Score: 93.8%
              </span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-2 border-t border-white/5 divider-line">
              <div>
                <h4 className="font-semibold text-white institution-name text-sm">CBSE Class X</h4>
                <p className="text-[11px] text-gray-400 font-mono degree-text">Schooling | 2018 – 2019</p>
              </div>
              <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded bg-white/5 text-gray-300 scorecard-badge mt-1 sm:mt-0">
                Score: 90.4%
              </span>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-6">
          <h2 className="section-title text-xs uppercase font-mono tracking-widest text-[#00E5FF] border-b border-white/10 pb-1 mb-3 font-bold flex items-center gap-2">
            <span>[04]</span> PROFESSIONAL CERTIFICATIONS
          </h2>
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-white/5 border border-white/10 card-box">
            <div className="flex items-center gap-3">
              <div className="p-1.5 rounded bg-[#00E5FF]/10 text-[#00E5FF] card-icon">
                <Award size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-xs text-white card-title">AWS Certified SysOps Administrator – Associate</h3>
                <p className="text-[10px] text-gray-400 card-subtitle">Amazon Web Services | 2024 | No Expiry</p>
              </div>
            </div>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[#00FFB2]/10 text-[#00FFB2] card-badge">
              Active Validation
            </span>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-6">
          <h2 className="section-title text-xs uppercase font-mono tracking-widest text-[#7B61FF] border-b border-white/10 pb-1 mb-3 font-bold flex items-center gap-2">
            <span>[05]</span> TECHNICAL SKILLS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 text-xs skills-matrix">
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-gray-400 block uppercase font-bold skill-label">Cloud & Infrastructure</span>
              <p className="text-gray-200 skill-values">AWS (EC2, S3, IAM, VPC, CloudWatch, EKS), Terraform, Infrastructure as Code (IaC), Kubernetes, Helm, Docker</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-gray-400 block uppercase font-bold skill-label">CI/CD & Automation</span>
              <p className="text-gray-200 skill-values">GitHub Actions, CI/CD Pipelines, Bash Scripting, YAML, Git</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-gray-400 block uppercase font-bold skill-label">Monitoring & Observability</span>
              <p className="text-gray-200 skill-values">Datadog, Prometheus, Grafana, CloudWatch</p>
            </div>
            <div className="space-y-1">
              <span className="font-mono text-[10px] text-gray-400 block uppercase font-bold skill-label">Backend, Frontend & OS</span>
              <p className="text-gray-200 skill-values">Node.js, MongoDB, Vue.js, JavaScript, C#, RESTful APIs, JWT Authentication, Linux (Ubuntu, Amazon Linux), Windows Server</p>
            </div>
          </div>
        </div>

        {/* Awards & Achievements */}
        <div className="mb-6">
          <h2 className="section-title text-xs uppercase font-mono tracking-widest text-[#00FFB2] border-b border-white/10 pb-1 mb-3 font-bold flex items-center gap-2">
            <span>[06]</span> AWARDS & ACHIEVEMENTS
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 text-xs awards-container">
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 card-box">
              <h4 className="font-bold text-white mb-1">RoboSprint — 1st Place</h4>
              <p className="text-[11px] text-gray-400 leading-normal">Ranked <strong className="text-white">1st out of 50+ teams</strong> – built a robotics-based environmental cleaning solution.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 card-box">
              <h4 className="font-bold text-white mb-1">Kalp Build Hackathon Winner</h4>
              <p className="text-[11px] text-gray-400 leading-normal">Won among <strong className="text-white">100+ participants</strong>, building a blockchain voting system & securing INR 10,000.</p>
            </div>
            <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 card-box">
              <h4 className="font-bold text-white mb-1">Blue Marble Study Program</h4>
              <p className="text-[11px] text-gray-400 leading-normal">Selected among <strong className="text-white">28 students globally</strong> for the Blue Marble Study Program at Deakin University.</p>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-2">
          <h2 className="section-title text-xs uppercase font-mono tracking-widest text-[#00E5FF] border-b border-white/10 pb-1 mb-3.5 font-bold flex items-center gap-2">
            <span>[07]</span> PROJECTS
          </h2>
          <div className="space-y-4 text-xs projects-container">
            <div>
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white project-title text-[13px]">Uplift – Mental Health Platform</span>
                <span className="text-[10px] font-mono text-gray-400 font-bold project-year">2024</span>
              </div>
              <p className="text-[11px] text-gray-300 italic mb-1.5 project-description">
                Mental health platform providing doctor consultation and community engagement features.
              </p>
              <ul className="space-y-1 bullet-points list-disc list-inside pl-1 text-[11px] text-gray-400">
                <li>Expanded backend services with <strong className="text-white text-[11px] strong-text">8+ RESTful APIs</strong> using Node.js and MongoDB, supporting scalable data management.</li>
                <li>Implemented <strong className="text-white text-[11px] strong-text">JWT-based authentication</strong>, reducing unauthorized access attempts by 100% in testing.</li>
              </ul>
            </div>

            <div className="pt-2 border-t border-white/5 divider-line">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white project-title text-[13px]">Social Media Application</span>
                <span className="text-[10px] font-mono text-gray-400 font-bold project-year">2024</span>
              </div>
              <p className="text-[11px] text-gray-300 italic mb-1.5 project-description">
                Instagram-inspired social media application with full post and interaction system.
              </p>
              <ul className="space-y-1 bullet-points list-disc list-inside pl-1 text-[11px] text-gray-400">
                <li>Enhanced <strong className="text-white text-[11px] strong-text font-bold">5+ backend microservice modules</strong> including posts, likes, comments, and user management supporting 200+ concurrent users.</li>
              </ul>
            </div>

            <div className="pt-2 border-t border-white/5 divider-line">
              <div className="flex justify-between items-center mb-1">
                <span className="font-semibold text-white project-title text-[13px]">River Cleaning Robot</span>
                <span className="text-[10px] font-mono text-gray-400 font-bold project-year">2023 – 2024</span>
              </div>
              <p className="text-[11px] text-gray-300 italic mb-1.5 project-description">
                Automated robot solution addressing water pollution using embedded hardware.
              </p>
              <ul className="space-y-1 bullet-points list-disc list-inside pl-1 text-[11px] text-gray-400">
                <li>Improved autonomous debris detection to <strong className="text-white text-[11px] strong-text font-bold">85% accuracy</strong> using Arduino Uno and Raspberry Pi for environmental sustainability.</li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      {/* Embedded High Fidelity Styles Supporting Perfect 1-Page PDF Compilation */}
      <style>{`
        /* Dynamic style rules applied exclusively during html2canvas generation */
        .pdf-capture-mode {
          background-color: #ffffff !important;
          color: #000000 !important;
          width: 800px !important;
          max-width: 800px !important;
          padding: 35px 40px !important;
          box-shadow: none !important;
          border: none !important;
          border-radius: 0 !important;
          font-family: system-ui, -apple-system, sans-serif !important;
        }
        
        .pdf-capture-mode .header-name {
          color: #000000 !important;
          font-weight: 800 !important;
          font-size: 28px !important;
          letter-spacing: -0.02em !important;
        }

        .pdf-capture-mode .header-tagline {
          color: #2563eb !important; /* Royal/Navy Indigo contrast */
          font-size: 11px !important;
          font-weight: 700 !important;
          letter-spacing: 0.05em !important;
        }

        .pdf-capture-mode .contact-details-container {
          color: #374151 !important; /* dark slate */
          font-size: 10px !important;
          text-align: right !important;
          line-height: 1.4 !important;
        }

        .pdf-capture-mode .contact-icon {
          color: #1e3a8a !important; /* Dark blue */
        }

        .pdf-capture-mode .section-title {
          border-bottom: 1.5px solid #1e293b !important; /* professional dividing border */
          color: #1e3a8a !important; /* dark navy */
          font-weight: 800 !important;
          font-size: 10px !important;
          padding-bottom: 2px !important;
          margin-bottom: 8px !important;
        }

        .pdf-capture-mode .section-title span {
          display: none !important; /* Hide [01] markers for professional look */
        }

        .pdf-capture-mode .body-text {
          color: #1f2937 !important; /* gray-800 */
          font-size: 11px !important;
          line-height: 1.5 !important;
        }

        .pdf-capture-mode .company-name,
        .pdf-capture-mode .institution-name,
        .pdf-capture-mode .project-title {
          color: #0c1a30 !important; /* deep navy */
          font-weight: 700 !important;
        }

        .pdf-capture-mode .role-text {
          color: #1e3a8a !important;
          font-weight: 700 !important;
          font-size: 11px !important;
        }

        .pdf-capture-mode .location-text,
        .pdf-capture-mode .date-text,
        .pdf-capture-mode .degree-text,
        .pdf-capture-mode .company-description,
        .pdf-capture-mode .project-year,
        .pdf-capture-mode .project-description {
          color: #4b5563 !important; /* slate grey */
          font-size: 10.5px !important;
        }

        .pdf-capture-mode .strong-text {
          color: #000000 !important;
          font-weight: 700 !important;
        }

        .pdf-capture-mode .bullet-points li {
          color: #1f2937 !important; /* dark gray text */
          font-size: 11px !important;
          line-height: 1.45 !important;
          margin-top: 2px !important;
        }

        .pdf-capture-mode .card-box {
          background-color: #f8fafc !important; /* slate bg */
          border: 1px solid #e2e8f0 !important;
          color: #1f2937 !important;
        }

        .pdf-capture-mode .card-icon {
          background-color: #eff6ff !important;
          color: #1e3a8a !important;
        }

        .pdf-capture-mode .card-title {
          color: #111827 !important;
          font-weight: 700 !important;
        }

        .pdf-capture-mode .card-subtitle {
          color: #4b5563 !important;
        }

        .pdf-capture-mode .card-badge {
          background-color: #dbeafe !important;
          color: #1e40af !important;
        }

        .pdf-capture-mode .scorecard-badge {
          background-color: #eff6ff !important;
          color: #1e40af !important;
        }

        .pdf-capture-mode .skill-label {
          color: #111827 !important;
          font-weight: 700 !important;
          font-size: 9.5px !important;
        }

        .pdf-capture-mode .skill-values {
          color: #374151 !important;
          font-size: 10.5px !important;
        }

        .pdf-capture-mode .divider-line {
          border-top-color: #e2e8f0 !important;
        }

        @media print {
          body {
            background: white !important;
            color: black !important;
          }
          .print-content {
            color: black !important;
          }
        }
      `}</style>
    </div>
  );
}
