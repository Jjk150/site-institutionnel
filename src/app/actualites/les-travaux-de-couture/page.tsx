import type { Metadata } from "next";
import NewsArticle from "@/components/NewsArticle";
export const metadata: Metadata = { title: 'À la découverte des travaux de couture | C.S. Shukrani' };
export default function Page() { return <NewsArticle slug="les-travaux-de-couture" />; }
