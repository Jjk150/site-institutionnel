"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { photos, type SchoolPhoto } from "@/data/photos";
const categories = ["Toutes", ...new Set(photos.map(photo => photo.category))];
export default function Gallery() {
 const query = useSearchParams(); const requested = query.get("categorie") || "Toutes";
 const [category, setCategory] = useState(categories.includes(requested) ? requested : "Toutes");
 const [limit, setLimit] = useState(12); const [active, setActive] = useState<SchoolPhoto | null>(null);
 const dialog = useRef<HTMLDialogElement>(null); const opener = useRef<HTMLButtonElement | null>(null);
 const filtered = photos.filter(photo => category === "Toutes" || photo.category === category);
 const position = active ? filtered.findIndex(photo => photo.id === active.id) : -1;
 function show(photo: SchoolPhoto, button: HTMLButtonElement) {opener.current = button; setActive(photo); dialog.current?.showModal();}
 function move(direction: number) {setActive(filtered[(position + direction + filtered.length) % filtered.length]);}
 function closed() {setActive(null); opener.current?.focus();}
 return <><div className="filter-row" role="group" aria-label="Filtrer les photos">{categories.map(item=><button key={item} type="button" className="filter-chip" aria-pressed={category===item} onClick={()=>{setCategory(item);setLimit(12);}}>{item}</button>)}</div><p className="gallery-count" role="status">{filtered.length} photo{filtered.length>1?"s":""} · {category}</p>
 <div className="gallery-grid">{filtered.slice(0,limit).map(photo=><button type="button" className="gallery-card" key={photo.id} onClick={e=>show(photo,e.currentTarget)} aria-label={`Agrandir : ${photo.title}`}><div className="gallery-image"><Image src={photo.thumbnail} alt={photo.alt} width={photo.width} height={photo.height} unoptimized loading="lazy"/></div><span><small>{photo.category}</small><strong>{photo.title}</strong><i aria-hidden="true">↗</i></span></button>)}</div>
 {limit<filtered.length && <div className="gallery-more"><button type="button" className="button button-primary" onClick={()=>setLimit(limit+12)}>Afficher plus de photos ({filtered.length-limit})</button></div>}
 <dialog ref={dialog} className="photo-dialog" aria-labelledby="photo-title" onClose={closed} onCancel={()=>{}} onKeyDown={e=>{if(e.key==="ArrowLeft"){e.preventDefault();move(-1);}if(e.key==="ArrowRight"){e.preventDefault();move(1);}}} onClick={e=>{if(e.target===e.currentTarget)dialog.current?.close();}}>
 {active && <div className="dialog-inner"><div className="dialog-top"><span>{position+1} / {filtered.length}</span><button type="button" autoFocus aria-label="Fermer la photo" onClick={()=>dialog.current?.close()}>Fermer ✕</button></div><Image key={active.id} src={active.src} alt={active.alt} width={active.width} height={active.height} unoptimized className="dialog-image"/><div className="dialog-bottom"><button type="button" aria-label="Photo précédente" onClick={()=>move(-1)}>←</button><div><h2 id="photo-title">{active.title}</h2><p>{active.category} · C.S. Shukrani</p></div><button type="button" aria-label="Photo suivante" onClick={()=>move(1)}>→</button></div></div>}
 </dialog></>;
}
