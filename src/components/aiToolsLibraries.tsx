"use client";
import React, { useEffect, useRef } from "react";

export default function AiToolsComponent() {
	const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

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
		<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
			<h3 className="text-xl font-semibold mb-4 font-[family-name:var(--Poppins-SemiBold)]">
				AI Development Tools and Libraries
			</h3>
			<div className="flex flex-wrap gap-2">
				{[
					"OpenAI API",
					"Jina.ai API",
					"LangChain",
					"Langchain.js",
					"Puppeteer",
					"Google Generative AI",
					"GitHub Copilot",
					"Bolt.new",
					"DeepSeek API",
					"Gemini",
					"ChatGpt",
					"v0",
				].map((skill, index) => (
					<span
						ref={(el: HTMLDivElement | null) => {
							if (el) featureRefs.current[index] = el;
						}}
						key={index}
						className={`bg-black text-white px-3 py-1 rounded-full text-sm  font-[family-name:var(--Poppins-Regular)]`}
					>
						{skill}
					</span>
				))}
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
