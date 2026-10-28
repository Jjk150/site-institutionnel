import "./globals.css";
import type { Metadata } from "next";
import AdSenseLoader from "@/components/AdSenseLoader";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import MotionEffects from "@/components/MotionEffects";
import BackToTop from "@/components/BackToTop";

export const metadata: Metadata = {
  title: "Complexe Scolaire SHUKRANI - Site Officiel",
  description:
    "Portail officiel du Complexe Scolaire SHUKRANI. Excellence, éducation et formation de qualité.",
  other: {
    "google-adsense-account": "ca-pub-3596384386383833",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <a href="#contenu" className="skip-link">Aller au contenu</a>
        <Navbar />
        {children}
        <SiteFooter />
        <MotionEffects />
        <BackToTop />

        <AdSenseLoader />
      </body>
    </html>
  );
}