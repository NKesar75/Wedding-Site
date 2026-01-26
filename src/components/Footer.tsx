import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className='bg-slate-900 text-white py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <div className='flex items-center justify-center gap-2 mb-6'>
            <Heart className='w-8 h-8 text-cyan-400' />
            <span className='text-2xl font-bold'>Naja & Nilesh</span>
            <Heart className='w-8 h-8 text-cyan-400' />
          </div>

          <p className='text-slate-300 mb-8 max-w-2xl mx-auto'>
            Thank you for being part of our special day. We can't wait to
            celebrate with you in Columbia, South Carolina!
          </p>

          {/* <div className='flex justify-center space-x-6 mb-8'>
            <a
              href='mailto:wedding@NajaandNilesh.com'
              className='flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors'
            >
              <Mail className='w-5 h-5' />
              <span>wedding@NajaandNilesh.com</span>
            </a>
          </div>

          <div className='flex justify-center space-x-4 mb-8'>
            <a
              href='https://instagram.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors'
              aria-label='Follow us on Instagram'
            >
              <Instagram className='w-5 h-5' />
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors'
              aria-label='Follow us on Facebook'
            >
              <Facebook className='w-5 h-5' />
            </a>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='p-3 bg-slate-800 rounded-full hover:bg-slate-700 transition-colors'
              aria-label='Follow us on Twitter'
            >
              <Twitter className='w-5 h-5' />
            </a>
          </div> */}

          <div className='border-t border-slate-700 pt-8'>
            <p className='text-sm text-slate-400'>
              © 2026 Naja & Nilesh Wedding Website. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
