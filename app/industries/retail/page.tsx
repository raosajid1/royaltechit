import Link from "next/link";
import {
  ArrowRight,
  Package,
  ShoppingBag,
  Store,
  Users,
  BarChart3,
  CheckCircle2,
  TrendingUp,
  Smartphone,
  RefreshCw,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata = generatePageSEO({
  title: "Retail ERP Solutions",
  description:
    "Omnichannel retail management with POS integration, inventory tracking, and customer insights. Transform your retail operations with Royal Tech IT.",
  keywords:
    "retail ERP, POS system, inventory management, omnichannel retail, e-commerce integration, retail management software",
});

const challenges = [
  {
    icon: Store,
    title: "Omnichannel Complexity",
    description:
      "Managing sales across physical stores, e-commerce platforms, and marketplaces creates inventory discrepancies, pricing inconsistencies, and fragmented customer experiences.",
  },
  {
    icon: Package,
    title: "Inventory Inaccuracy",
    description:
      "Manual stock counting and disconnected systems lead to stockouts, overstocking, and lost sales. Real-time visibility across all channels is critical for retail success.",
  },
  {
    icon: Users,
    title: "Customer Retention",
    description:
      "Without a unified view of customer interactions across channels, retailers struggle to personalize experiences, build loyalty, and drive repeat purchases.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description:
      "Lack of integrated analytics prevents retailers from understanding sales trends, customer behavior, and profitability at the product, category, and store level.",
  },
];

const solutions = [
  {
    challenge: "Omnichannel Operations",
    solution:
      "Our ERP unifies physical stores, e-commerce platforms, and marketplaces into one system. Real-time inventory sync, centralized pricing, and unified customer profiles ensure consistent omnichannel experiences.",
  },
  {
    challenge: "Inventory Management",
    solution:
      "Automated inventory tracking with barcode/RFID integration, real-time stock updates across channels, and intelligent reorder point calculations prevent stockouts while minimizing carrying costs.",
  },
  {
    challenge: "Customer Engagement",
    solution:
      "Built-in CRM with loyalty programs, personalized marketing automation, and omnichannel customer history enables targeted promotions and improved customer retention strategies.",
  },
  {
    challenge: "Analytics & Reporting",
    solution:
      "Comprehensive dashboards provide real-time insights into sales performance, inventory turns, margin analysis, and customer behavior. Drill down to individual SKU and store-level metrics.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "200% Sales Growth",
    description:
      "Our retail clients achieve an average of 200% increase in online sales through integrated omnichannel strategies and optimized operations.",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description:
      "Inventory, pricing, and customer data synchronized in real-time across all sales channels, eliminating discrepancies and ensuring accurate order fulfillment.",
  },
  {
    icon: Smartphone,
    title: "Mobile POS",
    description:
      "Enable staff to process transactions anywhere in the store with mobile POS capabilities, reducing checkout wait times and improving customer experience.",
  },
  {
    icon: CheckCircle2,
    title: "40% Faster Checkout",
    description:
      "Streamlined POS processes, integrated payment gateways, and automated workflows reduce checkout time by 40%, enhancing customer satisfaction.",
  },
];

const faqs = [
  {
    question: "Can the ERP integrate with my existing e-commerce platform?",
    answer:
      "Yes. Our ERP solutions integrate seamlessly with Shopify, WooCommerce, Magento, and custom e-commerce platforms. Real-time inventory sync, order management, and customer data unification ensure smooth omnichannel operations.",
  },
  {
    question: "How does POS integration work for multiple store locations?",
    answer:
      "Our POS system supports unlimited store locations with centralized management. Each store operates independently while sharing a unified inventory, pricing, and customer database. Offline mode ensures uninterrupted sales during internet outages.",
  },
  {
    question: "What reporting is available for retail performance tracking?",
    answer:
      "Retailers get dashboards for sales by store, product, and channel; inventory turnover and stock aging; customer acquisition and retention metrics; margin analysis; and promotional effectiveness. Reports are customizable and can be scheduled for automatic delivery.",
  },
  {
    question: "How do you handle multi-currency and multi-tax retail environments?",
    answer:
      "The ERP supports multi-currency pricing and transactions with automatic exchange rate updates. Tax handling includes product-specific tax rates, multiple tax groups, and automated tax reporting compliant with local regulations including FBR requirements in Pakistan.",
  },
];

export default function RetailPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-royal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,168,67,0.06),transparent_50%)]" />
        <div className="absolute top-20 left-20 w-72 h-72 border border-sky/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-accent/10 rounded-full" />
        <div className="relative container-content">
          <Breadcrumb
            items={[
              { label: "Industries", href: "/industries" },
              { label: "Retail" },
            ]}
            className="mb-6"
          />
          <div className="animate-fade-in-up max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Retail
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Retail Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Modern Commerce
              </span>
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Deliver seamless shopping experiences across every channel with integrated
              retail management solutions. From POS to e-commerce, unify your retail
              operations and drive profitable growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Industry Challenges"
            title="Retail Challenges We Solve"
            description="Today's retailers face unprecedented complexity in managing omnichannel operations and customer expectations."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-red-50 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-red-500" />
                </div>
                <h3 className="font-poppins text-base font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy/50 font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="Our Solutions"
            title="How We Address These Challenges"
            description="Integrated retail ERP solutions designed for omnichannel excellence."
          />
          <div className="max-w-4xl mx-auto space-y-6">
            {solutions.map((item, index) => (
              <div
                key={item.challenge}
                className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 flex gap-4 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-green-500" />
                </div>
                <div>
                  <h3 className="font-poppins text-base font-semibold text-navy mb-1">
                    {item.challenge}
                  </h3>
                  <p className="text-sm text-navy/50 font-inter leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Benefits"
            title="What You Gain"
            description="Tangible outcomes that transform your retail business operations."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => (
              <div
                key={item.title}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-royal/10 to-sky/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-royal" />
                </div>
                <h3 className="font-poppins text-base font-semibold text-navy mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-navy/50 font-inter leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="Case Study"
            title="RetailMax E-commerce Success"
            description="How RetailMax achieved 200% online sales growth with our integrated retail ERP."
          />
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-navy mb-4">
                      Omnichannel Retail Platform
                    </h3>
                    <p className="text-sm text-navy/60 font-inter leading-relaxed mb-4">
                      RetailMax, a growing fashion retailer, needed to unify their
                      physical stores, online store, and marketplace presence under
                      a single management platform with real-time inventory visibility.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "200% increase in online sales revenue",
                        "Real-time inventory sync across all channels",
                        "Seamless omnichannel customer experience",
                        "40% faster checkout process implemented",
                      ].map((result) => (
                        <li
                          key={result}
                          className="flex items-start gap-2 text-sm text-navy/60 font-inter"
                        >
                          <CheckCircle2 className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-royal/5 to-sky/5 rounded-xl p-6 flex items-center justify-center">
                    <div className="text-center">
                      <ShoppingBag className="w-16 h-16 text-royal/30 mx-auto mb-3" />
                      <p className="text-sm text-navy/50 font-inter">
                        RetailMax — Completed 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="FAQ"
            title="Retail ERP FAQs"
            description="Common questions about retail ERP implementation and omnichannel management."
          />
          <div className="max-w-3xl mx-auto">
            <Accordion items={faqs} />
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-royal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="absolute top-10 left-10 w-40 h-40 border border-sky/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border border-accent/10 rounded-full" />
        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Transform Your Retail Operations
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Ready to deliver exceptional omnichannel experiences? Let's discuss
              how our retail ERP solutions can transform your business.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Schedule a Consultation
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services/erp"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/40"
              >
                Explore ERP Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
