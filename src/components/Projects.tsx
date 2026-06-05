/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MouseEvent, useState } from 'react';
import { ExternalLink, Github, Layers, ArrowUpRight, Compass, Shield, Cpu, Sparkles } from 'lucide-react';
import { Project } from '../types';

const PROJECTS: Project[] = [
  {
    id: 'uplift',
    title: 'Uplift Mental Health Platform',
    category: 'software',
    time: '2024',
    description: 'Mental health hub delivering streamlined doctor consultation portals and robust community engagement forums.',
    role: 'Full Stack & APIs Architect',
    bullets: [
      'Expanded core backend microservices by developing 8+ high-availability RESTful APIs in Node.js & MongoDB.',
      'Designed and engineered custom JWT-based authentication token logic, achieving valid secure session validation.',
      'Developed community feed modules to handle streamlined data retrieval and persistent feed caching.'
    ],
    tech: ['Node.js', 'MongoDB', 'Express.js', 'JWT Auth', 'RESTful APIs', 'Jest'],
    metrics: [
      { label: 'APIs Built', value: '8+ Routes' },
      { label: 'Security Layer', value: 'JWT Token' },
      { label: 'Data Storage', value: 'MongoDB' }
    ],
    githubUrl: 'https://github.com/Sahajshj'
  },
  {
    id: 'social',
    title: 'Social Media Application',
    category: 'cloud',
    time: '2024',
    description: 'Instagram-inspired microservice social media structure built to handle multi-user posts, active comments and live interaction feeds.',
    role: 'Backend Services Engineer',
    bullets: [
      'Refined and optimized 5+ backend system modules: Likes, Comments, Interactive Posts, and User Groups managers.',
      'Incorporated Docker Compose deployment configurations to support local container orchestration.',
      'Maintained MongoDB schemas to cleanly support parallel user posts and feed activities.'
    ],
    tech: ['Node.js', 'MongoDB', 'Docker Compose', 'Vue.js', 'Express', 'JWT'],
    metrics: [
      { label: 'Core Modules', value: '5+ Refined' },
      { label: 'Container', value: 'Dockerized' },
      { label: 'Schema', value: 'Concurrent' }
    ],
    githubUrl: 'https://github.com/Sahajshj'
  },
  {
    id: 'robot',
    title: 'Autonomous River Cleaning Robot',
    category: 'iot-hardware',
    time: '2023 – 2024',
    description: 'Autonomous environmental engineering robot leveraging embedded system controllers to discover and collect floating river debris.',
    role: 'IoT Hardware Integrator',
    bullets: [
      'Programmed core autonomous debris detection algorithms on an Arduino Uno and Raspberry Pi controller cluster.',
      'Boosted floating debris validation and capture accuracy to 85% via optimized image sensing triggers.',
      'Engineered localized backup hardware battery failover schemas to guarantee smooth robotic runtime operations.'
    ],
    tech: ['Arduino Uno', 'Raspberry Pi', 'Python', 'Image Processing', 'Embedded C', 'Hardware Integration'],
    metrics: [
      { label: 'Detection Accuracy', value: '85%' },
      { label: 'Controller', value: 'Arduino/Pi' },
      { label: 'Firmware', value: 'Python/C' }
    ],
    githubUrl: 'https://github.com/Sahajshj'
  }
];

export default function Projects() {
  const [hoveredCardId, setHoveredCardId] = useState<string | null>(null);
  const [tiltStyle, setTiltStyle] = useState<{ [key: string]: string }>({});

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, id: string) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    
    // Limits degrees of tilt rotation
    const tiltX = (y / (box.height / 2)) * -6; // Rotation on horizontal line
    const tiltY = (x / (box.width / 2)) * 6; // Rotation on vertical line

    setTiltStyle({
      [id]: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.01, 1.01, 1.01)`
    });
  };

  const handleMouseLeave = () => {
    setTiltStyle({});
    setHoveredCardId(null);
  };

  return (
    <div id="projects-showroom" className="space-y-12">
      
      {/* Header Info */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <span className="text-xs font-mono uppercase text-[#00FFB2] font-semibold tracking-widest tracking-wider block mb-1">
            [EXPERIMENTS & APPLICATIONS]
          </span>
          <h3 className="text-2xl font-bold font-display text-white">Featured Projects</h3>
        </div>
        <p className="text-xs text-gray-400 font-mono max-w-md">
          A collection of software, cloud infrastructure, and hardware solutions demonstrating full-stack engineering expertise.
        </p>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project) => {
          const isHovered = hoveredCardId === project.id;
          const currentTilt = tiltStyle[project.id] || 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';

          return (
            <div
              key={project.id}
              className="group relative flex flex-col h-full rounded-2xl transition-all duration-300"
              onMouseMove={(e) => {
                setHoveredCardId(project.id);
                handleMouseMove(e, project.id);
              }}
              onMouseLeave={handleMouseLeave}
              style={{ transform: currentTilt, transition: isHovered ? 'none' : 'transform 0.5s ease' }}
            >
              
              {/* Main Card Container */}
              <div className="flex flex-col h-full bg-[#111827]/60 border border-white/5 rounded-2xl p-6 glass-premium flex-1 justify-between relative overflow-hidden">
                
                {/* Secondary Background Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#7B61FF]/10 to-transparent blur-xl pointer-events-none" />

                <div>
                  
                  {/* Category + Time Label */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-gray-300">
                      {project.category === 'cloud' && '🌐 Cloud & Backend'}
                      {project.category === 'software' && '💻 Full Stack Web'}
                      {project.category === 'iot-hardware' && '🤖 IoT & Hardware'}
                    </span>
                    <span className="text-[10px] font-mono text-gray-500">{project.time}</span>
                  </div>

                  {/* Project Title */}
                  <h4 className="text-xl font-bold font-display text-white group-hover:text-[#00E5FF] transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight size={16} className="text-gray-500 group-hover:text-[#00E5FF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h4>

                  {/* Assigned Role Label */}
                  <p className="text-[10px] text-[#7B61FF] font-mono mt-1 uppercase font-bold tracking-wider">
                    ROLE: {project.role}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-gray-400 mt-3 font-sans leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlight Bullets */}
                  <ul className="mt-4 space-y-2 text-xs text-gray-300 font-sans list-disc list-inside">
                    {project.bullets.map((bullet, idx) => (
                      <li key={idx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Bottom Stats & Commands */}
                <div className="mt-6 pt-5 border-t border-white/10 space-y-4">
                  
                  {/* Performance Indicators */}
                  <div className="grid grid-cols-3 gap-2 bg-gray-950/40 p-2.5 rounded-lg border border-white/5">
                    {project.metrics?.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <span className="text-[10.5px] font-bold text-[#00FFB2] font-mono block">
                          {metric.value}
                        </span>
                        <span className="text-[8px] uppercase tracking-widest text-gray-500 font-mono block mt-0.5">
                          {metric.label.split(' ')[0]}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack elements */}
                  <div className="flex flex-wrap gap-1">
                    {project.tech.map((t) => (
                      <span key={t} className="text-[9px] font-mono bg-[#0A0F1E] border border-white/5 py-0.5 px-2 rounded text-gray-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Interactive links */}
                  <div className="flex items-center justify-between gap-3 pt-1">
                    <span className="text-[10px] font-mono text-gray-500 select-none">Verifiable Case Study</span>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1 px-2.5 rounded bg-gray-800 hover:bg-gray-700 text-white font-mono text-[10px] transition-all flex items-center gap-1 active:scale-95"
                          title="View Codebase on GitHub"
                        >
                          <Github size={11} />
                          Source Code
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
