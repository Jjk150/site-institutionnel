import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complexe Scolaire SHUKRANI - Site Officiel",
  description: "Portail officiel du Complexe Scolaire SHUKRANI. Excellence, éducation et formation de qualité.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}