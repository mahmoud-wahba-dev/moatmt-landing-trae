import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaBookmark } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

export default function BlogCard({ post }) {
  return (
    <article className="bg-white border border-[#BBBBBB80] rounded-21px p-2 shadow-sm overflow-hidden">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/10] relative mb-4">
          {/* image optimized by next/image; if missing, area stays colored */}
          {post.image && (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, 33vw "
              className="object-cover rounded-24px"
              priority={false}
            />
          )}
        </div>
      </Link>
      <div className="">
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="font-bold text-24px text-black mb-2">{post.title}</h3>
        </Link>
        <p className="text-base text-black/79 font-normal mb-4">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between text-xs text-[#94A3B8]">
          <div className="flex items-center gap-3">
            <div className="size-12 rounded-full ">
              <Image
                src="/blog/blog1.webp"
                className="rounded-full h-full w-full object-cover"
                alt="author"
                width={48}
                height={48}
              />
            </div>
            <div className="font-medium text-base text-black mb-2">
              <p className="">فريق مؤتمت</p>
              <time dateTime={post.date} className="flex items-center gap-1">
                <IoTimeOutline />
                {new Date(post.date).toLocaleDateString("ar-SA")}
              </time>
            </div>
          </div>

          <div>
            <FaBookmark className="text-primary size-5" />
          </div>
        </div>
      </div>
    </article>
  );
}
