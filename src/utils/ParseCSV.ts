import Papa from "papaparse";
import type { EarthquakeEntry } from "../types/earthquake";

// Serve from public directory
const USGS_CSV_URL = "/all_month.csv";

export async function fetchEarthquakeData(): Promise<EarthquakeEntry[]> {
  return new Promise((resolve, reject) => {
    Papa.parse<Partial<EarthquakeEntry>>(USGS_CSV_URL, {
      download: true,
      header: true,
      dynamicTyping: true,
      complete: (result) => {
        console.log("📦 Raw parsed preview:", result.data.slice(0, 3));

        const parsed: EarthquakeEntry[] = result.data
    .filter((row): row is EarthquakeEntry => {
  const hasRequiredFields =
    row.latitude != null &&
    row.longitude != null &&
    row.time != null &&
    row.place != null &&
    row.id != null;

  if (!hasRequiredFields) console.warn("⚠️ Skipping invalid row:", row);

  return hasRequiredFields;
})

         .map((row) => ({
  time: row.time!,
  latitude: Number(row.latitude),
  longitude: Number(row.longitude),
  depth: Number(row.depth) || 0,
  mag: Number(row.mag) || 0,
  magType: row.magType ?? "N/A",
  place: row.place!,
  id: row.id!,
}));
resolve(parsed);

        console.log("✅ Parsed entries:", parsed.slice(0, 5));
        resolve(parsed);
      },
      error: (err) => {
        console.error("❌ CSV parse error:", err);
        reject(err);
      },
    });
  });
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
}
export function formatMagnitude(magnitude: number): string {
  return magnitude.toFixed(1);
}
