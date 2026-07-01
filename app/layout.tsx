import { getHtmlAttributes, DsfrHead } from "../dsfr-bootstrap/server-only-index";
import { DsfrProvider, StartDsfrOnHydration } from "../dsfr-bootstrap";
import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Newsletter } from "@/components/layout/Newsletter";

export const metadata: Metadata = {
  title: "Mon application",
  description: "",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const lang = "fr";
  return (
    <html {...getHtmlAttributes({ lang })}>
      <head>
        <DsfrHead preloadFonts={["Marianne-Regular", "Marianne-Medium", "Marianne-Bold"]} />
      </head>
      <body>
        <DsfrProvider lang={lang}>
          <StartDsfrOnHydration />
          <Header />
          <div className="fr-container fr-py-4v">{children}</div>
          <Newsletter />
          <Footer />
        </DsfrProvider>
      </body>
    </html>
  );
}
