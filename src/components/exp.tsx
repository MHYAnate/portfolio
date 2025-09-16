"use client";

export default function ExpComponent() {
	return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl font-bold mb-12 text-center font-[family-name:var(--Poppins-Bold)]">
      Professional Experience
    </h2>
    <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
      <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
        Software Developer, Project Engineer and Founder
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
          Developed and launched Sspot1, a full-stack
          progressive web application connecting vendors with clients, revolutionizing
          service procurement.
        </li>
        <li>
          Pioneered responsive UI/UX design to ensure cross-platform
          compatibility and user satisfaction.
        </li>
        <li>
          Designed and implemented a standalone RAG application related
          to Sspot1.
        </li>
        <li>
          Utilized a wide range of AI tools to enhance development
          efficiency and product quality.
        </li>
        <li>
          Managed all aspects of the project lifecycle, from concept
          ideation to deployment and post-launch support within three months for development plus about three weeks for ideation, as the sole
          software developer and project engineer ensuring timely delivery
          and adherence to best practices.
        </li>
      </ul>
    </div>

  
<div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
    <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)] text-gray-900">
        Frontend Engineer | Full Stack Initiative
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
            <strong>{`Drove a 20% increase in feature delivery speed`}</strong>{`by defining clear API contracts and providing implemented patterns, drastically reducing cross-team negotiation and development cycles.`} 
        </li>
        <li>
            <strong>{`Elevated code quality and architectural standards`}</strong>{`through rigorous peer review with senior engineers, fostering knowledge sharing and ensuring system-wide consistency, performance, and maintainability.`} 
        </li>
        <li>
            <strong>{`Integrated AI-powered tooling`}</strong>{`into the development lifecycle to automate boilerplate, enhance code robustness, and improve test coverage, contributing to a higher-quality and more resilient codebase.`} 
        </li>
    </ul>
</div>
  </div>
	);
}
