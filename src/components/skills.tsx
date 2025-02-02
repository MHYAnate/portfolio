"use client";
import React, { useEffect, useRef } from "react";

export default function SkillsComponent() {
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
		<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 className="text-3xl font-bold mb-12 text-center font-[family-name:var(--Poppins-Bold)]">
				Technical Skills
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold mb-4 font-[family-name:var(--Poppins-SemiBold)]">
						Frontend Development
					</h3>
					<div className="flex flex-wrap gap-2">
						{[
							"ReactJS",
							"Next.js",
							"Redux Toolkit",
							"React Hook Form",
							"Tailwind CSS",
							"React Firebase Hooks",
							"TypeScript",
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
				</div>
				<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold mb-4 font-[family-name:var(--Poppins-SemiBold)]">
						Backend Development
					</h3>
					<div className="flex flex-wrap gap-2">
						{["Node.js", "Express.js", "TypeScript"].map((skill, index) => (
							<span
								ref={(el: HTMLDivElement | null) => {
									if (el) featureRefs.current[index] = el;
								}}
								key={index}
								className={`bg-black text-white px-3 py-1 rounded-full text-sm font-[family-name:var(--Poppins-Regular)]`}
							>
								{skill}
							</span>
						))}
					</div>
				</div>
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
								className={`bg-black text-white px-3 py-1 rounded-full text-sm font-[family-name:var(--Poppins-Regular)]`}
							>
								{skill}
							</span>
						))}
					</div>
				</div>
				<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold mb-4 font-[family-name:var(--Poppins-SemiBold)]">
						Other Key Proficiencies
					</h3>
					<div className="flex flex-wrap gap-2">
						{[
							"Git",
							"GitHub",
							"Jest",
							"Performance Optimization",
							"Responsive design",
							"PWA development",
							"Cross-platform compatibility",
							"Scalable architecture design",
						].map((skill, index) => (
							<span
								ref={(el: HTMLDivElement | null) => {
									if (el) featureRefs.current[index] = el;
								}}
								key={skill}
								className={`bg-black text-white px-3 py-1 rounded-full text-sm font-[family-name:var(--Poppins-Regular)]`}
							>
								{skill}
							</span>
						))}
					</div>
				</div>
				<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold mb-4 font-[family-name:var(--Poppins-SemiBold)]">
						Database & Storage
					</h3>
					<div className="flex flex-wrap gap-2">
						{["Astra DB (Cassandra)", "Firebase", "Pinecone"].map(
							(skill, index) => (
								<span
									ref={(el: HTMLDivElement | null) => {
										if (el) featureRefs.current[index] = el;
									}}
									key={skill}
									className={`bg-black text-white px-3 py-1 rounded-full text-sm font-[family-name:var(--Poppins-Regular)]`}
								>
									{skill}
								</span>
							)
						)}
					</div>
				</div>
				<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
					<h3 className="text-xl font-semibold mb-4 font-[family-name:var(--Poppins-SemiBold)]">
						DevOps & Deployment
					</h3>
					<div className="flex flex-wrap gap-2">
						{["Vercel", "CI/CD Pipelines"].map((skill, index) => (
							<span
								ref={(el: HTMLDivElement | null) => {
									if (el) featureRefs.current[index] = el;
								}}
								key={skill}
								className={`bg-black text-white px-3 py-1 rounded-full text-sm font-[family-name:var(--Poppins-Regular)]`}
							>
								{skill}
							</span>
						))}
					</div>
				</div>
				<div
					ref={(el: HTMLDivElement | null) => {
						if (el) featureRefs.current[7] = el;
					}}
					className="bg-gray-100 p-6 rounded-lg shadow-lg md:col-span-2"
				>
					<h3 className="text-xl font-semibold mb-4 font-[family-name:var(--Poppins-SemiBold)]">
						Design and Image Processing Tools
					</h3>
					<div className="flex flex-wrap gap-2">
						{["Favicon", "Krita", "GIMP", "Inkscape", "Viggle.ai"].map(
							(skill, index) => (
								<span
									key={skill}
									className={`bg-black text-white px-3 py-1 rounded-full text-sm font-[family-name:var(--Poppins-Regular)]`}
									style={{ animationDelay: `${index * 100}ms` }}
								>
									{skill}
								</span>
							)
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
