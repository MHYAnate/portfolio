"use client";

export default function ExpComponent() {
	return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-12 text-center font-[family-name:var(--Poppins-Bold)]">
      Professional Experience
    </h2>
    <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
      <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
      Founder & Lead Developer
      </h3>
      <h4 className="text-xl mb-2 font-[family-name:var(--Poppins-SemiBold)]">
        Sspot1 Ventures |
        <a
          className="text-xl mb-2 font-[family-name:var(--Poppins-Regular)]"
          href="https://www.sspot1.com"
        >
          {" "}
          www.sspot1.com
        </a>
      </h4>
      <p className="text-sm text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
        Business Name Registration NO. 821574
      </p>
      {/* <p className="text-sm text-gray-600 mb-4">Dec 2024 - PRESENT</p> */}
      <ul className="list-disc list-inside space-y-2 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
        <li>
         {`Founded and spearheaded the end-to-end development and launch of Sspot1, a Fire base React.js on Next.js full-stack service marketplace platform, from initial concept through to deployment and post-launch support`}
        </li>
        <li>
          {`Architected and engineered the entire technical stack, designing for scalability, security, and a responsive cross-platform user experience that significantly enhanced client engagement`}
        </li>
        <li>
          {`Directed the development of a standalone Retrieval-Augmented Generation (RAG) application to augment the platform's core functionality, demonstrating expertise in integrating advanced AI solution`}
        </li>
        <li>
          {`Pioneered the adoption of AI-driven development tools (e.g., GitHub Copilot, GPT-engineer) within the workflow, accelerating development cycles and improving code quality by an estimated 30%.`}
        </li>
        <li>
          {`Established and enforced engineering best practices, CI/CD pipelines, and security protocols, acting as the sole technical decision-maker and ensuring robust, maintainable codebases.`}
      
        </li>
        <li>
          {`Managed all aspects of the project lifecycle, from concept ideation to deployment and post-launch support, as the sole lead developer and project engineer ensuring timely delivery and adherence to best practices.`}
      
        </li>
      </ul>
    </div>

  
<div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
<h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)] text-gray-900">
    Frontend-Focused Full Stack Engineer
    </h3>
    <h4 className="text-xl mb-4 font-[family-name:var(--Poppins-SemiBold)] text-black">
        BuyLocal Africa | Admin Portal
    </h4>

    <p className="text-gray-700 mb-4 font-[family-name:var(--Poppins-Regular)]">{`  Orchestrated a full-stack modernization of the core admin portal, bridging frontend and backend domains to `}
      <strong>{`accelerate team velocity by 20%`}</strong> {`and establish a new standard for cross-functional feature delivery.`}
    </p>

    <ul className="list-disc list-inside space-y-3 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
        <li>
            <strong>{`Orchestrated end-to-end feature development`}</strong>{`, architecting solutions from React-based UI components down to robust Node.js/Express APIs with Prisma ORM, ensuring seamless data flow and functionality.`}
        </li>
        <li>
            <strong>{`Spearheaded a "Full-Stack Feature" model`}</strong>{`, authoring and delivering production-grade backend controllers that were seamlessly integrated by the core backend team, effectively reducing their feature backlog and dependency bottlenecks.`}
        </li>
        <li>
            <strong>{`Elevated code quality and architectural standards`}</strong>{`through rigorous peer review with senior engineers, fostering knowledge sharing and ensuring system-wide consistency, performance, and maintainability.`} 
        </li>
        <li>
            <strong>{`Integrated AI-powered tooling`}</strong>{`into the development lifecycle to automate boilerplate, enhance code robustness, and improve test coverage, contributing to a higher-quality and more resilient codebase.`} 
        </li>
    </ul>
</div>

<div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
  

    <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)] text-gray-900">
    Full Stack Engineer
    </h3>
    <h4 className="text-xl mb-4 font-[family-name:var(--Poppins-SemiBold)] text-black">
       Ppoint | Users Interface | Admin Portal
       <a
          className="text-xl mb-2 font-[family-name:var(--Poppins-Regular)]"
          href="https://Ppoint.vercel.app"
        >
          {" "}
          Ppoint.vercel.app
        </a>
    </h4>

  

    <ul className="list-disc list-inside space-y-2 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
        <li>
         {`Founded and spearheading the end-to-end development of of Ppoint, an Express Prisma ORM, React.js on Next.js full-stack Real Estate platform, from the initial concept through to the current deployment phase`}
        </li>
        <li>
          {`Architected and engineered the entire technical stack, designing for scalability, security, and a responsive cross-platform user experience that significantly enhanced client engagement`}
        </li>
      
        <li>
          {`Pioneered the adoption of AI-driven development tools, accelerating development cycles and improving code quality significantly.`}
        </li>
        <li>
          {`Established and enforced engineering best practices, CI/CD pipelines, and security protocols, acting as the sole technical decision-maker and ensuring robust, maintainable codebases.`}
      
        </li>
        <li>
          {`Managed all aspects of the project lifecycle, from concept ideation to the current deployment phase with a clear picure on how the post-launch support phase would look like, as the sole lead developer and project engineer ensuring timely delivery and adherence to best practices.`}
      
        </li>
      </ul>
</div>
  </div>
	);
}
