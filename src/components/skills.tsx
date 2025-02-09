"use client";
import React, { useEffect, useRef } from "react";
import ImageDesignComponent from "./imageDesign";
import DevToolsComponent from "./devTool";
import DbComponent from "./db";
import KeyProficienciesComponent from "./otherKeyProficiencies";
import AiToolsComponent from "./aiToolsLibraries";
import BackEndComponent from "./backEnd";
import FrontEndComponent from "./frontEnd";

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
				{[
					{ id: "frontend", component: <FrontEndComponent /> },
					{ id: "backend", component: <BackEndComponent /> },
					{ id: "ai-tools", component: <AiToolsComponent /> },
					{ id: "key-proficiencies", component: <KeyProficienciesComponent /> },
					{ id: "db", component: <DbComponent /> },
					{ id: "dev-tools", component: <DevToolsComponent /> },
					{ id: "image-design", component: <ImageDesignComponent /> },
				].map((item, index) => (
					<div
						ref={(el: HTMLDivElement | null) => {
							if (el) featureRefs.current[index] = el;
						}}
						key={item.id}
					>
						{item.component}
					</div>
				))}
			</div>
		</div>
	);
}
