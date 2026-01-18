import React from 'react';
import { ArrowRight, BarChart3, Lock, Zap, TrendingUp, ChevronRight } from 'lucide-react';

export default function MaynardLanding() { // Renamed component for consistency
  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900 font-sans selection:bg-neutral-900 selection:text-white">
      
      {/* NAVIGATION */}
      <nav className="fixed w-full z-50 bg-neutral-50/80 backdrop-blur-md border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-serif font-bold tracking-tight">MAYNARD METRICS</span>
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
          <h1 className="text-5xl md:text-7xl font-serif font-medium leading-[1.1] mb-8">
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
            <button className="inline-flex items-center justify-center gap-2 bg-white border border-neutral-200 text-neutral-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-neutral-50 transition-all">
              Contact Investment Team
            </button>
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
              <h3 className="text-xl font-serif font-bold">Subjectivity is an Asset Class</h3>
              <p className="text-neutral-600 leading-relaxed">
                We operationalize the St. Gallen "Auction Price Mechanism." We don't rely on taste; we model determinants like canonization, freshness, and momentum.
              </p>
            </div>

            {/* Card 2 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-xl font-serif font-bold">Correcting Expert Bias</h3>
              <p className="text-neutral-600 leading-relaxed">
                Our models identified a 15-20% conservative bias in expert estimates. By neutralizing this anchor, we reduce valuation error by 36%.
              </p>
            </div>

            {/* Card 3 */}
            <div className="space-y-4">
              <div className="w-12 h-12 bg-neutral-100 rounded-xl flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-neutral-900" />
              </div>
              <h3 className="text-xl font-serif font-bold">Quantifying Upside Risk</h3>
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
              <h2 className="text-4xl font-serif font-medium">We Don't Guess.<br/>We Calibrate.</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-green-500 text-xs">1</div>
                  <div>
                    <h4 className="font-bold text-lg">The Conservative Bias</h4>
                    <p className="text-neutral-400">Auction houses systematically underestimate to drive momentum. We see through the noise.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 w-6 h-6 rounded-full border border-green-500 flex items-center justify-center text-green-500 text-xs">2</div>
                  <div>
                    <h4 className="font-bold text-lg">The 80% Confidence Interval</h4>
                    <p className="text-neutral-400">Our model brackets the true hammer price 78.5% of the time, providing a reliable risk metric.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* ABSTRACT CHART VISUAL */}
            <div className="md:w-1/2 w-full">
              <div className="bg-neutral-800 rounded-2xl p-6 border border-neutral-700 shadow-2xl relative">
                {/* Simulated Chart UI */}
                <div className="flex items-center justify-between mb-8">
                  <div className="text-sm text-neutral-400">Price Prediction Model V1</div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                </div>
                <div className="h-64 flex items-end justify-between gap-2">
                  {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95].map((h, i) => (
                    <div key={i} className="w-full bg-neutral-700 rounded-t-sm relative group">
                      <div 
                        style={{ height: `${h}%` }} 
                        className="absolute bottom-0 w-full bg-green-500/80 group-hover:bg-green-400 transition-all duration-500"
                      ></div>
                       {/* Bias Line */}
                      <div style={{ height: `${h - 20}%` }} className="absolute bottom-0 w-full border-t-2 border-red-400/50"></div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-between text-xs text-neutral-500 font-mono">
                  <span>NOV 2025</span>
                  <span>DEC 2025</span>
                  <span>JAN 2026</span>
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
            <h2 className="text-4xl font-serif font-medium mb-4">The Team</h2>
            <p className="text-xl text-neutral-600">Tier-1 financial experience meets deep technical expertise.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: "Tanay", role: "Business & Strategy", bio: "IB Analyst. Economics & Mathematics." },
              { name: "Eugene", role: "Quantitative Modeling", bio: "Data Scientist & Quant Trader." },
              { name: "Amar", role: "Art Market & Ops", bio: "Institutional Connectivity." },
              { name: "Max", role: "Data Infrastructure", bio: "Scalable Pipeline Architect." },
            ].map((member, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl border border-neutral-200 hover:shadow-lg transition-all cursor-default group">
                <div className="w-12 h-12 bg-neutral-900 text-white rounded-full flex items-center justify-center text-xl font-serif font-bold mb-6 group-hover:scale-110 transition-transform">
                  {member.name[0]}
                </div>
                <h4 className="text-lg font-bold mb-1">{member.name}</h4>
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
            {/* UPDATED FOOTER BRANDING */}
            <span className="text-lg font-serif font-bold tracking-tight block">MAYNARD METRICS</span>
            <span className="text-sm text-neutral-500">© 2026 London | San Francisco</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-neutral-600">
            <a href="#" className="hover:text-neutral-900">Whitepaper</a>
            <a href="#" className="hover:text-neutral-900">Contact</a>
            <span className="text-neutral-400">Seed Stage</span>
          </div>
        </div>
      </footer>
    </div>
  );
}