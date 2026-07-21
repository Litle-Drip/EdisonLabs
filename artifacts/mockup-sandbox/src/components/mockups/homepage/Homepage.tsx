import React, { useState, useEffect } from 'react';
import { ExternalLink, Zap, BrainCircuit, ChevronRight, Menu, X, ArrowRight, Activity, Shield, Code, Cpu, Flag, Radio, Lightbulb } from 'lucide-react';

export default function Homepage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0c0a06] text-[#f0e6cc] font-sans selection:bg-[#c9a84c]/30 selection:text-[#f0e6cc] overflow-hidden relative font-[500]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700;900&display=swap');
        html { scroll-behavior: smooth; }
        .font-serif { font-family: 'Playfair Display', Georgia, serif; }
        .glow-text { text-shadow: 0 0 20px rgba(201, 168, 76, 0.6); }
        .glow-box { box-shadow: 0 0 20px rgba(201, 168, 76, 0.10); }
        .glow-box:hover { box-shadow: 0 0 30px rgba(201, 168, 76, 0.25); }
        .radial-glow {
          background: radial-gradient(circle at 50% 0%, rgba(201, 168, 76, 0.12), transparent 60%);
        }
        .dot-pattern {
          background-image: radial-gradient(rgba(201, 168, 76, 0.07) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* Global Background Elements */}
      <div className="absolute top-0 left-0 w-full h-[800px] radial-glow pointer-events-none" />
      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-50" />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0c0a06]/85 backdrop-blur-md border-b border-[#c9a84c]/15 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => scrollTo('hero')}>
            <img src="/__mockup/images/logo.png" alt="Edison Labs" className="w-8 h-8 object-contain" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
            <span className="text-xl font-bold tracking-tight text-[#f0e6cc] group-hover:text-[#c9a84c] transition-colors font-serif">Edison Labs</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollTo('products')} className="text-[#9a8a6a] hover:text-[#c9a84c] transition-colors text-sm font-semibold tracking-[0.15em] uppercase">Products</button>
            <button onClick={() => scrollTo('about')} className="text-[#9a8a6a] hover:text-[#c9a84c] transition-colors text-sm font-semibold tracking-[0.15em] uppercase">About</button>
            <button onClick={() => scrollTo('contact')} className="text-[#9a8a6a] hover:text-[#c9a84c] transition-colors text-sm font-semibold tracking-[0.15em] uppercase">Contact</button>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-[#9a8a6a] hover:text-[#c9a84c]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#0c0a06]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <button onClick={() => scrollTo('products')} className="text-2xl font-semibold text-[#f0e6cc] hover:text-[#c9a84c] transition-colors font-serif">Products</button>
          <button onClick={() => scrollTo('about')} className="text-2xl font-semibold text-[#f0e6cc] hover:text-[#c9a84c] transition-colors font-serif">About</button>
          <button onClick={() => scrollTo('contact')} className="text-2xl font-semibold text-[#f0e6cc] hover:text-[#c9a84c] transition-colors font-serif">Contact</button>
        </div>
      )}

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c9a84c]/40 bg-[#c9a84c]/10 text-[#c9a84c] text-sm font-medium mb-4 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#c9a84c] animate-pulse" />
              Chicago · Est. 2024 · Illuminating the Future
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24, opacity: 0.4 }}>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, transparent, #c9a84c)' }} />
              <span style={{ color: '#c9a84c', fontSize: 10 }}>◆</span>
              <div style={{ flex: 1, height: 1, background: 'linear-gradient(90deg, #c9a84c, transparent)' }} />
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] font-serif">
              <span className="text-[#f0e6cc]">Build.</span><br />
              <span className="text-[#9a8a6a]">Ship.</span><br />
              <span className="text-[#c9a84c] glow-text">Iterate.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-[#9a8a6a] mb-12 max-w-2xl leading-relaxed font-light">
              Edison Labs LLC illuminates what's next — building experimental tools at the frontier of technology, decentralized systems, and human ingenuity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5">
              <button 
                onClick={() => scrollTo('products')}
                className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a84c] hover:bg-[#e8c96a] text-[#0c0a06] font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(201,168,76,0.4)]"
              >
                Our Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => scrollTo('about')}
                className="px-8 py-4 bg-transparent border border-[#9a8a6a]/40 hover:border-[#c9a84c] hover:text-[#c9a84c] text-[#f0e6cc] font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] border border-[#c9a84c]/10 rounded-full blur-[1px] opacity-30 animate-[spin_60s_linear_infinite]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] border border-[#c9a84c]/20 rounded-full blur-[1px] opacity-40 animate-[spin_40s_linear_infinite_reverse]" />
      </section>

      {/* Products Section */}
      <section id="products" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f0e6cc] font-serif">Our Products</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#c9a84c]/40 to-transparent ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* The Juice Card */}
            <div className="group flex flex-col bg-[#13100a] border border-[#c9a84c]/15 hover:border-[#c9a84c]/45 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 glow-box relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-[#c9a84c]/10" />
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]">
                  <Zap size={28} className="drop-shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0a06] border border-green-500/30 text-green-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-[#f0e6cc] font-serif">The Juice</h3>
                <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20">Blockchain · P2P</span>
              </div>
              <p className="text-[#9a8a6a] mb-10 leading-relaxed flex-1 relative z-10">
                A peer-to-peer, on-chain application enabling direct smart contract interactions for decentralized outcomes. Built for experimentation, not custody.
              </p>
              <a href="https://www.thejuiceapp.io/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c9a84c] font-medium hover:text-[#f0e6cc] transition-colors mt-auto relative z-10 w-fit group/link">
                thejuiceapp.io
                <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Predara Card */}
            <div className="group flex flex-col bg-[#13100a] border border-[#c9a84c]/15 hover:border-[#c9a84c]/45 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 glow-box relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-[#c9a84c]/10" />
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]">
                  <BrainCircuit size={28} className="drop-shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0a06] border border-green-500/30 text-green-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-[#f0e6cc] font-serif">Predara</h3>
                <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20">AI · Markets</span>
              </div>
              <p className="text-[#9a8a6a] mb-10 leading-relaxed flex-1 relative z-10">
                An AI-driven analyzer that decodes contract rules from Polymarket, Kalshi, Gemini, and Coinbase — turning complex rules into clarity.
              </p>
              <a href="https://www.predara.org/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c9a84c] font-medium hover:text-[#f0e6cc] transition-colors mt-auto relative z-10 w-fit group/link">
                predara.org
                <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* F1SimHub Card */}
            <div className="group flex flex-col bg-[#13100a] border border-[#c9a84c]/15 hover:border-[#c9a84c]/45 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 glow-box relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-[#c9a84c]/10" />
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]">
                  <Flag size={28} className="drop-shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0a06] border border-green-500/30 text-green-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-[#f0e6cc] font-serif">F1SimHub</h3>
                <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20">Racing · Sim</span>
              </div>
              <p className="text-[#9a8a6a] mb-10 leading-relaxed flex-1 relative z-10">
                A companion hub for Formula 1 simulation racing — telemetry, setups, and data tools for drivers who take the virtual grid seriously.
              </p>
              <a href="https://www.f1simhub.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c9a84c] font-medium hover:text-[#f0e6cc] transition-colors mt-auto relative z-10 w-fit group/link">
                f1simhub.com
                <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Tarmac Card */}
            <div className="group flex flex-col bg-[#13100a] border border-[#c9a84c]/15 hover:border-[#c9a84c]/45 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 glow-box relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#c9a84c]/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-[#c9a84c]/10" />
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c]/30 flex items-center justify-center text-[#c9a84c]">
                  <Radio size={28} className="drop-shadow-[0_0_8px_rgba(201,168,76,0.8)]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#0c0a06] border border-green-500/30 text-green-400 text-xs font-medium">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live
                </div>
              </div>
              <div className="flex items-center gap-3 mb-4 relative z-10">
                <h3 className="text-2xl font-bold text-[#f0e6cc] font-serif">Tarmac</h3>
                <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#c9a84c]/10 text-[#c9a84c] border border-[#c9a84c]/20">Motorsport · Live</span>
              </div>
              <p className="text-[#9a8a6a] mb-10 leading-relaxed flex-1 relative z-10">
                Live motorsport data, timing, and race-day intelligence — built for fans who want more than the broadcast gives them.
              </p>
              <a href="https://tarmac.live/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#c9a84c] font-medium hover:text-[#f0e6cc] transition-colors mt-auto relative z-10 w-fit group/link">
                tarmac.live
                <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative bg-[#1c1710] border-y border-[#c9a84c]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 text-[#c9a84c] text-sm font-semibold tracking-wider uppercase mb-6">
                <Activity size={16} /> Studio Philosophy
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#f0e6cc] font-serif mb-8">
                How We Operate
              </h2>
              
              <div className="space-y-6 text-lg text-[#9a8a6a] leading-relaxed">
                <p className="text-xl font-medium text-[#f0e6cc] border-l-2 border-[#c9a84c] pl-6 py-2">
                  One legal entity. Multiple products. Zero custody.
                </p>
                <p>
                  Edison Labs is structured for velocity. We build experimental software that pushes boundaries without compromising on structural leanness.
                </p>
                <p>
                  Our focus is on creating tools that empower users through direct interaction with decentralized systems and AI-driven insights, always prioritizing transparency and self-sovereignty.
                </p>
              </div>
            </div>

            {/* Right Column - Principle Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#0c0a06] border border-[#c9a84c]/20 rounded-xl p-6 hover:border-[#c9a84c]/50 transition-colors group">
                <Code className="text-[#c9a84c] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" size={24} />
                <h4 className="text-[#f0e6cc] font-semibold mb-2">Clean Architecture</h4>
                <p className="text-sm text-[#9a8a6a]">Engineered for clarity — systems built like great machines, with purpose in every part.</p>
              </div>
              
              <div className="bg-[#0c0a06] border border-[#c9a84c]/20 rounded-xl p-6 hover:border-[#c9a84c]/50 transition-colors group">
                <Shield className="text-[#c9a84c] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" size={24} />
                <h4 className="text-[#f0e6cc] font-semibold mb-2">Minimal Intermediaries</h4>
                <p className="text-sm text-[#9a8a6a]">Direct connection, always. The shortest path from user to outcome.</p>
              </div>
              
              <div className="bg-[#0c0a06] border border-[#c9a84c]/20 rounded-xl p-6 hover:border-[#c9a84c]/50 transition-colors group">
                <Cpu className="text-[#c9a84c] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" size={24} />
                <h4 className="text-[#f0e6cc] font-semibold mb-2">Experimental by Design</h4>
                <p className="text-sm text-[#9a8a6a]">We build at the frontier, where Edison once stood — unlit territory.</p>
              </div>
              
              <div className="bg-[#0c0a06] border border-[#c9a84c]/20 rounded-xl p-6 hover:border-[#c9a84c]/50 transition-colors group">
                <Activity className="text-[#c9a84c] mb-4 opacity-70 group-hover:opacity-100 transition-opacity" size={24} />
                <h4 className="text-[#f0e6cc] font-semibold mb-2">Long-term Flexibility</h4>
                <p className="text-sm text-[#9a8a6a]">Structures that bend without breaking. Products that evolve.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Contact & Footer Section */}
      <section id="contact" className="pt-32 pb-12 relative flex flex-col items-center">
        <div className="max-w-3xl mx-auto px-6 text-center mb-32 relative z-10">
          <div className="w-20 h-20 mx-auto bg-[#c9a84c]/10 rounded-full flex items-center justify-center mb-8 border border-[#c9a84c]/30 shadow-[0_0_40px_rgba(201,168,76,0.4)]">
            <Lightbulb size={32} className="text-[#c9a84c]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#f0e6cc] mb-6 font-serif">Get in Touch</h2>
          <p className="text-[#9a8a6a] text-lg mb-10 max-w-xl mx-auto">
            Interested in what we're building? Reach out to discuss experimental tech, partnerships, or just to say hello.
          </p>
          <a 
            href="mailto:edisonlabschicago@gmail.com" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#13100a] border border-[#c9a84c]/50 hover:border-[#c9a84c] hover:shadow-[0_0_20px_rgba(201,168,76,0.3)] text-[#f0e6cc] font-semibold rounded-lg transition-all duration-300"
          >
            edisonlabschicago@gmail.com
            <ChevronRight size={18} className="text-[#c9a84c]" />
          </a>
        </div>

        {/* Footer */}
        <footer className="w-full max-w-7xl mx-auto px-6 border-t border-[#c9a84c]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#9a8a6a] relative z-10">
          <div className="flex items-center gap-2">
            <img src="/__mockup/images/logo.png" alt="Edison Labs" className="w-5 h-5 object-contain grayscale opacity-50" onError={(e) => {
              (e.target as HTMLImageElement).style.display = 'none';
            }} />
            <p>© {new Date().getFullYear()} Edison Labs LLC · Chicago, IL</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Terms</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#c9a84c] transition-colors">Risk Disclosure</a>
          </div>
        </footer>
        
        {/* Bottom glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#c9a84c]/8 blur-[100px] rounded-t-full pointer-events-none" />
      </section>

    </div>
  );
}
