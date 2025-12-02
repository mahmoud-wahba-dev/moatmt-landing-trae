"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/**
 * Props: posts = array of detail post objects (from data/blogDetails.js)
 * Each post: { slug, title, excerpt, date, image, content }
 */
export default function DetailsClient({ posts = [] }) {
  const [selectedSlug, setSelectedSlug] = useState(posts?.[0]?.slug ?? null);
  useEffect(() => {
    if (!selectedSlug && posts?.length) setSelectedSlug(posts[0].slug);
  }, [posts, selectedSlug]);

  const selected = posts.find((p) => p.slug === selectedSlug) || posts[0];

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center text-[#475569]">لا توجد مقالات لعرضها</div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      {/* Sidebar: 4 cols */}
      <aside className="lg:col-span-4 space-y-4">
        <div className="text-sm font-semibold text-[#0F172B] mb-2 text-end">آخر المقالات</div>

        <div className="space-y-3">
          {posts.map((p) => {
            const active = p.slug === selectedSlug;
            return (
              <button
                key={p.slug}
                onClick={() => setSelectedSlug(p.slug)}
                className={`w-full flex items-start gap-3 p-3 border rounded-lg bg-white text-start transition-shadow ${active ? "ring-2 ring-[#00BBA7]" : "hover:shadow-md"}`}
                aria-pressed={active}
              >
                <div className="w-20 h-14 relative rounded-md overflow-hidden bg-[#0b6b3d] flex-shrink-0">
                  {p.image && (
                    <Image src={p.image} alt={p.title} fill className="object-cover" />
                  )}
                </div>

                <div className="flex-1 text-end">
                  <h4 className="text-sm font-semibold text-[#0F172B] leading-snug">{p.title}</h4>
                  <time className="text-xs text-[#94A3B8] block mt-1">{new Date(p.date).toLocaleDateString("ar-SA")}</time>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-6 p-4 border rounded-md bg-white text-end">
          <p className="text-sm text-[#314158]">تابعنا للحصول على آخر المقالات</p>
          <a href="https://moatmt.sa" target="_blank" rel="noreferrer" className="text-[#009689] underline mt-2 inline-block">زيارة الموقع</a>
        </div>
      </aside>

      {/* Main content: 8 cols */}
      <section className="lg:col-span-8 bg-white p-8 rounded-md shadow-sm">
        {selected?.image && (
          <div className="w-full h-64 relative mb-6 rounded overflow-hidden">
            <Image src={selected.image} alt={selected.title} fill className="object-cover" />
          </div>
        )}

        <header className="mb-6 text-end">
          <h2 className="text-3xl font-bold text-[#0F172B]">{selected?.title}</h2>
          <time dateTime={selected?.date} className="block text-sm text-[#94A3B8] mt-2">
            {selected ? new Date(selected.date).toLocaleDateString("ar-SA") : ""}
          </time>
        </header>

        <article className="prose prose-lg max-w-none text-[#314158] text-end" dangerouslySetInnerHTML={{ __html: selected?.content ?? "" }} />

        <footer className="mt-8 pt-6 border-t border-[#E2E8F0] text-end">
          <div className="flex items-center justify-between">
            <Link href={`/blog/${selected?.slug?.replace(/^detail-/, "") || ""}`} className="text-[#009689]">
              فتح صفحة المقال (صفحة منفصلة)
            </Link>
            <Link href="/blog" className="text-[#009689]">عودة إلى المدونة</Link>
          </div>
        </footer>
      </section>
    </div>
  );
}
