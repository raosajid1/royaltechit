import Link from "next/link";
import {
  ArrowRight,
  HeartPulse,
  Stethoscope,
  ClipboardCheck,
  CalendarCheck,
  Shield,
  CheckCircle2,
  TrendingUp,
  Clock,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata = generatePageSEO({
  title: "Healthcare ERP Solutions",
  description:
    "HIPAA-compliant solutions for patient management, billing, scheduling, and electronic health records. Transform your healthcare operations with Royal Tech IT.",
  keywords:
    "healthcare ERP, patient management, HIPAA compliance, electronic health records, medical billing, healthcare software Pakistan",
});

const challenges = [
  {
    icon: ClipboardCheck,
    title: "Patient Records Management",
    description:
      "Paper-based and fragmented digital records make it difficult to access complete patient histories, leading to delayed care, duplicate tests, and compromised treatment quality.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description:
      "Manual scheduling processes result in double-booking, long wait times, and missed appointments. Lack of integration with billing and records creates administrative bottlenecks.",
  },
  {
    icon: Shield,
    title: "HIPAA & Regulatory Compliance",
    description:
      "Healthcare providers must comply with strict data privacy regulations including HIPAA. Managing patient data security, consent forms, and audit trails requires robust systems.",
  },
  {
    icon: Stethoscope,
    title: "Billing & Claims Management",
    description:
      "Complex billing workflows, insurance claims processing, and revenue cycle management are prone to errors and delays when handled manually or with disconnected systems.",
  },
];

const solutions = [
  {
    challenge: "Electronic Health Records",
    solution:
      "Implement a centralized EHR system with secure patient portals, comprehensive medical histories, and instant access for authorized providers. Role-based access controls ensure data privacy and regulatory compliance.",
  },
  {
    challenge: "Smart Scheduling",
    solution:
      "Deploy intelligent appointment scheduling with automated reminders, waitlist management, and real-time calendar syncing. Integration with EHR and billing eliminates duplicate data entry and administrative overhead.",
  },
  {
    challenge: "Compliance & Security",
    solution:
      "Our healthcare ERP is built with HIPAA-compliant architecture including end-to-end encryption, access logs, automated consent management, and breach notification workflows to meet regulatory requirements.",
  },
  {
    challenge: "Revenue Cycle Management",
    solution:
      "Automated billing workflows from charge capture to claim submission and payment posting. Real-time eligibility verification, denial management, and reporting improve cash flow and reduce AR days.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "50% Less Admin Time",
    description:
      "Automate patient registration, scheduling, billing, and reporting to reduce administrative workload and allow staff to focus on patient care.",
  },
  {
    icon: Clock,
    title: "Reduced Wait Times",
    description:
      "Intelligent scheduling and streamlined check-in processes reduce patient wait times by up to 40%, improving overall patient satisfaction scores.",
  },
  {
    icon: Shield,
    title: "Full HIPAA Compliance",
    description:
      "Built-in security controls, audit trails, and compliance reporting ensure your organization meets all HIPAA and local healthcare regulatory requirements.",
  },
  {
    icon: CheckCircle2,
    title: "Improved Patient Care",
    description:
      "Complete patient history at providers' fingertips enables better clinical decisions, reduces duplicate testing, and improves overall care quality.",
  },
];

const faqs = [
  {
    question: "How does the ERP ensure HIPAA compliance for patient data?",
    answer:
      "Our ERP implements HIPAA safeguards including encryption at rest and in transit, role-based access controls, automatic session timeouts, comprehensive audit logs, and breach detection and notification workflows. Regular security assessments and penetration testing ensure ongoing compliance.",
  },
  {
    question: "Can the system integrate with existing lab and diagnostic equipment?",
    answer:
      "Yes. We provide HL7/FHIR-based integration with laboratory information systems, radiology systems, and diagnostic devices. Test results are automatically pulled into patient records, reducing manual entry errors and accelerating diagnosis.",
  },
  {
    question: "How do you handle multi-facility healthcare organizations?",
    answer:
      "The ERP supports multi-facility management with centralized patient records, unified scheduling across locations, and consolidated billing and reporting. Each facility can maintain its own workflows while sharing essential patient information securely.",
  },
  {
    question: "What telemedicine capabilities are included?",
    answer:
      "Our healthcare ERP includes integrated telemedicine features such as video consultations, secure messaging, e-prescriptions, and remote patient monitoring. Patients can schedule virtual visits through the patient portal and access their health records online.",
  },
];

export default function HealthcarePage() {
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
              { label: "Healthcare" },
            ]}
            className="mb-6"
          />
          <div className="animate-fade-in-up max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Healthcare
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Healthcare Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Better Patient Care
              </span>
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Deliver exceptional patient care with our HIPAA-compliant healthcare ERP
              solutions. Streamline operations, secure patient data, and improve clinical
              outcomes with integrated technology.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Industry Challenges"
            title="Healthcare Challenges We Solve"
            description="Healthcare providers face unique operational and compliance challenges that demand specialized technology solutions."
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
            description="Comprehensive healthcare ERP solutions built for compliance and care excellence."
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
            description="Tangible improvements that transform healthcare delivery and operations."
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
            title="Wilson Healthcare Transformation"
            description="How Wilson Healthcare achieved 50% reduction in administrative time with our healthcare ERP."
          />
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-navy mb-4">
                      Comprehensive Healthcare ERP
                    </h3>
                    <p className="text-sm text-navy/60 font-inter leading-relaxed mb-4">
                      Wilson Healthcare, a multi-specialty clinic network, needed to
                      replace their disjointed systems with an integrated platform for
                      patient management, scheduling, billing, and compliance tracking.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "50% reduction in administrative processing time",
                        "Improved patient satisfaction scores by 35%",
                        "Full HIPAA compliance achieved",
                        "Seamless billing integration across all facilities",
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
                      <HeartPulse className="w-16 h-16 text-royal/30 mx-auto mb-3" />
                      <p className="text-sm text-navy/50 font-inter">
                        Wilson Healthcare — Completed 2025
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
            title="Healthcare ERP FAQs"
            description="Common questions about healthcare ERP implementation and compliance."
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
              Transform Your Healthcare Operations
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Ready to improve patient care and streamline operations? Let's discuss
              how our healthcare ERP solutions can help your organization.
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
