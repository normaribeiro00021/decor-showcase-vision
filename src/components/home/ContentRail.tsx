import { ArrowLeft, ArrowRight, Check, Heart, Play } from "lucide-react";
import { useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type CoverItem = {
  title: string;
  subtitle: string;
  image: string;
  badge?: string;
  progress?: number;
};

type ContentRailProps = {
  id?: string;
  title: string;
  eyebrow?: string;
  items: CoverItem[];
  wide?: boolean;
};

export function ContentRail({ id, title, eyebrow, items, wide }: ContentRailProps) {
  const railRef = useRef<HTMLDivElement>(null);

  const move = (direction: number) => {
    railRef.current?.scrollBy({ left: direction * railRef.current.clientWidth * 0.78, behavior: "smooth" });
  };

  return (
    <section id={id} className="content-section scroll-mt-24">
      <div className="section-heading">
        <div className="min-w-0">
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h2>{title}</h2>
        </div>
        <div className="hidden shrink-0 items-center gap-2 sm:flex">
          <Button variant="icon" size="icon" aria-label={`Voltar em ${title}`} onClick={() => move(-1)}>
            <ArrowLeft aria-hidden="true" />
          </Button>
          <Button variant="icon" size="icon" aria-label={`Avançar em ${title}`} onClick={() => move(1)}>
            <ArrowRight aria-hidden="true" />
          </Button>
        </div>
      </div>
      <div ref={railRef} className={cn("content-rail", wide && "content-rail-wide")}>
        {items.map((item, index) => (
          <CoverCard key={`${title}-${item.title}-${index}`} item={item} wide={Boolean(wide)} />
        ))}
      </div>
    </section>
  );
}

function CoverCard({ item, wide }: { item: CoverItem; wide?: boolean }) {
  const [saved, setSaved] = useState(false);

  return (
    <article className={cn("cover-card group", wide && "cover-card-wide")}>
      <div className={cn("cover-frame", wide ? "aspect-video" : "aspect-[2/3]")}>
        <img
          src={item.image}
          alt=""
          loading="lazy"
          width={wide ? 1280 : 1024}
          height={wide ? 720 : 1536}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04] group-hover:contrast-110"
        />
        <div className="cover-shade" />
        {item.badge ? <span className="cover-badge">{item.badge}</span> : null}
        <button
          type="button"
          className="cover-hitbox"
          aria-label={`Abrir ${item.title}`}
          onClick={() => document.getElementById("ideia-do-dia")?.scrollIntoView({ behavior: "smooth" })}
        />
        <div className="cover-actions">
          <Button size="icon" aria-label={`Abrir ${item.title}`}>
            <Play fill="currentColor" aria-hidden="true" />
          </Button>
          <Button
            variant="icon"
            size="icon"
            aria-label={saved ? `Remover ${item.title} dos favoritos` : `Favoritar ${item.title}`}
            onClick={() => setSaved((value) => !value)}
          >
            {saved ? <Check aria-hidden="true" /> : <Heart aria-hidden="true" />}
          </Button>
        </div>
        <div className="cover-copy">
          <p>{item.subtitle}</p>
          <h3>{item.title}</h3>
          {typeof item.progress === "number" ? (
            <div className="mt-3">
              <div className="progress-track" aria-label={`${item.progress}% concluído`}>
                <span style={{ width: `${item.progress}%` }} />
              </div>
              <small>Você parou na página {Math.max(7, Math.round(item.progress / 2))}</small>
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}