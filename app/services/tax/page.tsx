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
  title: "Tax Consultancy",
  description:
    "Expert tax consultancy services including FBR compliance, corporate tax planning, sales tax filing, income tax returns, and tax audit support in Pakistan.",
  keywords:
    "tax consultancy, FBR compliance, sales tax filing, income tax return, corporate tax planning, Pakistan tax consultant, withholding tax",
});

const hero = {
  title: "Tax Consultancy",
  description:
    "Navigate Pakistan's complex tax landscape with confidence. Our tax consultancy services provide end-to-end support for FBR compliance, corporate tax planning, sales tax management, and personal income tax. We help businesses minimize liabilities while ensuring full regulatory compliance.",
  icon: "Settings",
};

const overview = {
  title: "Strategic Tax Advisory & Compliance",
  description:
    "Royal Tech IT combines tax domain expertise with technology-driven solutions to deliver comprehensive tax services. From FBR return filing and sales tax management to corporate restructuring and tax audit representation, our consultants ensure your business remains compliant while optimizing your tax position. We serve clients across Lahore, Karachi, Islamabad, and throughout Pakistan.",
  image: "/images/business-team-office.jpg",
  features: [
    "Income tax return preparation and e-filing for individuals, AOPs, and companies",
    "Sales tax registration, monthly filing, and refund claim management under the Sindh, Punjab, and federal regimes",
    "Withholding tax compliance including Section 153, 155, 156, and 149 deductions and filings",
    "Corporate tax planning and restructuring advice to minimize effective tax rates",
    "FBR audit representation and notice response management",
    "Tax registration for new businesses including NTN, STRN, and active taxpayer maintenance",
    "International tax advisory including double taxation agreements and remittance handling",
    "Exemption certificate processing, tax credit optimization, and final tax regime analysis",
  ],
};

const benefits = [
  {
    icon: "Shield",
    title: "Full FBR Compliance",
    description:
      "Stay compliant with all FBR regulations including monthly sales tax, quarterly withholding tax, and annual income tax filings. We ensure zero late-filing penalties and maintain active taxpayer status.",
  },
  {
    icon: "DollarSign",
    title: "Tax Savings & Optimization",
    description:
      "Our strategic planning identifies legal deductions, credits, and exemptions you are missing. Clients save an average of 25% on their tax liability through proper structuring and proactive planning.",
  },
  {
    icon: "Clock",
    title: "Time & Resource Savings",
    description:
      "Outsource your entire tax compliance function to us. Free your finance team from weeks of filing work and redirect their focus to core business activities that drive revenue.",
  },
  {
    icon: "Headphones",
    title: "Audit Support & Representation",
    description:
      "If FBR selects you for audit or sends a notice, we handle the entire process from response drafting to physical representation before tax authorities on your behalf.",
  },
];

const process = [
  {
    step: 1,
    title: "Tax Health Check",
    description:
      "We conduct a comprehensive review of your current tax filings, past returns, notices received, and overall compliance status. This identifies gaps, risks, and opportunities for optimization.",
  },
  {
    step: 2,
    title: "Compliance Planning",
    description:
      "A customized compliance calendar is created covering all return due dates, payment schedules, and registration renewals. We plan the optimal filing strategy based on your business structure and income profile.",
  },
  {
    step: 3,
    title: "Preparation & Filing",
    description:
      "Our tax professionals prepare all returns using FBR-compliant software, ensuring accurate calculations and proper documentation. All returns are reviewed by a senior consultant before submission.",
  },
  {
    step: 4,
    title: "Notice Management & Audit Defense",
    description:
      "Any FBR notices or audit selections are handled immediately. We prepare replies, gather supporting documents, and represent you before tax authorities to resolve matters efficiently.",
  },
  {
    step: 5,
    title: "Year-round Advisory",
    description:
      "Throughout the year, we provide proactive advice on tax implications of business decisions, changes in tax law, and planning opportunities. Quarterly reviews keep your strategy aligned with regulatory updates.",
  },
];

const technologies = [
  { name: "FBR IRIS System", description: "Pakistan's official tax portal for income tax returns, wealth statements, and taxpayer profile management.", icon: "Globe" },
  { name: "FBR Sales Tax Portal", description: "Online system for sales tax registration, monthly returns (STR), and refund claim submissions.", icon: "Globe" },
  { name: "QuickBooks", description: "Configured with correct tax codes and withholding tax rules for automated compliance reporting.", icon: "BarChart3" },
  { name: "Odoo Accounting", description: "Tax-ready financial reports with built-in sales tax, income tax, and WHT computation modules.", icon: "Database" },
  { name: "Python", description: "Automated tax calculation scripts and data transformation tools for bulk filing preparation.", icon: "Code2" },
  { name: "AWS", description: "Secure cloud storage for tax records, audit documentation, and encrypted client data.", icon: "Cloud" },
];

const industries = [
  { name: "Retail & Wholesale", description: "Sales tax compliance, withholding tax on supplies, and retailer scheme management.", icon: "ShoppingBag" },
  { name: "Manufacturing", description: "Input-output sales tax adjustment, plant machinery depreciation, and export benefits.", icon: "Factory" },
  { name: "Construction & Real Estate", description: "Contractor withholding tax, property transfer tax, and advance tax on registration.", icon: "Building2" },
  { name: "IT & Software Exports", description: "PSEB registration, tax credit on export proceeds, and zero-rating on IT services.", icon: "Code2" },
  { name: "Healthcare", description: "Professional tax for practitioners, hospital sales tax exemptions, and equipment import taxes.", icon: "Stethoscope" },
  { name: "Education", description: "Exemption management for nonprofit institutions, service tax on fees, and endowment fund taxation.", icon: "GraduationCap" },
];

const faqs = [
  {
    question: "What are the deadlines for filing income tax returns in Pakistan?",
    answer:
      "For individuals and AOPs, the deadline is September 30 each year. For companies, it is December 31. Sales tax returns are due on the 15th of each month for the preceding month. Late filing incurs penalties of up to PKR 50,000 for companies and PKR 20,000 for individuals. We manage all deadlines on your behalf.",
  },
  {
    question: "How can we reduce our tax liability legally?",
    answer:
      "Legal tax reduction strategies include proper utilization of tax credits (Section 65B, 65D), investment in approved securities, claiming all deductible allowances, optimizing salary structures, correct classification of capital vs revenue expenditure, and taking advantage of special economic zone incentives. Our consultants will identify the best strategies for your specific situation.",
  },
  {
    question: "Do you handle FBR notices and tax audits?",
    answer:
      "Yes, this is one of our core services. When an FBR notice is received, we immediately review the notice, prepare a comprehensive response with supporting documentation, and represent you before the tax authorities. We have successfully resolved hundreds of notices ranging from simple data requests to full-scale audit proceedings.",
  },
  {
    question: "What is the difference between final tax regime and normal tax regime?",
    answer:
      "Under the Final Tax Regime (FTR), tax deducted at source is the final discharge of your tax liability, and no further return is required for that income. Under the Normal Tax Regime (NTR), tax is deducted as advance and you must file a return to reconcile your total income and tax liability. Choosing the correct regime is crucial for proper compliance and tax optimization.",
  },
  {
    question: "What documents do you need to start our tax compliance?",
    answer:
      "We typically need NTN certificate, incorporation documents (for companies), bank statements, previous year's tax returns, audit reports (if applicable), bank certificates for profit/loss on deposits, property details, investment proofs, and withholding tax deduction certificates. A complete checklist is provided during our initial consultation.",
  },
];

export default function TaxConsultancyPage() {
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
