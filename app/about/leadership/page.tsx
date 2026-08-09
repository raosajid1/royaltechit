import { ArrowRight, Quote, Mail, Linkedin, Award, Star } from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TeamCard } from "@/components/ui/TeamCard";
import { team } from "@/lib/data";
import Link from "next/link";

export const metadata = generatePageSEO({
  title: "Leadership",
  description:
    "Meet the leadership team behind Royal Tech IT — experienced professionals driving digital transformation across industries.",
  keywords:
    "Royal Tech IT leadership, management team, IT consulting founders, Umar Farooq CEO",
});

const leadershipTraits = [
  {
    icon: Award,
    title: "Decades of Experience",
    desc: "Our leadership team brings 50+ years of combined experience in technology, consulting, and business strategy.",
  },
  {
    icon: Star,
    title: "Industry Recognition",
    desc: "Recognized as thought leaders and certified experts across Odoo, AWS, Microsoft, and other platforms.",
  },
  {
    icon: Quote,
    title: "Client-First Philosophy",
    desc: "Every leader at Royal Tech IT is personally invested in client success and long-term partnership value.",
  },
];

export default function LeadershipPage() {
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
              Leadership
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Meet Our Leadership
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Driving Innovation &amp; Excellence
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Our leadership team brings decades of combined experience in technology,
              consulting, and business transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Our Team"
            title="The People Behind Royal Tech IT"
            description="Meet the dedicated professionals who lead our vision and deliver exceptional results for our clients."
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

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="Why Our Leadership Matters"
            title="Experience You Can Trust"
            description="Our leadership team's expertise and commitment ensure every engagement delivers exceptional results."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadershipTraits.map((trait, index) => (
              <div
                key={trait.title}
                className="group bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-royal/10 to-sky/10 flex items-center justify-center mb-4 group-hover:from-royal/20 group-hover:to-sky/20 transition-colors">
                  <trait.icon className="w-6 h-6 text-royal" />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-navy mb-2">
                  {trait.title}
                </h3>
                <p className="text-sm text-navy/50 font-inter leading-relaxed">
                  {trait.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-navy via-navy-600 to-royal">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(212,168,67,0.08),transparent_50%)]" />
        <div className="relative container-content text-center">
          <div className="animate-fade-in-up">
            <h2 className="font-poppins text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
              Want to Join Our Team?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              We're always looking for talented individuals who share our passion for
              technology and excellence.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/career"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                View Careers
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/40"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
