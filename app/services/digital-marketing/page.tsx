import { generatePageSEO } from "@/lib/metadata";
import { ServiceHero } from "@/components/services/ServiceHero";
import { ServiceOverview } from "@/components/services/ServiceOverview";
import { ServiceBenefits } from "@/components/services/ServiceBenefits";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { ServiceTechStack } from "@/components/services/ServiceTechStack";
import { ServiceIndustries } from "@/components/services/ServiceIndustries";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { ServiceCTA } from "@/components/services/ServiceCTA";

export const metadata = generatePageSEO({
  title: "Digital Marketing",
  description:
    "Data-driven digital marketing services including SEO, Google Ads, social media marketing, content marketing, and conversion rate optimization.",
  keywords:
    "digital marketing, SEO services, Google Ads, social media marketing, content marketing, PPC, Pakistan digital marketing agency",
});

const hero = {
  title: "Digital Marketing",
  description:
    "Grow your business with data-driven digital marketing strategies that deliver measurable results. From SEO and Google Ads to social media management and content marketing, we help businesses attract, engage, and convert their target audiences online.",
  icon: "BarChart3",
};

const overview = {
  title: "Results-Driven Digital Marketing",
  description:
    "Royal Tech IT combines marketing creativity with data analytics to deliver campaigns that drive real business growth. Our digital marketing services are designed to increase visibility, generate qualified leads, and maximize ROI across all digital channels. We serve businesses in Pakistan and globally with localized and international marketing strategies tailored to each market.",
  image: "/images/creative-team-collaboration.jpg",
  features: [
    "Search engine optimization including technical SEO, on-page optimization, link building, and local SEO for Pakistani businesses",
    "Google Ads and PPC campaign management with keyword research, ad copy, landing pages, and A/B testing",
    "Social media marketing and management across Facebook, Instagram, LinkedIn, and TikTok with content calendars",
    "Content marketing strategy including blog writing, video production, infographics, and downloadable resources",
    "Email marketing campaigns with segmentation, automation workflows, personalization, and performance analytics",
    "Conversion rate optimization with heatmaps, user testing, funnel analysis, and iterative landing page improvements",
    "Analytics and reporting with Google Analytics 4, Google Tag Manager, Looker Studio dashboards, and monthly reviews",
    "Brand strategy development including positioning, messaging, visual identity, and brand guidelines documentation",
  ],
};

const benefits = [
  {
    icon: "TrendingUp",
    title: "Measurable ROI",
    description:
      "Every campaign is tracked with clear KPIs and real-time dashboards. Our clients see an average 5x return on ad spend within the first three months of optimized campaign management.",
  },
  {
    icon: "Users",
    title: "Targeted Audience Reach",
    description:
      "Precision targeting ensures your message reaches the right people at the right time. Demographic, behavioral, and contextual targeting minimize wasted spend and maximize conversion rates.",
  },
  {
    icon: "BarChart3",
    title: "Data-Driven Decisions",
    description:
      "All strategies are backed by data. We use analytics, A/B testing, and user research to continuously optimize campaigns, channels, and creative assets for maximum performance.",
  },
  {
    icon: "Zap",
    title: "Rapid Scalability",
    description:
      "Digital campaigns can be scaled up or down in real-time based on performance. Successful campaigns receive increased budgets instantly, while underperformers are optimized or paused to protect ROI.",
  },
];

const process = [
  {
    step: 1,
    title: "Audit & Strategy Development",
    description:
      "We conduct a comprehensive audit of your current digital presence including website, SEO, social media, paid ads, and analytics setup. A customized strategy is developed with channel selection, budget allocation, and projected KPIs.",
  },
  {
    step: 2,
    title: "Setup & Optimization",
    description:
      "All marketing platforms are set up and configured including Google Ads, Meta Business Suite, LinkedIn Campaign Manager, and analytics tools. Tracking pixels, conversion goals, and UTM parameters are implemented for accurate attribution.",
  },
  {
    step: 3,
    title: "Campaign Execution",
    description:
      "Campaigns are launched with carefully crafted creatives, ad copy, landing pages, and audience targeting. A/B testing begins immediately to identify winning combinations. Weekly optimizations are performed based on performance data.",
  },
  {
    step: 4,
    title: "Monitoring & Reporting",
    description:
      "Campaigns are monitored daily with alerts for significant changes. Weekly performance snapshots and monthly comprehensive reports are provided with actionable insights and recommendations for the next period.",
  },
  {
    step: 5,
    title: "Optimization & Growth",
    description:
      "Based on accumulated data, we refine targeting, expand into high-performing channels, scale winning campaigns, and test new approaches. Quarterly strategy reviews ensure alignment with your evolving business goals.",
  },
];

const technologies = [
  { name: "Google Ads", description: "Paid search and display advertising platform reaching billions of users across search, YouTube, and partner sites.", icon: "BarChart3" },
  { name: "Google Analytics 4", description: "Next-generation analytics platform with event-based tracking, predictive metrics, and cross-platform reporting.", icon: "BarChart3" },
  { name: "Meta Business Suite", description: "Centralized management for Facebook and Instagram advertising, content scheduling, and audience insights.", icon: "Globe" },
  { name: "LinkedIn Campaign Manager", description: "B2B advertising platform for targeting professionals by job title, industry, company size, and seniority.", icon: "Users" },
  { name: "SEMrush / Ahrefs", description: "SEO and competitive analysis tools for keyword research, backlink analysis, and content gap identification.", icon: "Globe" },
  { name: "HubSpot / Mailchimp", description: "Email marketing and automation platforms with segmentation, drip campaigns, and detailed engagement analytics.", icon: "BarChart3" },
  { name: "Hotjar / Crazy Egg", description: "User behavior analytics with heatmaps, session recordings, surveys, and funnel analysis for conversion optimization.", icon: "BarChart3" },
  { name: "Looker Studio", description: "Google's data visualization platform for creating interactive, shareable marketing dashboards from multiple data sources.", icon: "BarChart3" },
];

const industries = [
  { name: "E-commerce & Retail", description: "Product feed optimization, dynamic remarketing, and seasonal campaign management for online stores.", icon: "ShoppingBag" },
  { name: "Real Estate", description: "Property listing ads, location-based targeting, virtual tour promotion, and developer brand awareness.", icon: "Building2" },
  { name: "Healthcare", description: "Patient acquisition campaigns, clinic brand awareness, and specialized service promotion with compliance.", icon: "Stethoscope" },
  { name: "Education", description: "Student recruitment campaigns, course promotion, open day event marketing, and alumni engagement.", icon: "GraduationCap" },
  { name: "Hospitality & Travel", description: "Hotel booking campaigns, destination marketing, travel package promotion, and seasonal offers.", icon: "Hotel" },
  { name: "Professional Services", description: "B2B lead generation, consultant branding, LinkedIn thought leadership, and service awareness campaigns.", icon: "Users" },
];

const faqs = [
  {
    question: "How long does it take to see results from digital marketing?",
    answer:
      "Timelines vary by channel. PPC ads can generate traffic and leads within hours of campaign launch. SEO typically takes 3 to 6 months to show meaningful organic ranking improvements. Social media organic growth takes 2 to 4 months of consistent content posting. Email marketing shows immediate results for existing lists. We set realistic expectations and provide monthly progress reports against agreed KPIs.",
  },
  {
    question: "What is a good monthly budget for digital marketing?",
    answer:
      "Minimum effective budgets are PKR 50,000 to 100,000 per month for local businesses focused on a single channel. Mid-size businesses targeting multiple channels typically invest PKR 200,000 to 500,000 monthly. Enterprise campaigns with national or regional scope range from PKR 500,000 to 2 million per month. We design campaigns to work within your budget and scale as results justify increased spend.",
  },
  {
    question: "How do you measure and report on campaign performance?",
    answer:
      "We provide a Looker Studio dashboard with real-time KPIs including impressions, clicks, CTR, CPC, conversions, cost per conversion, ROAS, and attributed revenue. Monthly reports include executive summaries, channel breakdowns, trend analysis, and actionable recommendations. All metrics are tied to your specific business goals, not vanity metrics.",
  },
  {
    question: "Can you work with our in-house marketing team?",
    answer:
      "Absolutely. We frequently collaborate with in-house teams as a strategic partner. We can provide specialized expertise (SEO, paid ads, analytics) that supplements your team's capabilities, or we can take full ownership of specific channels. Our approach is collaborative, with transparent communication and shared reporting access.",
  },
  {
    question: "Which social media platforms should my business be on?",
    answer:
      "The right platforms depend on your industry, target audience, and content type. B2B businesses typically perform best on LinkedIn. B2C brands focused on visual products thrive on Instagram and Facebook. TikTok is essential for reaching younger demographics. We analyze your audience, competitors, and content capabilities to recommend the optimal platform mix and avoid spreading resources too thin.",
  },
];

export default function DigitalMarketingPage() {
  return (
    <>
      <ServiceHero title={hero.title} description={hero.description} icon={hero.icon} />
      <ServiceOverview title={overview.title} description={overview.description} features={overview.features} image={overview.image} />
      <ServiceBenefits benefits={benefits} />
      <ServiceProcess process={process} />
      <ServiceTechStack technologies={technologies} />
      <ServiceIndustries industries={industries} />
      <ServiceFAQ faqs={faqs} />
      <ServiceCTA />
    </>
  );
}
