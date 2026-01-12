import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What does invitation only mean?",
    answer:
      "Some events are marked as “Invitation Only” due to limited space and to keep the gathering intimate for close family and friends. If you received an invitation to these events, we would be honored to have you join us. If not, we can't wait to celebrate together at the main wedding festivities!",
  },
  {
    id: 2,
    question: "What is the dress code?",
    answer:
      "Suggested attire is listed for each event. There's no formal dress code. Dress comfortably, look your best, and have fun with color and style!",
  },
  //   {
  //     id: 2,
  //     question: "Can I bring a plus one?",
  //     answer:
  //       "Due to venue capacity, we can only accommodate guests formally invited on your invitation. If you have a plus one, their name will be included on your invitation.",
  //   },
  {
    id: 3,
    question: "What is the haldi/mehndi ceremonies?",
    answer:
      "Haldi and Mehndi are traditional Indian pre-wedding ceremonies celebrating blessings, beauty, and new beginnings. Haldi brings good luck and glow, while Mehndi is filled with henna, music, and joyful festivities. We’re bringing both traditions together in one colorful, celebratory event!",
  },

  //   {
  //     id: 3,
  //     question: "Are children welcome?",
  //     answer:
  //       "While we love your little ones, we've decided to make this an adults-only celebration. We hope this allows parents to relax and enjoy the evening!",
  //   },
  //   {
  //     id: 4,
  //     question: "When is the RSVP deadline?",
  //     answer:
  //       "Please RSVP by [date]. This helps us finalize details with our caterer and venue. We appreciate your timely response!",
  //   },
  {
    id: 5,
    question: "Will there be parking available?",
    answer: "Yes, there is free ample parking available at the venues.",
  },
  {
    id: 6,
    question: "What time should I arrive?",
    answer:
      "We recommend arriving 10-15 minutes before the ceremony begins to find parking and get settled. The ceremony will start promptly at the scheduled times.",
  },
  {
    id: 7,
    question: "Will the wedding be indoors or outdoors?",
    answer:
      "The ceremony will be outdoors (weather permitting), and the reception will be indoors. We recommend bringing a light jacket or wrap for the evening.",
  },
  {
    id: 8,
    question: "Are there vegetarian/vegan meal options?",
    answer:
      "All food will be vegetarian to accommodate all guests' preferences and dietary needs. If you have specific dietary restrictions, please let us know when you RSVP or message us directly.",
  },
  {
    id: 9,
    question: "Can I take photos during the ceremony?",
    answer:
      "Absolutely! We encourage you to capture and share your special moments. However, we kindly ask that you refrain from using flash photography during the ceremony to respect our photographers and the ambiance.",
  },
  {
    id: 10,
    question: "Will there be an open bar?",
    answer:
      "Yes! We'll have a full open bar with a selection of beer, wine, and cocktails throughout the reception and haldi/mehndi.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id='faq' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <HelpCircle className='w-12 h-12 text-cyan-600 mx-auto mb-6' />
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Frequently Asked Questions
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto'>
            Have a question? We've got answers! Check out our most commonly
            asked questions below.
          </p>
        </motion.div>

        <div className='space-y-4'>
          {faqData.map((faq) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: faq.id * 0.05 }}
            >
              <div className='bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden'>
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className='w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors duration-200'
                  aria-expanded={openId === faq.id}
                >
                  <span className='text-lg font-semibold text-slate-900 dark:text-white pr-8'>
                    {faq.question}
                  </span>
                  {openId === faq.id ? (
                    <ChevronUp className='w-5 h-5 text-cyan-600 flex-shrink-0' />
                  ) : (
                    <ChevronDown className='w-5 h-5 text-slate-400 flex-shrink-0' />
                  )}
                </button>
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className='px-6 pb-4 pt-2 text-slate-600 dark:text-slate-300 leading-relaxed'>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-12 text-center'
        >
          <div className='bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-8'>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-3'>
              Still have questions?
            </h3>
            <p className='text-slate-700 dark:text-slate-300'>
              Feel free to reach out to us directly. We're happy to help!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
