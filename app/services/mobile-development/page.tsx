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
  title: "Mobile App Development",
  description:
    "Cross-platform and native mobile app development using Flutter, React Native, Swift, and Kotlin. Build beautiful, high-performance iOS and Android apps.",
  keywords:
    "mobile app development, Flutter development, React Native, iOS apps, Android apps, cross-platform apps, Pakistan mobile app developers",
});

const hero = {
  title: "Mobile App Development",
  description:
    "Bring your ideas to life with stunning, high-performance mobile applications. From cross-platform apps built with Flutter and React Native to native iOS and Android experiences, we deliver mobile solutions that users love and businesses rely on.",
  icon: "Smartphone",
};

const overview = {
  title: "End-to-End Mobile Development",
  description:
    "Royal Tech IT offers comprehensive mobile app development services covering the full lifecycle from concept to App Store deployment. Our team of Flutter, React Native, Swift, and Kotlin developers builds apps that deliver exceptional user experiences, robust performance, and seamless backend integration. We have delivered apps across fintech, healthtech, e-commerce, and enterprise domains.",
  image: "/images/whatsapp-business-mobile.jpg",
  features: [
    "Cross-platform app development with Flutter for consistent UX across iOS and Android",
    "React Native development with hot reload, native modules, and shared codebases",
    "Native iOS development using Swift with full ARKit, CoreML, and Metal API support",
    "Native Android development using Kotlin with Jetpack Compose and Material Design 3",
    "Backend API integration with RESTful and GraphQL services for real-time data sync",
    "Push notification setup using Firebase Cloud Messaging and Apple Push Notification Service",
    "App Store and Google Play Store submission with metadata optimization and screenshots",
    "Post-launch analytics, crash reporting, and performance monitoring with Firebase and Sentry",
  ],
};

const benefits = [
  {
    icon: "Zap",
    title: "Fast Development Cycles",
    description:
      "Cross-platform frameworks like Flutter and React Native reduce development time by up to 40% compared to building separate native apps, without sacrificing performance or user experience.",
  },
  {
    icon: "Users",
    title: "Superior User Experience",
    description:
      "Our UX designers and developers collaborate to create intuitive, engaging mobile experiences. Apps are designed with platform-specific design guidelines (Material Design and HIG) for a native feel.",
  },
  {
    icon: "TrendingUp",
    title: "Scalable Architecture",
    description:
      "Every app is built with clean architecture patterns (BLoC, Provider, Redux) ensuring maintainability, testability, and the ability to scale to millions of users without architectural changes.",
  },
  {
    icon: "Shield",
    title: "Security-First Approach",
    description:
      "We implement OWASP mobile security best practices including secure data storage, certificate pinning, biometric authentication, and API security. All apps undergo security audits before release.",
  },
];

const process = [
  {
    step: 1,
    title: "Concept & Strategy",
    description:
      "We define your app's value proposition, target audience, core features, and technical requirements. A product roadmap is created with prioritized features for MVP and subsequent releases.",
  },
  {
    step: 2,
    title: "UI/UX Design",
    description:
      "Wireframes and interactive prototypes are designed in Figma, covering all user flows, screen states, loading sequences, and error scenarios. Designs are tested with real users before development begins.",
  },
  {
    step: 3,
    title: "Agile Development",
    description:
      "Development follows two-week sprints with continuous builds shared via TestFlight (iOS) and Firebase App Distribution (Android). Each sprint delivers a testable version with new features.",
  },
  {
    step: 4,
    title: "Testing & QA",
    description:
      "Comprehensive testing covers functionality, UI consistency, device compatibility, performance under load, battery consumption, and network behavior. Beta testing with real users provides additional feedback.",
  },
  {
    step: 5,
    title: "Deployment & Monitoring",
    description:
      "We manage the entire App Store and Play Store submission process, including metadata, screenshots, and review responses. Post-launch, we monitor crashes, user analytics, and performance metrics.",
  },
];

const technologies = [
  { name: "Flutter", description: "Google's cross-platform UI toolkit for natively compiled mobile apps from a single Dart codebase.", icon: "Smartphone" },
  { name: "React Native", description: "Facebook's framework for building native mobile apps using React with shared business logic.", icon: "Smartphone" },
  { name: "Swift", description: "Apple's powerful programming language for building high-performance iOS, iPadOS, and macOS apps.", icon: "Code2" },
  { name: "Kotlin", description: "Modern Android development language with coroutines, flow, and full Jetpack Compose integration.", icon: "Code2" },
  { name: "Firebase", description: "Google's mobile platform providing authentication, real-time database, cloud functions, and analytics.", icon: "Cloud" },
  { name: "Node.js", description: "Backend runtime for building RESTful and GraphQL APIs powering mobile app data and business logic.", icon: "Server" },
  { name: "PostgreSQL", description: "Reliable database for storing user data, app content, and transactional records securely.", icon: "Database" },
  { name: "Docker", description: "Containerized backend services ensuring consistent environments across development and production.", icon: "Server" },
];

const industries = [
  { name: "Fintech", description: "Mobile banking, digital wallets, investment platforms, and expense tracking applications.", icon: "Landmark" },
  { name: "Healthcare & Wellness", description: "Patient portals, telemedicine apps, fitness trackers, and medication reminder systems.", icon: "Stethoscope" },
  { name: "E-commerce", description: "Shopping apps, order tracking, loyalty programs, and mobile-first marketplace platforms.", icon: "ShoppingBag" },
  { name: "Food & Hospitality", description: "Restaurant ordering, table booking, food delivery tracking, and hotel guest apps.", icon: "Hotel" },
  { name: "Education", description: "Learning apps, quiz platforms, attendance tracking, and parent-teacher communication tools.", icon: "GraduationCap" },
  { name: "Logistics & Transportation", description: "Delivery tracking, fleet management, ride-hailing, and route optimization applications.", icon: "Truck" },
];

const faqs = [
  {
    question: "Should we build a native app or a cross-platform app?",
    answer:
      "Cross-platform (Flutter or React Native) is ideal for most businesses as it shares 80-90% code between iOS and Android, reducing cost and time. Native development (Swift/Kotlin) is recommended when you need platform-specific features like ARKit, advanced camera processing, or hardware-level optimizations. We help you make the right choice based on your specific requirements.",
  },
  {
    question: "How much does it cost to develop a mobile app?",
    answer:
      "Cost varies by complexity. A simple MVP with basic features starts from PKR 1 million. A mid-complexity app with backend integration, user accounts, and payment processing ranges from PKR 2.5 to 5 million. Feature-rich enterprise apps with custom animations, real-time features, and admin dashboards can exceed PKR 8 million.",
  },
  {
    question: "How long does it take to launch an app?",
    answer:
      "An MVP can be developed in 8 to 12 weeks. A full-featured app typically takes 4 to 7 months, including design, development, testing, and app store submission. App Store review adds 1 to 3 days, while Play Store review typically takes a few hours to 2 days.",
  },
  {
    question: "Do you help with App Store and Play Store submission?",
    answer:
      "Yes, we handle the entire submission process. This includes preparing app descriptions, keywords, screenshots, privacy policies, and complying with Apple and Google guidelines. We also help resolve rejection issues, which is common for first-time submissions, particularly around data privacy and permission explanations.",
  },
  {
    question: "What post-launch support do you offer for mobile apps?",
    answer:
      "We provide ongoing support including crash monitoring and resolution, OS version compatibility updates, feature enhancements, performance optimization, and server maintenance. Monthly support packages start at PKR 30,000 and include guaranteed response times for critical issues affecting your users.",
  },
];

export default function MobileDevelopmentPage() {
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
