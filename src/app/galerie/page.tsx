import type { Metadata } from "next";
import { Suspense } from "react";
import Gallery from "@/components/Gallery";
export const metadata: Metadata = { title: "Galerie photos | C.S. Shukrani" };
export default function GaleriePage() {return <main id="contenu" className="wrap section"><section className="page-heading compact"><span className="eyebrow">SHUKRANI EN IMAGES</span><h1>Au cœur de notre école.</h1><p>Les lieux, les apprentissages et les moments de vie du Complexe Scolaire Shukrani. Sélectionnez une photo pour la découvrir en grand.</p></section><Suspense fallback={<p>Chargement de la galerie…</p>}><Gallery/></Suspense></main>;}
