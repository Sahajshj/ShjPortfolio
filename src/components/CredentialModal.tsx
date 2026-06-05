/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { X, Award, Check, Copy, ExternalLink, ShieldCheck } from 'lucide-react';

interface CredentialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CredentialModal({ isOpen, onClose }: CredentialModalProps) {
  const [copiedText, setCopiedText] = useState(false);

  if (!isOpen) return null;

  const copyCredsNum = () => {
    navigator.clipboard.writeText('6e5df301038d4587ac15e55dfef682bf');
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/80 backdrop-blur-md animate-fade-in">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-md bg-[#0d1326] border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-slide-in">
        
        {/* Top bar decorated */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff9900] via-[#00E5FF] to-[#00FFB2] z-50" />

        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0A0F1E] shrink-0">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-[#00FFB2]" />
            <h3 className="text-xs font-mono font-bold tracking-wider text-gray-300">
              credential_verification.secure
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1 px-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            title="Close"
          >
            <X size={14} />
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 space-y-6">
          
          {/* Certificate Header */}
          <div className="flex justify-between items-start gap-4">
            <div>
              <span className="text-[#ff9900] uppercase text-[9px] font-mono tracking-widest block font-bold mb-1">
                Amazon Web Services
              </span>
              <h4 className="text-lg font-extrabold font-display text-white tracking-tight leading-snug">
                AWS Certified <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
                  SysOps Administrator
                </span>
              </h4>
              <p className="text-[10px] font-mono text-[#00E5FF] mt-1 font-semibold uppercase">Associate Level</p>
            </div>
            
            {/* Digital Badge Stamp */}
            <div className="shrink-0 flex flex-col items-center select-none">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#ff9900] to-yellow-500 flex items-center justify-center p-0.5 shadow-lg shadow-[#ff9900]/25">
                <div className="w-full h-full bg-[#0A0F1E] rounded-full flex flex-col items-center justify-center">
                  <span className="text-[6px] font-mono font-bold text-gray-400 leading-none">aws</span>
                  <Award size={14} className="text-[#ff9900] mt-0.5" />
                  <span className="text-[6px] font-mono font-bold text-gray-500 leading-none uppercase mt-0.5">certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Validation Details */}
          <div className="space-y-4 text-xs font-sans">
            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-500 block mb-0.5">Certified Name</span>
                <span className="font-bold text-gray-200">Sahajpal Singh</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-500 block mb-0.5 font-bold text-[#00FFB2]">Status</span>
                <span className="text-[10px] font-mono font-bold text-[#00FFB2] uppercase border border-[#00FFB2]/20 rounded px-1.5 py-0.5 bg-[#00FFB2]/5 inline-block">ACTIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-4">
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-500 block mb-0.5">Issue Date</span>
                <span className="font-mono text-gray-300">Feb 16, 2026</span>
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase text-gray-500 block mb-0.5">Expiration Date</span>
                <span className="font-mono text-gray-300">Feb 16, 2029</span>
              </div>
            </div>
          </div>

          {/* Verification Bar block */}
          <div className="p-4 rounded-xl bg-black/40 border border-white/5 space-y-3">
            <div className="flex items-center justify-between gap-2">
              <span className="text-[9px] font-mono text-gray-500 uppercase font-bold tracking-wider block">ID Verification Code</span>
              <span className="text-[8.5px] font-mono text-gray-400">Click to copy</span>
            </div>
            
            <div 
              onClick={copyCredsNum}
              className="flex items-center justify-between gap-1 border border-white/15 hover:border-white/20 hover:bg-white/5 px-2.5 py-2 rounded-lg bg-black/20 cursor-pointer transition-all select-all active:scale-95 group/btn"
            >
              <span className="text-white font-mono font-medium text-[11px] truncate select-all">{copiedText ? 'Copied code successfully!' : '6e5df301038d4587ac15e55dfef682bf'}</span>
              <span className="shrink-0 text-gray-400 group-hover/btn:text-white transition-colors ml-1">
                {copiedText ? <Check size={12} className="text-[#00FFB2]" /> : <Copy size={12} />}
              </span>
            </div>
          </div>

        </div>

        {/* Modal Footer Controls */}
        <div className="px-5 py-3 border-t border-white/10 bg-[#0A0F1E] flex items-center justify-between gap-3 shrink-0">
          <button
            onClick={onClose}
            className="px-3 py-1.5 border border-white/5 hover:bg-white/5 text-gray-400 hover:text-white font-mono text-[10px] rounded-lg transition-colors cursor-pointer"
          >
            Cancel
          </button>

          <a
            href="https://aws.amazon.com/verification"
            target="_blank"
            rel="noreferrer"
            className="px-3 py-1.5 bg-[#ff9900]/15 hover:bg-[#ff9900]/25 text-[#ff9900] border border-[#ff9900]/30 hover:border-[#ff9900]/50 rounded-lg font-mono font-bold flex items-center justify-center gap-1 transition-all text-[10px] cursor-pointer"
          >
            <span>Proceed to Verify</span>
            <ExternalLink size={10} />
          </a>
        </div>

      </div>

    </div>
  );
}
