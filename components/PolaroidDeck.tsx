"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { DeckCard } from "@/data/site-content";

type DeckProps = {
  label: string;
  title: string;
  cards: DeckCard[];
};

export function PolaroidDeck({ label, title, cards }: DeckProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [fanned, setFanned] = useState(false);
  const [active, setActive] = useState(0);
  const n = cards.length;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry], observer) => {
        if (entry?.isIntersecting) {
          setFanned(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="deck" ref={ref} data-fanned={fanned}>
      <div className="deck-caption">
        <span className="deck-label">{label}</span>
        <span className="deck-title">{title}</span>
        <span className="deck-hint" aria-hidden="true">
          点一张 · tap a card
        </span>
      </div>

      <div className="deck-stack">
        {cards.map((card, i) => {
          const spread = i - (n - 1) / 2;
          return (
            <button
              type="button"
              key={card.index}
              className="deck-card"
              data-active={i === active}
              style={
                {
                  "--i": i,
                  "--spread": spread,
                  zIndex: i === active ? n + 1 : i,
                } as CSSProperties
              }
              onClick={() => setActive(i)}
              aria-pressed={i === active}
            >
              <span className="deck-card-index">{card.index}</span>
              <span className="deck-card-title">{card.title}</span>
              {card.note && <span className="deck-card-note">{card.note}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
}
