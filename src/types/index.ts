export interface RSVPData {
  name: string;
  email: string;
  partySize: number;
  day1Attendance: boolean;
  day2Attendance: boolean;
  dietary: "none" | "vegetarian" | "nuts_allergy" | "other";
  dietaryOther?: string;
  notes?: string;
}

export interface ItineraryEvent {
  id: string;
  day: 1 | 2;
  title: string;
  time: string;
  description: string;
  attire: string;
  location: string;
}

export interface Venue {
  id: string;
  name: string;
  address: string;
  type: "ceremony" | "reception";
  coordinates: {
    lat: number;
    lng: number;
  };
  parkingNotes: string;
  description: string;
}

export interface Hotel {
  id: string;
  name: string;
  distance: string;
  priceRange: string;
  bookingLink: string;
  amenities: string[];
  rating: number;
}

export interface RegistryItem {
  id: string;
  name: string;
  url: string;
  description: string;
  image: string;
}
