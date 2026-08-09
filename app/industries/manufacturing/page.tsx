import Link from "next/link";
import {
  ArrowRight,
  Factory,
  Package,
  LineChart,
  ShieldCheck,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Clock,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata = generatePageSEO({
  title: "Manufacturing ERP Solutions",
  description:
    "Streamline production, inventory, and supply chain with industry-specific ERP solutions for manufacturers. Boost efficiency, reduce costs, and ensure quality control.",
  keywords:
    "manufacturing ERP, production management, supply chain optimization, Odoo manufacturing, quality control, inventory management",
});

const challenges = [
  {
    icon: Package,
    title: "Inventory & Supply Chain Complexity",
    description:
      "Managing raw materials, WIP, and finished goods across multiple locations with varying demand patterns creates significant operational overhead and stock management challenges.",
  },
  {
    icon: LineChart,
    title: "Production Inefficiency",
    description:
      "Manual production tracking, lack of real-time visibility into shop floor operations, and inefficient scheduling lead to bottlenecks, delays, and increased manufacturing costs.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Control Gaps",
    description:
      "Inconsistent quality checks, lack of traceability, and absence of standardized inspection workflows result in higher defect rates, waste, and customer dissatisfaction.",
  },
  {
    icon: BarChart3,
    title: "Data Silos & Reporting",
    description:
      "Disconnected systems across procurement, production, finance, and sales prevent accurate cost analysis, demand forecasting, and data-driven decision making.",
  },
];

const solutions = [
  {
    challenge: "Inventory & Supply Chain",
    solution:
      "Implement real-time inventory tracking with automated reorder points, multi-warehouse management, and supplier portal integration. Our ERP provides end-to-end visibility from raw material procurement to finished goods dispatch.",
  },
  {
    challenge: "Production Efficiency",
    solution:
      "Deploy production planning and scheduling modules with Bill of Materials (BOM) management, work order automation, and shop floor control. Track production runs in real-time and optimize machine utilization.",
  },
  {
    challenge: "Quality Control",
    solution:
      "Configure quality checkpoints at every production stage with defect tracking, root cause analysis, and corrective action workflows. Enable full batch traceability for compliance and recall management.",
  },
  {
    challenge: "Data Integration",
    solution:
      "Unify all business functions into a single ERP platform. Automated financial postings, real-time cost analysis, and integrated reporting dashboards eliminate data silos and provide actionable insights.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "40% Efficiency Gain",
    description:
      "Automate manual processes and streamline production workflows to dramatically improve operational efficiency and reduce lead times.",
  },
  {
    icon: Clock,
    title: "Faster Time-to-Market",
    description:
      "Optimize production scheduling and supply chain coordination to accelerate product delivery and respond quickly to market demands.",
  },
  {
    icon: CheckCircle2,
    title: "Enhanced Quality",
    description:
      "Implement standardized quality control processes with full traceability, reducing defect rates and ensuring consistent product quality.",
  },
  {
    icon: BarChart3,
    title: "Real-time Visibility",
    description:
      "Access live production dashboards, inventory levels, and financial metrics to make informed decisions with up-to-the-minute data.",
  },
];

const faqs = [
  {
    question: "How does Odoo ERP handle complex BOMs and multi-level manufacturing?",
    answer:
      "Odoo supports multi-level BOMs with phantom assemblies, by-products, and co-products. The manufacturing module handles work centers, routing, and operations sequencing. You can manage subcontracted operations and track cost roll-ups automatically across all BOM levels.",
  },
  {
    question: "Can the ERP integrate with our existing machinery and IoT devices?",
    answer:
      "Yes. Our team can integrate Odoo with PLCs, SCADA systems, and IoT sensors using custom modules and APIs. This enables real-time production data capture, machine monitoring, and automatic work order updates based on sensor readings.",
  },
  {
    question: "How do you handle lot and serial number traceability?",
    answer:
      "Odoo provides full lot/serial number tracking from raw material receipt through production to final delivery. Our implementation includes barcode scanning at every stage, expiry date management, and complete traceability reports for regulatory compliance and recall scenarios.",
  },
  {
    question: "What reporting capabilities are available for production managers?",
    answer:
      "Production managers get real-time dashboards showing work order status, machine utilization, labor efficiency, scrap rates, and OEE (Overall Equipment Effectiveness). Customizable reports cover production costs, yield analysis, downtime tracking, and variance analysis against standards.",
  },
];

export default function ManufacturingPage() {
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
              { label: "Manufacturing" },
            ]}
            className="mb-6"
          />
          <div className="animate-fade-in-up max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Manufacturing
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              ERP Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Manufacturing
              </span>
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Transform your manufacturing operations with end-to-end ERP solutions
              designed for production environments. From supply chain optimization to
              shop floor control, we help manufacturers achieve operational excellence.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Industry Challenges"
            title="Manufacturing Challenges We Solve"
            description="Modern manufacturers face complex operational challenges that require integrated technology solutions."
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
            description="Tailored ERP solutions that directly tackle the pain points of modern manufacturing."
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
            description="Measurable outcomes that drive real business value for manufacturing enterprises."
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
            title="Premier Manufacturing Success Story"
            description="How we helped a leading manufacturer achieve 40% improvement in operational efficiency."
          />
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-navy mb-4">
                      Odoo ERP Implementation
                    </h3>
                    <p className="text-sm text-navy/60 font-inter leading-relaxed mb-4">
                      Premier Manufacturing, a mid-sized production company, was
                      struggling with disconnected systems, manual data entry, and
                      lack of real-time visibility across their supply chain and
                      production floors.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "40% increase in operational efficiency",
                        "60% reduction in manual data entry",
                        "Real-time production tracking across all lines",
                        "Unified financial and operational reporting",
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
                      <Factory className="w-16 h-16 text-royal/30 mx-auto mb-3" />
                      <p className="text-sm text-navy/50 font-inter">
                        Premier Manufacturing — Completed 2025
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
            title="Manufacturing ERP FAQs"
            description="Common questions about ERP implementation for manufacturing businesses."
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
              Transform Your Manufacturing Operations
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Ready to optimize your production processes and drive efficiency?
              Let's discuss how our ERP solutions can help your manufacturing business.
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
