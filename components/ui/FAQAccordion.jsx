export function FAQAccordion({ faqs }) {
  return (
    <div className="w-full flex flex-col gap-2">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="collapse collapse-plus  relative  border-b-2 [border-image:linear-gradient(90deg,rgba(0,0,0,0)_0%,#999999_100%)_1]"
        >
          <input
            type="radio"
            name="my-accordion-faq"
            defaultChecked={idx === 0}
          />
          <div className="collapse-title font-semibold text-22px ">{faq.question}</div>
          <div className="collapse-content text-sm  relative pb-0">
            <div className="flex items-center gap-2 py-11 pt-2.5 ">
              <span className="font-light text-28px text-black">{faq.answer}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
