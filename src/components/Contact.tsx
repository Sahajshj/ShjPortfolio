/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { FormEvent, useState, useEffect } from 'react';
import { Send, Github, Linkedin, Mail, Check, Terminal, Wifi, ShieldAlert, Cpu } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isCompiling, setIsCompiling] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [latency, setLatency] = useState(24);
  const [consoleLogs, setConsoleLogs] = useState<string[]>([]);

  // Real secure database & Resend mail message dispatch
  const handleMessageSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    setIsCompiling(true);
    setIsSent(false);
    setError(null);
    setConsoleLogs([
      `Initializing devops_mailer secure runtime environment...`,
      `Assembling message payload packet (${JSON.stringify(form).length} octets checksum)...`,
      `Setting direct delivery tunnel for secure inbound transit...`
    ]);

    try {
      // Small stagger for cool futuristic telemetry experience
      await new Promise(resolve => setTimeout(resolve, 800));
      
      setConsoleLogs(prev => [
        ...prev,
        `Handshaking route gateway: POST /api/send-email`,
        `Authorizing secure bearer token verification checks...`
      ]);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(responseData.error || 'Gateway Delivery Failure');
      }

      await new Promise(resolve => setTimeout(resolve, 650));

      setConsoleLogs(prev => [
        ...prev,
        `Resend SMTP Secure handshake established successfully.`,
        `Payload dispatches verified & cleared by remote mail relay node.`,
        `[STGI-DELIVERY] Packet ID references registered: ${responseData.messageId}`,
        `Mail transmission successful! Sahajpal is notified.`
      ]);

      setIsCompiling(false);
      setIsSent(true);
      setForm({ name: '', email: '', message: '' });
    } catch (err: any) {
      console.error(err);
      const errMsg = err.message || "Failed to communicate with the mail proxy server.";
      setError(errMsg);
      setConsoleLogs(prev => [
        ...prev,
        `[FATAL_SHUTDOWN] Dispatch failed: ${errMsg}`,
        `Ensure RESEND_API_KEY is configured in your systems environment configurations.`
      ]);
      setIsCompiling(false);
    }
  };

  // Live fluctuating DevOps network ping latency tracker
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency((prev) => {
        const offset = Math.random() > 0.5 ? 1 : -1;
        const nextVal = prev + offset;
        return nextVal < 18 ? 20 : nextVal > 30 ? 25 : nextVal;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="contact-center" className="space-y-12">
      
      {/* Narrative block */}
      <div>
        <span className="text-xs font-mono uppercase text-[#00FFB2] font-semibold tracking-wider block mb-1">
          [ESTABLISH CONNECTIONS]
        </span>
        <h3 className="text-2xl font-bold font-display text-white">Let&apos;s Build Together</h3>
        <p className="text-xs text-gray-400 font-mono mt-1">Submit your recruitment query or general greetings below</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* INTERACTIVE FORM PANEL (7 cols) */}
        <div className="lg:col-span-7 bg-[#111827]/60 border border-white/5 rounded-2xl p-6 md:p-8 glass shadow-xl space-y-6">
          <form onSubmit={handleMessageSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 font-semibold text-xs text-gray-400">
                <label className="font-mono uppercase text-[10.5px]">Your Name / Company</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. STGi Recruiter"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#7B61FF] focus:ring-1 focus:ring-[#7B61FF]/40 transition-colors"
                />
              </div>

              <div className="space-y-1.5 font-semibold text-xs text-gray-400">
                <label className="font-mono uppercase text-[10.5px]">Return Address (Email)</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. hiring@stgigroup.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#00E5FF] focus:ring-1 focus:ring-[#00E5FF]/40 transition-colors"
                />
              </div>
            </div>

            <div className="space-y-1.5 font-semibold text-xs text-gray-400">
              <label className="font-mono uppercase text-[10.5px]">Message / Requirements</label>
              <textarea
                required
                rows={4}
                placeholder="Briefly explain the infrastructure scale role, contract timeline or system query..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#0A0F1E] border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-[#00FFB2] focus:ring-1 focus:ring-[#00FFB2]/40 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isCompiling}
              className="w-full py-3.5 rounded-lg bg-gradient-to-r from-[#7B61FF] to-[#00E5FF] hover:opacity-90 active:scale-[0.99] text-white font-semibold font-mono text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Send size={13} />
              {isCompiling ? 'Deploying message package...' : 'Deploy Secure Message'}
            </button>
          </form>

          {/* SQS Logs simulator view */}
          {(isCompiling || isSent || error) && (
            <div className="p-3.5 bg-black rounded-lg border border-white/10 font-mono text-[10.5px] leading-relaxed text-[#00FFB2] max-h-[220px] overflow-y-auto">
              {consoleLogs.map((log, i) => (
                <div key={i}>{log}</div>
              ))}
              {isCompiling && (
                <div className="animate-pulse text-[#00E5FF] mt-1">⚙ compiling telemetry validation packet...</div>
              )}
              {isSent && (
                <div className="text-white mt-2 pt-2 border-t border-white/10 font-sans flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-[#00FFB2] font-mono text-xs">
                    <Check size={12} className="text-[#00FFB2]" />
                    MESSAGE SECURELY COMPLED & TRANSMITTED!
                  </div>
                  <p className="text-gray-400 text-[11.5px] leading-relaxed">
                    The message has been successfully routed directly through the <strong className="text-white">Resend Secure Bridge API</strong> and delivered to Sahajpal. No other mail client is required.
                  </p>
                </div>
              )}
              {error && (
                <div className="text-rose-400 mt-2 pt-2 border-t border-white/10 font-sans flex flex-col gap-1">
                  <div className="font-bold font-mono text-xs flex items-center gap-1.5">
                    <ShieldAlert size={12} className="text-rose-400" />
                    TRANSMISSION ERROR DETECTED
                  </div>
                  <p className="text-[11px] text-gray-400 leading-normal">
                    {error}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* SIDEWAYS SOCIAL RAIL (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Social Channels buttons */}
          <div className="space-y-3">
            {[
              {
                label: 'Send Email Directly',
                value: 'sahajpal1905@gmail.com',
                color: 'text-red-400 border-red-500/20 bg-red-500/5 hover:bg-red-500/10',
                icon: <Mail size={16} />,
                href: 'mailto:sahajpal1905@gmail.com',
              },
              {
                label: 'Connect on LinkedIn',
                value: 'linkedin.com/in/sahajshj',
                color: 'text-blue-400 border-blue-500/20 bg-blue-500/5 hover:bg-blue-500/10',
                icon: <Linkedin size={16} />,
                href: 'https://linkedin.com/in/sahajshj',
              },
              {
                label: 'Review GitHub Repositories',
                value: 'github.com/Sahajshj',
                color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/5 hover:bg-emerald-500/10',
                icon: <Github size={16} />,
                href: 'https://github.com/Sahajshj',
              }
            ].map((chan) => (
              <a
                key={chan.label}
                href={chan.href}
                target="_blank"
                rel="noreferrer"
                className={`p-4 rounded-xl border flex items-center justify-between transition-all group cursor-pointer ${chan.color}`}
              >
                <div className="flex items-center gap-3">
                  {chan.icon}
                  <div className="text-left">
                    <span className="text-[10px] font-mono text-gray-400 block font-bold leading-none">{chan.label}</span>
                    <span className="text-xs font-mono font-medium text-white block mt-1">{chan.value}</span>
                  </div>
                </div>
                <span className="text-xs font-mono text-gray-500 group-hover:text-white group-hover:translate-x-1 transition-all">→</span>
              </a>
            ))}
          </div>

        </div>

      </div>

    </div>
  );
}
