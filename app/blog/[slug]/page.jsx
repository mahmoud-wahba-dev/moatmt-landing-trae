import React from "react";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getAllSlugs, getPostBySlug } from "../../../data/posts";
import BlogCard from "../components/BlogCard";

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  // params may be a Promise — await it
  const resolved = await params;
  const raw = resolved?.slug;
  const slug = Array.isArray(raw) ? raw[0] : raw;
  const post = getPostBySlug(slug);

  if (!post) return { title: "مقال" };
  return {
    title: `${post.title} — مدونة مؤتمت`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [{ url: post.image }] : undefined,
    },
  };
}

export default async function PostPage({ params }) {
  const posts = getAllPosts();

  // await params in case it's a Promise
  const resolved = await params;
  const raw = resolved?.slug;
  const slug = Array.isArray(raw) ? raw[0] : raw;

  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <main className="mx-auto px-6 md:px-10 py-12" dir="rtl" lang="ar">
        <p className="text-center text-[#475569]">المقال غير موجود</p>
        <div className="text-center mt-6">
          <Link href="/blog" className="text-[#009689]">
            العودة للمدونة
          </Link>
        </div>
      </main>
    );
  }

  return (
    <article className="mx-auto px-6 md:px-10 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6">
        <div className="sm:col-span-8">
          {/* static content from Figma / screenshot */}
          <section className="bg-white p-8 relative">
            <header className="mb-6 ">
              <h1 className="text-32px font-bold text-black mb-6">
                تطبيق مؤتمت اختيار التجار
              </h1>
            </header>

            <div className="prose prose-lg max-w-none font-normal text-black text-20px  space-y-1">
              <p className="">
                1. الرد الآلي بالذكاء الاصطناعي: تقوم تطبيق مؤتمت على تشغيل موظف
                خدمة عملاء طوال اليوم. التطبيق هو عينك وذراعك، يرد على استفسارات
                عملائك ويدير المحادثة نيابةً عنك.
              </p>

              <p>
                2. استرجاع السلات المتروكة: يقوم النظام بإرسال رسائل تذكيرية
                ذكية للعميل لاسترجاع السلة. يمكن أن تتضمن الرسالة رابط الدفع،
                رمز خصم، أو نص محفز لزيادة احتمالية إتمام الشراء.
              </p>

              <p>
                3. تكامل مع منصات التجارة: ربط المتجر بالتطبيق يتيح جلب تفاصيل
                الطلبات، حالة الشحن، وتحديثات المخزون بشكل تلقائي داخل المحادثة.
              </p>

              <p>
                4. إعداد السيناريوهات: يمكنك إعداد سيناريوهات محددة مثل استقبال
                الطلب، تأكيد الدفع، أو تتبع الشحنات، وكل سيناريو يعمل تلقائيًا
                بناءً على قواعدك.
              </p>

              <p>
                5. إرسال حالات الطلب: التطبيق يرسل تلقائيًا تحديثات الطلبات
                لعملائك عبر واتساب، مثل: "تم شحن طلبك" أو "تم إلغاء الطلب".
              </p>

              <h2 className="font-bold text-32px text-black mb-8 mt-7">
                كيف يساعدك مؤتمت في تحسين خدمة العملاء وزيادة المبيعات؟
              </h2>
              <div className="mt-6 mb-8 font-normal text-24px text-black space-y-2">
                <p>
                  في زمن السرعة، العميل لا يحب الانتظار. الرد السريع يجب أن يكون
                  الفارق بين عميل مشتري وعميل يغادر إلى المنافس. وهنا يبرز دور
                  مؤتمت:
                </p>

                <p className="font-semibold text-20px mt-4">
                  <strong>أولاً</strong> — الرد الذكي بالذكاء الاصطناعي:
                </p>
                <p>
                  فكرة بسيطة: منصة تساعدك في الرد على استفسارات العملاء طوال
                  اليوم. تُحوّل الرسائل المتكررة إلى ردود تلقائية ذكية تتعامل مع
                  العميل بلباقة واحتراف.
                </p>

                <p className="font-semibold text-20px mt-4">
                  <strong>ثانيًا</strong> — استرجاع السلات المتروكة:
                </p>
                <p>
                  هل تعلم أن معدل إتمام الشراء في المتاجر الإلكترونية يمكن أن
                  يصل إلى 40٪؟ مؤتمت يرسل رسائل تذكير مخصّصة للعملاء الذين تركوا
                  سلاتهم، مع عرض محفّز أو تذكير لطيف لزيادة الاحتمال.
                </p>

                <p className="font-semibold text-20px mt-4">
                  <strong>ثالثًا</strong> — إرسال حالات الطلب:
                </p>
                <p>
                  مثال عملي: عند إتمام الطلب، يرسل النظام رسالة تلقائية عبر
                  واتساب بها تفاصيل الشحن وحالة الطلب. هذا يقلّل من الاستفسارات
                  المتكررة لدى فريق الدعم.
                </p>

                <p className="font-semibold text-20px mt-4">
                  <strong>رابعًا</strong> — متعدد القنوات والوسائط:
                </p>
                <p>
                  منصة مؤتمت تتكامل بسلاسة مع منصات التجارة وتدعم إرسال رسائل
                  مهيكلة ووسائط متعددة (صور، منتجات، أزرار) داخل واتساب.
                </p>

                <h3 className="font-semibold text-20px mt-4">
                  تشغيل سهل وسريع
                </h3>
                <p>
                  تطبيق مؤتمت لا يتطلب إعدادات معقدة. كل ما عليك هو ربط متجرك
                  وإعداد القوالب الأساسية، وسيكون النظام يقوم بالباقي تلقائيًا.
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-20px mt-4">الخلاصة</h3>
              <p className="font-normal text-24px">
                مؤتمت هو المستقبل لخدمة العملاء في التجارة الإلكترونية: أتمتة
                ذكية، تكامل مرن، وتحسين في تجربة العميل بجهد أقل.
              </p>
            </div>

            <div className="absolute top-[50%] start-0 -translate-y-1/2 z-10  pointer-events-none select-none">
              <Image
                src="/blog/blog_bg.webp"
                alt="Blog Background"
                width={1074}
                height={639}
                className=" "
              />
            </div>
          </section>
        </div>

        <div className="sm:col-span-4 ">
          <div className="mb-4 flex flex-col gap-6">
            {posts.map((p, index) => (
              <BlogCard key={index} post={p} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
