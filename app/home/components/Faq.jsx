import { FAQAccordion } from "@/components/ui/FAQAccordion";
const faqs = [
  {
    question: "هل لازم يكون عندي متجر إلكتروني؟",
    answer: "اضافة على خدمة المتاجر، مؤتمت يخدم أي بزنس عنده واتساب أعمال.",
  },
  {
    question: "هل يدعم اللهجات؟",
    answer: "نعم مؤتمت يدعم كل لغات ولهجات العالم",
  },
  {
    question: "وش يصير لو العميل طلب موظف؟",
    answer:
      "ببساطة الذكاء الاصطناعي يتوقف عن الرد ويرسل تقرير بالمحادثة الى الموظف الذي تقوم بتعيينه مسبقا او عدة موظفين لو اردت ذلك",
  },
  {
    question: "هل مؤتمت يرد لحاله بدون تدريب؟",
    answer:
      "بالإمكان ذلك لو كنت تاجر في منصة سلة لأننا نوفر الربط التام في باقة كنترول سلة",
  },
];
const Faq = () => {
  return (
    <section className="bg-white rounded-44px py-16">
      <div className="container">
        <div>
          <p className="font-semibold  mb-6  text-center">الأسئلة الشائعة</p>
          <h2 className="font-semibold text-52px  mb-5 text-center">
            أسئلة كثير نسمعها… جاوبنا عليها
          </h2>
          <p className="font-normal text-22px text-center  mb-16 sm:w-[57%] mx-auto mb-6">
            احصل على إجابات واضحة للأسئلة الشائعة لتسهيل فهمك وتحقيق النجاح.
          </p>
        </div>

        <FAQAccordion faqs={faqs} />
      </div>
    </section>
  );
};

export default Faq;
