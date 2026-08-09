import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/metadata";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import CookieConsent from "@/components/layout/CookieConsent";

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} — ERP & Bookkeeping Services in Lahore, Pakistan`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_PK",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
                { "@type": "ListItem", position: 2, name: "Services", item: `${siteConfig.url}/services` },
                { "@type": "ListItem", position: 3, name: "ERP Solutions", item: `${siteConfig.url}/services/erp` },
                { "@type": "ListItem", position: 4, name: "About", item: `${siteConfig.url}/about` },
                { "@type": "ListItem", position: 5, name: "Contact", item: `${siteConfig.url}/contact` },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Royal Tech IT",
              description: siteConfig.description,
              url: siteConfig.url,
              telephone: siteConfig.phone,
              email: "info@royaltechit.com",
              areaServed: [
                { "@type": "City", name: "Lahore" },
                { "@type": "Country", name: "Pakistan" },
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Lahore",
                addressRegion: "Punjab",
                addressCountry: "PK",
              },
              knowsAbout: [
                "ERP Implementation",
                "Odoo ERP",
                "Bookkeeping",
                "Accounting Services",
                "Tax Consultancy",
                "Software Development",
                "Cloud Solutions",
                "Digital Transformation",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "IT Services",
                itemListElement: [
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP Implementation" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bookkeeping Services" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Accounting Services" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tax Consultancy" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Software Development" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Solutions" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
                  { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cyber Security" } },
                ],
              },
            }),
          }}
        />
        <LoadingScreen />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        <WhatsAppButton />
        <CookieConsent />
      </body>
    </html>
  );
}
