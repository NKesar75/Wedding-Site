import React from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, Shirt } from "lucide-react";
import { ItineraryEvent } from "../types";
import itineraryData from "../content/itinerary.json";

export function Itinerary() {
  const events = itineraryData as ItineraryEvent[];
  const day1Events = events.filter((event) => event.day === 1);
  const day2Events = events.filter((event) => event.day === 2);

  const EventCard = ({ event }: { event: ItineraryEvent }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'
    >
      <div className='flex items-start gap-4'>
        <div className='flex-shrink-0 w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-500 rounded-full flex items-center justify-center'>
          <Clock className='w-8 h-8 text-white' />
        </div>
        <div className='flex-1'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
            {event.title}
          </h3>
          <div className='space-y-2 text-slate-600 dark:text-slate-300'>
            <div className='flex items-center gap-2'>
              <Clock className='w-4 h-4 text-cyan-600' />
              <span>{event.time}</span>
            </div>
            <div className='flex items-center gap-2'>
              <MapPin className='w-4 h-4 text-cyan-600' />
              <span>{event.location}</span>
            </div>
            <div className='flex items-center gap-2'>
              <Shirt className='w-4 h-4 text-cyan-600' />
              <span>{event.attire}</span>
            </div>
          </div>
          <p className='mt-3 text-slate-700 dark:text-slate-300 leading-relaxed'>
            {event.description}
          </p>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id='itinerary' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <Calendar className='w-12 h-12 text-cyan-600 mx-auto mb-6' />
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Wedding Schedule
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Join us for a beautiful two-day celebration filled with traditional
            Punjabi ceremonies, music, dancing, and joy.
          </p>
        </motion.div>

        <div className='grid lg:grid-cols-2 gap-12'>
          {/* Day 1 */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='mb-8'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-cyan-600 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  1
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>
                    Day One
                  </h3>
                  <p className='text-slate-600 dark:text-slate-300'>
                    October 23, 2026
                  </p>
                </div>
              </div>
            </motion.div>
            <div className='space-y-6'>
              {day1Events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Day 2 */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className='mb-8'
            >
              <div className='flex items-center gap-4 mb-6'>
                <div className='w-12 h-12 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg'>
                  2
                </div>
                <div>
                  <h3 className='text-2xl font-bold text-slate-900 dark:text-white'>
                    Day Two
                  </h3>
                  <p className='text-slate-600 dark:text-slate-300'>
                    October 24, 2026
                  </p>
                </div>
              </div>
            </motion.div>
            <div className='space-y-6'>
              {day2Events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
