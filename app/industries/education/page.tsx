import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  DollarSign,
  CheckCircle2,
  TrendingUp,
  BarChart3,
  Globe,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata = generatePageSEO({
  title: "Education ERP Solutions",
  description:
    "Student information systems, LMS, fee management, and academic performance tracking solutions for educational institutions.",
  keywords:
    "education ERP, student management system, LMS, school management software, fee management, academic tracking, Pakistan education",
});

const challenges = [
  {
    icon: Users,
    title: "Student Data Management",
    description:
      "Managing student admissions, attendance, grades, and disciplinary records across multiple departments and campuses becomes increasingly complex as institutions grow.",
  },
  {
    icon: DollarSign,
    title: "Fee Collection & Finance",
    description:
      "Manual fee collection, late payment tracking, and financial reporting create administrative burdens and revenue leakage. Multiple fee structures add complexity for institutions.",
  },
  {
    icon: BookOpen,
    title: "Academic Performance Tracking",
    description:
      "Without integrated systems, tracking student progress, generating report cards, and analyzing academic trends requires significant manual effort and is prone to errors.",
  },
  {
    icon: Globe,
    title: "Remote Learning Integration",
    description:
      "The shift toward blended learning requires seamless integration between in-person and online education, with consistent access to materials, assessments, and communication tools.",
  },
];

const solutions = [
  {
    challenge: "Student Information System",
    solution:
      "Comprehensive SIS managing the entire student lifecycle from admission and enrollment to graduation. Centralized records for demographics, attendance, grades, schedules, and disciplinary history accessible to authorized staff.",
  },
  {
    challenge: "Fee Management",
    solution:
      "Automated fee structures, online payment portals, installment plans, and late fee calculations. Integrated with accounting for real-time financial reporting and reconciliation across all campuses.",
  },
  {
    challenge: "Academic Analytics",
    solution:
      "Automated grade calculation, report card generation, and academic progress tracking. Analytics dashboards provide insights into student performance trends, subject-wise analysis, and intervention requirements.",
  },
  {
    challenge: "Learning Management",
    solution:
      "Integrated LMS supporting course content delivery, online assessments, virtual classrooms, and collaboration tools. Seamless sync with SIS for enrollment and grade management.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Administrative Efficiency",
    description:
      "Automate routine administrative tasks reducing paperwork by 70% and allowing staff to focus on student support and institutional development initiatives.",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Insights",
    description:
      "Comprehensive analytics on student performance, attendance patterns, financial health, and operational metrics enable informed decision-making at all levels.",
  },
  {
    icon: Users,
    title: "Enhanced Stakeholder Communication",
    description:
      "Parent portals, student dashboards, and staff communication tools keep all stakeholders informed and engaged with real-time updates and notifications.",
  },
  {
    icon: CheckCircle2,
    title: "Accreditation Readiness",
    description:
      "Maintain complete digital records for accreditation bodies with automated reporting on academic standards, faculty qualifications, student outcomes, and institutional effectiveness.",
  },
];

const faqs = [
  {
    question: "How does the system handle multiple campuses and branches?",
    answer:
      "The ERP supports multi-campus management with centralized or decentralized administration. Each campus can have its own programs, faculty, and fee structures while sharing a unified student database and providing consolidated institutional reporting.",
  },
  {
    question: "Can parents track their child's academic progress?",
    answer:
      "Yes. Our parent portal provides real-time access to attendance records, grades, exam schedules, homework assignments, fee status, and direct communication with teachers. Mobile app support ensures access from anywhere.",
  },
  {
    question: "How does the LMS integrate with the student information system?",
    answer:
      "The LMS and SIS are fully integrated on a single platform. Student enrollments automatically sync, grades from online assessments flow into the academic record, and course materials are accessible based on registered courses. No duplicate data entry is required.",
  },
  {
    question: "What reporting capabilities are available for regulatory compliance?",
    answer:
      "The system generates reports required by higher education commissions, accreditation bodies, and government agencies. This includes student-teacher ratios, faculty qualifications, program outcomes, financial audits, and enrollment statistics in required formats.",
  },
];

export default function EducationPage() {
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
              { label: "Education" },
            ]}
            className="mb-6"
          />
          <div className="animate-fade-in-up max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Education
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Education Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Academic Excellence
              </span>
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Empower your educational institution with integrated management solutions.
              From student information systems to learning management, we help schools,
              colleges, and universities deliver better educational outcomes.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Industry Challenges"
            title="Education Challenges We Solve"
            description="Educational institutions face growing administrative complexity and technology demands."
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
            description="Comprehensive education ERP solutions for modern learning institutions."
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
            description="Measurable improvements for your educational institution."
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
            title="University ERP Transformation"
            description="How a leading university streamlined operations across multiple campuses."
          />
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-navy mb-4">
                      Integrated Campus Management
                    </h3>
                    <p className="text-sm text-navy/60 font-inter leading-relaxed mb-4">
                      A large university with multiple campuses needed to replace legacy
                      systems with a unified platform for student management, fee
                      processing, academic tracking, and online learning integration.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "70% reduction in administrative paperwork",
                        "Real-time academic performance tracking",
                        "Unified fee management across all campuses",
                        "Seamless online and offline learning integration",
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
                      <GraduationCap className="w-16 h-16 text-royal/30 mx-auto mb-3" />
                      <p className="text-sm text-navy/50 font-inter">
                        Leading University — Completed 2025
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
            title="Education ERP FAQs"
            description="Common questions about ERP implementation for educational institutions."
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
              Transform Your Institution
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Ready to modernize your educational institution's operations? Let's
              discuss how our education ERP solutions can help.
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
