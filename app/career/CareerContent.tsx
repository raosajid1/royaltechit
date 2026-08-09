"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
  HeartHandshake,
  MapPin,
  ChevronDown,
  CheckCircle2,
  Upload,
  Send,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

const benefits = [
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description:
      "Continuous learning opportunities with certifications, workshops, and conferences. We invest in your professional development through sponsored training programs and career advancement paths.",
  },
  {
    icon: Users,
    title: "Collaborative Culture",
    description:
      "Work alongside industry experts in a supportive, team-first environment. We foster open communication, knowledge sharing, and a culture where every voice is valued and heard.",
  },
  {
    icon: Target,
    title: "Meaningful Impact",
    description:
      "Work on challenging projects that make a real difference for businesses across industries. See the tangible results of your work and how it transforms client operations.",
  },
  {
    icon: HeartHandshake,
    title: "Great Benefits",
    description:
      "Competitive compensation, flexible working hours, remote work options, health insurance, annual bonuses, and a vibrant office culture with regular team activities and outings.",
  },
];

const positions = [
  {
    title: "Senior Odoo ERP Consultant",
    location: "Lahore",
    type: "Full-time",
    description:
      "Lead end-to-end Odoo ERP implementation projects for enterprise clients. You will be responsible for requirement analysis, solution design, configuration, customization, and go-live support.",
    requirements: [
      "3+ years of experience in Odoo ERP implementation",
      "Strong knowledge of Odoo modules: Accounting, Sales, Inventory, Manufacturing, HR",
      "Proficiency in Python and PostgreSQL",
      "Experience with business process analysis and documentation",
      "Excellent client communication and presentation skills",
      "Odoo certification is a strong plus",
    ],
  },
  {
    title: "Full Stack Developer",
    location: "Lahore",
    type: "Full-time",
    description:
      "Develop and maintain web applications using modern frameworks. You will work on both frontend and backend components of our client projects and internal products.",
    requirements: [
      "2+ years of experience in full stack development",
      "Proficiency in React.js, Next.js, or similar frontend frameworks",
      "Strong backend skills in Node.js, Python, or PHP",
      "Experience with relational databases and ORM frameworks",
      "Familiarity with RESTful APIs and GraphQL",
      "Understanding of version control systems (Git)",
    ],
  },
  {
    title: "Digital Marketing Specialist",
    location: "Remote",
    type: "Full-time",
    description:
      "Drive digital growth strategies for our clients and Royal Tech IT. You will manage SEO, paid campaigns, social media, content marketing, and analytics reporting.",
    requirements: [
      "2+ years of experience in digital marketing",
      "Expertise in SEO, Google Ads, and social media advertising",
      "Proficiency with analytics tools (Google Analytics, Search Console)",
      "Content creation and copywriting skills",
      "Experience with email marketing platforms",
      "Data-driven mindset with strong analytical abilities",
    ],
  },
  {
    title: "Business Analyst",
    location: "Lahore",
    type: "Full-time",
    description:
      "Bridge the gap between business needs and technology solutions. You will gather requirements, document processes, and work closely with development teams to deliver optimal solutions.",
    requirements: [
      "2+ years of experience as a Business Analyst",
      "Strong understanding of business process modeling",
      "Experience with ERP systems or enterprise software",
      "Excellent documentation and requirement gathering skills",
      "Proficiency in creating BRDs, FRDs, and user stories",
      "Strong analytical and problem-solving abilities",
    ],
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    type: "Full-time",
    description:
      "Design intuitive and visually appealing interfaces for web and mobile applications. You will own the design process from user research to final pixel-perfect deliverables.",
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in Figma, Adobe XD, or Sketch",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of design systems and component libraries",
      "Knowledge of accessibility standards and best practices",
      "Experience with user research and usability testing",
    ],
  },
];

interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  coverLetter: string;
  resume: FileList;
}

export default function CareerContent() {
  const [expandedPosition, setExpandedPosition] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ApplicationForm>();

  const onSubmit = () => {
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

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
              Join Our Team
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Build Your Future{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                With Royal Tech
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              At Royal Tech IT, we believe in empowering talent, fostering innovation,
              and creating an environment where passionate individuals can thrive and
              make a meaningful impact in the technology landscape.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <SectionHeader
            tag="Why Join Us"
            title="Why Work With Us?"
            description="We offer more than just a job — we provide a platform for growth, creativity, and lasting impact."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="group bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-card transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-royal/10 to-sky/10 flex items-center justify-center mb-4 group-hover:from-royal/20 group-hover:to-sky/20 transition-colors">
                  <benefit.icon className="w-7 h-7 text-royal" />
                </div>
                <h3 className="font-poppins text-lg font-semibold text-navy mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-navy/50 font-inter leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-navy-50/50">
        <div className="container-content">
          <SectionHeader
            tag="Open Positions"
            title="Current Openings"
            description="Explore our current vacancies and find the role that matches your skills and aspirations."
          />
          <div className="max-w-4xl mx-auto space-y-4">
            {positions.map((position, index) => (
              <div
                key={position.title}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <Card>
                  <button
                    onClick={() =>
                      setExpandedPosition(
                        expandedPosition === index ? null : index
                      )
                    }
                    className="w-full text-left"
                  >
                    <div className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="font-poppins text-lg font-semibold text-navy">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-3 mt-2">
                          <span className="inline-flex items-center gap-1 text-xs font-medium text-navy/50 font-inter">
                            <MapPin size={12} />
                            {position.location}
                          </span>
                          <Badge variant="accent" size="sm">
                            {position.type}
                          </Badge>
                        </div>
                      </div>
                      <span
                        className={`flex-shrink-0 transition-transform duration-200 ${expandedPosition === index ? 'rotate-180' : ''}`}
                      >
                        <ChevronDown
                          size={20}
                          className="text-navy/30"
                        />
                      </span>
                    </div>
                  </button>
                  {expandedPosition === index && (
                    <div
                      className={`overflow-hidden border-t border-gray-100 ${expandedPosition === index ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'} transition-all duration-300 ease-in-out`}
                    >
                      <div className="p-6 space-y-4">
                        <p className="text-sm text-navy/60 font-inter leading-relaxed">
                          {position.description}
                        </p>
                        <div>
                          <h4 className="font-poppins text-sm font-semibold text-navy mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {position.requirements.map((req) => (
                              <li
                                key={req}
                                className="flex items-start gap-2.5"
                              >
                                <CheckCircle2 className="w-4 h-4 text-sky flex-shrink-0 mt-0.5" />
                                <span className="text-sm text-navy/60 font-inter">
                                  {req}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-2">
                          <Link
                            href="#application-form"
                            className="inline-flex items-center gap-2 px-5 py-3 bg-royal text-white font-semibold rounded-lg font-inter text-sm hover:bg-royal/90 transition-colors"
                          >
                            Apply Now
                            <ArrowRight size={16} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="application-form" className="section-padding bg-white">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <SectionHeader
              tag="Apply Now"
              title="Submit Your Application"
              description="Fill out the form below and we'll get back to you within 3-5 business days."
            />

            {submitted ? (
              <div
                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center animate-fade-in"
              >
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="font-poppins text-xl font-semibold text-green-800 mb-2">
                  Application Submitted!
                </h3>
                <p className="text-green-700/70 font-inter text-sm">
                  Thank you for applying. Our HR team will review your application
                  and contact you within 3-5 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold font-inter text-navy mb-2">
                      Full Name *
                    </label>
                    <input
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-inter text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-xs text-red-500 font-inter">
                        {errors.fullName.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold font-inter text-navy mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-inter text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="mt-1 text-xs text-red-500 font-inter">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold font-inter text-navy mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register("phone", {
                        required: "Phone number is required",
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-inter text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                      placeholder="+92 XXX XXXXXXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-xs text-red-500 font-inter">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold font-inter text-navy mb-2">
                      Position Applied For *
                    </label>
                    <select
                      {...register("position", {
                        required: "Please select a position",
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-inter text-navy focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                    >
                      <option value="">Select a position</option>
                      {positions.map((p) => (
                        <option key={p.title} value={p.title}>
                          {p.title}
                        </option>
                      ))}
                    </select>
                    {errors.position && (
                      <p className="mt-1 text-xs text-red-500 font-inter">
                        {errors.position.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold font-inter text-navy mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    {...register("coverLetter")}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-inter text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all resize-none"
                    placeholder="Tell us why you'd be a great fit for this role..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold font-inter text-navy mb-2">
                    Resume / CV *
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      {...register("resume", {
                        required: "Resume is required",
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 text-sm font-inter text-navy/50 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-royal/5 file:text-royal hover:file:bg-royal/10 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                    />
                    <Upload
                      size={16}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-navy/30 pointer-events-none"
                    />
                  </div>
                  {errors.resume && (
                    <p className="mt-1 text-xs text-red-500 font-inter">
                      {errors.resume.message}
                    </p>
                  )}
                  <p className="mt-1 text-xs text-navy/40 font-inter">
                    Accepted formats: PDF, DOC, DOCX
                  </p>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-royal text-white font-semibold rounded-lg font-inter text-sm hover:bg-royal/90 transition-colors"
                >
                  Submit Application
                  <Send size={16} />
                </button>
              </form>
            )}
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
              Don't See the Right Role?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              We're always looking for talented individuals. Send us your resume
              and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Send General Application
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-lg transition-all duration-300 hover:border-white/40"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
