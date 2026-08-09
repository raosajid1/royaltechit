export const siteConfig = {
  name: "Royal Tech IT",
  nameLong: "Royal Tech IT — ERP & Bookkeeping Services in Lahore, Pakistan",
  description:
    "Royal Tech IT provides expert ERP implementation (Odoo), bookkeeping, accounting, and digital transformation services across Lahore and all of Pakistan. We work remotely.",
  url: "https://royaltechit.com",
  ogImage: "/images/og-image.jpg",
  address: {
    city: "Lahore",
    region: "Punjab",
    country: "Pakistan",
  },
  locationKeywords:
    "ERP services Pakistan, bookkeeping services Lahore, Odoo ERP Lahore, accounting services Lahore, IT consulting Lahore, ERP implementation Pakistan, remote bookkeeping Pakistan, Odoo partner Pakistan",
  serviceKeywords:
    "Odoo ERP implementation, bookkeeping services, accounting services, tax consultancy Pakistan, ERP solutions Lahore, cloud services Pakistan, digital transformation Pakistan, custom software development Lahore",
  phone: "+92 324 4579917",
  links: {
    facebook: "#",
    linkedin: "#",
    twitter: "#",
    instagram: "#",
  },
};

export type PageSEO = {
  title: string;
  description: string;
  keywords?: string;
};

export function generatePageSEO(page: PageSEO) {
  const hasLocation = /lahore|pakistan/i.test(page.title);
  const locationTag = hasLocation ? "" : " — Lahore, Pakistan";
  return {
    title: `${page.title}${locationTag} | ${siteConfig.name}`,
    description: page.description,
    keywords: page.keywords,
    openGraph: {
      title: `${page.title} | ${siteConfig.name}`,
      description: page.description,
      siteName: siteConfig.name,
      locale: "en_PK",
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.title} | ${siteConfig.name}`,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `${siteConfig.url}`,
    },
  };
}
