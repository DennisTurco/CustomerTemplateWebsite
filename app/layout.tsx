import { GeistSans } from "geist/font/sans";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import "/styles/global.scss";

// Definizione dei metadati
export const metadata = {
  title: "Customer template | Customer Template Website",
  description: "",
  keywords: "cutomer, template, website, Parma",
  authors: [{ name: "Shard" }],
  openGraph: {
    title: "Customer template | Customer Template Website",
    description: "",
    images: [{ url: "" }],
    url: "",
    type: "website",
  },
};

// Viewport meta tag
export const viewport = "width=device-width, initial-scale=1.0";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "",
    "name": "Customer Template Website",
    "url": "",
    "logo": "",
    "image": "",
    "description": "",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "",
      "addressLocality": "",
      "postalCode": "",
      "addressCountry": "",
    },
    "telephone": "+39 123 456 7890",
    "sameAs": [
      "https://www.instagram.com/metticiillink",
      "https://www.facebook.com/metticiillink",
    ],
  };

  return (
    <html lang="it">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

        {/* Google Analytics */}
        <Script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </head>
      <body className={GeistSans.className} suppressHydrationWarning={true}>
        {children}
        {/* Vercel Analytics */}
        <Analytics />

        {/* Vercel Speed insight */}
        <SpeedInsights/>
      </body>
    </html>
  );
}
