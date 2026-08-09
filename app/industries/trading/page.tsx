import Link from "next/link";
import {
  ArrowRight,
  ArrowLeftRight,
  Package,
  Truck,
  LineChart,
  CheckCircle2,
  TrendingUp,
  Globe,
  BarChart3,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata = generatePageSEO({
  title: "Trading ERP Solutions",
  description:
    "End-to-end trading management from procurement to delivery with real-time analytics. Streamline your trading operations with Royal Tech IT.",
  keywords:
    "trading ERP, supply chain management, procurement software, warehouse management, logistics, distribution ERP, Pakistan trading",
});

const challenges = [
  {
    icon: Package,
    title: "Procurement Complexity",
    description:
      "Managing multiple suppliers, fluctuating prices, varying lead times, and quality standards across diverse product categories creates significant procurement challenges for trading firms.",
  },
  {
    icon: Truck,
    title: "Logistics & Delivery",
    description:
      "Coordinating shipments, tracking deliveries, managing fleet operations, and handling customs documentation across domestic and international routes requires robust logistics management.",
  },
  {
    icon: BarChart3,
    title: "Inventory Optimization",
    description:
      "Balancing stock levels across warehouses, managing slow-moving inventory, preventing stockouts, and optimizing warehouse space utilization without real-time visibility is extremely challenging.",
  },
  {
    icon: LineChart,
    title: "Margin Pressure",
    description:
      "Fluctuating market prices, increasing competition, and rising operational costs squeeze profit margins. Accurate cost tracking and pricing strategies are essential for maintaining profitability.",
  },
];

const solutions = [
  {
    challenge: "Supplier & Procurement Management",
    solution:
      "Centralized supplier database with performance tracking, automated purchase order generation, quotation comparison, and contract management. Real-time price feeds and approval workflows streamline procurement processes.",
  },
  {
    challenge: "Logistics & Supply Chain",
    solution:
      "End-to-end shipment tracking, fleet management, route optimization, and customs documentation automation. Real-time delivery status updates and integration with logistics partners ensure on-time deliveries.",
  },
  {
    challenge: "Warehouse & Inventory",
    solution:
      "Multi-warehouse inventory management with bin locations, batch tracking, FIFO/FEFO, and automated stock replenishment. Barcode/RFID integration enables real-time inventory accuracy and efficient picking processes.",
  },
  {
    challenge: "Pricing & Profitability",
    solution:
      "Automated cost calculation including landed cost, real-time margin analysis, and dynamic pricing recommendations. Comprehensive profitability reports by product, customer, and sales channel drive informed decisions.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Higher Profit Margins",
    description:
      "Real-time cost tracking and margin analysis enable better pricing decisions, reducing profit leakage and improving net margins by up to 15% across product categories.",
  },
  {
    icon: Globe,
    title: "Supply Chain Visibility",
    description:
      "End-to-end visibility from supplier to customer with real-time tracking of orders, shipments, and inventory levels across the entire supply chain network.",
  },
  {
    icon: Truck,
    title: "Faster Order Fulfillment",
    description:
      "Streamlined order-to-delivery processes with automated picking, packing, and shipping workflows reduce order fulfillment time by up to 40%.",
  },
  {
    icon: CheckCircle2,
    title: "Reduced Stock Costs",
    description:
      "Optimized inventory levels with data-driven demand forecasting reduce carrying costs by 25% while maintaining high service levels and preventing stockouts.",
  },
];

const faqs = [
  {
    question: "How does the ERP handle multi-currency and international trade?",
    answer:
      "The ERP supports multi-currency transactions, automatic exchange rate updates, and landed cost calculations including customs duties, freight, and insurance. It handles letters of credit, bill of lading tracking, and regulatory documentation for international trade compliance.",
  },
  {
    question: "Can the system manage complex pricing structures and customer contracts?",
    answer:
      "Yes. Our ERP supports tiered pricing, volume discounts, contract pricing, promotional pricing, and customer-specific price lists. All pricing rules are automatically applied during order entry, ensuring consistency and reducing pricing errors.",
  },
  {
    question: "What warehouse management features are available?",
    answer:
      "Features include multi-warehouse management, bin/shelf locations, putaway strategies, wave picking, cross-docking, cycle counting, and warehouse mobile app for barcode scanning. Advanced features include zone management and labor productivity tracking.",
  },
  {
    question: "How do you handle returns and reverse logistics?",
    answer:
      "The ERP includes a comprehensive returns management module handling RMA creation, inspection workflows, replacement/refund processing, and restocking. Return reason tracking provides insights for quality improvement and supplier performance evaluation.",
  },
];

export default function TradingPage() {
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
              { label: "Trading" },
            ]}
            className="mb-6"
          />
          <div className="animate-fade-in-up max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Trading
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Trading Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Supply Chain Excellence
              </span>
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Streamline your trading operations from procurement to final delivery.
              Our ERP solutions provide end-to-end visibility, cost control, and
              operational efficiency for trading and distribution businesses.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Industry Challenges"
            title="Trading Challenges We Solve"
            description="Trading and distribution businesses face complex operational and financial challenges."
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
            description="Comprehensive trading ERP solutions for modern distribution businesses."
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
            description="Measurable improvements that transform your trading and distribution operations."
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
            title="Global Trade Solutions Success"
            description="How Global Trade Solutions achieved 35% infrastructure cost reduction with our ERP."
          />
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-navy mb-4">
                      End-to-End Trading Platform
                    </h3>
                    <p className="text-sm text-navy/60 font-inter leading-relaxed mb-4">
                      Global Trade Solutions, a mid-sized trading company, needed to
                      replace their fragmented systems with a unified ERP to manage
                      procurement, inventory, sales, and logistics across multiple regions.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "35% reduction in infrastructure costs",
                        "99.99% system uptime achieved",
                        "Automated procurement and inventory workflows",
                        "Real-time supply chain visibility end-to-end",
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
                      <ArrowLeftRight className="w-16 h-16 text-royal/30 mx-auto mb-3" />
                      <p className="text-sm text-navy/50 font-inter">
                        Global Trade Solutions — Completed 2025
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
            title="Trading ERP FAQs"
            description="Common questions about ERP implementation for trading and distribution businesses."
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
              Transform Your Trading Operations
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Ready to optimize your supply chain and boost profitability? Let's discuss
              how our trading ERP solutions can help your business.
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
