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
  title: "Accounting & Bookkeeping Services Lahore, Pakistan",
  description:
    "Professional accounting, bookkeeping, and financial management services in Lahore and across Pakistan. Odoo Accounting, QuickBooks, Xero setup, and remote bookkeeping solutions for businesses of all sizes.",
  keywords:
    "bookkeeping services Lahore, accounting services Pakistan, Odoo Accounting Lahore, QuickBooks setup Lahore, remote bookkeeping Lahore, Xero integration Pakistan, financial reporting Lahore, bookkeeping Pakistan, accounting outsourcing Lahore, virtual bookkeeping Pakistan",
});

const hero = {
  title: "Accounting Services",
  description:
    "Streamline your financial operations with professional accounting solutions tailored to your business. From Odoo Accounting and QuickBooks setup to comprehensive bookkeeping and financial reporting, we help you maintain accurate, compliant, and real-time financial records.",
  icon: "BarChart3",
};

const overview = {
  title: "Modern Accounting Solutions",
  description:
    "Our accounting services combine deep financial expertise with modern technology platforms to deliver accurate, timely, and insightful financial management. Whether you are a startup needing QuickBooks setup or an enterprise requiring full Odoo Accounting implementation, our certified accountants and ERP specialists ensure your books are always audit-ready.",
  image: "/images/it-consultation-meeting.jpg",
  features: [
    "Full setup and configuration of Odoo Accounting, QuickBooks Online, and Xero",
    "Chart of accounts design tailored to local tax regulations and international standards",
    "Accounts payable and receivable management with automated reconciliation",
    "Bank feed integration and real-time transaction categorization",
    "Multi-currency accounting and inter-company transaction handling",
    "Financial statement preparation including P&L, balance sheet, and cash flow reports",
    "Tax return preparation and filing support for sales tax, income tax, and withholding tax",
    "Period-end closing, audit support, and management reporting dashboards",
  ],
};

const benefits = [
  {
    icon: "Clock",
    title: "Time Savings",
    description:
      "Automate data entry, bank reconciliation, and invoice processing. Businesses save over 20 hours per month on routine accounting tasks with our automated setups.",
  },
  {
    icon: "Shield",
    title: "Compliance & Accuracy",
    description:
      "Stay compliant with FBR, SECP, and international accounting standards. Our systems enforce proper tax calculations and reduce human error by over 90%.",
  },
  {
    icon: "TrendingUp",
    title: "Real-time Financial Insights",
    description:
      "Monitor cash flow, profitability, and budget variance in real time. Make faster, more informed financial decisions with interactive dashboards and scheduled reports.",
  },
  {
    icon: "DollarSign",
    title: "Cost-Effective Operations",
    description:
      "Reduce accounting overhead by up to 60% by replacing manual processes with automated workflows and cloud-based platforms that scale with your business.",
  },
];

const process = [
  {
    step: 1,
    title: "Financial Assessment",
    description:
      "We review your current accounting setup, software usage, chart of accounts, reporting needs, and compliance requirements. This assessment forms the foundation of a tailored implementation plan.",
  },
  {
    step: 2,
    title: "Platform Selection & Setup",
    description:
      "Based on your business size, industry, and budget, we recommend and configure the optimal accounting platform. This includes chart of accounts, tax codes, user roles, and integration connections.",
  },
  {
    step: 3,
    title: "Data Migration & Integration",
    description:
      "Historical financial data is migrated securely from spreadsheets or legacy software. We connect bank accounts, payment gateways, POS systems, and e-commerce platforms for automated data flow.",
  },
  {
    step: 4,
    title: "Training & Workflow Setup",
    description:
      "Your team is trained on daily operations including invoicing, expense tracking, reconciliation, and report generation. Custom approval workflows and automation rules are configured as needed.",
  },
  {
    step: 5,
    title: "Ongoing Support & Review",
    description:
      "We provide monthly financial reviews, quarterly compliance checks, and continuous platform optimization. Our support team handles troubleshooting, updates, and ad-hoc reporting requests.",
  },
];

const technologies = [
  { name: "Odoo Accounting", description: "Full-featured accounting module with automated reconciliation, multi-currency, and real-time reporting.", icon: "Database" },
  { name: "QuickBooks Online", description: "Cloud-based accounting platform ideal for SMEs with strong invoicing, payroll, and tax features.", icon: "BarChart3" },
  { name: "Xero", description: "Modern accounting software with bank feeds, inventory tracking, and extensive third-party integrations.", icon: "BarChart3" },
  { name: "Python", description: "Custom scripting for automated reconciliation, report generation, and data transformation workflows.", icon: "Code2" },
  { name: "PostgreSQL", description: "Reliable database backend for Odoo Accounting ensuring data integrity and fast query performance.", icon: "Database" },
  { name: "AWS", description: "Secure cloud hosting with encrypted data storage, automated backups, and disaster recovery.", icon: "Cloud" },
];

const industries = [
  { name: "Retail & E-commerce", description: "Sales tax automation, inventory valuation, and multi-channel revenue reconciliation.", icon: "ShoppingBag" },
  { name: "Manufacturing", description: "Job costing, BOM accounting, WIP valuation, and variance analysis for production environments.", icon: "Factory" },
  { name: "Trading & Distribution", description: "Purchase order matching, supplier ledger management, and margin analysis.", icon: "Truck" },
  { name: "Professional Services", description: "Project-based accounting, timesheet billing, and retainer management.", icon: "Building2" },
  { name: "Healthcare", description: "Patient billing, insurance claim tracking, and revenue cycle management.", icon: "Stethoscope" },
  { name: "Education", description: "Fee management, scholarship accounting, and donor fund tracking for institutions.", icon: "GraduationCap" },
];

const faqs = [
  {
    question: "Which accounting platform is best for my business?",
    answer:
      "The best platform depends on your business size, industry, and complexity. For SMEs under 20 users, QuickBooks Online or Xero offer excellent value with strong bank integrations. For enterprises with multi-company, multi-currency needs and ERP integration, Odoo Accounting is the superior choice. We provide a free consultation to recommend the right platform.",
  },
  {
    question: "Can you integrate accounting software with our existing systems?",
    answer:
      "Yes. We specialize in integrating accounting platforms with POS systems, e-commerce stores (Shopify, WooCommerce), payment gateways (Stripe, PayFast), CRM systems, and inventory management tools. Our API-based integrations ensure seamless data flow without double entry.",
  },
  {
    question: "How do you ensure data security for financial information?",
    answer:
      "We follow industry best practices including end-to-end encryption, role-based access control, multi-factor authentication, and automated daily backups. All financial data is stored on SOC 2-compliant cloud infrastructure with geo-redundant replication.",
  },
  {
    question: "Do you provide training for our accounting team?",
    answer:
      "Absolutely. We provide structured training programs including on-site workshops, video tutorials, and comprehensive user manuals. Training covers daily operations, month-end procedures, report generation, and troubleshooting. Advanced training for administrators is also available.",
  },
  {
    question: "What is the typical timeline for setting up accounting software?",
    answer:
      "A standard QuickBooks or Xero setup with bank feeds and chart of accounts takes 5 to 10 business days. Odoo Accounting implementation with full configuration and data migration typically requires 3 to 6 weeks, depending on the complexity of your financial structure and integration needs.",
  },
];

export default function AccountingServicesPage() {
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
