export interface EarthquakeEntry {
  time: string;               // Timestamp
  latitude: number;           // Geographic latitude
  longitude: number;          // Geographic longitude
  depth: number;              // Depth in kilometers
  mag: number;                // Magnitude
  magType: string;            // Magnitude type
  place: string;              // Location description
  id: string;                 // Unique event ID
}
