"use client";

import React, { useState, useEffect, useRef } from "react";

import Image from "next/image";
import Sspot1Component from "@/components/sspot1Card";
import RagComponent from "@/components/ragCard";
import BEasycomponent from "@/components/beasyCard";
import SkillsComponent from "@/components/skills";
import EducationComponent from "@/components/educaion";
import ExpComponent from "@/components/exp";
import AboutComponent from "@/components/about";
import ContactComponent from "@/components/contact";
import FooterComponent from "@/components/footer";

export default function Portfolio() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [activeSection, setActiveSection] = useState("home");
	const [isScrolled, setIsScrolled] = useState(false);
	const [isVisible, setIsVisible] = useState(false)

	const skillsRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
    setIsVisible(true)
  }, [])

	const [qNav, setQNav] = useState("");

	const q1 = useRef<HTMLDivElement>(null);

	const q2 = useRef<HTMLDivElement>(null);

	const q3 = useRef<HTMLDivElement>(null);

	const q4 = useRef<HTMLDivElement>(null);

	const q5 = useRef<HTMLDivElement>(null);

	const q6 = useRef<HTMLDivElement>(null);

	const q7 = useRef<HTMLDivElement>(null);

	const q8 = useRef<HTMLDivElement>(null);

	const qView2 = () => q2.current?.scrollIntoView({ behavior: "smooth" });

	const qView3 = () => q3.current?.scrollIntoView({ behavior: "smooth" });

	const qView4 = () => q4.current?.scrollIntoView({ behavior: "smooth" });

	const qView5 = () => q5.current?.scrollIntoView({ behavior: "smooth" });

	const qView6 = () => q6.current?.scrollIntoView({ behavior: "smooth" });

	const qView7 = () => q7.current?.scrollIntoView({ behavior: "smooth" });

	const qView8 = () => q8.current?.scrollIntoView({ behavior: "smooth" });

	const qhome = () =>
		q1.current?.scrollIntoView({ behavior: "smooth" });

	useEffect(() => {
		if (qNav === "home") {
			qhome();
		}
		if (qNav === "about") {
			qView2();
		}
		if (qNav === "experience") {
			qView3();
		}
		if (qNav === "skills") {
			qView4();
		}

		if (qNav === "home") {
			qhome();
		}

		if (qNav === "projects") {
			qView5();
		}
		if (qNav === "ai-expertise") {
			qView6();
		}
		if (qNav === "contact") {
			qView7();
		}

		if (qNav === "education") {
			qView8();
		}
	}, [qNav, setQNav]);

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				"home",
				"about",
				"experience",
				"education",
				"skills",
				"projects",
				"contact",
			];
			const current = sections.find((section) => {
				const element = document.getElementById(section);
				if (element) {
					const rect = element.getBoundingClientRect();
					return rect.top <= 100 && rect.bottom >= 100;
				}
				return false;
			});
			if (current) {
				setActiveSection(current);
			}
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

	
	return (
		<div className="bg-white text-black min-h-screen font-[family-name:var(--Poppins-SemiBold)] ">
			{/* Navigation */}
			<nav
				className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
					isScrolled ? "bg-white shadow-md" : "bg-transparent"
				}`}
			>
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex items-center justify-between h-16">
						<div className="flex items-center">
							<a
								href="#home"
								className={`cursor-pointer text-2xl font-bold font-[family-name:var(--ProtestGuerrilla)] transition-colors duration-300 ${
									isScrolled ? "text-black" : "text-white"
								}`}
							>
								MHY
							</a>
						</div>
						<div className="hidden md:block">
							<div className="ml-10 flex items-baseline space-x-4">
								{[
									"Home",
									"About",
									"Experience",
									"Education",
									"Skills",
									"Projects",
									"Contact",
								].map((item) => (
									<div
										key={item}
										onClick={() => setQNav(item.toLowerCase())}
										className={`px-3 py-2 cursor-pointer rounded-md text-sm font-medium font-[family-name:var(--Poppins-SemiBold)] transition-colors duration-300 ${
											activeSection === item.toLowerCase()
												? "bg-black text-white"
												: isScrolled
												? "text-black hover:bg-gray-200"
												: "text-white hover:bg-white hover:text-black"
										}`}
									>
										{item}
									</div>
								))}
							</div>
						</div>
						<div className="md:hidden">
							<button
								onClick={toggleMenu}
								className={`cursor-pointer inline-flex items-center justify-center p-2 rounded-md font-[family-name:var(--Poppins-SemiBold)] ${
									isScrolled
										? "text-black hover:text-white hover:bg-black"
										: "text-white hover:text-black hover:bg-white"
								} focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-300`}
							>
								<span className="sr-only">Open main menu</span>
								<svg
									className={`${isMenuOpen ? "hidden" : "block"} h-6 w-6`}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
								<svg
									className={`${isMenuOpen ? "block" : "hidden"} h-6 w-6`}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				<div className={`${isMenuOpen ? "block" : "hidden"} md:hidden`}>
					<div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
						{[
							"Home",
							"About",
							"Experience",
							"Education",
							"Skills",
							"Projects",
							"Contact",
						].map((item) => (
							<div
								key={item}
								className={`cursor-pointer block px-3 py-2 rounded-md text-base font-medium  font-[family-name:var("--Poppins-SemiBold)]${
									activeSection === item.toLowerCase()
										? "bg-black text-white"
										: "text-black hover:bg-gray-200"
								} transition-colors duration-300`}
								onClick={() => {
									toggleMenu(); setQNav(item.toLowerCase());
								}}
							>
								{item}
							</div>
						))}
					</div>
				</div>
			</nav>

			{/* Main Content */}
			<main>
				{/* Hero Section */}
				<section
					ref={q1}
					className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden"
				>
					<div className="absolute inset-0 z-0">
						<div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-80"></div>
						<div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center animate-ken-burns"></div>
					</div>
					<div className="text-center relative z-10 flex flex-col items-center">
						<div className={`cursor-pointer w-48 h-48 rounded-full overflow-hidden mb-8 border-4 border-white shadow-lg transition-all duration-1000 ease-out delay-1000 transform ${isVisible ? 'translate-x-0 opacity-100' : 'opacity-0'}`}>
							<Image
								src={"/pic.jpg"}
								alt={` image`}
								width={400}
								height={300}
								className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
							/>
						</div>
						<h1 className={`text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up font-[family-name:var(--Poppins-Bold)] transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
							Mohammed Hayatudeen Yusuf
						</h1>
						<p className={`text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 transition-all duration-1000 ease-out delay-300 transform font-[family-name:var(--Poppins-SemiBold)] ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
							Tech Entrepreneur | Project Engineer | Full-Stack Developer |
							AI-Powered Development Engineer
						</p>
						<div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-600">
							<div
								onClick={() => setQNav("contact")}
								className="bg-white cursor-pointer text-black px-6 pt-3 pb-2 rounded-full hover:bg-gray-200 transition-colors duration-300 transform hover:scale-105 font-[family-name:var(--Poppins-Bold)]"
							>
								Get in Touch
							</div>
							<div
							onClick={() => setQNav("projects")}
								className=" cursor-pointer border-2 border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition-colors duration-300 transform hover:scale-105 font-[family-name:var(--Poppins-Bold)]"
							>
								View Projects
							</div>
						</div>
					</div>
					<div className="cursor-pointer absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
						<a onClick={()=>setQNav("about")} className="text-white">
							<svg
								className="w-6 h-6"
								fill="none"
								stroke="currentColor"
								viewBox="0 0 24 24"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M19 14l-7 7m0 0l-7-7m7 7V3"
								></path>
							</svg>
						</a>
					</div>
				</section>

				{/* About Section */}
				<section id="about" ref={q2} className="py-20 bg-white">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold mb-8 text-center font-[family-name:var(--ProtestGuerrilla)]">
							ABOUT ME
						</h2>
						<AboutComponent />
					</div>
				</section>

				{/* Experience Section */}
				<section id="experience" ref={q3} className="py-20 bg-gray-100">
					<ExpComponent />
				</section>

				{/* Education Section */}
				<section id="education" ref={q8} className="py-20 bg-white">
					<EducationComponent />
				</section>

				{/* Skills Section */}
				<div>
					<section id="skills" className="py-20 bg-white" ref={skillsRef}>
						<div ref={q4}>
							<SkillsComponent />
						</div>
					</section>
				</div>

				{/* Projects Section */}
				<section id="projects" ref={q5} className="py-20 bg-gray-100">
					<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold mb-12 text-center font-[family-name:var(--Poppins-Bold)]">
							Featured Projects
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
							<Sspot1Component />
							<RagComponent />
							<BEasycomponent />
						</div>
					</div>
				</section>

				{/* Contact Section */}
				<section id="contact" ref={q7} className="py-20 bg-white">
					<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
						<h2 className="text-3xl font-bold mb-12 text-center">
							Get in Touch
						</h2>

						<ContactComponent />
					</div>
				</section>
			</main>

			{/* Footer */}
			<FooterComponent />
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
