import { SectionHeader } from "@/components/ui/SectionHeader";
import { Accordion } from "@/components/ui/Accordion";
import { faqData } from "@/lib/data";

function FAQSection() {
  const items = faqData.map((faq) => ({
    title: faq.question,
    content: faq.answer,
  }));

  return (
    <section className="py-20 lg:py-28 bg-navy/[0.02]">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="FAQ"
          title="Frequently Asked Questions"
          description="Everything you need to know about our services and approach."
        />

        <div className="max-w-3xl mx-auto">
          <Accordion items={items} />
        </div>
      </div>
    </section>
  );
}

export { FAQSection };
