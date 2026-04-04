import { useState } from 'react';
import { Plus } from 'lucide-react';
import { faqs } from '../../data/faq';
import { PHONE_HREF, PHONE_NUMBER } from '../ui/PhoneLink';

function FAQItem({ question, answer, isOpen, onToggle, index }) {
  return (
    <div className="mb-6 bg-white border-4 border-brand-dark shadow-[8px_8px_0_0_rgba(0,0,0,1)]">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left group"
        aria-expanded={isOpen}
      >
        <h3 className="text-lg md:text-2xl font-black text-brand-dark pr-6 uppercase tracking-tight group-hover:text-brand-orange transition-colors">
          {question}
        </h3>
        <span className="w-10 h-10 bg-brand-dark text-white flex items-center justify-center shrink-0 transition-colors group-hover:bg-brand-orange">
          <Plus
            size={24}
            className={`transition-transform duration-200 ease-out ${isOpen ? 'rotate-45' : ''}`}
            strokeWidth={3}
          />
        </span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ease-out ${isOpen ? 'max-h-96 opacity-100 px-6 md:px-8 pb-6 md:pb-8' : 'max-h-0 opacity-0 px-6 md:px-8 pb-0'
          }`}
      >
        <p className="text-base md:text-lg text-stone-600 font-bold leading-relaxed border-t-2 border-stone-100 pt-6">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-zinc-100 border-t-8 border-brand-orange">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col mb-12 md:mb-16">
          <span className="inline-block self-start bg-brand-dark text-white font-black tracking-widest text-sm uppercase px-4 py-1.5 mb-6">FAQ</span>
          <h2 className="text-4xl md:text-6xl font-black text-brand-dark leading-none tracking-tighter uppercase mb-4">
            Common Questions
          </h2>
          <p className="text-stone-600 font-bold text-lg">
            Can't find your answer?{' '}
            <a href={PHONE_HREF} className="text-brand-orange hover:text-black border-b-2 border-brand-orange transition-colors duration-200">{PHONE_NUMBER}</a>
          </p>
        </div>

        {/* Accordion */}
        <div>
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              index={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
