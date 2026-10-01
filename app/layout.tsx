import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flowdesk.example"),
  title: {
    default: "Flowdesk — One workspace for your entire workflow",
    template: "%s — Flowdesk",
  },
  description:
    "Flowdesk brings projects, clients and tasks into one calm, connected workspace for small teams.",
  keywords: [
    "project management",
    "client portal",
    "task tracking",
    "team collaboration",
    "small business software",
  ],
  authors: [{ name: "Flowdesk" }],
  creator: "Flowdesk",
  publisher: "Flowdesk",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://flowdesk.example",
    siteName: "Flowdesk",
    title: "Flowdesk — One workspace for your entire workflow",
    description: "Projects, clients and tasks. Finally in one place.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowdesk — One workspace for your entire workflow",
    description: "Projects, clients and tasks. Finally in one place.",
  },
  other: {
    "codex-preview": "development",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Flowdesk",
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              description:
                "A connected workspace for small teams to manage projects, clients and tasks.",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "0",
                highPrice: "29",
                priceCurrency: "USD",
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
