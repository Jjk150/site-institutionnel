import Image from "next/image";
import { PlayCircle, Film } from "lucide-react";
import { presentation } from "@/data/presentation";
import { photo } from "@/data/photos";
export default function VideoSection() {
 return <section id="videos" className="section video-section"><div className="wrap"><div className="section-heading"><div><span className="eyebrow">IMAGES EN MOUVEMENT</span><h2>Une autre façon de découvrir Shukrani.</h2></div><Film aria-hidden="true" className="text-emerald-700" size={32}/></div><div className="video-grid">{presentation.videos.map(item=><article key={item.id} className="video-card"><div className="video-stage">{item.src ? <video controls playsInline preload="none" poster={photo(item.posterId).src} aria-label={item.title}><source src={item.src}/><track kind="captions"/>Votre navigateur ne peut pas lire cette vidéo.</video> : <><Image src={photo(item.posterId).src} alt="" fill sizes="(max-width:760px) 100vw, 50vw" className="video-poster"/><div className="video-placeholder"><PlayCircle size={56} strokeWidth={1.3} aria-hidden="true"/><span>Vidéo à venir</span></div></>}</div><div className="video-copy"><span className="eyebrow">{item.label}</span><h3>{item.title}</h3><p>{item.description}</p></div></article>)}</div></div></section>;
}
