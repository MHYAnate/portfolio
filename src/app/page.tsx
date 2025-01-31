"use client"

import React, { useState, useEffect } from 'react'

const IconGithub = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
  </svg>
)

const IconLinkedIn = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const IconEmail = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
  </svg>
)

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) {
        setActiveSection(current)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="#home" className="text-2xl font-bold">MHY</a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className={`px-3 py-2 rounded-md text-sm font-medium ${
                      activeSection === item.toLowerCase()
                        ? 'bg-black text-white'
                        : 'text-black hover:bg-gray-200'
                    } transition-colors duration-300`}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  activeSection === item.toLowerCase()
                    ? 'bg-black text-white'
                    : 'text-black hover:bg-gray-200'
                } transition-colors duration-300`}
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in-up">Mohammed Hayatudeen Yusuf</h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">Tech Entrepreneur | Project Engineer | Full-Stack Developer</p>
            <div className="flex justify-center space-x-4 animate-fade-in-up animation-delay-600">
              <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">Get in Touch</a>
              <a href="#projects" className="border-2 border-black text-black px-6 py-3 rounded-full hover:bg-black hover:text-white transition-colors duration-300">View Projects</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
            <p className="text-lg mb-6">
              Highly motivated and results-oriented Full-Stack Developer with a passion for building innovative web applications using cutting-edge technologies and a strong foundation in AI-powered development. Proven ability to single-handedly design, develop, and deploy complex ReactJS applications from concept to production.
            </p>
            <p className="text-lg mb-6">
              Extensive experience leveraging advanced AI tools and libraries to streamline development processes, enhance code quality, and achieve exceptional results. Founder of Sspot 1 Ventures (Service Spot 1), a full-stack web application that connects vendors with clients, demonstrating strong entrepreneurial spirit and technical leadership.
            </p>
            <div className="flex justify-center">
              <a href="#contact" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors duration-300">Let's Connect</a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Frontend Development</h3>
                <ul className="list-disc list-inside">
                  <li>ReactJS</li>
                  <li>Next.js</li>
                  <li>Redux Toolkit</li>
                  <li>React Hook Form</li>
                  <li>Tailwind CSS</li>
                  <li>React Firebase Hooks</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Backend Development</h3>
                <ul className="list-disc list-inside">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>Astra DB (Cassandra)</li>
                  <li>Pinecone</li>
                  <li>Firebase backend cloud services</li>
                  <li>TypeScript</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">AI Development Tools</h3>
                <ul className="list-disc list-inside">
                  <li>OpenAI API</li>
                  <li>Jina.ai API</li>
                  <li>LangChain</li>
                  <li>Langchain.js</li>
                  <li>Puppeteer</li>
                  <li>Google Generative AI</li>
                  <li>GitHub Copilot</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Other Skills</h3>
                <ul className="list-disc list-inside">
                  <li>Git & GitHub</li>
                  <li>Vercel Deployment</li>
                  <li>CI/CD Pipelines</li>
                  <li>Jest Testing</li>
                  <li>Performance Optimization</li>
                  <li>Responsive Design</li>
                  <li>PWA Development</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src="/placeholder.svg?height=200&width=400" alt="Sspot1 Q&A AI" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Sspot1 Q&A AI</h3>
                  <p className="text-gray-700 mb-4">A stand-alone React RAG Application enhancing vendor-client interactions linked to the SSpot1 ecosystem.</p>
                  <a href="https://vi-phi.vercel.app" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">View Project</a>
                </div>
              </div>
              <div className="bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                <img src="/placeholder.svg?height=200&width=400" alt="ILUD" className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">ILUD</h3>
                  <p className="text-gray-700 mb-4">A single-page application developed using ReactJS, showcasing advanced out-of-the-box development skills and problem-solving abilities.</p>
                  <a href="https://ilud.vercel.app" target="_blank" rel="noopener noreferrer" className="text-black font-semibold hover:underline">View Project</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a href="mailto:mhibnyusufanate@gmail.com" className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-300">
                <IconEmail />
                <span>mhibnyusufanate@gmail.com</span>
              </a>
              <a href="https://github.com/mhyanate" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-300">
                <IconGithub />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/mohammed-hayatudeen-yusuf-04804a299" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-black hover:text-gray-600 transition-colors duration-300">
                <IconLinkedIn />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 Mohammed Hayatudeen Yusuf. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}