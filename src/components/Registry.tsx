// import React from "react";
import { motion } from "framer-motion";
// import { Gift, ExternalLink, Heart } from "lucide-react";
import { Gift, Heart } from "lucide-react";
// import { RegistryItem } from "../types";
// import registryData from "../content/registry.json";

export function Registry() {
  // const registryItems = registryData as RegistryItem[];

  // const RegistryCard = ({ item }: { item: RegistryItem }) => (
  //   <motion.div
  //     initial={{ opacity: 0, y: 20 }}
  //     whileInView={{ opacity: 1, y: 0 }}
  //     transition={{ duration: 0.6 }}
  //     className='bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group hover:scale-105'
  //   >
  //     <div className='aspect-w-16 aspect-h-9 overflow-hidden'>
  //       <img
  //         src={item.image}
  //         alt={item.name}
  //         className='w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300'
  //         loading='lazy'
  //       />
  //     </div>
  //     <div className='p-6'>
  //       <h3 className='text-xl font-bold text-slate-900 dark:text-white mb-3'>
  //         {item.name}
  //       </h3>
  //       <p className='text-slate-600 dark:text-slate-300 mb-6 leading-relaxed'>
  //         {item.description}
  //       </p>
  //       <a
  //         href={item.url}
  //         target='_blank'
  //         rel='noopener noreferrer'
  //         className='w-full bg-gradient-to-r from-cyan-600 to-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-cyan-700 hover:to-teal-700 transition-all duration-200 flex items-center justify-center gap-2'
  //       >
  //         <ExternalLink className='w-4 h-4' />
  //         Visit Registry
  //       </a>
  //     </div>
  //   </motion.div>
  // );

  return (
    <section id='registry' className='py-20 bg-white dark:bg-slate-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className='text-center mb-16'
        >
          <Gift className='w-12 h-12 text-cyan-600 mx-auto mb-6' />
          <h2 className='text-4xl font-bold text-slate-900 dark:text-white mb-4'>
            Wedding Registry
          </h2>
          <p className='text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto'>
            Your presence at our celebration is truly all we ask for, and we are
            not expecting any gifts. If you do choose to give, a card and gift
            box will be available at the reception.
          </p>
        </motion.div>

        {/* <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {registryItems.map((item) => (
            <RegistryCard key={item.id} item={item} />
          ))}
        </div> */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-slate-700 dark:to-slate-600 rounded-xl p-8 text-center'
        >
          <Heart className='w-8 h-8 text-cyan-600 mx-auto mb-4' />
          <h3 className='text-2xl font-bold text-slate-900 dark:text-white mb-4'>
            A Note from the Couple
          </h3>
          <p className='text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed'>
            We are incredibly grateful for the love, support, and encouragement
            that have surrounded us as we begin this new chapter of our lives
            together. Each of you has played a meaningful role in shaping who we
            are, and having you here to celebrate with us truly means more than
            words can express. Our friends and family are at the heart of
            everything we do. Your guidance, laughter, patience, and unwavering
            support have carried us through every season, and we feel so lucky
            to be surrounded by such an incredible community. This celebration
            is not just about us it's about the love, memories, and connections
            we share with all of you. Thank you for being part of our journey,
            for standing beside us through every high and low, and for filling
            our lives with so much love. We are honored to share this moment
            with you and so grateful to celebrate together.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
