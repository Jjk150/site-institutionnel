import type { Metadata } from "next";
import NewsArticle from "@/components/NewsArticle";
export const metadata: Metadata = { title: 'Un regard sur notre école à Likasi | C.S. Shukrani' };
export default function Page() { return <NewsArticle slug="un-regard-sur-notre-ecole" />; }
