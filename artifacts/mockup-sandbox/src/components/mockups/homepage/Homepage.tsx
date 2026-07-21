import React, { useState, useEffect } from 'react';
import { ExternalLink, Zap, BrainCircuit, ChevronRight, Menu, X, ArrowRight, Activity, Shield, Code, Cpu, Flag, Radio } from 'lucide-react';

export function Homepage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#e2e8f0] font-sans selection:bg-[#4cc3ff]/30 selection:text-white overflow-hidden relative">
      <style>{`
        html { scroll-behavior: smooth; }
        .glow-text { text-shadow: 0 0 20px rgba(76, 195, 255, 0.5); }
        .glow-box { box-shadow: 0 0 20px rgba(76, 195, 255, 0.10); }
        .glow-box:hover { box-shadow: 0 0 30px rgba(76, 195, 255, 0.25); }
        .radial-glow {
          background: radial-gradient(circle at 50% 0%, rgba(76, 195, 255, 0.13), transparent 60%);
        }
        .dot-pattern {
          background-image: radial-gradient(rgba(148, 163, 184, 0.08) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      {/* Background */}
      <div className="absolute top-0 left-0 w-full h-[800px] radial-glow pointer-events-none" />
      <div className="absolute inset-0 dot-pattern pointer-events-none opacity-50" />

      {/* Nav */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#000000]/80 backdrop-blur-md border-b border-[#4cc3ff]/20 py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
            <img src="/__mockup/images/logo.png" alt="Edison Labs" className="w-8 h-8 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <span className="text-xl font-bold tracking-tight text-white">Edison Labs</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {['products','about','contact'].map(s => (
              <button key={s} onClick={() => scrollTo(s)} className="text-[#94a3b8] hover:text-[#4cc3ff] transition-colors text-sm font-medium tracking-wide uppercase">{s}</button>
            ))}
          </div>
          <button className="md:hidden text-[#94a3b8] hover:text-[#4cc3ff]" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#000000]/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {['products','about','contact'].map(s => (
            <button key={s} onClick={() => scrollTo(s)} className="text-2xl font-semibold text-[#e2e8f0] hover:text-[#4cc3ff] transition-colors capitalize">{s}</button>
          ))}
        </div>
      )}

      {/* Hero */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#4cc3ff]/30 bg-[#4cc3ff]/10 text-[#4cc3ff] text-sm font-medium mb-8 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-[#4cc3ff] animate-pulse" />
              Chicago · Software Studio
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter mb-8 leading-[1.1] text-white">
              Build.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94a3b8]">Ship.</span><br />
              <span className="text-[#4cc3ff] glow-text">Iterate.</span>
            </h1>

            <p className="text-lg md:text-2xl text-[#94a3b8] mb-12 max-w-2xl leading-relaxed font-light">
              Edison Labs LLC builds experimental, non-custodial products at the intersection of technology and decentralized systems.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <button onClick={() => scrollTo('products')} className="group flex items-center justify-center gap-2 px-8 py-4 bg-[#4cc3ff] hover:bg-[#3bb1f0] text-black font-semibold rounded-lg transition-all duration-300 hover:shadow-[0_0_30px_rgba(76,195,255,0.4)]">
                Our Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={() => scrollTo('about')} className="px-8 py-4 bg-transparent border border-[#94a3b8]/30 hover:border-[#4cc3ff] hover:text-[#4cc3ff] text-white font-semibold rounded-lg transition-all duration-300 backdrop-blur-sm">
                Learn More
              </button>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] border border-[#4cc3ff]/10 rounded-full opacity-30 animate-[spin_60s_linear_infinite]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] border border-[#4cc3ff]/20 rounded-full opacity-40 animate-[spin_40s_linear_infinite_reverse]" />
      </section>

      {/* Products */}
      <section id="products" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white">Our Products</h2>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-[#4cc3ff]/30 to-transparent ml-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: <Zap size={28} className="drop-shadow-[0_0_8px_rgba(76,195,255,0.8)]" />,
                name: 'The Juice',
                tag: 'Blockchain · P2P',
                status: 'Live',
                statusColor: 'green',
                desc: 'A peer-to-peer, on-chain application enabling direct smart contract interactions for decentralized outcomes. Built for experimentation, not custody.',
                url: 'https://www.thejuiceapp.io/',
                label: 'thejuiceapp.io',
              },
              {
                icon: <BrainCircuit size={28} className="drop-shadow-[0_0_8px_rgba(76,195,255,0.8)]" />,
                name: 'Predara',
                tag: 'AI · Markets',
                status: 'Live',
                statusColor: 'green',
                desc: 'An AI-driven analyzer that decodes contract rules from Polymarket, Kalshi, Gemini, and Coinbase — turning complex rules into clarity.',
                url: 'https://www.predara.org/',
                label: 'predara.org',
              },
              {
                icon: <Flag size={28} className="drop-shadow-[0_0_8px_rgba(76,195,255,0.8)]" />,
                name: 'F1SimHub',
                tag: 'Racing · Sim',
                status: 'Live',
                statusColor: 'green',
                desc: 'A companion hub for Formula 1 simulation racing — telemetry, setups, and data tools for drivers who take the virtual grid seriously.',
                url: 'https://www.f1simhub.com/',
                label: 'f1simhub.com',
              },
              {
                icon: <Radio size={28} className="drop-shadow-[0_0_8px_rgba(76,195,255,0.8)]" />,
                name: 'Tarmac',
                tag: 'Motorsport · Live',
                status: 'Live',
                statusColor: 'green',
                desc: 'Live motorsport data, timing, and race-day intelligence — built for fans who want more than the broadcast gives them.',
                url: 'https://tarmac.live/',
                label: 'tarmac.live',
              },
            ].map((p) => (
              <div key={p.name} className="group flex flex-col bg-[#0b0b10] border border-[#4cc3ff]/20 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 glow-box relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#4cc3ff]/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-[#4cc3ff]/10" />
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-[#4cc3ff]/10 border border-[#4cc3ff]/30 flex items-center justify-center text-[#4cc3ff]">
                    {p.icon}
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1 rounded-full bg-[#000000] border border-${p.statusColor}-500/30 text-${p.statusColor}-400 text-xs font-medium`}>
                    <span className={`w-2 h-2 rounded-full bg-${p.statusColor}-500 animate-pulse`} />
                    {p.status}
                  </div>
                </div>
                <div className="flex items-center gap-3 mb-4 relative z-10">
                  <h3 className="text-2xl font-bold text-white">{p.name}</h3>
                  <span className="px-2.5 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-[#4cc3ff]/10 text-[#4cc3ff] border border-[#4cc3ff]/20">{p.tag}</span>
                </div>
                <p className="text-[#94a3b8] mb-10 leading-relaxed flex-1 relative z-10">{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#4cc3ff] font-medium hover:text-white transition-colors mt-auto relative z-10 w-fit group/link">
                  {p.label}
                  <ExternalLink size={16} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-32 relative bg-[#0b0b10]/50 border-y border-[#4cc3ff]/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-[#4cc3ff] text-sm font-semibold tracking-wider uppercase mb-6">
                <Activity size={16} /> Studio Philosophy
              </div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-8">How We Operate</h2>
              <div className="space-y-6 text-lg text-[#94a3b8] leading-relaxed">
                <p className="text-xl font-medium text-[#e2e8f0] border-l-2 border-[#4cc3ff] pl-6 py-2">
                  One legal entity. Multiple products. Zero custody.
                </p>
                <p>Edison Labs is structured for velocity. We build experimental software that pushes boundaries without compromising on structural leanness.</p>
                <p>Our focus is on creating tools that empower users through direct interaction with decentralized systems and AI-driven insights, always prioritizing transparency and self-sovereignty.</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Code size={24} />, title: 'Clean Architecture', desc: 'Systems designed for scale, readability, and immediate utility.' },
                { icon: <Shield size={24} />, title: 'Minimal Intermediaries', desc: 'Direct peer-to-peer interactions without custodial friction.' },
                { icon: <Cpu size={24} />, title: 'Experimental by Design', desc: 'Building at the edge of what\'s possible in web3 and AI.' },
                { icon: <Activity size={24} />, title: 'Long-term Flexibility', desc: 'Agile product evolution decoupled from monolithic structures.' },
              ].map((t) => (
                <div key={t.title} className="bg-[#000000] border border-[#4cc3ff]/20 rounded-xl p-6 hover:border-[#4cc3ff]/50 transition-colors group">
                  <div className="text-[#4cc3ff] mb-4 opacity-70 group-hover:opacity-100 transition-opacity">{t.icon}</div>
                  <h4 className="text-white font-semibold mb-2">{t.title}</h4>
                  <p className="text-sm text-[#94a3b8]">{t.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="pt-32 pb-12 relative flex flex-col items-center">
        <div className="max-w-3xl mx-auto px-6 text-center mb-32 relative z-10">
          <div className="w-20 h-20 mx-auto bg-[#4cc3ff]/10 rounded-full flex items-center justify-center mb-8 border border-[#4cc3ff]/30 shadow-[0_0_30px_rgba(76,195,255,0.2)]">
            <Zap size={32} className="text-[#4cc3ff]" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get in Touch</h2>
          <p className="text-[#94a3b8] text-lg mb-10 max-w-xl mx-auto">
            Interested in what we're building? Reach out to discuss experimental tech, partnerships, or just to say hello.
          </p>
          <a href="mailto:edisonlabschicago@gmail.com" className="inline-flex items-center gap-3 px-8 py-4 bg-[#0b0b10] border border-[#4cc3ff]/50 hover:border-[#4cc3ff] hover:shadow-[0_0_20px_rgba(76,195,255,0.3)] text-white font-semibold rounded-lg transition-all duration-300">
            edisonlabschicago@gmail.com
            <ChevronRight size={18} className="text-[#4cc3ff]" />
          </a>
        </div>

        <footer className="w-full max-w-7xl mx-auto px-6 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#94a3b8] relative z-10">
          <div className="flex items-center gap-2">
            <img src="/__mockup/images/logo.png" alt="Edison Labs" className="w-5 h-5 object-contain grayscale opacity-50" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
            <p>© {new Date().getFullYear()} Edison Labs LLC · Chicago, IL</p>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
          </div>
        </footer>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-[#4cc3ff]/10 blur-[100px] rounded-t-full pointer-events-none" />
      </section>
    </div>
  );
}

export default Homepage;
