"use client";

export default function ExpComponent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold mb-12 text-center font-[family-name:var(--Poppins-Bold)]">
        Professional Experience
      </h2>

      {/* Root Artisan Farmers Development Foundation */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
        <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Lead Full-Stack Engineer
        </h3>
        <h4 className="text-xl mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Root Artisan Farmers Development Foundation |
          <a
            className="text-xl mb-2 font-[family-name:var(--Poppins-Regular)]"
            href="https://www.rootaf.ng"
          >
            {" "}
            www.rootaf.ng
          </a>
        </h4>
        <p className="text-sm text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
          Feb 2026 - Present | part-time venture
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
          <li>
            {`Full-stack platform from scratch using NestJS (Prisma + PostgreSQL) and Next.js 15 (App Router) with TypeScript.`}
          </li>
          <li>
            {`Designed a flexible user model supporting three roles (Member, Client, Admin) with distinct registration flows, document-based verification, and granular RBAC.`}
          </li>
          <li>
            {`Implemented a secure authentication system with JWT, refresh tokens, and HTTP-only cookies; built admin-controlled verification workflows (approve/reject/resubmit) for member and client registrations.`}
          </li>
          <li>
            {`Developed a dynamic marketplace enabling members to list products, services, and tools with advanced pricing options (fixed/negotiable), availability statuses, and tool leasing periods.`}
          </li>
          <li>
            {`Engineered a media pipeline using Multer memory storage + Cloudinary for zero-disk uploads of profile photos, NIN images, and certificate documents - all validated and transformed server-side.`}
          </li>
          <li>
            {`Created a modular admin portal with audit logging, content management (About page, leadership, sponsors, testimonials, events), and a custom dashboard for verifying users and documents.`}
          </li>
          <li>
            {`Optimised data fetching with TanStack Query on the frontend, implementing optimistic updates and cache invalidation for a snappy UX.`}
          </li>
          <li>
            {`Leveraged AI tools (Cursor, GitHub Copilot) to scaffold repetitive code and generate seed data, while maintaining 100% control over architecture and business logic - reducing boilerplate time by ~30%.`}
          </li>
        </ul>
      </div>

      {/* SureShops */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
        <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Technical Co-Founder & Lead software Engineer
        </h3>
        <h4 className="text-xl mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          SureShops |
          <a
            className="text-xl mb-2 font-[family-name:var(--Poppins-Regular)]"
            href="https://sureshops.vercel.app/"
          >
            {" "}
            sureshops.vercel.app
          </a>
        </h4>
        <p className="text-sm text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
          Feb 2026 - Present | Part-Time Venture
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
          <li>
            <strong>Scalable NestJS Architecture:</strong>
            {` Engineered a modular backend using NestJS 11 with MongoDB/Mongoose, implementing clean separation of concerns across authentication, vendor management, location services, and media handling modules`}
          </li>
          <li>
            <strong>Hierarchical Geospatial Data Model:</strong>
            {` Designed a multi-tier location schema (State -> Area -> Market/Mall/Home -> Shop Number) with indexed queries enabling sub-100ms filtering across thousands of vendor records for proximity-based discovery.`}
          </li>
          <li>
            <strong>Enterprise Authentication System:</strong>
            {` Implemented Passport-JWT strategy with NestJS Guards, featuring secure vendor onboarding, role-based access control, and bcrypt password hashing for banking/contact data protection.`}
          </li>
          <li>
            <strong>Advanced Media Pipeline:</strong>
            {` Built a multi-asset upload system supporting shop entrance photos, logos, and market layout images using Multer-Cloudinary streaming integration, enabling visual shop navigation within market complexes.`}
          </li>
          <li>
            <strong>Automated Data Seeding Infrastructure:</strong>
            {` Developed a CLI-based seed command system (seed: locations, seed: admins, seed:categories) using ts-node for rapid environment bootstrapping and consistent test data generation.`}
          </li>
          <li>
            <strong>Validation & Data Integrity:</strong>
            {` Leveraged class-validator and class-transformer for strict DTO validation, ensuring data integrity for sensitive vendor banking details and contact information across all API endpoints.`}
          </li>
        </ul>
      </div>

      {/* Ppoint */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
        <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Technical Co-Founder & Lead Software Engineer
        </h3>
        <h4 className="text-xl mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Ppoint | Admin & User Portals |
          <a
            className="text-xl mb-2 font-[family-name:var(--Poppins-Regular)]"
            href="https://ppoint.vercel.app/"
          >
            {" "}
            ppoint.vercel.app
          </a>
        </h4>
        <p className="text-sm text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
          Sept 2025 - Present | Part-Time Venture
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
          <li>
            <strong>Bespoke Authentication Architecture:</strong>
            {` Engineered a secure, session-persisted JWT & Axios Interceptor system for phone number-based logins. Automated token refresh logic and 401 error handling, eliminating external auth providers and reducing operational costs by 20%.`}
          </li>
          <li>
            <strong>Optimistic UI Implementation:</strong>
            {` Leveraged TanStack Query to decouple server state from client UI, enabling instant updates for user CRUD operations and reducing perceived latency for key user workflows by over 40%.`}
          </li>
          <li>
            <strong>High-Performance Media Pipeline:</strong>
            {` Designed a zero-disk-I/O image service using Multer Memory Storage, streaming buffers directly to Cloudinary. This architecture eliminated server storage bottlenecks and significantly improved upload throughput for media assets.`}
          </li>
          <li>
            <strong>Strictly Typed API Layer:</strong>
            {` Abstracted HTTP logic into a modular service layer with centralized error handling, ensuring end-to-end type safety across the frontend and reducing boilerplate codes`}
          </li>
        </ul>
      </div>

      {/* Sspot1 */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
        <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Technical Co-Founder & Lead Full-Stack Engineers
        </h3>
        <h4 className="text-xl mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Sspot1 Ventures |
          <a
            className="text-xl mb-2 font-[family-name:var(--Poppins-Regular)]"
            href="https://sspot1.vercel.app"
          >
            {" "}
            https://sspot1.vercel.app
          </a>
        </h4>
        <p className="text-sm text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
          Dec 2024 - PRESENT | Part-Time Venture
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
          <li>
            <strong>Type-Safe NoSQL Architecture:</strong>
            {` Architected a scalable Firebase Firestore database, implementing strict TypeScript interfaces on unstructured documents to prevent schema drift and ensure data integrity across critical services.`}
          </li>
          <li>
            <strong>Advanced State Management:</strong>
            {` Utilized Redux Toolkit and createAsyncThunk to manage complex asynchronous data streams, ensuring predictable loading states and robust error handling for critical, high-value payment flows.`}
          </li>
          <li>
            <strong>Engineering Leadership:</strong>
            {` Established CI/CD pipelines and enforced code review standards, accelerating the development cycle for a 3-person team by 30% through the adoption of AI-assisted tooling (GitHub Copilot).`}
          </li>
        </ul>
      </div>

      {/* BuyLocal Africa */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
        <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)] text-gray-900">
          Frontend-Focused Full Stack Engineer (Contract)
        </h3>
        <h4 className="text-xl mb-2 font-[family-name:var(--Poppins-SemiBold)] text-black">
          BuyLocal Africa | Admin Portal
        </h4>
        <p className="text-sm text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
          April 2025 - Aug 2025
        </p>
        
        <p className="text-gray-800 mb-4 font-[family-name:var(--Poppins-Regular)]">
          {`Served as the lead technical liaison between backend services and frontend requirements, ensuring MVP viability.`}
        </p>

        <ul className="list-disc list-inside space-y-3 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
          <li>
            <strong>Backend-to-Frontend Liaison:</strong>
            {` Served as the technical bridge between backend services and frontend requirements, ensuring the MVP Admin Portal remained functional and stable during rapid backend schema iterations.`}
          </li>
          <li>
            <strong>Full-Stack Diagnostics:</strong>
            {` Utilized "White-Box" debugging across the Express/Prisma backend to trace erratic UI behavior down to the specific database query level, significantly reducing average debugging time for the core team by 25%.`}
          </li>
          <li>
            <strong>Resilient Data Consumption:</strong>
            {` Refactored the frontend data layer to gracefully handle unstable API contracts and edge cases, ensuring business continuity during the platform's early beta phase.`}
          </li>
        </ul>
      </div>

      {/* Technical Projects Section */}
      <h2 className="text-3xl font-bold mb-8 mt-16 text-center font-[family-name:var(--Poppins-Bold)]">
        Technical Projects
      </h2>

      {/* Sspot1 Analytics */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
        <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          Sspot1 Analytics (Al-Powered Business Intelligence)
        </h3>
        <h4 className="text-xl mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          <a
            className="text-xl mb-2 font-[family-name:var(--Poppins-Regular)]"
            href="https://vi-phi.vercel.app"
          >
            vi-phi.vercel.app
          </a>
        </h4>
        <p className="text-sm text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
          Stack: React, OpenAI API, Vector Database, Node.js.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
          <li>
            {`Built a production-ready RAG architecture allowing natural language query of vendor data.`}
          </li>
          <li>
            {`Optimized for streaming LLM responses to achieve low-latency interaction for prospective enterprise users.`}
          </li>
        </ul>
      </div>

      {/* BEasy */}
      <div className="bg-white mt-10 p-6 rounded-lg shadow-lg border-l-4 border-black">
        <h3 className="text-2xl font-semibold mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          BEasy (Multi-Vendor Marketplace)
        </h3>
        <h4 className="text-xl mb-2 font-[family-name:var(--Poppins-SemiBold)]">
          <a
            className="text-xl mb-2 font-[family-name:var(--Poppins-Regular)]"
            href="https://ilud.vercel.app"
          >
            ilud.vercel.app
          </a>
        </h4>
        <p className="text-sm text-gray-600 mb-4 font-[family-name:var(--Poppins-Regular)]">
          Stack: Next.js, Redux Toolkit, TypeScript.
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-800 font-[family-name:var(--Poppins-Regular)]">
          <li>
            {`Designed a multi-tenant schema supporting independent job postings and global cart states.`}
          </li>
          <li>
            {`Successfully validated core marketplace mechanics and vendor interactions, serving as the blueprint for full-scale development.`}
          </li>
        </ul>
      </div>
    </div>
  );
}