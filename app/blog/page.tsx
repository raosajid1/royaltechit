import Link from "next/link";
import {
  ArrowRight,
  Calendar,
  User,
  ChevronLeft,
  ChevronRight,
  Mail,
  Send,
  Tag,
} from "lucide-react";
import { generatePageSEO } from "@/lib/metadata";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogCard } from "@/components/ui/BlogCard";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { blogPosts } from "@/lib/data";

export const metadata = generatePageSEO({
  title: "Our Blog",
  description:
    "Insights, guides, and thought leadership on ERP implementation, cloud computing, digital transformation, cybersecurity, and business technology.",
  keywords:
    "ERP blog, Odoo insights, cloud computing, digital transformation, technology blog Pakistan, business automation",
});

const categories = ["ERP", "Cloud", "Tax", "Security", "Marketing"];

export default function BlogPage() {
  const featured = blogPosts[0];
  const remaining = blogPosts.slice(1);

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
              Our Blog
            </span>
            <h1 className="font-poppins text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Insights &{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky to-accent">
                Thought Leadership
              </span>
            </h1>
            <p className="max-w-3xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed">
              Stay informed with the latest trends, guides, and best practices in
              ERP, cloud computing, cybersecurity, and digital business transformation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-content">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2 space-y-12">
              {featured && (
                <div className="animate-fade-in-up">
                  <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-sky mb-4">
                    Featured Post
                  </span>
                  <div className="group bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden hover:shadow-card transition-all duration-300">
                    <Link href={`/blog/${featured.slug}`}>
                      <div className="relative aspect-[21/9] bg-navy-50 overflow-hidden">
                        {featured.image ? (
                          <img
                            src={featured.image}
                            alt={featured.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-royal/10 to-sky/10">
                            <span className="font-poppins text-3xl font-bold text-royal/15">
                              {featured.category}
                            </span>
                          </div>
                        )}
                        <div className="absolute top-4 left-4">
                          <Badge variant="accent" size="md">
                            {featured.category}
                          </Badge>
                        </div>
                      </div>
                    </Link>
                    <div className="p-6 md:p-8">
                      <div className="flex items-center gap-4 text-sm text-navy/40 font-inter mb-3">
                        <span className="flex items-center gap-1.5">
                          <Calendar size={14} />
                          {featured.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <User size={14} />
                          {featured.author}
                        </span>
                      </div>
                      <Link href={`/blog/${featured.slug}`}>
                        <h2 className="font-poppins text-2xl md:text-3xl font-bold text-navy leading-tight mb-3 group-hover:text-royal transition-colors">
                          {featured.title}
                        </h2>
                      </Link>
                      <p className="text-base text-navy/50 font-inter leading-relaxed mb-6">
                        {featured.excerpt}
                      </p>
                      <Link
                        href={`/blog/${featured.slug}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-royal font-inter group/link"
                      >
                        Read Full Article
                        <ArrowRight
                          size={16}
                          className="transition-transform duration-300 group-hover/link:translate-x-1"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {remaining.length > 0 && (
                <div>
                  <span className="inline-block text-xs font-semibold font-inter uppercase tracking-widest text-sky mb-6">
                    Latest Articles
                  </span>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {remaining.map((post, index) => (
                      <div
                        key={post.id}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <BlogCard
                          title={post.title}
                          excerpt={post.excerpt}
                          category={post.category}
                          date={post.date}
                          author={post.author}
                          image={post.image}
                          slug={`/blog/${post.slug}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-center gap-3 pt-6 border-t border-gray-100">
                <button
                  disabled
                  className="inline-flex items-center gap-2 px-5 py-3 bg-navy/5 text-navy/40 font-semibold rounded-lg font-inter text-sm cursor-not-allowed"
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>
                <span className="text-sm font-inter text-navy/50">
                  Page 1 of 3
                </span>
                <button className="inline-flex items-center gap-2 px-5 py-3 bg-royal text-white font-semibold rounded-lg font-inter text-sm hover:bg-royal/90 transition-colors">
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <aside className="space-y-8">
              <Card>
                <div className="p-6">
                  <h3 className="font-poppins text-base font-semibold text-navy mb-4 flex items-center gap-2">
                    <Tag size={16} className="text-royal" />
                    Categories
                  </h3>
                  <div className="space-y-2">
                    {categories.map((cat) => {
                      const count = blogPosts.filter(
                        (p) => p.category === cat
                      ).length;
                      return (
                        <Link
                          key={cat}
                          href="#"
                          className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-navy-50/50 transition-colors group"
                        >
                          <span className="text-sm font-inter text-navy/60 group-hover:text-royal transition-colors">
                            {cat}
                          </span>
                          <span className="text-xs font-inter text-navy/30 bg-navy-50 px-2 py-0.5 rounded-full">
                            {count}
                          </span>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h3 className="font-poppins text-base font-semibold text-navy mb-4">
                    Recent Posts
                  </h3>
                  <div className="space-y-4">
                    {blogPosts.slice(0, 3).map((post) => (
                      <Link
                        key={post.id}
                        href={`/blog/${post.slug}`}
                        className="group flex gap-3"
                      >
                        <div className="w-14 h-14 rounded-lg bg-navy-50 flex-shrink-0 flex items-center justify-center overflow-hidden">
                          {post.image ? (
                            <img
                              src={post.image}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-xs font-bold text-royal/30 font-poppins">
                              {post.category.slice(0, 2)}
                            </span>
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold font-poppins text-navy line-clamp-2 group-hover:text-royal transition-colors leading-snug">
                            {post.title}
                          </h4>
                          <p className="text-xs text-navy/40 font-inter mt-1">
                            {post.date}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </Card>

              <Card>
                <div className="p-6">
                  <h3 className="font-poppins text-base font-semibold text-navy mb-2">
                    Newsletter
                  </h3>
                  <p className="text-sm text-navy/50 font-inter mb-4">
                    Get the latest insights delivered to your inbox monthly.
                  </p>
                  <div className="space-y-3">
                    <div className="relative">
                      <Mail
                        size={16}
                        className="absolute left-3.5 top-1/2 -translate-y-1/2 text-navy/30"
                      />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 text-sm font-inter text-navy placeholder:text-navy/30 focus:outline-none focus:ring-2 focus:ring-royal/20 focus:border-royal transition-all"
                      />
                    </div>
                    <span className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-royal text-white font-semibold rounded-lg font-inter text-sm hover:bg-royal/90 transition-colors cursor-pointer">
                      Subscribe
                      <Send size={14} />
                    </span>
                  </div>
                </div>
              </Card>
            </aside>
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
              Want to Stay Updated?
            </h2>
            <p className="max-w-2xl mx-auto text-base md:text-lg text-white/70 font-inter leading-relaxed mb-8">
              Subscribe to our newsletter and never miss an update on the latest
              technology trends, guides, and industry insights.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-navy font-semibold rounded-lg transition-all duration-300 hover:bg-accent-light hover:shadow-lg hover:shadow-accent/20"
              >
                Subscribe Now
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
