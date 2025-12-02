import React from "react";
import BlogCard from "./components/BlogCard";
import { getAllPosts } from "../../data/posts";
import Image from "next/image";

export const metadata = {
  title: "مدونة مؤتمت",
  description: "أحدث المقالات والأخبار من فريق مؤتمت — نصائح، دراسات حالة، ومعلومات عن المنصة.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <article className="mx-auto px-6 md:px-32 py-12 relative" dir="rtl" lang="ar">
      <header className="text-center mb-10">
        <h1 className="text-36px text-black font-bold text-[#0F172B] mb-6">مدونة مؤتمت</h1>
        <p className="text-24px font-semibold  text-black/49 mt-16">سنشاركك أحدث المقالات من فريق المحتوى</p>
      </header>

      <section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-72">
          {posts.map((p, index) => (
            <BlogCard key={index} post={p} />
          ))}
        </div>
      </section>
      <div className="absolute bottom-0 start-0 -z-10  pointer-events-none select-none">
        <Image
          src="/blog/blog_bg.webp"
          alt="Blog Background"
          width={1074}
          height={639}
          className=" "
        />
      </div>
    </article>
  );
}