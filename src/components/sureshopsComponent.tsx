"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";

export default function SureShopsComponent() {
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

  const techStack = [
    "Next.js", "React", "Redux Toolkit", "Tailwind CSS",
    "Node.js", "MongoDB", "NestJs",
    "Git", "Vercel"
  ];

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-gray-900 border border-gray-100 group flex flex-col h-full font-[family-name:var(--Poppins-Regular)]">
      
      <div className="relative overflow-hidden">
        <Image
          src={"/ss.jpeg"} 
          alt="SureShops Commerce Discovery Platform"
          width={400}
          height={300}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gray-900/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href="https://sureshops.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-gray-900 rounded-full font-[family-name:var(--Poppins-SemiBold)] text-sm hover:bg-gray-100 hover:scale-105 transition-all"
          >
            View Live Platform →
          </a>
        </div>
      </div>

      <div className="p-8 flex-grow flex flex-col">
        <div className="mb-4">
          <div className="inline-block px-3 py-1 bg-black text-white text-xs rounded-full mb-3 font-[family-name:var(--Poppins-SemiBold)]">
            Commerce Discovery
          </div>
          <h3 className="text-2xl font-[family-name:var(--Poppins-Bold)] text-gray-900 mb-2">
            SureShops
          </h3>
        </div>
        
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          A dynamic e-commerce discovery ecosystem designed to bridge the gap between merchants and consumers through highly optimized storefront architectures.
        </p>
        
        <ul className="space-y-2 mb-6 text-sm text-gray-600">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            High-performance product discovery and indexing.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Secure transactional pipelines and cart management.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">✓</span>
            Seamless integration with broader Omni-Application architecture.
          </li>
        </ul>
        
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

      <style jsx>{`
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(15px); } to { opacity: 1; transform: translateY(0); } }
        .feature-card { opacity: 0; }
        .feature-visible { animation: fadeInUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
    </div>
  );
}