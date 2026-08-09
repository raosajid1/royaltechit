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
  title: "Web Development",
  description:
    "Professional web development services including Next.js, WordPress, Shopify, and custom websites. Responsive, fast, and SEO-optimized web solutions.",
  keywords:
    "web development, Next.js development, WordPress websites, Shopify stores, custom web design, responsive websites, Pakistan web developers",
});

const hero = {
  title: "Web Development",
  description:
    "Create a powerful online presence with websites that are fast, beautiful, and conversion-focused. From corporate websites and e-commerce stores to web portals and CMS platforms, we build responsive web solutions that drive business results.",
  icon: "Globe",
};

const overview = {
  title: "Full-Spectrum Web Development",
  description:
    "Royal Tech IT delivers end-to-end web development services spanning UI/UX design, frontend engineering, backend development, CMS integration, and ongoing maintenance. Whether you need a high-performance Next.js corporate site, a feature-rich WooCommerce store, or a scalable WordPress enterprise portal, our team delivers pixel-perfect, SEO-optimized web experiences.",
  image: "/images/ux-wireframe-design.jpg",
  features: [
    "Custom website design with responsive layouts optimized for all devices and screen sizes",
    "Next.js and React development for blazing-fast, SEO-friendly web applications",
    "WordPress development including custom themes, plugins, and WooCommerce stores",
    "Shopify store setup with custom theme development and app integrations",
    "E-commerce solutions with payment gateway integration, inventory sync, and order management",
    "Web performance optimization achieving 90+ PageSpeed scores and Core Web Vitals compliance",
    "Content management systems with intuitive admin interfaces and role-based access",
    "SEO implementation including structured data, meta tags, sitemaps, and canonical URLs",
  ],
};

const benefits = [
  {
    icon: "Zap",
    title: "Lightning-Fast Performance",
    description:
      "Websites built with Next.js and optimized hosting achieve sub-second load times. Faster sites improve user engagement, reduce bounce rates, and boost search engine rankings significantly.",
  },
  {
    icon: "TrendingUp",
    title: "SEO-Optimized Architecture",
    description:
      "Every website is built with SEO best practices from the ground up. Server-side rendering, semantic HTML, structured data, and optimized Core Web Vitals ensure strong organic search performance.",
  },
  {
    icon: "Users",
    title: "Exceptional User Experience",
    description:
      "Intuitive navigation, clear calls-to-action, and thoughtful micro-interactions create engaging user journeys. Our designs focus on conversion optimization and accessibility compliance (WCAG 2.1).",
  },
  {
    icon: "Headphones",
    title: "Managed Hosting & Maintenance",
    description:
      "We offer complete managed hosting with automated backups, SSL management, security monitoring, and performance optimization. Regular updates keep your site secure and running smoothly.",
  },
];

const process = [
  {
    step: 1,
    title: "Discovery & Strategy",
    description:
      "We learn about your brand, audience, goals, and competitors. A detailed project brief is created covering site structure, content requirements, design preferences, functionality needs, and performance targets.",
  },
  {
    step: 2,
    title: "UI/UX Design",
    description:
      "Wireframes and high-fidelity mockups are created in Figma, covering all page templates, responsive breakpoints, and interaction states. Designs are reviewed and approved before any coding begins.",
  },
  {
    step: 3,
    title: "Development & CMS Integration",
    description:
      "Frontend and backend development proceeds in parallel. We build reusable components, integrate the CMS, set up data models, and implement all functionality. Regular staging deployments allow client previews.",
  },
  {
    step: 4,
    title: "Testing & Optimization",
    description:
      "Comprehensive testing covers cross-browser compatibility, mobile responsiveness, performance benchmarks, accessibility checks, and SEO validation. Issues are logged and resolved before launch.",
  },
  {
    step: 5,
    title: "Launch & Post-Launch Support",
    description:
      "Deployment is executed with zero downtime using CI/CD pipelines. After launch, we monitor performance, manage backups, apply security patches, and provide ongoing content updates as needed.",
  },
];

const technologies = [
  { name: "Next.js", description: "React framework with SSR, static generation, and optimized performance for production web applications.", icon: "Globe" },
  { name: "WordPress", description: "Industry-leading CMS with flexible customization through custom themes, plugins, and page builders.", icon: "Globe" },
  { name: "Shopify", description: "Enterprise e-commerce platform with secure checkout, inventory management, and extensive app ecosystem.", icon: "ShoppingBag" },
  { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid, consistent UI development with responsive design built in.", icon: "Palette" },
  { name: "TypeScript", description: "Typed JavaScript superset that catches errors early and improves code maintainability across large projects.", icon: "Code2" },
  { name: "PostgreSQL", description: "Reliable database for dynamic websites and web applications requiring complex data relationships.", icon: "Database" },
  { name: "Vercel / AWS", description: "Enterprise hosting platforms with global CDN, edge functions, and auto-scaling infrastructure.", icon: "Cloud" },
  { name: "Sanity / Strapi", description: "Headless CMS solutions providing structured content management with real-time collaboration APIs.", icon: "Database" },
];

const industries = [
  { name: "Corporate & Professional Services", description: "Company websites, portfolio sites, and client portals with professional branding and lead generation.", icon: "Building2" },
  { name: "E-commerce & Retail", description: "Online stores with product catalogs, shopping carts, payment processing, and order tracking.", icon: "ShoppingBag" },
  { name: "Education & E-learning", description: "Course platforms, school websites, learning management systems, and student portals.", icon: "GraduationCap" },
  { name: "Healthcare", description: "Clinic websites, patient portals, appointment booking systems, and telemedicine interfaces.", icon: "Stethoscope" },
  { name: "Hospitality & Tourism", description: "Hotel websites, booking engines, travel portals, and restaurant ordering systems.", icon: "Hotel" },
  { name: "Non-Profit & Government", description: "Informational portals, donation platforms, citizen service portals, and public communication sites.", icon: "Landmark" },
];

const faqs = [
  {
    question: "Which platform should I choose for my website?",
    answer:
      "It depends on your needs. For high-performance marketing sites and web applications, Next.js is ideal. For content-heavy sites that need easy editing, WordPress is the best choice. For e-commerce, Shopify provides a complete out-of-the-box solution. We conduct a free discovery session to recommend the right platform for your specific requirements and budget.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Timelines vary by project scope. A standard 5-10 page corporate website takes 4 to 6 weeks. E-commerce stores typically require 8 to 12 weeks for full setup including product catalog and payment integration. Complex web applications or custom portals may take 3 to 5 months. We provide a detailed timeline during the discovery phase.",
  },
  {
    question: "Do you provide content writing and SEO services?",
    answer:
      "Yes, we offer professional copywriting services tailored to your brand voice and target audience. Our SEO services include keyword research, on-page optimization, technical SEO, local SEO, and monthly performance reporting. Content and SEO can be bundled with your web development project or provided as standalone services.",
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer:
      "Absolutely. All websites we build are fully responsive and tested across desktop, tablet, and mobile devices. We follow mobile-first design principles and ensure touch-friendly interactions, appropriate font sizes, and optimized images for every screen size. Mobile responsiveness is a core requirement, not an afterthought.",
  },
  {
    question: "What ongoing maintenance do you provide after launch?",
    answer:
      "Our maintenance packages include regular CMS and plugin updates, security patches, daily backups, performance monitoring, uptime monitoring, and support for content updates. Monthly plans start at PKR 15,000 for basic maintenance and go up to PKR 50,000 for comprehensive managed services including content updates and monthly reports.",
  },
];

export default function WebDevelopmentPage() {
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
