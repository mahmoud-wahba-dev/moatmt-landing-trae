import React from "react";
import { getAllDetailPosts } from "../../../data/blogDetails";

export const metadata = {
  title: "تفاصيل المقال — مدونة مؤتمت",
  description: "عرض تفصيلي للمقالات — واجهة خاصة بالعروض التفصيلية للمقالات.",
  alternates: { canonical: "/blog/details" },
};

export default function BlogDetailsPage() {
  const posts = getAllDetailPosts();

  return (
    <main className="mx-auto px-6 md:px-32 py-12" dir="rtl" lang="ar" aria-labelledby="details-heading">
      <header id="details-heading" className="mb-8">
        <h1 className="text-2xl font-semibold text-[#0F172B] text-end">تفاصيل المقال</h1>
      </header>

      {/* client-driven interactive layout */}
      <div id="details-client-root">
        {/* DetailsClient will handle the 4/8 columns layout and interactions */}
      </div>
    </main>
  );
}
