# Naja & Nilesh's Wedding Website 💒

A beautiful, mobile-first responsive wedding website built for a two-day Punjabi wedding celebration in Columbia, South Carolina.

## ✨ Features

- **Mobile-first responsive design** with elegant ocean/peacock accent colors
- **Dark mode support** with system preference detection
- **Accessibility compliant** (WCAG AA standards)
- **One-page layout** with smooth scrolling navigation and route anchors
- **RSVP system** with comprehensive form validation
- **Two-day itinerary** with JSON configuration
- **Interactive map** with venue details
- **Hotel recommendations** with booking integration
- **Wedding registry** with elegant card layouts
- **Media section** with video player
- **Background music** with user consent management
- **SEO optimized** with structured data and social meta tags
- **Performance optimized** with lazy loading and code splitting

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd punjabi-wedding-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment

### GitHub Pages

1. Build the project:
```bash
npm run build
```

2. Deploy to GitHub Pages using GitHub Actions (workflow included)

### Netlify

1. Connect your repository to Netlify
2. The `netlify.toml` configuration is already included
3. Netlify will automatically build and deploy your site

### Manual Deployment

Upload the contents of the `dist` directory to your web hosting provider.

## ⚙️ Configuration

### Content Management

All content is managed through JSON files in the `src/content/` directory:

- `itinerary.json` - Wedding events schedule
- `venues.json` - Ceremony and reception venues
- `hotels.json` - Recommended accommodations
- `registry.json` - Wedding registry links

### Customizing Content

#### Itinerary Events

Edit `src/content/itinerary.json`:

```json
{
  "id": "unique-event-id",
  "day": 1,
  "title": "Event Name",
  "time": "2:00 PM - 5:00 PM",
  "description": "Event description",
  "attire": "Dress code information",
  "location": "Event location"
}
```

#### Venues

Edit `src/content/venues.json`:

```json
{
  "id": "venue-id",
  "name": "Venue Name",
  "address": "Full Address",
  "type": "ceremony" | "reception",
  "coordinates": {
    "lat": 34.0000,
    "lng": -81.0000
  },
  "parkingNotes": "Parking information",
  "attire": "Attire requirements"
}
```

#### Hotels

Edit `src/content/hotels.json`:

```json
{
  "id": "hotel-id",
  "name": "Hotel Name",
  "distance": "Distance from venues",
  "priceRange": "$150-200/night",
  "bookingLink": "https://booking-url.com",
  "amenities": ["Pool", "Free WiFi", "Breakfast"],
  "rating": 4.5
}
```

#### Registry

Edit `src/content/registry.json`:

```json
{
  "id": "registry-id",
  "name": "Store Name",
  "url": "https://registry-url.com",
  "description": "Store description",
  "image": "https://image-url.com"
}
```

### Personalizing the Website

1. **Names and Details**: Update names, dates, and locations in:
   - `src/components/Home.tsx`
   - `src/components/NavBar.tsx`
   - `src/components/Footer.tsx`
   - `index.html` (title and meta tags)

2. **Colors and Styling**: Modify the Tailwind CSS classes throughout the components. The current color scheme uses:
   - Primary: `cyan-600` (#0891b2)
   - Secondary: `teal-600` (#14b8a6)  
   - Accent: `emerald-600` (#10b981)

3. **Images**: Replace placeholder images with your own:
   - Home background image
   - Registry images
   - Video poster image

4. **Audio**: Add your background music file to `public/audio/background-music.mp3`

5. **Videos**: Add your wedding videos to `public/videos/`

## 🎵 Audio Setup

To add background music:

1. Place your audio file at `public/audio/background-music.mp3`
2. The system will automatically handle user consent and playback
3. Supported formats: MP3, WAV, OGG

## 📱 Features Overview

### RSVP System
- Comprehensive form validation using React Hook Form and Yup
- Party size selection
- Per-event attendance tracking
- Dietary preferences including allergies
- Honeypot spam protection
- Success confirmation with animation

### Navigation
- Sticky header with smooth scrolling
- Active section highlighting
- Mobile-responsive hamburger menu
- Dark mode toggle
- Music control toggle

### Accessibility
- Semantic HTML structure
- ARIA labels and landmarks
- Keyboard navigation support
- High contrast ratios
- Screen reader friendly
- Skip-to-content link

### Performance
- Code splitting with React lazy loading
- Image optimization and lazy loading
- Efficient bundle size
- Fast loading times
- Progressive Web App ready

## 🔧 Technical Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Form Handling**: React Hook Form with Yup validation
- **Icons**: Lucide React
- **Routing**: React Router DOM

## 📄 License

This project is created for personal use. Please respect the couple's privacy and obtain permission before using their content.

## 🤝 Support

For questions about the wedding or technical issues with the website, please contact:
- Email: wedding@NajaandNilesh.com

## 🙏 Acknowledgments

- Photos from Pexels for placeholder images
- Traditional Punjabi music selections
- Columbia, SC tourism board for location information

---

Made with ❤️ for Naja & Nilesh's special day