import { motion } from "framer-motion";
import { Heart, Users } from "lucide-react";
import { RSVPForm } from "./RSVPForm";

export function RSVP() {
  return (
    <section id='rsvp' className='py-20 bg-white dark:bg-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <Heart className='w-12 h-12 text-cyan-600 mx-auto mb-6' />
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            RSVP
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            We're excited to celebrate with you! Please let us know if you'll be
            joining us for our special two-day celebration.
          </p>
        </motion.div>

        <div className='max-w-4xl mx-auto'>
          <RSVPForm />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className='mt-16 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-8 text-center'
        >
          <Users className='w-8 h-8 text-cyan-600 mx-auto mb-4' />
          <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
            Questions?
          </h3>
          <p className='text-slate-700 dark:text-slate-300 mb-6'>
            If you have any questions about the events, dietary accommodations,
            or need assistance with your RSVP, please don't hesitate to reach
            out.
          </p>
          <a
            href='mailto:wedding@NajaandNilesh.com'
            className='inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition-all duration-200'
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
