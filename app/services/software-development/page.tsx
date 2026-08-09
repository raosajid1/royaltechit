import { generatePageSEO } from "@/lib/metadata";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceTechStack } from "@/components/services/ServiceTechStack";
import { ServiceIndustries } from "@/components/services/ServiceIndustries";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = generatePageSEO({
  title: "Software Development",
  description:
    "Custom software development services using React, Node.js, Python, .NET, and modern frameworks. Build scalable, secure enterprise applications tailored to your business.",
  keywords:
    "software development, custom software, React development, Node.js, Python, .NET, enterprise software, Pakistan software house",
});

const hero = {
  title: "Software Development",
  description:
    "Build powerful, scalable software solutions tailored to your business needs. From enterprise applications and SaaS platforms to internal tools and APIs, our development team delivers robust, maintainable code using modern frameworks and best practices.",
  icon: "Code2",
};

const overview = {
  title: "Custom Software Engineering",
  description:
    "Royal Tech IT's software development practice combines technical excellence with deep industry knowledge. We build custom applications that solve real business problems, using agile methodologies to ensure transparency, quality, and on-time delivery. Whether you need a greenfield application, legacy system modernization, or API integration layer, our engineers deliver production-ready software.",
  image: "/images/web-software-development.jpg",
  features: [
    "Full-stack web application development using Next.js, React, Angular, and Vue.js",
    "Backend services and APIs built with Node.js, Python (Django/FastAPI), and .NET Core",
    "Enterprise application development with microservices architecture and event-driven design",
    "Legacy system modernization and migration to modern technology stacks",
    "RESTful and GraphQL API development with comprehensive documentation",
    "Database design and optimization for PostgreSQL, MySQL, MongoDB, and Redis",
    "CI/CD pipeline setup, automated testing, and containerized deployments",
    "Code audits, technical due diligence, and architecture consulting",
  ],
};

const benefits = [
  {
    icon: "Zap",
    title: "Faster Time to Market",
    description:
      "Our agile sprints and experienced teams accelerate development cycles. We deliver MVPs in as little as 6 weeks and full production applications within 3 to 6 months, depending on complexity.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Architecture",
    description:
      "Every application is built with growth in mind. Microservices, horizontal scaling, and caching strategies ensure your software handles 10x growth without performance degradation.",
  },
  {
    icon: "Shield",
    title: "Enterprise-Grade Security",
    description:
      "Security is embedded from day one. OWASP Top 10 compliance, input sanitization, authentication best practices, encrypted data storage, and regular penetration testing protect your application.",
  },
  {
    icon: "Headphones",
    title: "Dedicated Support & Maintenance",
    description:
      "Post-launch, we provide ongoing maintenance including bug fixes, performance monitoring, feature enhancements, and infrastructure management. Our SLA guarantees 99.9% application uptime.",
  },
];

const process = [
  {
    step: 1,
    title: "Requirements & Planning",
    description:
      "We work closely with stakeholders to define functional requirements, user stories, technical constraints, and success metrics. This phase produces a detailed PRD, wireframes, system architecture, and a phased delivery roadmap.",
  },
  {
    step: 2,
    title: "Design & Prototyping",
    description:
      "UX/UI designers create interactive prototypes that are validated with end users before development begins. We establish design systems, component libraries, and responsive layouts that align with your brand.",
  },
  {
    step: 3,
    title: "Agile Development",
    description:
      "Development proceeds in two-week sprints with daily standups, sprint reviews, and retrospectives. Each sprint delivers a potentially shippable increment with automated tests and documentation.",
  },
  {
    step: 4,
    title: "Testing & Quality Assurance",
    description:
      "Comprehensive testing includes unit tests, integration tests, end-to-end tests, performance benchmarks, and security scans. QA engineers work in parallel with developers to catch issues early.",
  },
  {
    step: 5,
    title: "Deployment & Operations",
    description:
      "We deploy using automated CI/CD pipelines with blue-green or canary release strategies. Post-deployment, we monitor application health, set up alerting, and provide ongoing operational support.",
  },
];

const technologies = [
  { name: "React & Next.js", description: "Modern frontend framework for building fast, SEO-friendly web applications with server-side rendering.", icon: "Code2" },
  { name: "Node.js", description: "Event-driven JavaScript runtime for building scalable backend services and real-time APIs.", icon: "Server" },
  { name: "Python", description: "Versatile language used for backend services, data processing, and AI/ML integrations.", icon: "Code2" },
  { name: ".NET Core", description: "Enterprise-grade framework for building robust, high-performance business applications on Windows and Linux.", icon: "Code2" },
  { name: "PostgreSQL", description: "Advanced relational database with ACID compliance, JSON support, and excellent query performance.", icon: "Database" },
  { name: "AWS / Azure", description: "Cloud platforms providing scalable infrastructure, managed databases, and serverless computing services.", icon: "Cloud" },
  { name: "Docker & Kubernetes", description: "Container orchestration ensuring consistent environments and seamless scaling across deployments.", icon: "Server" },
  { name: "GitHub Actions", description: "CI/CD automation for build, test, and deployment pipelines with integrated code quality checks.", icon: "GitBranch" },
];

const industries = [
  { name: "Financial Services", description: "Trading platforms, lending systems, KYC workflows, and regulatory reporting solutions.", icon: "Landmark" },
  { name: "Healthcare", description: "EHR systems, practice management software, telemedicine platforms, and HIPAA-compliant solutions.", icon: "Stethoscope" },
  { name: "Logistics & Supply Chain", description: "Fleet management, warehouse optimization, route planning, and real-time tracking systems.", icon: "Truck" },
  { name: "E-commerce", description: "Custom storefronts, marketplace platforms, payment integrations, and order management systems.", icon: "ShoppingBag" },
  { name: "Education & E-learning", description: "LMS platforms, virtual classrooms, assessment engines, and student information systems.", icon: "GraduationCap" },
  { name: "Real Estate", description: "Property management systems, CRM platforms, listing portals, and contract lifecycle tools.", icon: "Building2" },
];

const faqs = [
  {
    question: "What is the typical cost of custom software development?",
    answer:
      "Development costs depend on scope, complexity, and technology stack. Simple internal tools with basic CRUD functionality start around PKR 1.5 million. Mid-complexity SaaS applications range from PKR 3 to 8 million. Enterprise platforms with microservices, AI, and complex integrations can exceed PKR 15 million. We provide detailed estimates after the requirements phase.",
  },
  {
    question: "How do you ensure software quality and reliability?",
    answer:
      "Quality is built into our process through automated testing (unit, integration, E2E), code reviews, static analysis, and continuous integration. We maintain code coverage targets of 80% or higher and follow industry-standard coding practices including SOLID principles, design patterns, and clean architecture.",
  },
  {
    question: "Can you integrate with our existing systems and third-party APIs?",
    answer:
      "Yes, integration is a core capability. We have extensive experience integrating with payment gateways (Stripe, PayFast, JazzCash), ERP systems (Odoo, SAP), CRM platforms (Salesforce, HubSpot), communication APIs (Twilio, SendGrid), and social platforms. We build robust, fault-tolerant integrations with proper error handling.",
  },
  {
    question: "What post-launch support do you provide?",
    answer:
      "We offer comprehensive post-launch support including bug fixes, performance optimization, feature enhancements, infrastructure monitoring, and security patching. Support packages range from 20 to 80 hours per month with 4-hour critical issue response time. Long-term retainer agreements are available at discounted rates.",
  },
  {
    question: "What is your approach to intellectual property and source code ownership?",
    answer:
      "You retain 100% ownership of all source code, design assets, documentation, and intellectual property developed during the engagement. We sign NDAs and IP assignment agreements before work begins. Upon project completion, we provide full handover including source code repositories, deployment scripts, and architecture documentation.",
  },
];

export default function SoftwareDevelopmentPage() {
  return (
    <>
      <ServiceHero title={hero.title} description={hero.description} icon={hero.icon} />
      <ServiceOverview title={overview.title} description={overview.description} features={overview.features} image={overview.image} />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess process={process} />
      <ServiceTechStack technologies={technologies} />
      <ServiceIndustries industries={industries} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
