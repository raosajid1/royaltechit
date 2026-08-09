import Link from "next/link";
import {
  Target,
  Eye,
  Shield,
  Lightbulb,
  Award,
  Handshake,
  ArrowRight,
  CheckCircle2,
  Users,
  Briefcase,
  Star,
  Building2,
  Calendar,
  MapPin,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";
import { team } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata = generatePageSEO({
  title: "About Us",
  description:
    "Learn about Royal Tech IT's journey, mission, vision, core values, and leadership team. Discover why we are a trusted partner for digital transformation.",
  keywords:
    "about Royal Tech IT, company overview, mission vision, IT consulting Pakistan, Odoo partner",
});

const coreValues = [
  {
    icon: Shield,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in every engagement, building trust that lasts beyond project completion.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly explore emerging technologies and creative approaches to deliver forward-thinking solutions that drive real business value.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering exceptional quality in every solution we build, every process we optimize, and every client we serve.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We believe in building lasting relationships. Your success is our success, and we work alongside you as a true strategic partner.",
  },
];

const milestones = [
  { year: "2016", title: "Founded", description: "Royal Tech IT was established with a vision to transform businesses through technology." },
  { year: "2018", title: "First Major Client", description: "Secured our first enterprise client, marking a significant milestone in our growth journey." },
  { year: "2020", title: "Odoo Gold Partner", description: "Achieved Odoo Gold Partner status, recognizing our expertise in ERP implementation and customization." },
  { year: "2022", title: "100+ Projects", description: "Celebrated delivering over 100 successful projects across multiple industries and countries." },
  { year: "2024", title: "Regional Expansion", description: "Expanded operations regionally, opening new delivery centers to serve a growing client base." },
  { year: "2026", title: "Industry Leaders", description: "Recognized as industry leaders in digital transformation, setting benchmarks for excellence." },
];

const achievements = [
  { icon: Briefcase, value: "100+", label: "Projects Delivered" },
  { icon: Users, value: "50+", label: "Team Members" },
  { icon: Star, value: "98%", label: "Client Satisfaction" },
  { icon: Building2, value: "10+", label: "Countries Served" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-600 to-royal" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(14,165,233,0.12),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(212,168,67,0.06),transparent_50%)]" />
        <div className="absolute top-20 left-20 w-72 h-72 border border-sky/10 rounded-full" />
        <div className="absolute bottom-10 right-10 w-96 h-96 border border-accent/10 rounded-full" />

        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              About Us
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Transforming Businesses
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Through Technology
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Royal Tech IT is a premier technology consulting firm dedicated to helping
              businesses leverage the power of digital transformation. From ERP implementation
              to custom software development, we deliver solutions that drive measurable results.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-sky mb-3">
                Our Mission
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                Driving Business Growth Through{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-sky">
                  Innovative Technology
                </span>
              </h2>
              <p className="text-base text-navy/60 font-inter leading-relaxed mb-6">
                Our mission is to empower businesses with cutting-edge technology solutions that
                streamline operations, enhance productivity, and drive sustainable growth. We
                bridge the gap between business challenges and technological possibilities,
                delivering solutions that create real, measurable impact.
              </p>
              <div className="space-y-3">
                {[
                  "Deliver enterprise-grade ERP solutions tailored to unique business needs",
                  "Provide end-to-end digital transformation consulting and implementation",
                  "Ensure client success through continuous support and innovation",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy/70 font-inter">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up">
              <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-sky mb-3">
                Our Vision
              </span>
              <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy leading-tight mb-6">
                Shaping the Future of{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-royal to-sky">
                  Digital Enterprise
                </span>
              </h2>
              <p className="text-base text-navy/60 font-inter leading-relaxed mb-6">
                We envision a world where every business, regardless of size or industry, has
                access to enterprise-grade technology that unlocks their full potential. Royal
                Tech IT strives to be the most trusted technology partner, known for excellence,
                innovation, and unwavering commitment to client success.
              </p>
              <div className="space-y-3">
                {[
                  "Be the leading digital transformation partner in the region",
                  "Set new benchmarks for quality and innovation in IT consulting",
                  "Create lasting value for clients, employees, and communities",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <Target className="w-5 h-5 text-sky flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-navy/70 font-inter">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="Core Values"
            title="What We Stand For"
            description="Our core values guide every decision we make and every solution we deliver."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {coreValues.map((value, index) => (
              <div
                key={value.title}
                className="group bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-royal/5 flex items-center justify-center mb-4 group-hover:bg-royal/10 transition-colors">
                  <value.icon className="w-6 h-6 text-royal" />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-navy mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-navy/50 font-inter leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Our Journey"
            title="The Royal Tech Timeline"
            description="From a bold vision to an industry leader — explore the key milestones that shaped our story."
          />
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-sky via-royal to-sky/20 transform md:-translate-x-px" />
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={cn(
                    "animate-fade-in-up relative flex items-start gap-6 md:gap-0",
                    index % 2 === 0
                      ? "md:flex-row"
                      : "md:flex-row-reverse"
                  )}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="hidden md:block md:w-1/2" />
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-royal to-sky flex items-center justify-center shadow-lg shadow-royal/20">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div
                    className={cn(
                      "flex-1 bg-white rounded-xl p-6 shadow-soft border border-gray-100",
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    )}
                  >
                    <span className="inline-block px-3 py-1 bg-sky/10 text-sky text-xs font-semibold font-inter rounded-full mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="font-poppins text-lg font-semibold text-navy mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-navy/50 font-inter leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="Leadership"
            title="Meet Our Team"
            description="Our leadership team brings decades of combined experience in technology, consulting, and business transformation."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div
                key={member.name}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <TeamCard
                  name={member.name}
                  role={member.role}
                  bio={member.bio}
                  image={member.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-navy via-navy-600 to-royal relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(14,165,233,0.08),transparent_60%)]" />
        <div className="relative container-content">
          <SectionHeader
            tag="Achievements"
            title="Our Impact by the Numbers"
            description="Every number represents a commitment fulfilled and a business transformed."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-sky" />
                </div>
                <div className="font-poppins text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60 font-inter">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="animate-fade-in-up">
              <SectionHeader
                tag="Why Choose Us"
                title="Why Royal Tech IT?"
                description="We don't just deliver projects — we build partnerships that drive lasting business value."
              />
              <div className="space-y-5">
                {[
                  {
                    title: "Deep Industry Expertise",
                    desc: "Years of experience across manufacturing, retail, healthcare, education, and more.",
                  },
                  {
                    title: "Certified Professionals",
                    desc: "Our team holds certifications from Odoo, AWS, Microsoft, and other leading technology providers.",
                  },
                  {
                    title: "End-to-End Services",
                    desc: "From strategy and implementation to support and optimization, we cover the entire lifecycle.",
                  },
                  {
                    title: "Proven Track Record",
                    desc: "100+ successful projects with a 98% client satisfaction rate across 10+ countries.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-royal/5 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-royal" />
                    </div>
                    <div>
                      <h4 className="font-poppins text-base font-semibold text-navy">
                        {item.title}
                      </h4>
                      <p className="text-sm text-navy/50 font-inter mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-in-up relative"
            >
              <div className="aspect-[4/3] rounded-xl bg-gradient-to-br from-royal/5 to-sky/5 border border-gray-100 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-br from-royal to-sky flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="font-poppins text-lg font-semibold text-navy mb-2">
                      Our Headquarters
                    </h3>
                    <p className="text-sm text-navy/50 font-inter">
                      Lahore, Pakistan
                    </p>
                    <p className="text-sm text-navy/50 font-inter mt-1">
                      Serving clients globally
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
              Ready to Transform Your Business?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Let's discuss how Royal Tech IT can help you achieve your business goals
              through the power of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Get in Touch
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/40"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
