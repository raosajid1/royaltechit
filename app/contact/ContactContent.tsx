"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Facebook,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { Button } from "@/components/ui/Button";

const serviceOptions = [
  { value: "erp", label: "ERP Solutions" },
  { value: "accounting", label: "Accounting Services" },
  { value: "tax", label: "Tax Consultancy" },
  { value: "software", label: "Software Development" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "cloud", label: "Cloud Solutions" },
  { value: "security", label: "Cyber Security" },
  { value: "marketing", label: "Digital Marketing" },
  { value: "other", label: "Other" },
];

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Address",
    value: "Lahore, Pakistan",
    detail: "Serving clients worldwide",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+92 324 4579917",
    detail: "Mon-Fri 9am to 6pm",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@royaltechit.com",
    detail: "We reply within 24 hours",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday - Friday",
    detail: "9:00 AM - 6:00 PM PKT",
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

interface ContactFormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

export default function ContactContent() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      company: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError("");
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      setIsSubmitted(true);
      reset();
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    }
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
          <div
            className="animate-fade-in-up"
          >
            <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs font-semibold uppercase tracking-widest text-sky mb-5">
              Contact Us
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Get in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Touch
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Have a project in mind or want to learn more about our services? We'd love to
              hear from you. Reach out and let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div
              className="animate-fade-in-up lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="font-poppins text-2xl font-bold text-navy mb-2">
                  Contact Information
                </h2>
                <p className="text-sm text-navy/50 font-inter">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-royal/5 flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-5 h-5 text-royal" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-navy/40 font-inter uppercase tracking-wider">
                        {info.label}
                      </p>
                      <p className="font-poppins text-sm font-semibold text-navy mt-0.5">
                        {info.value}
                      </p>
                      <p className="text-xs text-navy/40 font-inter mt-0.5">
                        {info.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div>
                <p className="text-sm font-semibold text-navy mb-3 font-inter">
                  Connect With Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-lg bg-navy-50 flex items-center justify-center text-navy/50 hover:bg-royal hover:text-white transition-all duration-200"
                      aria-label={social.label}
                    >
                      <social.icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-royal/5 rounded-xl p-6 border border-royal/10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-poppins text-sm font-semibold text-navy">
                      WhatsApp
                    </p>
                    <p className="text-xs text-navy/50 font-inter mt-1">
                      +92 324 4579917
                    </p>
                    <a
                      href="https://wa.me/923001234567"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 font-inter mt-2 hover:text-green-700 transition-colors"
                    >
                      Chat on WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="animate-fade-in-up lg:col-span-3"
            >
              <div className="bg-white rounded-xl p-6 md:p-8 shadow-soft border border-gray-100">
                {isSubmitted ? (
                  <div
                    className="text-center py-12 animate-fade-in"
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="font-poppins text-xl font-bold text-navy mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-sm text-navy/50 font-inter mb-6 max-w-md mx-auto">
                      Thank you for reaching out. Our team will review your inquiry and get
                      back to you within 24 hours.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-poppins text-xl font-bold text-navy mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-navy/50 font-inter mb-6">
                      Fill out the form below and we'll get back to you shortly.
                    </p>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <Input
                          label="Full Name"
                          placeholder="Enter your name"
                          error={errors.name?.message}
                          {...register("name", {
                            required: "Name is required",
                            minLength: {
                              value: 2,
                              message: "Name must be at least 2 characters",
                            },
                          })}
                        />
                        <Input
                          label="Company"
                          placeholder="Enter your company"
                          {...register("company")}
                        />
                      </div>

                      <div className="grid sm:grid-cols-2 gap-5">
                        <Input
                          label="Phone"
                          type="tel"
                          placeholder="Enter your phone number"
                          {...register("phone")}
                        />
                        <Input
                          label="Email"
                          type="email"
                          placeholder="Enter your email address"
                          error={errors.email?.message}
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Please enter a valid email address",
                            },
                          })}
                        />
                      </div>

                      <Select
                        label="Service"
                        placeholder="Select a service"
                        options={serviceOptions}
                        error={errors.service?.message}
                        {...register("service", {
                          required: "Please select a service",
                        })}
                      />

                      <Textarea
                        label="Message"
                        placeholder="Tell us about your project or inquiry..."
                        rows={5}
                        error={errors.message?.message}
                        {...register("message", {
                          required: "Message is required",
                          minLength: {
                            value: 10,
                            message: "Message must be at least 10 characters",
                          },
                        })}
                      />

                      {submitError && (
                        <p className="text-sm text-red-400 font-inter">{submitError}</p>
                      )}

                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        loading={isSubmitting}
                        className="w-full"
                      >
                        {isSubmitting ? "Sending..." : "Send Message"}
                        {!isSubmitting && <Send size={16} />}
                      </Button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 section-padding">
        <div className="container-content">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-sky mb-3">
              Find Us
            </span>
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-navy leading-tight">
              Our Location
            </h2>
          </div>
          <div className="rounded-xl overflow-hidden shadow-soft border border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d217776.45637100968!2d74.25420740494062!3d31.48112109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391903f2658ececf%3A0x1f82c89c5a7e339a!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Royal Tech IT Location"
            />
          </div>
        </div>
      </section>
    </>
  );
}
