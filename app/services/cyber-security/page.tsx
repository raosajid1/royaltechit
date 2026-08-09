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
  title: "Cyber Security",
  description:
    "Comprehensive cyber security services including penetration testing, vulnerability assessment, SOC monitoring, compliance audit, and incident response.",
  keywords:
    "cyber security, penetration testing, vulnerability assessment, SOC, security audit, ethical hacking, Pakistan cyber security services",
});

const hero = {
  title: "Cyber Security",
  description:
    "Protect your business from evolving cyber threats with comprehensive security services. From penetration testing and vulnerability assessments to SOC monitoring and incident response, we help organizations build resilient security postures that safeguard critical assets and data.",
  icon: "Shield",
};

const overview = {
  title: "Enterprise Security Solutions",
  description:
    "Royal Tech IT offers a full spectrum of cyber security services designed to identify vulnerabilities, strengthen defenses, and ensure compliance with industry standards. Our certified security professionals bring expertise across network security, application security, cloud security, and governance to deliver holistic protection for businesses of all sizes in Pakistan and beyond.",
  image: "/images/business-handshake-partnership.jpg",
  features: [
    "External and internal penetration testing covering web applications, APIs, mobile apps, and network infrastructure",
    "Vulnerability assessment with CVSS scoring, risk prioritization, and remediation roadmaps",
    "SOC 2, ISO 27001, and PCI DSS compliance gap analysis and readiness assessment",
    "Security architecture review covering cloud infrastructure, network design, and application security",
    "Managed detection and response with 24/7 SOC monitoring, SIEM implementation, and threat hunting",
    "Incident response planning, tabletop exercises, and forensic investigation services",
    "Employee security awareness training including phishing simulations and policy development",
    "Data privacy consulting for GDPR, PDPA compliance, and data protection impact assessments",
  ],
};

const benefits = [
  {
    icon: "Shield",
    title: "Proactive Threat Detection",
    description:
      "Continuous monitoring and advanced threat detection identify potential breaches before they cause damage. Our SIEM and EDR solutions provide real-time visibility across your entire infrastructure.",
  },
  {
    icon: "TrendingUp",
    title: "Regulatory Compliance",
    description:
      "Meet the requirements of ISO 27001, SOC 2, PCI DSS, and local data protection regulations. Our compliance readiness assessments close gaps and prepare you for certification audits.",
  },
  {
    icon: "DollarSign",
    title: "Cost-Effective Risk Management",
    description:
      "Prevent costly data breaches, ransomware attacks, and reputational damage. The average cost of a data breach in Pakistan is PKR 25 million. Our services provide a fraction of the cost of a single incident.",
  },
  {
    icon: "Users",
    title: "Security-First Culture",
    description:
      "Empower your employees to be your first line of defense. Our training programs reduce successful phishing attempts by 80% and build a security-aware culture throughout your organization.",
  },
];

const process = [
  {
    step: 1,
    title: "Security Assessment",
    description:
      "We conduct a comprehensive security maturity assessment covering people, processes, and technology. This includes asset discovery, threat modeling, risk analysis, and compliance gap identification.",
  },
  {
    step: 2,
    title: "Penetration Testing & Scanning",
    description:
      "Automated vulnerability scans and manual penetration testing are performed across all attack surfaces. Our testers use industry-standard methodologies including OWASP, OSSTMM, and PTES.",
  },
  {
    step: 3,
    title: "Remediation Planning",
    description:
      "Findings are compiled into a prioritized remediation plan with severity ratings, detailed technical descriptions, and step-by-step mitigation guidance. Developer-friendly reports include proof-of-concept evidence.",
  },
  {
    step: 4,
    title: "Implementation & Hardening",
    description:
      "Our security engineers assist with or directly implement security fixes, configuration hardening, patch management, and security control deployment across network, application, and cloud layers.",
  },
  {
    step: 5,
    title: "Continuous Monitoring & Improvement",
    description:
      "Ongoing security monitoring, periodic re-assessments, threat intelligence feeds, and security awareness refreshers ensure your defense posture evolves with the changing threat landscape.",
  },
];

const technologies = [
  { name: "Burp Suite Professional", description: "Industry-standard web application security testing platform for automated and manual penetration testing.", icon: "Shield" },
  { name: "Metasploit", description: "Advanced penetration testing framework for validating vulnerabilities and simulating real-world attacks.", icon: "Code2" },
  { name: "Nessus / Qualys", description: "Enterprise vulnerability management platforms for continuous scanning, prioritization, and remediation tracking.", icon: "Shield" },
  { name: "SIEM (Splunk / ELK)", description: "Security information and event management systems for log correlation, alerting, and compliance reporting.", icon: "BarChart3" },
  { name: "Wireshark & Nmap", description: "Network analysis and discovery tools for traffic inspection, port scanning, and service enumeration.", icon: "Globe" },
  { name: "CloudGuard / Prisma Cloud", description: "Cloud security posture management for AWS, Azure, and GCP with automated compliance checks.", icon: "Cloud" },
  { name: "CrowdStrike / SentinelOne", description: "Next-gen endpoint detection and response (EDR) with AI-powered threat prevention and automated response.", icon: "Shield" },
  { name: "Terraform", description: "Infrastructure as Code for implementing and enforcing secure cloud configurations with version control.", icon: "Code2" },
];

const industries = [
  { name: "Financial Services", description: "Banks, insurance companies, and fintech firms requiring PCI DSS, SBP, and SECP compliance.", icon: "Landmark" },
  { name: "Healthcare", description: "Hospitals and clinics needing HIPAA compliance, patient data protection, and medical device security.", icon: "Stethoscope" },
  { name: "E-commerce", description: "Online retailers requiring PCI DSS compliance, fraud prevention, and customer data protection.", icon: "ShoppingBag" },
  { name: "Government & Public Sector", description: "Critical infrastructure protection, classified data handling, and national security compliance.", icon: "Building2" },
  { name: "Technology & SaaS", description: "Cloud-native companies needing secure SDLC, API security, and SOC 2 certification support.", icon: "Code2" },
  { name: "Education", description: "Universities and schools protecting student records, research data, and campus network infrastructure.", icon: "GraduationCap" },
];

const faqs = [
  {
    question: "What is the difference between a vulnerability assessment and a penetration test?",
    answer:
      "A vulnerability assessment uses automated tools to scan for known vulnerabilities and produces a prioritized list of findings. A penetration test goes further by manually attempting to exploit vulnerabilities to determine the real-world risk, including chaining multiple weaknesses to demonstrate business impact. We recommend both services: VA scans quarterly for continuous coverage and pentests annually for deep validation.",
  },
  {
    question: "How often should we conduct penetration testing?",
    answer:
      "We recommend penetration testing at least annually, and additionally after significant changes to your infrastructure, major application releases, or following a security incident. Organizations in regulated industries (banking, healthcare) may require quarterly or biannual testing. Continuous vulnerability scanning should be performed weekly to complement periodic pentests.",
  },
  {
    question: "Do you provide compliance certification support?",
    answer:
      "Yes, we provide end-to-end certification support for ISO 27001, SOC 2, and PCI DSS. Our services include gap analysis, policy development, control implementation, internal audits, and liaison with certification bodies. We have helped numerous Pakistani organizations achieve international security certifications that enable them to compete globally.",
  },
  {
    question: "What should we do if we experience a security breach?",
    answer:
      "Immediately isolate affected systems, preserve logs and evidence, and contact our incident response team. Do not attempt to investigate or remediate without professional guidance, as this can destroy forensic evidence. Our IR team will contain the breach, perform forensic analysis, determine the root cause, and guide you through the recovery and regulatory notification process.",
  },
  {
    question: "How do you help build a security-aware culture in our organization?",
    answer:
      "We take a multi-faceted approach including: tailored security awareness training for different departments, simulated phishing campaigns with metrics and trend reports, clear security policy development, tabletop incident response exercises, and regular security newsletters. Our programs are designed to be engaging and practical, not just checkbox compliance.",
  },
];

export default function CyberSecurityPage() {
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
