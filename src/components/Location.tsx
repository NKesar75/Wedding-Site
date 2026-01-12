import { motion } from "framer-motion";
import { MapPin, Car, Navigation, Info } from "lucide-react";
import { Venue } from "../types";
import venuesData from "../content/venues.json";

export function Location() {
  const venues = venuesData as Venue[];

  const VenueCard = ({ venue }: { venue: Venue }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow'
    >
      <div className='flex items-start gap-4'>
        <div
          className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
            venue.type === "ceremony"
              ? "bg-gradient-to-br from-cyan-500 to-teal-500"
              : "bg-gradient-to-br from-teal-500 to-emerald-500"
          }`}
        >
          <MapPin className='w-6 h-6 text-white' />
        </div>
        <div className='flex-1'>
          <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
            {venue.name}
          </h3>
          <div className='space-y-2 text-slate-600 dark:text-slate-300 mb-4'>
            <div className='flex items-start gap-2'>
              <Navigation className='w-4 h-4 text-cyan-600 mt-0.5' />
              <span>{venue.address}</span>
            </div>
            <div className='flex items-start gap-2'>
              <Car className='w-4 h-4 text-cyan-600 mt-0.5' />
              <span>{venue.parkingNotes}</span>
            </div>
            {venue.description && (
              <div className='flex items-start gap-2 mt-3'>
                <Info className='w-4 h-4 text-cyan-600 flex-shrink-0 mt-0.5' />
                <p className='text-slate-700 dark:text-slate-300 leading-relaxed'>
                  {venue.description}
                </p>
              </div>
            )}
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              venue.address
            )}`}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 font-medium'
          >
            <Navigation className='w-4 h-4' />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id='location' className='py-20 bg-white dark:bg-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <MapPin className='w-12 h-12 text-cyan-600 mx-auto mb-6' />
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Location & Venues
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Our celebration will take place at beautiful venues in Columbia,
            South Carolina. Find all the details you need below.
          </p>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='mb-16'
        >
          <div className='aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg'>
            <iframe
              src='https://www.google.com/maps/d/u/2/embed?mid=187TsJiYvlxKFc8K4FtdZjamvrvFqbAo&ehbc=2E312F'
              width='100%'
              height='480'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              title='Wedding venues'
            ></iframe>
          </div>
        </motion.div>

        {/* Venue Cards */}
        <div className='grid md:grid-cols-2 gap-8'>
          {venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-16 bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-8'
        >
          <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
            Getting Around Columbia
          </h3>
          <div className='grid md:grid-cols-3 gap-6 text-slate-700 dark:text-slate-300'>
            <div>
              <h4 className='font-semibold mb-2'>Transportation</h4>
              <p>
                Uber and Lyft are readily available throughout Columbia. Taxi
                services are also available.
              </p>
            </div>
            <div>
              <h4 className='font-semibold mb-2'>Parking</h4>
              <p>Both venues offer ample free parking.</p>
            </div>
            <div>
              <h4 className='font-semibold mb-2'>Weather</h4>
              <p>
                October weather in Columbia is mild with temperatures around
                60-70°F. Light layers recommended.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
