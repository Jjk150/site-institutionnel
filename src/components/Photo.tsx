import Image from "next/image";
import { photo } from "@/data/photos";
export default function Photo({ id, className = "", preload = false }: { id: number; className?: string; preload?: boolean }) {
 const item = photo(id);
 return <Image src={item.src} alt={item.alt} width={item.width} height={item.height} sizes="(max-width: 760px) 100vw, 55vw" preload={preload} className={className} />;
}
