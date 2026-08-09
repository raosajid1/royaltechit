import Link from "next/link";
import {
  ArrowRight,
  HardHat,
  Building2,
  DollarSign,
  Calendar,
  CheckCircle2,
  TrendingUp,
  Shield,
  Users,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata = generatePageSEO({
  title: "Construction ERP Solutions",
  description:
    "Project lifecycle management, cost control, and resource optimization for construction firms. Streamline your construction business with Royal Tech IT.",
  keywords:
    "construction ERP, project management, cost control, construction software, Odoo construction, project lifecycle management",
});

const challenges = [
  {
    icon: DollarSign,
    title: "Cost Overruns",
    description:
      "Without real-time cost tracking, construction projects frequently exceed budgets. Material price fluctuations, labor inefficiencies, and change orders compound the financial risk significantly.",
  },
  {
    icon: Calendar,
    title: "Project Delays",
    description:
      "Poor scheduling, resource allocation conflicts, and lack of visibility into subcontractor progress lead to cascading delays that impact project timelines and profitability.",
  },
  {
    icon: Building2,
    title: "Resource Fragmentation",
    description:
      "Managing equipment, materials, and labor across multiple active projects without a unified system results in idle resources, double-booking, and procurement inefficiencies.",
  },
  {
    icon: Shield,
    title: "Compliance & Documentation",
    description:
      "Construction firms face stringent regulatory requirements, safety documentation, and quality standards. Paper-based processes make compliance tracking cumbersome and error-prone.",
  },
];

const solutions = [
  {
    challenge: "Cost Control",
    solution:
      "Implement real-time project cost tracking with budget vs. actual comparisons, automated change order management, and material cost forecasting. Our ERP provides profitability analysis at every project stage.",
  },
  {
    challenge: "Project Scheduling",
    solution:
      "Deploy integrated project planning with Gantt charts, resource leveling, and milestone tracking. Automated notifications and dependencies management keep projects on schedule across all phases.",
  },
  {
    challenge: "Resource Management",
    solution:
      "Centralized resource pool with real-time availability tracking, equipment utilization monitoring, and procurement automation ensures optimal allocation across all ongoing projects.",
  },
  {
    challenge: "Compliance & Quality",
    solution:
      "Digital documentation for safety inspections, quality checks, and regulatory submissions. Automated workflows ensure no compliance step is missed, with complete audit trails for every project.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Reduced Cost Overruns",
    description:
      "Real-time budget tracking and early warning systems help reduce cost overruns by up to 30% through proactive intervention and informed decision-making.",
  },
  {
    icon: Calendar,
    title: "On-Time Delivery",
    description:
      "Improved scheduling and resource coordination ensure projects stay on track, reducing delays and improving client satisfaction and profitability.",
  },
  {
    icon: Users,
    title: "Better Collaboration",
    description:
      "Centralized platform connecting project managers, engineers, subcontractors, and clients with real-time updates and document sharing capabilities.",
  },
  {
    icon: CheckCircle2,
    title: "Full Audit Trail",
    description:
      "Complete digital record of every project decision, change order, inspection, and approval ensures transparency and simplifies regulatory compliance.",
  },
];

const faqs = [
  {
    question: "How does the ERP handle subcontractor management?",
    answer:
      "Our ERP includes a subcontractor management module that handles vendor qualification, contract management, purchase orders, work progress tracking, and payment processing. Subcontractors can access a self-service portal for timesheets, work logs, and invoice submissions.",
  },
  {
    question: "Can the system track project profitability in real-time?",
    answer:
      "Yes. The ERP provides real-time profitability analysis at the project, phase, and activity level. It automatically allocates labor, material, equipment, and subcontractor costs to projects and compares them against budgeted amounts and revenue recognized.",
  },
  {
    question: "What support is available for multi-site project management?",
    answer:
      "The platform supports unlimited projects and sites with centralized or decentralized management. Each site can have its own team, budget, and schedule while providing consolidated reporting at the organizational level for executives.",
  },
  {
    question: "How do you handle change orders and variation requests?",
    answer:
      "Change orders are managed through a structured workflow from request submission to approval and implementation. The system tracks impact on budget, timeline, and resources, with full version history and approval trails for every change.",
  },
];

export default function ConstructionPage() {
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
              { label: "Construction" },
            ]}
            className="mb-6"
          />
          <div className="animate-fade-in-up max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Construction
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Construction Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Project Excellence
              </span>
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Take control of your construction projects from estimation to handover.
              Our ERP solutions deliver real-time visibility, cost control, and
              streamlined operations for construction firms of all sizes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Industry Challenges"
            title="Construction Challenges We Solve"
            description="Construction firms face unique operational and financial challenges that demand integrated technology solutions."
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
            description="Comprehensive ERP solutions built for the construction industry."
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
            description="Measurable advantages that transform your construction business operations."
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
            title="Construction Project Success"
            description="How a leading construction firm transformed project delivery with our ERP solutions."
          />
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-navy mb-4">
                      Integrated Project Management
                    </h3>
                    <p className="text-sm text-navy/60 font-inter leading-relaxed mb-4">
                      A regional construction firm managing multiple commercial projects
                      needed a unified platform to control costs, track progress, and
                      improve resource utilization across their project portfolio.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "25% reduction in project cost overruns",
                        "Real-time visibility across all active projects",
                        "Improved resource utilization by 35%",
                        "Streamlined compliance documentation",
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
                      <HardHat className="w-16 h-16 text-royal/30 mx-auto mb-3" />
                      <p className="text-sm text-navy/50 font-inter">
                        Construction Leader — Completed 2025
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
            title="Construction ERP FAQs"
            description="Common questions about ERP implementation for construction businesses."
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
              Build Smarter with ERP
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Ready to transform your construction project management? Let's discuss
              how our solutions can help you deliver projects on time and within budget.
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
