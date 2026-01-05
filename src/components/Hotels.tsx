import React from "react";
import { motion } from "framer-motion";
import {
  Bed,
  MapPin,
  Star,
  ExternalLink,
  Wifi,
  // Car,
  Utensils,
  Waves,
} from "lucide-react";
import { Hotel } from "../types";
import hotelsData from "../content/hotels.json";

const amenityIcons: Record<string, React.ElementType> = {
  Pool: Waves,
  "Free WiFi": Wifi,
  "Free Breakfast": Utensils,
  "Fitness Center": Star,
  Restaurant: Utensils,
  "Pet Friendly": Star,
  Kitchenette: Utensils,
};

export function Hotels() {
  const hotels = hotelsData as Hotel[];

  const HotelCard = ({ hotel }: { hotel: Hotel }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className='bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden'
    >
      <div className='p-6'>
        <div className='flex items-start justify-between mb-4'>
          <div>
            <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-2'>
              {hotel.name}
            </h3>
            <div className='flex items-center gap-1 mb-2'>
              {Array.from({ length: Math.floor(hotel.rating) }).map((_, i) => (
                <Star
                  key={i}
                  className='w-4 h-4 text-yellow-500 fill-current'
                />
              ))}
              <span className='text-slate-600 dark:text-slate-300 ml-2'>
                {hotel.rating}/5
              </span>
            </div>
          </div>
          <div className='text-right'>
            <div className='text-xl font-bold text-cyan-600'>
              {hotel.priceRange}
            </div>
          </div>
        </div>

        <div className='space-y-2 mb-4 text-slate-600 dark:text-slate-300'>
          <div className='flex items-center gap-2'>
            <MapPin className='w-4 h-4 text-cyan-600' />
            <span>{hotel.distance}</span>
          </div>
        </div>

        <div className='mb-6'>
          <h4 className='font-semibold text-slate-900 dark:text-white mb-3'>
            Amenities
          </h4>
          <div className='flex flex-wrap gap-2'>
            {hotel.amenities.map((amenity) => {
              const IconComponent = amenityIcons[amenity] || Star;
              return (
                <div
                  key={amenity}
                  className='flex items-center gap-1 px-3 py-1 bg-slate-100 dark:bg-slate-700 rounded-full text-sm'
                >
                  <IconComponent className='w-3 h-3 text-cyan-600' />
                  <span className='text-slate-700 dark:text-slate-300'>
                    {amenity}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <a
          href={hotel.bookingLink}
          target='_blank'
          rel='noopener noreferrer'
          className='w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-2'
        >
          <ExternalLink className='w-4 h-4' />
          Book Now
        </a>
      </div>
    </motion.div>
  );

  return (
    <section id='hotels' className='py-20 bg-slate-50 dark:bg-slate-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <Bed className='w-12 h-12 text-cyan-600 mx-auto mb-6' />
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Recommended Hotels
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            We've curated a list of comfortable accommodations near Day 2
            wedding venues. Book early to secure the best rates!
          </p>
        </motion.div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {hotels.map((hotel) => (
            <HotelCard key={hotel.id} hotel={hotel} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='mt-16 bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-8 text-center'
        >
          <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
            Need Help with Booking?
          </h3>
          <p className='text-slate-700 dark:text-slate-300 mb-6'>
            If you need assistance with hotel bookings or have questions about
            accommodations, please don't hesitate to reach out to us.
          </p>
          <a
            href='mailto:wedding@NajaandNilesh.com'
            className='inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-teal-700 hover:to-emerald-700 transition-all duration-200'
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
