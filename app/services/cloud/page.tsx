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
  title: "Cloud Solutions",
  description:
    "Enterprise cloud solutions including AWS, Azure, GCP migration, management, DevOps pipeline setup, and cloud-native application development.",
  keywords:
    "cloud solutions, AWS migration, Azure services, GCP consulting, DevOps, Kubernetes, Docker, cloud infrastructure, Pakistan cloud services",
});

const hero = {
  title: "Cloud Solutions",
  description:
    "Accelerate your digital transformation with enterprise cloud solutions. From migration and infrastructure management to cloud-native development and DevOps automation, we help businesses leverage AWS, Azure, and GCP to achieve scalability, reliability, and cost efficiency.",
  icon: "Cloud",
};

const overview = {
  title: "Comprehensive Cloud Services",
  description:
    "Royal Tech IT provides end-to-end cloud solutions covering strategy, migration, architecture, and managed operations. Our certified cloud architects help businesses at every stage of their cloud journey, from initial assessment and migration planning to ongoing optimization and cloud-native application development. We serve enterprises across Pakistan, the Middle East, and globally.",
  image: "/images/team-meeting-laptops.jpg",
  features: [
    "Cloud readiness assessment and total cost of ownership analysis for migration planning",
    "Private, public, and hybrid cloud architecture design tailored to business requirements",
    "Lift-and-shift and re-architecture migration strategies with minimal downtime",
    "Kubernetes cluster setup, management, and Helm chart development for containerized workloads",
    "CI/CD pipeline implementation using GitHub Actions, GitLab CI, Jenkins, and ArgoCD",
    "Infrastructure as Code (IaC) with Terraform, CloudFormation, and Pulumi for reproducible environments",
    "Cloud security implementation including IAM policies, network segmentation, WAF, and encryption",
    "24/7 managed cloud services with proactive monitoring, cost optimization, and incident response",
  ],
};

const benefits = [
  {
    icon: "TrendingUp",
    title: "Scalable Infrastructure",
    description:
      "Auto-scaling groups, managed instance pools, and serverless architectures ensure your infrastructure grows seamlessly with demand. Handle traffic spikes without manual intervention.",
  },
  {
    icon: "DollarSign",
    title: "Cost Optimization",
    description:
      "Our cloud financial management (FinOps) practices reduce cloud spend by 25-40% through right-sizing, reserved instances, spot instances, and automated shutdown of non-production resources.",
  },
  {
    icon: "Shield",
    title: "Enterprise Security & Compliance",
    description:
      "Defense-in-depth security with encryption at rest and in transit, network segmentation, security groups, WAF, DDoS protection, and compliance with ISO 27001, SOC 2, and local data residency laws.",
  },
  {
    icon: "Zap",
    title: "High Availability & Disaster Recovery",
    description:
      "Multi-AZ and multi-region architectures deliver 99.99% uptime. Automated backup, point-in-time recovery, and cross-region failover ensure business continuity even in catastrophic scenarios.",
  },
];

const process = [
  {
    step: 1,
    title: "Assessment & Strategy",
    description:
      "We evaluate your current infrastructure, application architecture, security posture, and business goals. A detailed cloud adoption roadmap is created with migration priorities, timeline, and cost projections.",
  },
  {
    step: 2,
    title: "Architecture Design",
    description:
      "Our architects design a cloud-native or hybrid architecture covering compute, storage, networking, security, monitoring, and disaster recovery. Well-Architected Framework best practices are applied.",
  },
  {
    step: 3,
    title: "Migration & Implementation",
    description:
      "Workloads are migrated using phased approach with validation at each stage. Infrastructure is provisioned via IaC, applications are containerized where appropriate, and data is synchronized with zero-loss guarantees.",
  },
  {
    step: 4,
    title: "DevOps & Automation",
    description:
      "CI/CD pipelines, automated testing, infrastructure automation, and monitoring dashboards are implemented. Teams are trained on Git workflows, deployment strategies, and operational runbooks.",
  },
  {
    step: 5,
    title: "Managed Operations & Optimization",
    description:
      "Our NOC provides 24/7 monitoring, incident management, and proactive optimization. Monthly cost reviews, security patching, performance tuning, and capacity planning keep your environment healthy.",
  },
];

const technologies = [
  { name: "Amazon Web Services", description: "Leading cloud platform with 200+ services spanning compute, storage, database, ML, and IoT.", icon: "Cloud" },
  { name: "Microsoft Azure", description: "Enterprise cloud with deep Microsoft integration, hybrid capabilities, and AI-powered services.", icon: "Cloud" },
  { name: "Google Cloud Platform", description: "Data and ML-optimized cloud with BigQuery, Vertex AI, and Kubernetes at its core.", icon: "Cloud" },
  { name: "Docker", description: "Container platform for packaging applications with dependencies into portable, consistent runtime environments.", icon: "Server" },
  { name: "Kubernetes", description: "Production-grade container orchestration for automated deployment, scaling, and management.", icon: "Server" },
  { name: "Terraform", description: "Infrastructure as Code tool for provisioning and managing cloud resources across multiple providers.", icon: "Code2" },
  { name: "GitHub Actions", description: "CI/CD platform for automating build, test, and deployment workflows directly from repositories.", icon: "GitBranch" },
  { name: "Datadog / Grafana", description: "Observability platforms providing metrics, logs, traces, and alerting across the entire stack.", icon: "BarChart3" },
];

const industries = [
  { name: "Financial Services", description: "Secure, compliant cloud environments meeting banking regulations and data residency requirements.", icon: "Landmark" },
  { name: "E-commerce", description: "Auto-scaling infrastructure handling peak seasonal traffic with global CDN and edge caching.", icon: "ShoppingBag" },
  { name: "Healthcare", description: "HIPAA-compliant cloud architectures with PHI data encryption and strict access controls.", icon: "Stethoscope" },
  { name: "Media & Entertainment", description: "Content delivery, video transcoding pipelines, and scalable storage for digital media assets.", icon: "Code2" },
  { name: "Education", description: "Scalable e-learning infrastructure supporting thousands of concurrent users and content delivery.", icon: "GraduationCap" },
  { name: "Government", description: "Public sector cloud deployments with data localization, high security standards, and audit compliance.", icon: "Building2" },
];

const faqs = [
  {
    question: "Which cloud provider is right for my business?",
    answer:
      "The choice depends on your existing technology stack, compliance requirements, geographic presence, and budget. AWS offers the broadest service portfolio and global reach. Azure is ideal for Microsoft-centric organizations. GCP excels in data analytics and machine learning workloads. We provide a vendor-neutral assessment to recommend the best fit, including multi-cloud strategies where beneficial.",
  },
  {
    question: "How do you ensure data security during cloud migration?",
    answer:
      "Data security during migration is ensured through encrypted transfer channels (TLS 1.3), end-to-end data encryption, strict access controls using temporary credentials, and validation checks after each data batch transfer. We perform dry-run migrations and maintain rollback capabilities at every stage. A security audit is conducted before and after migration.",
  },
  {
    question: "What is the typical timeline for migrating to the cloud?",
    answer:
      "Timelines depend on workload complexity and volume. A simple web application lift-and-shift can be completed in 2 to 4 weeks. Full data center migrations with dozens of applications and databases typically take 3 to 6 months. Critical production workloads with compliance requirements may take 6 to 12 months for a phased migration with parallel running.",
  },
  {
    question: "How much can we save by moving to the cloud?",
    answer:
      "Most organizations save 30-50% on infrastructure costs by moving from on-premise to cloud, when properly optimized. Additional savings come from eliminating hardware refresh cycles, reducing data center real estate, and lowering power and cooling costs. However, without proper FinOps practices, cloud costs can spiral. Our managed services include continuous cost optimization.",
  },
  {
    question: "Do you provide managed cloud services after migration?",
    answer:
      "Yes, our managed cloud services include 24/7 infrastructure monitoring, incident response, security patch management, backup and disaster recovery testing, cost optimization, and monthly performance reporting. We offer three tiers: Basic (monitoring and break-fix), Standard (plus optimization and patching), and Premium (including architecture reviews and 24/7 dedicated support).",
  },
];

export default function CloudSolutionsPage() {
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
