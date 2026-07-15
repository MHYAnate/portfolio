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
            href="https://rootaf.ng" // Update with actual URL
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
            Agric-Artisan-Tech Ecosystem
          </div>
          <h3 className="text-2xl font-[family-name:var(--Poppins-Bold)] text-gray-900 mb-2">
            RootAF
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed ">
          A comprehensive digital infrastructure built to bridge the gap in the agricultural supply chain and the Artisan Fabrication and Crafting, connecting stakeholders within a unified platform. It empowers farmers, artisans, and consumers by providing tools for efficient production, distribution, and market access.
        </p>
        
      
        
        {/* TECH STACK SECTION */}
        <div className="  border-t border-gray-100">
        
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