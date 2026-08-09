import { generatePageSEO, siteConfig } from "@/lib/metadata";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceTechStack } from "@/components/services/ServiceTechStack";
import { ServiceIndustries } from "@/components/services/ServiceIndustries";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = generatePageSEO({
  title: "ERP Solutions — Odoo ERP Implementation Lahore",
  description:
    "Expert Odoo ERP implementation, customization, and support in Lahore and across Pakistan. Transform your business operations with end-to-end ERP solutions from Royal Tech IT. Remote delivery available.",
  keywords:
    "Odoo ERP Lahore, ERP implementation Pakistan, Odoo partner Lahore, Odoo ERP services, ERP solutions Pakistan, Odoo customization Lahore, ERP migration Pakistan, business management software Lahore, remote ERP implementation Pakistan",
});

const hero = {
  title: "ERP Solutions",
  description:
    "Transform your business with enterprise-grade Odoo ERP solutions. From implementation and customization to migration and ongoing support, we deliver end-to-end ERP services that streamline operations, reduce costs, and drive scalable growth across your entire organization.",
  icon: "Database",
};

const overview = {
  title: "Comprehensive ERP Services",
  description:
    "Royal Tech IT is a trusted Odoo ERP partner, helping businesses across Pakistan and the Middle East implement, customize, and optimize their enterprise resource planning systems. Our certified consultants bring deep expertise across manufacturing, retail, trading, and service industries, ensuring your ERP investment delivers maximum ROI from day one.",
  image: "/images/erp-implementation-coding.jpg",
  features: [
    "Full-cycle Odoo ERP implementation from requirement analysis to go-live",
    "Seamless data migration from legacy systems including SAP, Oracle, and QuickBooks",
    "Custom module development tailored to your unique business workflows",
    "End-user training programs with hands-on workshops and comprehensive documentation",
    "24/7 technical support with guaranteed SLA-backed response times",
    "Third-party integration with payment gateways, logistics APIs, and banking systems",
    "Post-deployment maintenance, performance tuning, and continuous improvement",
    "Business process automation across finance, inventory, HR, sales, and procurement",
  ],
};

const benefits = [
  {
    icon: "Zap",
    title: "Increased Efficiency",
    description:
      "Automate repetitive tasks and eliminate manual data entry. Businesses using Odoo ERP report a 35% reduction in operational overhead within the first six months of deployment.",
  },
  {
    icon: "DollarSign",
    title: "Cost Reduction",
    description:
      "Consolidate multiple software licenses into a single unified platform. Our clients save an average of 40% on annual software costs while gaining better visibility and control.",
  },
  {
    icon: "Layers",
    title: "Scalability",
    description:
      "Grow without limits. Odoo's modular architecture lets you add new business functions, subsidiaries, and users seamlessly as your organization expands across regions and product lines.",
  },
  {
    icon: "BarChart3",
    title: "Real-time Visibility",
    description:
      "Access live dashboards and customizable reports across all departments. Make data-driven decisions with accurate, up-to-the-minute insights into cash flow, inventory, and performance.",
  },
];

const process = [
  {
    step: 1,
    title: "Discovery & Assessment",
    description:
      "We conduct in-depth interviews with key stakeholders, map your current workflows, identify pain points, and define measurable success criteria. This phase includes a comprehensive gap analysis and technology audit.",
  },
  {
    step: 2,
    title: "Solution Architecture",
    description:
      "Our architects design a tailored ERP blueprint covering module selection, data migration strategy, integration points, and custom development needs. You receive a detailed project roadmap with timelines and cost estimates.",
  },
  {
    step: 3,
    title: "Development & Configuration",
    description:
      "We configure Odoo modules to match your business processes, develop custom features, set up workflows, and build integrations. Regular sprint reviews ensure the solution evolves with your feedback.",
  },
  {
    step: 4,
    title: "Deployment & Migration",
    description:
      "Data is migrated with zero-loss assurance using validated scripts and rollback procedures. We perform UAT, load testing, and security audits before cutting over to production in a planned go-live window.",
  },
  {
    step: 5,
    title: "Training & Ongoing Support",
    description:
      "End-user training is delivered through on-site workshops, video libraries, and interactive manuals. Our support team provides SLA-backed assistance, system monitoring, and quarterly optimization reviews.",
  },
];

const technologies = [
  { name: "Odoo", description: "Open-source ERP suite with 80+ integrated modules for enterprise business management.", icon: "Database" },
  { name: "Python", description: "Core backend language for Odoo development, custom modules, and business logic implementation.", icon: "Code2" },
  { name: "PostgreSQL", description: "Reliable relational database used by Odoo for secure, scalable data storage and reporting.", icon: "Database" },
  { name: "Docker", description: "Containerized deployment ensuring consistent environments across development, staging, and production.", icon: "Server" },
  { name: "AWS", description: "Cloud infrastructure hosting with auto-scaling, load balancing, and 99.99% uptime SLA.", icon: "Cloud" },
  { name: "React", description: "Modern frontend framework for building custom Odoo dashboards and portal interfaces.", icon: "Code2" },
];

const industries = [
  { name: "Manufacturing", description: "Production planning, BOM management, quality control, and shop floor integration.", icon: "Factory" },
  { name: "Retail & E-commerce", description: "POS integration, inventory synchronization, multi-channel order management.", icon: "ShoppingBag" },
  { name: "Trading & Distribution", description: "Supply chain optimization, warehouse management, and logistics tracking.", icon: "Truck" },
  { name: "Construction & Real Estate", description: "Project costing, subcontractor management, and property lifecycle tracking.", icon: "Building2" },
  { name: "Healthcare", description: "Patient records, inventory tracking, billing automation, and regulatory compliance.", icon: "Stethoscope" },
  { name: "Education", description: "Student management, fee processing, attendance tracking, and academic reporting.", icon: "GraduationCap" },
];

const faqs = [
  {
    question: "How long does an Odoo ERP implementation typically take?",
    answer:
      "Implementation timelines vary based on business complexity and module count. A standard deployment for a mid-size company with core modules (accounting, sales, inventory, HR) typically takes 8 to 14 weeks. Larger enterprises with custom development and extensive integrations may require 4 to 6 months. We provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Can Odoo be customized to fit our existing business processes?",
    answer:
      "Absolutely. Odoo is highly modular and customizable. Our team develops custom modules, modifies existing workflows, and configures the system to match your exact business processes while preserving upgrade compatibility for future Odoo releases.",
  },
  {
    question: "What is the cost of Odoo ERP implementation?",
    answer:
      "Costs depend on factors including the number of users, modules required, customization complexity, and data migration needs. We offer transparent, fixed-price proposals after the discovery phase. Typical projects range from PKR 1.5 million for basic deployments to PKR 8 million for enterprise-grade implementations.",
  },
  {
    question: "Do you provide post-implementation support and maintenance?",
    answer:
      "Yes. We offer tiered support packages covering bug fixes, system monitoring, performance optimization, version upgrades, and priority helpdesk access. Our standard SLA ensures critical issues are addressed within 4 business hours. Annual maintenance contracts start at 18% of the implementation cost.",
  },
  {
    question: "How do you handle data migration from our existing ERP system?",
    answer:
      "We follow a structured data migration methodology including data auditing, cleaning, mapping, and validation. We support migrations from SAP, Oracle, QuickBooks, Tally, Microsoft Dynamics, and Excel-based systems. All migrations include dry-run testing and rollback plans to ensure zero data loss during go-live.",
  },
];

export default function ERPSolutionsPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/` },
      { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
      { "@type": "ListItem", position: 3, name: "ERP Solutions", item: `${siteConfig.url}/services/erp` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
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
