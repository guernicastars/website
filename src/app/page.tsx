import React from 'react';
import { ArrowRight, BarChart3, Lock, Zap, Linkedin, Mail, GraduationCap } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Maynard Metrics | Art Market Alpha',
  description: 'Quantifying the Keynesian Beauty Contest.',
};

export default function MaynardLanding() {
  
  // TEAM DATA
  // Ensure your files in /public/images/ are named EXACTLY like this (case sensitive)
  const team = [
    { 
      name: "Tanay Saboo", 
      role: "Business & Strategy", 
      education: "LSE",
      bio: "Investment Banking Analyst.",
      linkedin: "https://www.linkedin.com/in/tanaysaboo08/",
      email: "tanay.saboo@maynardmetrics.com",
      image: "/images/tanay.jpeg" 
    },
    { 
      name: "Eugene Shcherbinin", 
      role: "Quantitative Modeling", 
      education: "LSE & UC Berkeley",
      bio: "Data Scientist & Quant Trader.",
      linkedin: "https://www.linkedin.com/in/eugene-shcherbinin/",
      email: "eugene.shcherbinin@maynardmetrics.com",
      image: "/images/eugene.jpeg"
    },
    { 
      name: "Amar Guenther", 
      role: "Art Market & Ops", 
      education: "Zeppelin University & UC Berkeley",
      bio: "Institutional Connectivity.",
      linkedin: "https://www.linkedin.com/in/amar-guenther-554795204/",
      email: "amar.guenther@maynardmetrics.com",
      image: "/images/amar.jpeg"
    },
    { 
      name: "Max Kalpin", 
      role: "Data Infrastructure", 
      education: "Johannes Kepler University Linz",
      bio: "Scalable Pipeline Architect.",
      linkedin: "https://www.linkedin.com/in/maxim-kalpin/",
      email: "maxim.kalpin@maynardmetrics.com",
      image: "/images/maxim.jpeg"
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold tracking-tight">MAYNARD METRICS</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
            <a href="#thesis" className="hover:text-neutral-900 transition-colors">The Thesis</a>
            <a href="#findings" className="hover:text-neutral-900 transition-colors">Findings</a>
            <a href="#team" className="hover:text-neutral-900 transition-colors">Team</a>
          </div>
          <button className="bg-neutral-900 text-white px-5 py-2 text-sm font-medium rounded-full hover:bg-neutral-800 transition-all">
            Request Access
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-xs font-semibold tracking-wide uppercase mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Pilot Phase: Sotheby's Dataset
          </div>
          <h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-[1.1] mb-8">
            Pricing the <br/>
            <span className="text-neutral-400">Keynesian Beauty Contest.</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl leading-relaxed mb-10">
            Leveraging institutional-grade quantitative models and the St. Gallen "Auction Price Mechanism" to extract alpha from the $65B art market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-800 transition-all group">
              View the Research
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <a 
              href="mailto:info@maynardmetrics.com"
              className="inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-50 transition-all"
            >
              Contact Investment Team
            </a>
          </div>
        </div>
      </section>

      {/* THESIS GRID */}
      <section id="thesis" className="py-24 bg-white border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Card 1 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                <BarChart3 className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Subjectivity is an Asset Class</h3>
              <p className="text-neutral-600 leading-relaxed">
                We operationalize the St. Gallen "Auction Price Mechanism." We don't rely on taste; we model determinants like canonization, freshness, and momentum.
              </p>
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Correcting Expert Bias</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our models identified a 15-20% conservative bias in expert estimates. By neutralizing this anchor, we reduce valuation error by 36%.
              </p>
            </div>

            {/* Card 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-xl font-bold tracking-tight">Quantifying Upside Risk</h3>
              <p className="text-neutral-600 leading-relaxed">
                We replace single-point estimates with Bayesian Confidence Intervals, isolating "Safe Value" assets from "High Variance" opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>
{/* DATA VISUALIZATION SECTION */}
<section id="findings" className="py-24 bg-neutral-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2 space-y-8">
              <h2 className="text-4xl font-medium tracking-tight">The "Bidding Magnet" <br/> <span className="text-red-500">Trap.</span></h2>
              <p className="text-xl text-neutral-400">
                Experts intentionally suppress estimates to induce bidding wars. This "sales tactic" creates artificially tight spreads that fail to account for real financial risk.
              </p>
              
              <div className="space-y-6 mt-8">
                {/* METRIC 1 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 min-w-[24px] h-6 rounded-full border border-red-500 flex items-center justify-center text-red-500 text-xs">A</div>
                  <div>
                    <h4 className="font-bold text-lg tracking-tight text-red-400">Artificial Tightness</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      By anchoring estimates low (median spread $2,000), experts signal false safety. This works for marketing, but fails for valuation—missing the true price 60% of the time.
                    </p>
                  </div>
                </div>

                {/* METRIC 2 */}
                <div className="flex items-start gap-4">
                  <div className="mt-1 min-w-[24px] h-6 rounded-full border border-green-500 flex items-center justify-center text-green-500 text-xs">B</div>
                  <div>
                    <h4 className="font-bold text-lg tracking-tight text-green-400">Honest Volatility</h4>
                    <p className="text-neutral-400 text-sm leading-relaxed">
                      Our model refuses to lie about risk. We widen the bracket (median spread $4,000) to honestly capture the "Breakout Potential" of the asset, achieving 79.9% reliability.
                    </p>
                  </div>
                </div>
              </div>

              {/* Tagline */}
              <div className="pt-4 border-t border-neutral-800">
                <p className="font-mono text-sm text-neutral-500 uppercase tracking-widest">
                  Sales Tactics vs. Financial Reality
                </p>
              </div>
            </div>
            
            {/* REAL CHART FROM RESEARCH */}
            <div className="md:w-1/2 w-full">
              <div className="bg-neutral-800 rounded-2xl p-4 border border-neutral-700 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/50 to-transparent pointer-events-none"></div>
                {/* Ensure the image reflects the 'Efficiency Test' violin plot or the Absolute Spread plot */}
                <img 
                  src="/images/efficiency_chart_dark.png"  // <--- MATCH THIS FILENAME
                  alt="Model Efficiency vs Experts" 
                  className="w-full h-auto rounded-lg opacity-90 group-hover:opacity-100 transition-opacity"
                />
                
                <div className="absolute bottom-6 left-6 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-mono uppercase tracking-wider text-green-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Risk Analysis: 32,334 Lots
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="team" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-medium tracking-tight mb-4">The Team</h2>
            <p className="text-xl text-neutral-600">Tier-1 financial experience meets deep technical expertise.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-all cursor-default group relative">
                <div className="flex justify-between items-start mb-6">
                  {/* UPDATED: Removed onError handler to fix Server Component issue */}
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover border border-neutral-200 group-hover:scale-105 transition-transform"
                  />
                  <div className="flex gap-3">
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-neutral-400 hover:text-neutral-900 transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="text-neutral-400 hover:text-[#0A66C2] transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h4 className="text-lg font-bold tracking-tight mb-1">{member.name}</h4>
                <div className="flex items-center gap-1 mb-2 text-neutral-500">
                    <GraduationCap className="w-3 h-3" />
                    <span className="text-xs font-medium">{member.education}</span>
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-4">{member.role}</p>
                <p className="text-neutral-600 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white py-12 border-t border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="text-lg font-bold tracking-tight block">MAYNARD METRICS</span>
            <span className="text-sm text-neutral-500">© 2026 London | San Francisco</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-neutral-600 items-center">
            <a href="#" className="hover:text-neutral-900">Whitepaper</a>
            <a href="mailto:info@maynardmetrics.com" className="hover:text-neutral-900">info@maynardmetrics.com</a>
            <span className="text-neutral-400">Seed Stage</span>
          </div>
        </div>
      </footer>
    </div>
  );
}