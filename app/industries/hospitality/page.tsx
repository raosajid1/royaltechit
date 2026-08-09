import Link from "next/link";
import {
  ArrowRight,
  Hotel,
  CalendarCheck,
  Users,
  DollarSign,
  CheckCircle2,
  TrendingUp,
  Star,
  Smartphone,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Accordion } from "@/components/ui/Accordion";
import Breadcrumb from "@/components/layout/Breadcrumb";

export const metadata = generatePageSEO({
  title: "Hospitality ERP Solutions",
  description:
    "Property management, booking engines, and guest experience platforms for hotels, resorts, and hospitality businesses.",
  keywords:
    "hospitality ERP, hotel management system, property management, booking engine, PMS, hotel software Pakistan",
});

const challenges = [
  {
    icon: CalendarCheck,
    title: "Reservation Management",
    description:
      "Managing bookings across direct channels, OTAs, and travel agents while preventing overbooking and ensuring accurate room inventory is a constant challenge for hospitality businesses.",
  },
  {
    icon: Users,
    title: "Guest Experience",
    description:
      "Without a unified guest profile system, hotels struggle to personalize experiences, track preferences, and build loyalty across multiple properties and guest touchpoints.",
  },
  {
    icon: DollarSign,
    title: "Revenue Optimization",
    description:
      "Manual rate management, lack of dynamic pricing, and disconnected channel management result in missed revenue opportunities and inconsistent pricing across booking platforms.",
  },
  {
    icon: Hotel,
    title: "Multi-Property Operations",
    description:
      "Managing multiple properties with separate systems creates inefficiencies in centralized reporting, cross-property bookings, and consistent brand experience delivery.",
  },
];

const solutions = [
  {
    challenge: "Centralized Reservations",
    solution:
      "Unified reservation engine with real-time inventory management across all channels. Channel manager integration with OTAs, automated rate updates, and intelligent overbooking prevention ensure maximum occupancy.",
  },
  {
    challenge: "Guest Relationship Management",
    solution:
      "Comprehensive guest profiles capturing preferences, stay history, special requests, and feedback. Personalized pre-arrival, in-stay, and post-stay communications enhance guest satisfaction and repeat bookings.",
  },
  {
    challenge: "Revenue Management",
    solution:
      "Dynamic pricing engine with demand forecasting, competitor rate analysis, and automated rate updates across channels. Real-time revenue dashboards provide actionable insights for maximizing RevPAR.",
  },
  {
    challenge: "Multi-Property Management",
    solution:
      "Centralized property management with unified booking, billing, and reporting across all properties. Cross-property guest profiles and centralized inventory enable seamless multi-property operations.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Increased RevPAR",
    description:
      "Dynamic pricing and channel optimization drive revenue per available room up by 20% through better rate management and distribution across all booking channels.",
  },
  {
    icon: Star,
    title: "Enhanced Guest Satisfaction",
    description:
      "Personalized experiences, faster check-in/out, and consistent service across properties improve guest satisfaction scores and drive positive reviews and repeat business.",
  },
  {
    icon: Smartphone,
    title: "Mobile Operations",
    description:
      "Mobile check-in/out, digital keys, housekeeping management, and staff task management enable efficient operations and improved guest experiences through contactless services.",
  },
  {
    icon: CheckCircle2,
    title: "Operational Efficiency",
    description:
      "Automated housekeeping scheduling, maintenance tracking, inventory management, and staff rostering reduce operational costs and improve service delivery consistency.",
  },
];

const faqs = [
  {
    question: "How does the system integrate with online travel agencies (OTAs)?",
    answer:
      "Our channel manager integrates with major OTAs including Booking.com, Expedia, Agoda, and others. Inventory and rates are synchronized in real-time, preventing overbooking and ensuring rate parity across all distribution channels.",
  },
  {
    question: "Can the ERP handle both hotels and restaurants within the same property?",
    answer:
      "Yes. Our hospitality ERP includes integrated restaurant POS, room service management, banquet and event management, and spa booking modules. All revenue streams are consolidated under a single property view with unified guest billing.",
  },
  {
    question: "What reporting is available for hospitality performance metrics?",
    answer:
      "Comprehensive reports cover occupancy rates, ADR, RevPAR, GOPPAR, booking channel performance, guest satisfaction scores, and operational KPIs. Dashboards can be customized for general managers, owners, and department heads.",
  },
  {
    question: "How do you handle group bookings and events?",
    answer:
      "Our ERP includes a group and events management module handling room blocks, group billing, event space booking, catering, and audio-visual equipment management. Group reservations can be managed alongside individual bookings with transparent availability.",
  },
];

export default function HospitalityPage() {
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
              { label: "Hospitality" },
            ]}
            className="mb-6"
          />
          <div className="animate-fade-in-up max-w-4xl">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Hospitality
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Hospitality Solutions for{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Exceptional Stays
              </span>
            </h1>
            <p className="max-w-3xl text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Deliver memorable guest experiences while maximizing revenue and operational
              efficiency. Our hospitality ERP solutions empower hotels, resorts, and
              hospitality groups to excel in every aspect of their operations.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Industry Challenges"
            title="Hospitality Challenges We Solve"
            description="Hospitality businesses face unique operational challenges in delivering exceptional guest experiences."
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
            description="Integrated hospitality ERP solutions for modern hotels and resorts."
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
            description="Tangible outcomes that transform hospitality operations and guest experiences."
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
            title="Hotel Group Digital Transformation"
            description="How a premier hotel group streamlined multi-property operations with our hospitality ERP."
          />
          <div className="animate-fade-in-up max-w-4xl mx-auto">
            <Card>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="font-poppins text-xl font-semibold text-navy mb-4">
                      Unified Property Management
                    </h3>
                    <p className="text-sm text-navy/60 font-inter leading-relaxed mb-4">
                      A growing hotel group managing multiple properties needed to replace
                      separate property management systems with a unified platform for
                      centralized reservations, guest management, and reporting.
                    </p>
                    <ul className="space-y-2">
                      {[
                        "20% increase in RevPAR through dynamic pricing",
                        "Unified guest profiles across all properties",
                        "30% reduction in operational overhead",
                        "Seamless OTA integration and rate parity",
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
                      <Hotel className="w-16 h-16 text-royal/30 mx-auto mb-3" />
                      <p className="text-sm text-navy/50 font-inter">
                        Premier Hotel Group — Completed 2025
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
            title="Hospitality ERP FAQs"
            description="Common questions about hospitality ERP implementation and property management."
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
              Elevate Your Hospitality Business
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Ready to transform guest experiences and maximize revenue? Let's discuss
              how our hospitality ERP solutions can help your business.
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
