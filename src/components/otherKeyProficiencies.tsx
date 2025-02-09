"use client";
import React, { useEffect, useRef } from "react";

export default function KeyProficienciesComponent() {
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
						key={index}
						className={`bg-black text-white px-3 py-1 rounded-full text-sm  font-[family-name:var(--Poppins-Regular)]`}
					>
						{skill}
					</span>
				))}
			</div>
		</div>
	);
}
