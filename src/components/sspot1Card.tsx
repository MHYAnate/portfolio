"use client";
import Image from "next/image";
import React, {useEffect, useRef } from "react";

export default function Sspot1Component() {

	const featureRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('feature-visible');
          }
        });
      },
      { threshold: 0.1 }
    );
  
    // Copy the current refs to a local variable
    const currentRefs = featureRefs.current;
  
    currentRefs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
  
    return () => {
      // Use the local variable in the cleanup
      currentRefs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

	return (
		<div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl transform hover:scale-105">
			<div className="relative">
				<Image
					src={"/1x.jpg"}
					alt={` image`}
					width={400}
					height={300}
					className="w-full h-48 object-cover"
				/>
				<div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
					<a
						href="https://www.sspot1.com"
						target="_blank"
						rel="noopener noreferrer"
						className="text-white font-semibold text-lg hover:underline font-[family-name:var(--Poppins-SemiBold)]"
					>
						View Project
					</a>
				</div>
			</div>
			<div className="p-6">
				<h3 className="text-xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
					Sspot1
				</h3>
				<p className="text-gray-700 mb-4 font-[family-name:var(--Poppins-Regular)]">
					A full-stack progressive web application  connecting vendors with clients,
					revolutionizing service procurement which serves as a triple-purpose hub enabling vendors to
				</p>
				<p className="text-gray-700 mb-4 font-[family-name:var(--Poppins-Regular)]"> {` offer repair, maintenance, and specialized services to clients`}</p>
				<p className="text-gray-700 mb-4 font-[family-name:var(--Poppins-Regular)]"> {`post job openings for skilled peers`}</p>
				<p className="text-gray-700 mb-4 font-[family-name:var(--Poppins-Regular)]">{`lease or sell underutilized tools and equipment to fellow vendors—all within a unified platform `}</p>
				
				<div className="flex flex-wrap gap-2">
					<div className="p-6">
			
							<div className="flex flex-wrap gap-2 mt-4">
								{" "}
								{[
									"ReactJS",
									"Next.js",
									"Redux Toolkit",
									"React Hook Form",
									"Tailwind CSS",
									"React Firebase Hooks",
									"TypeScript",
									"Node.js",
									"Firebase",
									"Vercel",
									"Favicon",
									"Git",
									"GitHub",
									"Bolt.new",
									"Gemini",
									"ChatGpt",
									"v0",
								].map((skill, index) => (
									<span
									ref={(el: HTMLDivElement | null) =>{if (el) featureRefs.current[index] = el} } 
										key={index}
										className={`bg-gray-200 text-gray-700 px-2 py-1 rounded text-sm  font-[family-name:var(--Poppins-Regular)] `}
										
									>
										{skill}
									</span>
								))}
							</div>
					
					</div>
				</div>
			</div>
			<style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>
		</div>
	);
}
