"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/*
  Replace POSTER_SRC and YT_ID with your asset and youtube id from Figma.
  Poster image should be placed in /public (example: /home/video_poster.webp).
*/
const POSTER_SRC = "/home/youtube_banner.webp";
const YT_ID = "PEwy2DuS84s"; // updated: use the actual YouTube video id you provided

export default function VideoSec() {
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    setPlaying(true);
  };

  const iframeSrc = `https://www.youtube-nocookie.com/embed/${YT_ID}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <section className="sm:py-24 py-16">
      <div className="container">
        <div className="text-center text-white mb-14">
          <p className="font-semibold mb-6 text-base">فيديو تعريفي</p>
          <h2 className="font-semibold text-52px mb-5 flex justify-center items-center gap-4">
            شوف مؤتمت يشتغل قدامك
          </h2>
          <p className="font-normal text-22px mb-6">
            شرح سريع لكيف يستخدمه التاجر الحقيقي
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative w-full aspect-[16/7] rounded-16px overflow-hidden max-sm:aspect-video border border-white/20 shadow-lg bg-black">
            {!playing ? (
              <>
                {/* poster + play button */}
                <button
                  onClick={handlePlay}
                  className="relative w-full h-full block focus:outline-none cursor-pointer"
                  aria-label="تشغيل الفيديو"
                >
                  <Image
                    src={POSTER_SRC}
                    alt="فيديو تعريفي لمؤتمت"
                    fill
                    sizes="(max-width: 1024px) 100vw, 1200px"
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    aria-hidden
                  >
                    <div className="w-20 h-20 rounded-full bg-black/60 flex items-center justify-center">
                      <svg width="46" height="46" viewBox="0 0 24 24" fill="none" aria-hidden>
                        <path d="M8 5v14l11-7L8 5z" fill="white" />
                      </svg>
                    </div>
                  </div>
                </button>

                {/* SEO / no-JS fallback */}
                <noscript>
                  <div className="w-full">
                    <Link href={`https://youtu.be/${YT_ID}`}>
                      <Link target="_blank" rel="noopener noreferrer" href="#">
                        <Image
                          src={POSTER_SRC}
                          alt="فيديو تعريفي - افتح في يوتيوب"
                          width={1200}
                          height={525}
                          style={{ objectFit: "cover", width: "100%", height: "auto" }}
                        />
                      </Link>
                    </Link>
                  </div>
                </noscript>
              </>
            ) : (
              <iframe
                src={iframeSrc}
                title="فيديو تعريفي - مؤتمت"
                loading="lazy"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full border-0"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
