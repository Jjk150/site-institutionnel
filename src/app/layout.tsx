import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portail Officiel - Institution",
  description: "Site officiel de l'institution",
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