"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutComponent() {
  const [activeTab, setActiveTab] = useState<"engineering" | "vision" | "philosophy">("engineering");

  const metrics = [
    { value: "Over 40%", label: "Latency Reduction", description: "Via TanStack Query decoupled state[cite: 1]" },
    { value: "~30%", label: "Boilerplate Reduction", description: "Through AI-assisted tooling[cite: 1]" },
    { value: "20%", label: "Cost Reduction", description: "Via bespoke auth architecture[cite: 1]" },
    { value: "25%", label: "Faster Debugging", description: "Via white-box full-stack diagnostics[cite: 1]" },
  ];

  const techStack = {
    frontend: ["Next.js 16", "React 19", "TypeScript 5", "TanStack Query", "Redux Toolkit", "Tailwind CSS 4", "Zustand"],
    backend: ["NestJS 11", "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM 6", "Firebase"],
    ai: ["OpenAI API", "LangChain", "Pinecone", "RAG Architecture"],
    devops: ["Vercel", "MongoDB Atlas", "CI/CD Pipelines", "Git/GitHub", "ESLint/Prettier"],
  };

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-2xl text-gray-900 font-[family-name:var(--Poppins-Regular)]">
      
      {/* HERO SECTION */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 bg-black text-white text-sm rounded-full mb-4 font-[family-name:var(--Poppins-SemiBold)]">
          Full-Stack Product Engineer[cite: 1] • Nigeria 🇳🇬 (Open to Remote)[cite: 1]
        </div>
        <h1 className="text-4xl md:text-5xl font-[family-name:var(--Poppins-Bold)] mb-4 tracking-tight">
          I Build Systems That{" "}
          <span className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
            Scale
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {`Product-Driven Full-Stack Engineer with 4 years of experience delivering production-ready applications across agriculture-tech, real estate, and e-commerce domains.[cite: 1]`}
        </p>
      </div>

      {/* METRICS GRID */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {metrics.map((metric, index) => (
          <div 
            key={index}
            className="bg-white p-6 rounded-xl border border-gray-200 hover:border-gray-900 hover:shadow-lg transition-all duration-300 group"
          >
            <div className="text-3xl md:text-4xl font-[family-name:var(--Poppins-Bold)] text-gray-900 group-hover:scale-110 transition-transform">
              {metric.value}
            </div>
            <div className="text-sm font-[family-name:var(--Poppins-SemiBold)] text-gray-700 mt-1">
              {metric.label}
            </div>
            <div className="text-xs text-gray-500 mt-1">
              {metric.description}
            </div>
          </div>
        ))}
      </div>

      {/* TAB NAVIGATION */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {[
          { key: "engineering", label: "🛠 Engineering Excellence" },
          { key: "vision", label: "🌍 The Vision" },
          { key: "philosophy", label: "💡 Philosophy" },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`px-6 py-3 rounded-full text-sm font-[family-name:var(--Poppins-SemiBold)] transition-all duration-300 ${
              activeTab === tab.key
                ? "bg-gray-900 text-white shadow-lg"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="min-h-[500px]">
        
        {/* ENGINEERING TAB */}
        {activeTab === "engineering" && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {/* Pillar 1: Data & Security */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-gray-900 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🔐</span>
                </div>
                <h4 className="font-[family-name:var(--Poppins-Bold)] text-lg mb-3">
                  Security-First Architecture
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Custom JWT Auth & Axios Interceptors[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Passport-JWT strategy & NestJS Guards[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Bcrypt hashing & RBAC Middleware[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    PostgreSQL, Prisma ORM 6, & MongoDB[cite: 1]
                  </li>
                </ul>
              </div>

              {/* Pillar 2: Performance */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-gray-900 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">⚡</span>
                </div>
                <h4 className="font-[family-name:var(--Poppins-Bold)] text-lg mb-3">
                  Performance Engineering
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    TanStack Query optimistic updates[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Redux Toolkit & createAsyncThunk[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Zero-disk I/O media pipelines via Multer + Cloudinary[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Streaming responses for LLMs[cite: 1]
                  </li>
                </ul>
              </div>

              {/* Pillar 3: AI Integration */}
              <div className="bg-white p-6 rounded-xl border-l-4 border-gray-900 shadow-md hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-xl">🤖</span>
                </div>
                <h4 className="font-[family-name:var(--Poppins-Bold)] text-lg mb-3">
                  AI & Automation
                </h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Production RAG architectures[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    LangChain orchestration[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Pinecone vector database integration[cite: 1]
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    CI/CD with AI-assisted workflows (Copilot, Cursor)[cite: 1]
                  </li>
                </ul>
              </div>
            </div>

            {/* TECH STACK VISUALIZATION */}
            <div className="bg-gray-900 rounded-xl p-8 text-white">
              <h4 className="font-[family-name:var(--Poppins-Bold)] text-xl mb-6 text-center">
                Technology Stack[cite: 1]
              </h4>
              <div className="grid md:grid-cols-4 gap-6">
                {Object.entries(techStack).map(([category, technologies]) => (
                  <div key={category}>
                    <div className="text-xs uppercase tracking-wider text-gray-400 mb-3">
                      {category}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300 hover:bg-gray-700 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VISION TAB */}
        {activeTab === "vision" && (
          <div className="animate-fadeIn">
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 md:p-10 rounded-2xl relative overflow-hidden">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-4xl">🌍</span>
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--Poppins-Bold)]">
                    {`Building Africa's Digital Infrastructure`}
                  </h3>
                </div>

                <p className="text-lg text-gray-300 mb-8 border-l-4 border-white pl-6 leading-relaxed">
                {`My portfolio isn't a collection of disconnected projects—it's a strategic roadmap. 
                  Each platform is a foundational module of a grander vision: a unified digital 
                  ecosystem tailored to Africa's unique economic landscape.`} 
                </p>

                {/* Platform Cards */}
                <div className="grid md:grid-cols-2 gap-6 mb-10">
                  {/* Sspot1 */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={"/1x.jpg"}
                          alt={`Sspot1 image`}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--Poppins-Bold)] text-lg">Sspot1[cite: 1]</h4>
                        <p className="text-xs text-gray-400">Service Marketplace Platform[cite: 1]</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>🛠 Full-stack Service Delivery[cite: 1]</li>
                      <li>👥 Firebase React.js ecosystem[cite: 1]</li>
                      <li>🤖 RAG Analytics Integration[cite: 1]</li>
                    </ul>
                    <a 
                      href="https://sspot1.vercel.app" 
                      className="inline-flex items-center mt-4 text-sm text-white hover:underline"
                    >
                      Visit Platform →
                    </a>
                  </div>

                  {/* Ppoint */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/40 transition-colors">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                        <Image
                          src={"/3.png"}
                          alt={`Ppoint image`}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-[family-name:var(--Poppins-Bold)] text-lg">Ppoint[cite: 1]</h4>
                        <p className="text-xs text-gray-400">Admin & User Portals[cite: 1]</p>
                      </div>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>🏠 Phone number-based logins[cite: 1]</li>
                      <li>🤝 Session-persisted JWT architecture[cite: 1]</li>
                      <li>📊 Express.js & Prisma ORM backend[cite: 1]</li>
                    </ul>
                    <a 
                      href="https://ppoint.vercel.app" 
                      className="inline-flex items-center mt-4 text-sm text-white hover:underline"
                    >
                      Visit Platform →
                    </a>
                  </div>
                </div>

                {/* The Convergence */}
                <div className="bg-white/5 rounded-xl p-6 border border-dashed border-white/30">
                  <h4 className="font-[family-name:var(--Poppins-Bold)] text-xl mb-4 flex items-center gap-2">
                    <span>🎯</span> The Ultimate Destination
                  </h4>
                  <p className="text-gray-300 mb-4">
                    A converged <strong className="text-white">Omni-Application</strong> where 
                    boundaries between domains[cite: 1] dissolve:
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: "🌱", label: "Agriculture", desc: "RootAF Ecosystem" },
                      { icon: "🏬", label: "Commerce", desc: "SureShops Discovery" },
                      { icon: "🔧", label: "Services", desc: "Sspot1 Marketplace" },
                      { icon: "🏠", label: "Real Estate", desc: "Ppoint Infrastructure" },
                    ].map((item, i) => (
                      <div key={i} className="text-center p-4 bg-white/5 rounded-lg">
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <div className="font-[family-name:var(--Poppins-SemiBold)] text-sm">{item.label}</div>
                        <div className="text-xs text-gray-400">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-white font-[family-name:var(--Poppins-SemiBold)] mt-6 text-lg">
                    One account. Total integration across agriculture-tech, real estate, and e-commerce.[cite: 1]
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* PHILOSOPHY TAB */}
        {activeTab === "philosophy" && (
          <div className="animate-fadeIn">
            <div className="grid md:grid-cols-2 gap-8">
              
              {/* Left Column - Principles */}
              <div className="space-y-6">
                <h3 className="text-2xl font-[family-name:var(--Poppins-Bold)] mb-6">
                  How I Approach Engineering
                </h3>

                {[
                  {
                    title: "Product Over Polish",
                    description: "I optimize for shipping value to users, building high-performance applications that deliver measurable business outcomes.",
                    icon: "🎯",
                  },
                  {
                    title: "Ownership Mentality",
                    description: "From database architecture to deployed feature, I take complete end-to-end ownership. No 'that's not my job'—if it affects the product, it's my concern.",
                    icon: "🔑",
                  },
                  {
                    title: "Systems Thinking",
                    description: "My B.Tech in Urban and Regional Planning trained me to see interconnections, applying spatial analysis principles to complex software architecture problems.[cite: 1]",
                    icon: "🧠",
                  },
                  {
                    title: "Continuous Learning",
                    description: "Currently deep-diving into distributed systems, AI architecture, and state management patterns. The best engineers are perpetual students.[cite: 1]",
                    icon: "📚",
                  },
                ].map((principle, index) => (
                  <div 
                    key={index}
                    className="bg-white p-6 rounded-xl shadow-md border-l-4 border-gray-900 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{principle.icon}</span>
                      <h4 className="font-[family-name:var(--Poppins-Bold)] text-lg">
                        {principle.title}
                      </h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Column - What You Get */}
              <div>
                <h3 className="text-2xl font-[family-name:var(--Poppins-Bold)] mb-6">
                  What I Bring to Your Team
                </h3>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8 rounded-xl">
                  <ul className="space-y-6">
                    {[
                      {
                        label: "Immediate Impact",
                        detail: "Production-ready code from day one. I've shipped real platforms across multiple tech domains.",
                      },
                      {
                        label: "Full-Stack Fluency",
                        detail: "Comfortable anywhere in the stack. Frontend Next.js today, Node.js/NestJS database optimization tomorrow.[cite: 1]",
                      },
                      {
                        label: "Business Awareness",
                        detail: "As a founder and product engineer, I understand code exists to solve business problems.[cite: 1]",
                      },
                      {
                        label: "Clear Communication",
                        detail: "I establish CI/CD pipelines, enforce code review standards, and clearly explain tech to non-tech stakeholders.[cite: 1]",
                      },
                      {
                        label: "Growth Trajectory",
                        detail: "Actively engaging in continuous professional development with a focus on Al Architecture and Distributed Systems.[cite: 1]",
                      },
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-green-400">✓</span>
                        </div>
                        <div>
                          <div className="font-[family-name:var(--Poppins-SemiBold)]">
                            {item.label}
                          </div>
                          <div className="text-gray-400 text-sm">
                            {item.detail}
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="mt-8 p-6 bg-gray-100 rounded-xl text-center">
                  <p className="font-[family-name:var(--Poppins-SemiBold)] text-lg mb-4">
                    Ready to build something great together?
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <a
                      href="mailto:mhibnyusufanate@gmail.com"
                      className="px-6 py-3 bg-gray-900 text-white rounded-full text-sm font-[family-name:var(--Poppins-SemiBold)] hover:bg-gray-800 transition-colors"
                    >
                      📧 Email Me
                    </a>
                    <a
                      href="https://www.linkedin.com/in/mohammed-hayatudeen-yusuf-anate-491113357/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full text-sm font-[family-name:var(--Poppins-SemiBold)] hover:bg-gray-50 transition-colors"
                    >
                      💼 LinkedIn[cite: 1]
                    </a>
                    <a
                      href="https://github.com/mhyanate"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white border-2 border-gray-900 text-gray-900 rounded-full text-sm font-[family-name:var(--Poppins-SemiBold)] hover:bg-gray-50 transition-colors"
                    >
                      🐙 GitHub[cite: 1]
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="mt-12 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-500 text-sm italic">
        {`"The best code is code that solves real problems for real people."`} 
        </p>
        <p className="text-gray-400 text-xs mt-2">
          Applied systems-thinking and spatial analysis principles to complex software architecture problems.[cite: 1]
        </p>
      </div>

      {/* Add CSS for fade animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}