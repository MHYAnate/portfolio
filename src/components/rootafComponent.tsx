"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function RootAFComponent() {
  const featureRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("feature-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Copy the current refs to a local variable for stable cleanup
    const currentRefs = featureRefs.current;

    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Update these to match your exact RootAF stack
  const techStack = [
    "Next.js 14", "TypeScript", "NestJS", "Prisma ORM",
    "PostgreSQL", "Tailwind CSS", "TanStack Query", "Redux Toolkit",
    "JWT Auth", "Node.js", "Git", "GitHub", "Vercel"
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-gray-900 border border-gray-100 group flex flex-col h-full font-[family-name:var(--Poppins-Regular)]">
      
      {/* IMAGE SECTION */}
      <div className="relative overflow-hidden">
        {/* Replace src with your actual RootAF image path */}
        <Image
          src={"/rootaf.jpeg"} 
          alt="RootAF Agriculture Ecosystem Platform"
          width={400}
          height={300}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href="https://rootaf.vercel.app" // Update with actual URL
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-gray-900 rounded-full font-[family-name:var(--Poppins-SemiBold)] text-sm hover:bg-gray-100 hover:scale-105 transition-all"
          >
            View Live Platform →
          </a>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-8 flex-grow flex flex-col">
        <div className="mb-4">
          <div className="inline-block px-3 py-1 bg-black text-white text-xs rounded-full mb-3 font-[family-name:var(--Poppins-SemiBold)]">
            Agriculture-Tech Ecosystem
          </div>
          <h3 className="text-2xl font-[family-name:var(--Poppins-Bold)] text-gray-900 mb-2">
            RootAF
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          A comprehensive digital infrastructure built to bridge the gap in the agricultural supply chain, connecting stakeholders within a unified ecosystem. The platform empowers users to:
        </p>
        
        <ul className="space-y-2 mb-6 text-sm text-gray-600">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Streamline procurement and distribution of agricultural produce.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Manage inventory and track supply chain logistics in real-time.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Process secure, role-based transactions across rural and urban markets.
          </li>
        </ul>
        
        {/* TECH STACK SECTION */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <h4 className="text-xs uppercase tracking-wider text-gray-400 mb-3 font-[family-name:var(--Poppins-SemiBold)]">
            Technologies Used
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.map((skill, index) => (
              <span
                ref={(el: HTMLSpanElement | null) => {
                  if (el) featureRefs.current[index] = el;
                }}
                key={index}
                className="feature-card bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-[family-name:var(--Poppins-SemiBold)] hover:bg-gray-900 hover:text-white transition-colors cursor-default"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .feature-card {
          opacity: 0;
        }
        .feature-visible {
          animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
}