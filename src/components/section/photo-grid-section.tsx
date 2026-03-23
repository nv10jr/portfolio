/* eslint-disable @next/next/no-img-element */
"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";

const BLUR_FADE_DELAY = 0.04;
const STORAGE_KEY = "photo-grid-order";

function loadSavedOrder(): string[] {
  if (typeof window === "undefined") return [...DATA.photos];
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return [...DATA.photos];
    const parsed = JSON.parse(saved) as string[];
    const dataSet = new Set<string>(DATA.photos);
    if (parsed.length === dataSet.size && parsed.every((p: string) => dataSet.has(p))) {
      return parsed;
    }
  } catch { /* ignore */ }
  return [...DATA.photos];
}

function GridImage({
  src,
  index,
  onDragStart,
  onDragEnter,
  onDragEnd,
}: {
  src: string;
  index: number;
  onDragStart: (i: number) => void;
  onDragEnter: (i: number) => void;
  onDragEnd: () => void;
}) {
  return (
    <img
      src={src}
      alt={`Photo ${index + 1}`}
      className="w-full aspect-square rounded-xl object-cover cursor-grab active:cursor-grabbing active:opacity-50 transition-opacity"
      draggable
      onDragStart={() => onDragStart(index)}
      onDragEnter={() => onDragEnter(index)}
      onDragEnd={onDragEnd}
      onDragOver={(e) => e.preventDefault()}
    />
  );
}

export default function PhotoGridSection() {
  const [photos, setPhotos] = useState<string[]>([...DATA.photos]);
  const [mounted, setMounted] = useState(false);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  useEffect(() => {
    setPhotos(loadSavedOrder());
    setMounted(true);
  }, []);

  const handleDragStart = useCallback((index: number) => {
    dragItem.current = index;
  }, []);

  const handleDragEnter = useCallback((index: number) => {
    dragOverItem.current = index;
  }, []);

  const handleDragEnd = useCallback(() => {
    if (dragItem.current === null || dragOverItem.current === null) return;
    if (dragItem.current === dragOverItem.current) return;
    setPhotos((prev) => {
      const updated = [...prev];
      const [removed] = updated.splice(dragItem.current!, 1);
      updated.splice(dragOverItem.current!, 0, removed);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      return updated;
    });
    dragItem.current = null;
    dragOverItem.current = null;
  }, []);

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
      {photos.map((src, idx) => (
        <BlurFade key={src} delay={BLUR_FADE_DELAY * 5 + idx * 0.05}>
          <GridImage
            src={src}
            index={idx}
            onDragStart={handleDragStart}
            onDragEnter={handleDragEnter}
            onDragEnd={handleDragEnd}
          />
        </BlurFade>
      ))}
    </div>
  );
}
