export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  href: string;
}

export interface Industry {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Testimonial {
  name: string;
  company: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  slug: string;
}

export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  technologies: string[];
  image: string;
  results: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export const services: Service[] = [
  {
    id: "erp",
    title: "ERP Solutions",
    description: "End-to-end Odoo ERP implementation, customization, and support across Lahore and all of Pakistan — the world's leading open-source ERP platform.",
    icon: "LayoutGrid",
    image: "/images/construction-manufacturing-erp.jpg",
    features: ["Odoo ERP Implementation", "ERP Migration & Upgrades", "Business Process Automation", "Custom Module Development", "Training & Change Management", "24/7 Support & Maintenance"],
    href: "/services/erp",
  },
  {
    id: "accounting",
    title: "Accounting Services",
    description: "Professional bookkeeping, financial reporting, and accounting solutions in Lahore and across Pakistan — keeping your finances accurate, compliant, and up-to-date.",
    icon: "Receipt",
    image: "/images/it-consultation-meeting.jpg",
    features: ["Bookkeeping", "Financial Statements", "Bank Reconciliation", "Payroll Management", "Accounts Payable/Receivable", "Monthly Closing"],
    href: "/services/accounting",
  },
  {
    id: "tax",
    title: "Tax Consultancy",
    description: "Expert tax planning, compliance, and filing services to minimize liabilities and ensure full regulatory compliance.",
    icon: "FileCheck",
    image: "/images/business-team-office.jpg",
    features: ["Income Tax Planning", "Sales Tax Compliance", "Corporate Tax Filing", "Tax Audit Support", "FBR Compliance", "International Tax"],
    href: "/services/tax",
  },
  {
    id: "software",
    title: "Software Development",
    description: "Custom software solutions built with modern technologies to solve complex business challenges.",
    icon: "Code",
    image: "/images/web-software-development.jpg",
    features: ["Custom Web Applications", "Desktop Software", "API Development", "Cloud Applications", "Legacy System Modernization", "Quality Assurance"],
    href: "/services/software-development",
  },
  {
    id: "web",
    title: "Web Development",
    description: "Professional websites and web applications that combine stunning design with powerful functionality.",
    icon: "Globe",
    image: "/images/ux-wireframe-design.jpg",
    features: ["Corporate Websites", "E-commerce Solutions", "WordPress Development", "Custom CMS", "Landing Pages", "UI/UX Design"],
    href: "/services/web-development",
  },
  {
    id: "mobile",
    title: "Mobile Apps",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences on iOS and Android.",
    icon: "Smartphone",
    image: "/images/whatsapp-business-mobile.jpg",
    features: ["iOS App Development", "Android App Development", "Flutter Development", "React Native", "App Maintenance", "App Store Publishing"],
    href: "/services/mobile-development",
  },
  {
    id: "cloud",
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure, migration, and management services to enhance agility and reduce operational costs.",
    icon: "Cloud",
    image: "/images/team-meeting-laptops.jpg",
    features: ["Cloud Migration", "AWS/Azure/GCP", "Infrastructure Management", "Cloud Security", "Backup & DR", "Cost Optimization"],
    href: "/services/cloud",
  },
  {
    id: "security",
    title: "Cyber Security",
    description: "Comprehensive security solutions to protect your business from evolving cyber threats and ensure data integrity.",
    icon: "Shield",
    image: "/images/business-handshake-partnership.jpg",
    features: ["Security Audits", "Penetration Testing", "Firewall Management", "Endpoint Protection", "Network Security", "Email Security"],
    href: "/services/cyber-security",
  },
  {
    id: "marketing",
    title: "Digital Marketing",
    description: "Data-driven digital marketing strategies that increase visibility, generate leads, and drive measurable growth.",
    icon: "TrendingUp",
    image: "/images/creative-team-collaboration.jpg",
    features: ["Search Engine Optimization", "Google Ads Management", "Social Media Marketing", "Content Marketing", "Email Campaigns", "Analytics & Reporting"],
    href: "/services/digital-marketing",
  },
];

export const industries: Industry[] = [
  { id: "manufacturing", title: "Manufacturing", description: "Streamline production, inventory, and supply chain with industry-specific ERP solutions.", icon: "Factory", href: "/industries/manufacturing" },
  { id: "retail", title: "Retail", description: "Omnichannel retail management with POS integration, inventory tracking, and customer insights.", icon: "ShoppingBag", href: "/industries/retail" },
  { id: "trading", title: "Trading", description: "End-to-end trading management from procurement to delivery with real-time analytics.", icon: "ArrowLeftRight", href: "/industries/trading" },
  { id: "construction", title: "Construction", description: "Project lifecycle management, cost control, and resource optimization for construction firms.", icon: "HardHat", href: "/industries/construction" },
  { id: "healthcare", title: "Healthcare", description: "HIPAA-compliant solutions for patient management, billing, scheduling, and electronic records.", icon: "HeartPulse", href: "/industries/healthcare" },
  { id: "education", title: "Education", description: "Student information systems, LMS, fee management, and academic performance tracking.", icon: "GraduationCap", href: "/industries/education" },
  { id: "hospitality", title: "Hospitality", description: "Property management, booking engines, and guest experience platforms for hotels and resorts.", icon: "Hotel", href: "/industries/hospitality" },
];

export const testimonials: Testimonial[] = [
  { name: "Ahmed Khan", company: "Premier Manufacturing", role: "CEO", content: "Royal Tech transformed our operations completely. The Odoo ERP implementation streamlined every department, from procurement to dispatch. We've seen a 40% increase in operational efficiency.", rating: 5, image: "" },
  { name: "Sarah Chen", company: "Global Trade Solutions", role: "Operations Director", content: "Their team's expertise in business process automation is outstanding. They understood our unique challenges and delivered a solution that perfectly fit our workflow. Truly a partner, not just a vendor.", rating: 5, image: "" },
  { name: "Michael Torres", company: "TechVista", role: "CTO", content: "We engaged Royal Tech for our cloud migration project. The process was seamless with zero downtime. Their cloud architecture expertise is world-class.", rating: 5, image: "" },
  { name: "Fatima Al-Rashid", company: "Al-Rashid Group", role: "Finance Director", content: "Their accounting and tax consultancy services have been invaluable. They've helped us achieve full FBR compliance while optimizing our tax position significantly.", rating: 5, image: "" },
  { name: "James Wilson", company: "Wilson Healthcare", role: "Managing Director", content: "The healthcare ERP solution delivered by Royal Tech has revolutionized our patient management. Appointment scheduling, billing, and records management are now seamless.", rating: 5, image: "" },
];

export const team: TeamMember[] = [
  { name: "Umar Farooq", role: "Founder & CEO", image: "", bio: "Visionary leader with 15+ years in IT consulting and enterprise solutions." },
  { name: "Ali Hassan", role: "CTO", image: "", bio: "Technology strategist specializing in cloud architecture and ERP systems." },
  { name: "Zainab Malik", role: "Head of Operations", image: "", bio: "Operations expert ensuring flawless project delivery and client satisfaction." },
  { name: "Omar Khalid", role: "Lead ERP Consultant", image: "", bio: "Certified Odoo expert with extensive experience in ERP implementation." },
];

export const blogPosts: BlogPost[] = [
  { id: "1", title: "Why Odoo ERP is the Best Choice for Pakistani Businesses", excerpt: "Discover how Odoo ERP can transform your business operations with its modular, cost-effective approach tailored for the Pakistani market.", category: "ERP", date: "Jan 15, 2026", author: "Umar Farooq", image: "/images/erp-implementation-coding.jpg", slug: "why-odoo-erp-pakistan" },
  { id: "2", title: "Cloud Migration: A Step-by-Step Guide for Enterprises", excerpt: "Learn the essential steps for a successful cloud migration strategy that minimizes risk and maximizes business value.", category: "Cloud", date: "Dec 20, 2025", author: "Ali Hassan", image: "/images/web-software-development.jpg", slug: "cloud-migration-guide" },
  { id: "3", title: "FBR Digital Invoicing Compliance: What Businesses Need to Know", excerpt: "Stay compliant with FBR's digital invoicing requirements. A comprehensive guide for businesses operating in Pakistan.", category: "Tax", date: "Nov 10, 2025", author: "Zainab Malik", image: "/images/it-consultation-meeting.jpg", slug: "fbr-digital-invoicing-compliance" },
  { id: "4", title: "Top 10 Cybersecurity Threats in 2026 and How to Mitigate Them", excerpt: "Stay ahead of cyber threats with our comprehensive guide to the most pressing cybersecurity challenges this year.", category: "Security", date: "Oct 5, 2025", author: "Omar Khalid", image: "/images/team-meeting-laptops.jpg", slug: "cybersecurity-threats-2026" },
];

export const projects: Project[] = [
  { id: "1", title: "Odoo ERP Implementation — Premier Manufacturing", client: "Premier Manufacturing", industry: "Manufacturing", description: "Complete Odoo ERP implementation covering inventory, production, sales, HR, and finance modules for a large manufacturing enterprise.", technologies: ["Odoo", "Python", "PostgreSQL", "AWS"], image: "/images/construction-manufacturing-erp.jpg", results: ["40% increase in operational efficiency", "60% reduction in manual data entry", "Real-time production tracking", "Unified financial reporting"] },
  { id: "2", title: "Cloud Migration — Global Trade Solutions", client: "Global Trade Solutions", industry: "Trading", description: "End-to-end migration of on-premise infrastructure to AWS cloud with zero downtime.", technologies: ["AWS", "Docker", "Kubernetes", "Terraform"], image: "/images/business-handshake-partnership.jpg", results: ["Zero downtime migration", "35% reduction in infrastructure costs", "99.99% uptime achieved", "Automated disaster recovery"] },
  { id: "3", title: "E-commerce Platform — RetailMax", client: "RetailMax", industry: "Retail", description: "Custom e-commerce platform with integrated POS, inventory management, and omnichannel capabilities.", technologies: ["Next.js", "Node.js", "MongoDB", "Stripe"], image: "/images/web-software-development.jpg", results: ["200% increase in online sales", "Real-time inventory sync", "Seamless omnichannel experience", "40% faster checkout process"] },
  { id: "4", title: "Healthcare ERP — Wilson Healthcare", client: "Wilson Healthcare", industry: "Healthcare", description: "Comprehensive healthcare ERP with patient management, appointment scheduling, billing, and compliance tracking.", technologies: ["Odoo", "React", "PostgreSQL", "Azure"], image: "/images/team-strategy-meeting.jpg", results: ["50% reduction in admin time", "Improved patient satisfaction", "Full HIPAA compliance", "Seamless billing integration"] },
];

export const faqData: FAQ[] = [
  { question: "What is ERP and why does my business need it?", answer: "ERP (Enterprise Resource Planning) is an integrated platform that connects all core business processes — from inventory and procurement to finance, HR, and sales. It eliminates data silos, automates workflows, and provides real-time visibility across your organization. For growing businesses in Pakistan, ERP is essential for staying competitive, ensuring FBR compliance, and scaling operations efficiently." },
  { question: "How long does an ERP implementation typically take?", answer: "The timeline depends on the scope and complexity of your business processes. A standard implementation typically takes 3-6 months, while more complex enterprise deployments may take 6-12 months. Our agile methodology ensures you see value at every milestone, with core modules going live as early as 6-8 weeks." },
  { question: "Do you provide post-implementation support?", answer: "Absolutely. We offer comprehensive post-implementation support including 24/7 help desk, regular system health checks, performance optimization, and ongoing training. Our support packages are designed to ensure your ERP continues to deliver maximum value long after go-live." },
  { question: "What makes Royal Tech IT different from other IT consultants?", answer: "Royal Tech combines deep technical expertise with genuine business understanding. As certified Odoo partners with experience across multiple industries, we don't just implement software — we transform business processes. Our approach is partnership-driven, meaning we work alongside your team to ensure knowledge transfer and sustainable success." },
  { question: "Can you work with our existing systems?", answer: "Yes. Our team specializes in systems integration and can connect your new ERP with existing tools, legacy systems, and third-party applications. We ensure seamless data flow across your entire technology ecosystem." },
  { question: "Is cloud ERP secure?", answer: "Cloud ERP from reputable providers like Odoo offers enterprise-grade security including data encryption, regular backups, access controls, and compliance with international standards. We also implement additional security measures tailored to your specific risk profile and industry requirements." },
];

export const partners = [
  { name: "Microsoft", logo: "" },
  { name: "Odoo", logo: "" },
  { name: "Google Cloud", logo: "" },
  { name: "AWS", logo: "" },
  { name: "Meta", logo: "" },
  { name: "Shopify", logo: "" },
];

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "Company Overview", href: "/about" },
      { label: "Mission & Vision", href: "/about/mission-vision" },
      { label: "Why Royal Tech IT", href: "/about/why-royal-tech" },
      { label: "Leadership", href: "/about/leadership" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.title, href: s.href })),
  },
  { label: "Projects", href: "/projects" },
  {
    label: "Industries",
    href: "/industries",
    children: industries.map((i) => ({ label: i.title, href: i.href })),
  },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Contact", href: "/contact" },
  { label: "Lahore", href: "/locations/lahore" },
];
