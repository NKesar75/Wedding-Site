import { Music, VolumeX, Heart } from "lucide-react";
// import { useDarkMode } from "../hooks/useDarkMode";
import { useAudio } from "../contexts/AudioContext";

interface NavBarProps {
  activeSection: string;
}

const navItems = [
  { id: "home", label: "Home" },
  // { id: "rsvp", label: "RSVP" },
  { id: "itinerary", label: "Events" },
  { id: "location", label: "Location" },
  { id: "hotels", label: "Hotels" },
  { id: "registry", label: "Registry" },
  { id: "media", label: "Media" },
  { id: "faq", label: "FAQ" },
];

export function NavBar({ activeSection }: NavBarProps) {
  // const [darkMode, setDarkMode] = useDarkMode();
  const { isPlaying, hasRequestedConsent, togglePlayback } = useAudio();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-700'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          <div className='flex items-center space-x-2'>
            <Heart className='w-6 h-6 text-cyan-600' />
            <span className='font-bold text-lg text-slate-900 dark:text-white'>
              Naja & Nilesh
            </span>
          </div>

          <div className='hidden md:flex space-x-6'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-cyan-600 border-b-2 border-cyan-600"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className='flex items-center space-x-2'>
            {/* TODO: this should be a dialog box to allow user to change song */}
            {hasRequestedConsent && (
              <>
                <button
                  onClick={togglePlayback}
                  className='p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
                  aria-label={isPlaying ? "Pause music" : "Play music"}
                >
                  {isPlaying ? (
                    <Music className='w-5 h-5' />
                  ) : (
                    <VolumeX className='w-5 h-5' />
                  )}
                </button>
              </>
            )}
            {/* <button
              onClick={() => setDarkMode(!darkMode)}
              className='p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors'
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? (
                <Sun className='w-5 h-5' />
              ) : (
                <Moon className='w-5 h-5' />
              )}
            </button> */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className='md:hidden bg-white/90 dark:bg-slate-900/90 border-t border-slate-200 dark:border-slate-700'>
        <div className='max-w-7xl mx-auto px-4 py-3'>
          <div className='flex overflow-x-auto space-x-4 scrollbar-hide'>
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex-shrink-0 px-3 py-1 text-sm font-medium rounded-full transition-colors ${
                  activeSection === item.id
                    ? "bg-cyan-600 text-white"
                    : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
