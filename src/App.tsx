import React, { useRef } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HackedScreen } from "./components/HackedScreen";
import { Home } from "./components/Home";
// import { RSVP } from "./components/RSVP";
import { Itinerary } from "./components/Itinerary";
import { Location } from "./components/Location";
import { Hotels } from "./components/Hotels";
import { Registry } from "./components/Registry";
import { Media } from "./components/Media";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { MusicConsent } from "./components/MusicConsent";
import { SkipToContent } from "./components/SkipToContent";
import { AudioProvider } from "./contexts/AudioContext";
import { useIntersectionObserver } from "./hooks/useIntersectionObserver";

function AppContent() {
  const homeRef = useRef<HTMLDivElement>(null);
  // const rsvpRef = useRef<HTMLDivElement>(null);
  const itineraryRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const hotelsRef = useRef<HTMLDivElement>(null);
  const registryRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const sectionRefs = [
    homeRef,
    // rsvpRef,
    itineraryRef,
    locationRef,
    hotelsRef,
    registryRef,
    mediaRef,
    faqRef,
  ];

  const activeSection = useIntersectionObserver(sectionRefs);

  return (
    <div className='min-h-screen bg-white dark:bg-slate-900'>
      <SkipToContent />
      <HackedScreen />
      <NavBar activeSection={activeSection} />
      <MusicConsent />

      <main id='main-content'>
        <div ref={homeRef}>
          <Home />
        </div>
        {/* <div ref={rsvpRef}>
          <RSVP />
        </div> */}
        <div ref={itineraryRef}>
          <Itinerary />
        </div>
        <div ref={locationRef}>
          <Location />
        </div>
        <div ref={hotelsRef}>
          <Hotels />
        </div>
        <div ref={registryRef}>
          <Registry />
        </div>
        <div ref={mediaRef}>
          <Media />
        </div>
        <div ref={faqRef}>
          <FAQ />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function App() {
  return (
    <AudioProvider>
      <Router>
        <AppContent />
      </Router>
    </AudioProvider>
  );
}

export default App;
