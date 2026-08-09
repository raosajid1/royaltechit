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
  title: "Managed IT Services",
  description:
    "24/7 IT monitoring, help desk support, infrastructure management, network support, backup & disaster recovery, and IT strategy consulting for businesses in Pakistan.",
  keywords:
    "managed IT services, IT support, help desk, network management, 24/7 monitoring, backup disaster recovery, IT infrastructure, Pakistan IT services",
});

const hero = {
  title: "Managed IT Services",
  description:
    "Focus on your business while we manage your technology. From 24/7 infrastructure monitoring and help desk support to strategic IT planning and disaster recovery, we provide comprehensive managed IT services that keep your systems running smoothly, securely, and efficiently.",
  icon: "Headphones",
};

const overview = {
  title: "Comprehensive IT Management",
  description:
    "Royal Tech IT delivers enterprise-grade managed IT services that proactively monitor, maintain, and optimize your technology infrastructure. Our certified engineers provide around-the-clock support, rapid issue resolution, and strategic guidance to ensure your IT environment supports your business goals. We serve businesses across Pakistan with both on-site and remote managed services.",
  image: "/images/team-strategy-meeting.jpg",
  features: [
    "24/7 infrastructure monitoring with proactive alerting and automated incident response",
    "Multi-tier help desk support with guaranteed SLA response times and escalation procedures",
    "Network infrastructure design, deployment, and ongoing management and optimization",
    "Server administration including patch management, performance tuning, and capacity planning",
    "Backup and disaster recovery planning with automated backups and regular recovery testing",
    "IT security management including firewall administration, endpoint protection, and vulnerability scanning",
    "Cloud infrastructure management across AWS, Azure, and Google Cloud Platform",
    "Strategic IT planning, technology roadmapping, and vendor management",
  ],
};

const benefits = [
  {
    icon: "Shield",
    title: "Proactive Monitoring",
    description:
      "Our NOC monitors your infrastructure 24/7/365, detecting and resolving issues before they impact your business. Average response time under 5 minutes for critical alerts with automated remediation workflows.",
  },
  {
    icon: "TrendingUp",
    title: "Cost Predictability",
    description:
      "Fixed monthly pricing eliminates surprise IT expenses. Reduce total cost of ownership by up to 40% compared to in-house IT teams when accounting for salaries, training, tools, and infrastructure.",
  },
  {
    icon: "Zap",
    title: "Rapid Issue Resolution",
    description:
      "Multi-tier help desk with Level 1-3 support ensures issues are resolved quickly. Our average resolution time for critical incidents is under 2 hours, with 24/7 availability including holidays.",
  },
  {
    icon: "Layers",
    title: "Scalable Support",
    description:
      "Easily scale support up or down as your business grows. Add users, locations, or services without complex hiring processes. Our flexible engagement models adapt to your changing needs.",
  },
];

const process = [
  {
    step: 1,
    title: "IT Assessment & Onboarding",
    description:
      "We conduct a comprehensive audit of your current IT infrastructure, security posture, applications, and support requirements. A detailed onboarding plan is created covering discovery, documentation, and transition.",
  },
  {
    step: 2,
    title: "Infrastructure Setup",
    description:
      "Our team deploys monitoring agents, configures remote management tools, establishes backup systems, and sets up help desk portals. Network documentation and password management are established securely.",
  },
  {
    step: 3,
    title: "Ongoing Management & Support",
    description:
      "24/7 monitoring, proactive maintenance, and help desk support commence. Regular patch cycles, security updates, and performance reviews keep your environment healthy and optimized.",
  },
  {
    step: 4,
    title: "Strategic Planning",
    description:
      "Quarterly business reviews with your account manager cover infrastructure health, security posture, budget planning, and technology roadmap alignment with your business objectives.",
  },
  {
    step: 5,
    title: "Continuous Improvement",
    description:
      "Regular assessments identify opportunities for optimization, cost reduction, and technology upgrades. We proactively recommend improvements to keep your IT environment current and competitive.",
  },
];

const technologies = [
  { name: "Microsoft 365", description: "Cloud productivity suite with Exchange Online, Teams, SharePoint, and enterprise-grade security.", icon: "Cloud" },
  { name: "VMware / Hyper-V", description: "Server virtualization platforms for efficient resource utilization and simplified management.", icon: "Server" },
  { name: "Cisco / Meraki", description: "Enterprise networking hardware with centralized cloud management and advanced security features.", icon: "Globe" },
  { name: "Veeam", description: "Industry-leading backup and replication solution with instant VM recovery and verified recovery testing.", icon: "Database" },
  { name: "SOPHOS / CrowdStrike", description: "Next-gen endpoint protection with AI-powered threat detection and automated response.", icon: "Shield" },
  { name: "ConnectWise / NinjaOne", description: "RMM and PSA platforms for remote monitoring, patch management, and service desk automation.", icon: "Settings" },
  { name: "AWS / Azure", description: "Cloud infrastructure platforms for scalable, secure, and cost-effective hosted environments.", icon: "Cloud" },
  { name: "Datto / SolarWinds", description: "Network monitoring and IT management tools providing deep visibility into infrastructure health.", icon: "BarChart3" },
];

const industries = [
  { name: "Financial Services", description: "Secure, compliant IT environments meeting banking regulations and data protection standards.", icon: "Landmark" },
  { name: "Healthcare", description: "HIPAA-compliant managed IT with PHI data security and healthcare application support.", icon: "Stethoscope" },
  { name: "Legal", description: "Secure legal practice management with client confidentiality, e-discovery support, and data retention.", icon: "Scale" },
  { name: "Manufacturing", description: "OT/IT convergence support with shop floor system management and industrial control security.", icon: "Factory" },
  { name: "Education", description: "Campus IT infrastructure management supporting LMS, student portals, and research computing.", icon: "GraduationCap" },
  { name: "Non-Profit", description: "Cost-effective IT management with donor data security and grant compliance support.", icon: "Heart" },
];

const faqs = [
  {
    question: "What is included in a typical managed IT services agreement?",
    answer:
      "Our standard agreements include 24/7 infrastructure monitoring, help desk support (Level 1-3), patch management, antivirus/endpoint protection, backup monitoring and testing, network management, and quarterly business reviews. Optional services include on-site support, cloud management, security services, and strategic IT consulting. All agreements are customized to your specific needs and budget.",
  },
  {
    question: "How quickly do you respond to IT issues and support requests?",
    answer:
      "Response times vary by severity level. Critical issues (system down, security breach) receive initial response within 15 minutes, 24/7/365. High priority issues are responded to within 1 hour during business hours. Standard requests receive response within 4 business hours. Our average resolution time for critical incidents is under 2 hours.",
  },
  {
    question: "Can you support our existing infrastructure and applications?",
    answer:
      "Yes. We support heterogeneous environments including Windows, Linux, and Mac systems; on-premise, cloud, and hybrid infrastructures; and most commercial business applications including Microsoft 365, ERP systems, CRM platforms, and industry-specific software. Our onboarding process includes a full compatibility assessment.",
  },
  {
    question: "How do you handle data backup and disaster recovery?",
    answer:
      "We implement the 3-2-1 backup strategy (three copies, two media types, one off-site). Automated backups run daily with verification testing. Our disaster recovery plans include RPO and RTO targets aligned with your business requirements. Annual DR testing ensures recoverability. Cloud-based backup options are available for additional redundancy.",
  },
  {
    question: "What security measures are included in managed IT services?",
    answer:
      "Security is foundational to our managed services. We implement endpoint protection with next-gen AV and EDR, firewall management with IPS/IDS, email security and anti-phishing, multi-factor authentication, patch management, vulnerability scanning, and security awareness training for your staff. Quarterly security reports detail your security posture and improvement recommendations.",
  },
];

export default function ManagedITServicesPage() {
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
