import { generatePageSEO } from "@/lib/metadata";
import { siteConfig } from "@/lib/metadata";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceIndustries } from "@/components/services/ServiceIndustries";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = generatePageSEO({
  title: "Odoo ERP Services in Lahore — ERP Implementation Lahore Pakistan",
  description:
    "Expert Odoo ERP implementation, customization, and support in Lahore, Pakistan. Royal Tech IT serves Lahore businesses with enterprise ERP solutions, bookkeeping, and digital transformation services.",
  keywords:
    "ERP services Lahore, Odoo ERP Lahore, ERP implementation Lahore, Odoo partner Lahore, ERP solutions Lahore Pakistan, Odoo customization Lahore, ERP consultant Lahore, business management software Lahore, ERP for Lahore businesses",
});

const hero = {
  title: "ERP Services in Lahore",
  description:
    "Lahore-based businesses trust Royal Tech IT for enterprise-grade Odoo ERP implementation, customization, and support. We help Lahore's manufacturing, retail, trading, and service sectors streamline operations, reduce costs, and scale with confidence — with remote and on-site delivery options available across Lahore.",
  icon: "MapPin",
};

const overview = {
  title: "Why Lahore Businesses Choose Royal Tech IT",
  description:
    "As a leading ERP implementation partner serving Lahore and all of Pakistan, Royal Tech IT combines global expertise with deep local understanding. We know the challenges Lahore businesses face — from FBR compliance and tax regulations to supply chain complexities in Punjab's industrial heartland. Our Odoo ERP solutions are tailored to meet these specific needs while following international best practices.",
  image: "/images/construction-manufacturing-erp.jpg",
  features: [
    "On-site ERP consulting and implementation across Lahore (Gulberg, Defence, Model Town, Johar Town, and all industrial areas)",
    "Odoo modules configured for Pakistan's tax and regulatory environment including FBR digital invoicing and sales tax",
    "Bilingual team fluent in Urdu, English, and Punjabi for seamless communication",
    "Flexible deployment: fully cloud-hosted, on-premise, or hybrid — tailored to Lahore's infrastructure",
    "Cost-effective pricing in PKR with transparent fixed-price proposals",
    "Post-implementation support with SLA-backed local response times",
  ],
};

const benefits = [
  {
    icon: "MapPin",
    title: "Local Presence, Global Standards",
    description:
      "Based in Lahore, we offer on-site visits, face-to-face consultations, and rapid response times. Our team understands local business culture and regulatory requirements while delivering to international quality standards.",
  },
  {
    icon: "DollarSign",
    title: "Cost-Effective ERP for Lahore SMEs",
    description:
      "We deliver Odoo ERP solutions at competitive PKR pricing designed for Lahore's small and medium enterprises. Reduce operational costs by up to 40% compared to legacy systems while gaining modern, scalable capabilities.",
  },
  {
    icon: "Shield",
    title: "FBR & Regulatory Compliance",
    description:
      "Stay fully compliant with FBR digital invoicing, sales tax, income tax, and SECP requirements. Our ERP configurations include built-in Pakistan-specific compliance features with automatic updates for regulatory changes.",
  },
  {
    icon: "Headphones",
    title: "Local Language Support",
    description:
      "Our team communicates in Urdu, English, and Punjabi, ensuring clear requirement gathering, training, and ongoing support. No language barriers — just smooth ERP implementation and adoption.",
  },
];

const process = [
  {
    step: 1,
    title: "Free ERP Consultation (Lahore)",
    description:
      "We visit your Lahore office for a no-obligation consultation to understand your business processes, pain points, and goals. This includes a free ERP readiness assessment and ballpark cost estimate tailored to your needs.",
  },
  {
    step: 2,
    title: "Solution Design & Quotation",
    description:
      "Our team designs a detailed ERP blueprint with module selection, customizations, data migration plan, and integration requirements. You receive a fixed-price quotation in PKR with clear timelines and deliverables.",
  },
  {
    step: 3,
    title: "Implementation & Customization",
    description:
      "We configure Odoo modules to match your workflows, develop any custom features, and set up integrations with local payment gateways, banks, and logistics providers. Regular progress reviews keep you informed.",
  },
  {
    step: 4,
    title: "Data Migration & Go-Live",
    description:
      "Your existing data is migrated securely with zero-loss assurance. We conduct thorough testing, user training, and a controlled go-live to ensure business continuity. On-site support available across Lahore during rollout.",
  },
  {
    step: 5,
    title: "Ongoing Support & Optimization",
    description:
      "Post-go-live, we provide SLA-backed support, system monitoring, performance optimization, and quarterly business reviews. Annual maintenance contracts ensure your ERP evolves with your business.",
  },
];

const industries = [
  { name: "Manufacturing (Lahore)", description: "Production planning, BOM management, quality control, and shop floor integration for Lahore's industrial sector.", icon: "Factory" },
  { name: "Retail & E-commerce", description: "POS integration, inventory synchronization, and multi-channel order management for Lahore's retail businesses.", icon: "ShoppingBag" },
  { name: "Trading & Distribution", description: "Supply chain optimization, warehouse management, and logistics tracking for Punjab's trading hub.", icon: "Truck" },
  { name: "Construction & Real Estate", description: "Project costing, subcontractor management, and property lifecycle tracking for Lahore's booming real estate sector.", icon: "Building2" },
  { name: "Healthcare", description: "Patient records, inventory tracking, billing automation, and regulatory compliance for Lahore hospitals and clinics.", icon: "Stethoscope" },
  { name: "Education", description: "Student management, fee processing, attendance tracking, and academic reporting for Lahore's educational institutions.", icon: "GraduationCap" },
];

const faqs = [
  {
    question: "How much does Odoo ERP implementation cost in Lahore?",
    answer:
      "Costs vary based on your business size, modules required, and customization needs. For Lahore-based SMEs, typical Odoo ERP implementations range from PKR 800,000 for basic deployments to PKR 5 million for enterprise-grade solutions. We provide a free consultation and fixed-price quotation — no hidden fees.",
  },
  {
    question: "How long does ERP implementation take for Lahore businesses?",
    answer:
      "A standard Odoo ERP deployment for Lahore mid-size companies with core modules typically takes 6 to 12 weeks. Larger enterprises with custom development may require 3 to 5 months. Our agile approach delivers working modules early so you see value faster.",
  },
  {
    question: "Do you provide on-site support in Lahore?",
    answer:
      "Yes. We serve all areas of Lahore including Gulberg, Defence, Model Town, Johar Town, Faisal Town, Wapda Town, Lahore Cantonment, and all industrial zones. Our team is available for on-site visits, training sessions, and support calls.",
  },
  {
    question: "Is Odoo ERP compliant with FBR regulations?",
    answer:
      "Absolutely. Our Odoo implementations include full FBR digital invoicing integration, sales tax configuration, income tax reporting, and real-time data synchronization to meet Pakistan's regulatory requirements. We keep your system updated with the latest FBR changes.",
  },
  {
    question: "Can you integrate Odoo with local payment gateways and banks?",
    answer:
      "Yes. We integrate Odoo with all major Pakistani payment gateways (JazzCash, Easypaisa, 1Link, Haball) and local banks (HBL, UBL, Allied Bank, Meezan Bank, and others) for automated bank reconciliation and payment processing.",
  },
  {
    question: "Do you provide training for our team in Lahore?",
    answer:
      "Yes. We conduct hands-on training sessions at your Lahore office or our facility. Training is delivered in Urdu and English, covering all user roles. We also provide video tutorials, user manuals, and post-training support to ensure smooth adoption.",
  },
];

export default function LahoreLocationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Odoo ERP Implementation Lahore",
            provider: { "@type": "Organization", name: "Royal Tech IT", url: siteConfig.url },
            areaServed: [
              { "@type": "City", name: "Lahore" },
              { "@type": "City", name: "Gulberg" },
              { "@type": "City", name: "Defence" },
              { "@type": "State", name: "Punjab" },
              { "@type": "Country", name: "Pakistan" },
            ],
            serviceType: "ERP Implementation",
            description: "Odoo ERP implementation, customization, and support services in Lahore, Pakistan.",
          }),
        }}
      />
      <ServiceHero title={hero.title} description={hero.description} icon={hero.icon} />
      <ServiceOverview title={overview.title} description={overview.description} features={overview.features} image={overview.image} />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess process={process} />
      <ServiceIndustries industries={industries} />
      <section className="py-20 lg:py-28 bg-gray-50/50">
        <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-navy mb-6">Our Lahore Service Area</h2>
            <p className="text-navy/60 mb-8">
              We serve all major areas of Lahore including Gulberg, Defence Housing Authority (DHA), Model Town, Johar Town, Faisal Town, Wapda Town, Lahore Cantonment, Township, Allama Iqbal Town, Garden Town, and all industrial zones in and around Lahore. Remote and on-site delivery available.
            </p>
            <div className="aspect-video rounded-xl overflow-hidden bg-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108888.25627533963!2d74.253676784375!3d31.482634399999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483e58107d9%3A0xc23abe6ccc7e2462!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1!4m2!1d74.329376!2d31.4826344"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Royal Tech IT - Lahore Service Area"
              />
            </div>
          </div>
        </div>
      </section>
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
