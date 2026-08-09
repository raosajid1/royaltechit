"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import { blogPosts, type BlogPost } from "@/lib/data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function BlogPreview() {
  const displayPosts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Blog"
          title="Latest Insights"
          description="Stay updated with the latest trends in ERP, cloud, cybersecurity, and digital transformation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6"
        >
          {displayPosts.map((post: BlogPost) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              className="group bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden transition-shadow hover:shadow-card"
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="relative aspect-[16/9] bg-navy-50 overflow-hidden">
                  {post.image ? (
                    <img
                      src={post.image}
                      alt={post.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-royal/5 to-sky/5">
                      <span className="font-poppins text-lg font-semibold text-navy/20">
                        {post.category}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <Badge variant="accent" size="sm">
                      {post.category}
                    </Badge>
                  </div>
                </div>
              </Link>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-navy/40 font-inter mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User size={12} />
                    {post.author}
                  </span>
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h3 className="font-poppins text-sm font-semibold text-navy leading-snug mb-2 group-hover:text-royal transition-colors">
                    {post.title}
                  </h3>
                </Link>
                <p className="text-xs text-navy/50 font-inter line-clamp-2 leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-royal font-inter hover:gap-2 transition-all"
                >
                  Read More
                  <ArrowRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-10"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium font-inter text-royal hover:text-royal/80 transition-colors"
          >
            View All Posts
            <ArrowRight size={14} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export { BlogPreview };
