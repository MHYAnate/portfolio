// "use client";

// export default function EducationComponent() {
// 	return (
// 		<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
// 			<h2 className="text-3xl font-bold mb-12 text-center font-[family-name:var(--Poppins-Bold)]">
// 				Education
// 			</h2>
// 			<div className="bg-gray-100 p-6 rounded-lg shadow-lg">
// 				<h3 className="text-xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
// 					Self-Taught Developer
// 				</h3>
// 				<p className="text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
// 					May 2022 - present
// 				</p>
// 				<h3 className="text-xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
// 					B.tech Urban and Regional Planning
// 				</h3>
// 				<p className="text-gray-600 font-[family-name:var(--Poppins-Regular)]">
// 					Federal University of Technology Minna, Nov 2019
// 				</p>
// 			</div>
// 		</div>
// 	);
// }

"use client";

export default function EducationComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center font-[family-name:var(--Poppins-Bold)]">
        Education & Development
      </h2>

      {/* Continuous Professional Development */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg mb-6">
        <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Continuous Professional Development
        </h3>
        <p className="text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
          2022 – Present
        </p>
        <div className="mb-4">
          <p className="text-gray-800 font-[family-name:var(--Poppins-Regular)] mb-2">
            <strong>Focus Areas:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 font-[family-name:var(--Poppins-Regular)]">
            <li>Distributed Systems Architecture</li>
            <li>AI Architecture & RAG Implementation</li>
            <li>State Management Patterns (TanStack Query, Redux Toolkit)</li>
            <li>Modern JavaScript Ecosystem (Next.js 15, TypeScript, Node.js)</li>
            <li>Security & Authentication (JWT, RBAC, Bcrypt)</li>
            <li>Database Design (PostgreSQL/Prisma, Firebase Firestore, Vector DBs)</li>
          </ul>
        </div>
        <div className="bg-white p-4 rounded-md border-l-4 border-black">
          <p className="text-gray-800 font-[family-name:var(--Poppins-Regular)] text-sm">
            <strong>Core Ecosystem Mastery:</strong> Next.js 15 (App Router), TypeScript, React 18, Node.js, Express.js, TanStack Query, Redux Toolkit, PostgreSQL, Firebase Firestore, OpenAI API, LangChain, Pinecone
          </p>
        </div>
      </div>

      {/* Formal Education */}
      <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          B.Tech, Urban and Regional Planning
        </h3>
        <p className="text-gray-600 mb-2 font-[family-name:var(--Poppins-Regular)]">
          Federal University of Technology Minna | 2019
        </p>
        <div className="bg-white p-4 rounded-md border-l-4 border-black mt-4">
          <p className="text-gray-700 font-[family-name:var(--Poppins-Regular)] text-sm italic">
            Applied systems-thinking and spatial analysis principles to complex software architecture problems. This background informs my approach to designing scalable, interconnected digital ecosystems.
          </p>
        </div>
      </div>

      {/* Technical Skills Summary */}
      <div className="bg-black text-white p-6 rounded-lg shadow-lg mt-6">
        <h3 className="text-xl font-semibold mb-4 font-[family-name:var(--Poppins-SemiBold)]">
          Technical Skills Overview
        </h3>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="text-gray-300 font-[family-name:var(--Poppins-Regular)] text-sm mb-2">
              <strong className="text-white">Core Ecosystem:</strong> Next.js 15 (App Router), TypeScript, React 18, Node.js, Express.js
            </p>
            <p className="text-gray-300 font-[family-name:var(--Poppins-Regular)] text-sm mb-2">
              <strong className="text-white">State Strategy:</strong> TanStack Query (Optimistic UI/Cache Invalidation), Redux Toolkit (AsyncThunk), Context API
            </p>
            <p className="text-gray-300 font-[family-name:var(--Poppins-Regular)] text-sm mb-2">
              <strong className="text-white">Data Architecture:</strong> PostgreSQL (Prisma ORM), Firebase Firestore (NoSQL), Vector Databases (Pinecone/Embeddings)
            </p>
          </div>
          <div>
            <p className="text-gray-300 font-[family-name:var(--Poppins-Regular)] text-sm mb-2">
              <strong className="text-white">Security & Networking:</strong> Custom JWT Auth, Axios Interceptors, Bcrypt, RBAC Middleware
            </p>
            <p className="text-gray-300 font-[family-name:var(--Poppins-Regular)] text-sm mb-2">
              <strong className="text-white">AI & Automation:</strong> OpenAI API, LangChain, RAG Implementation, LLM Integration
            </p>
            <p className="text-gray-300 font-[family-name:var(--Poppins-Regular)] text-sm mb-2">
              <strong className="text-white">Infrastructure:</strong> Cloudinary (Memory Storage), CI/CD, Vercel, Git/GitHub
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}