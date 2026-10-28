import type { Metadata } from "next";
import NewsArticle from "@/components/NewsArticle";
export const metadata: Metadata = { title: 'Découvrir la salle informatique | C.S. Shukrani' };
export default function Page() { return <NewsArticle slug="decouvrir-la-salle-informatique" />; }
