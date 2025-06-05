// src/App.tsx

import { useEffect, useState } from 'react';
import './index.css'; // Tailwind & global styles
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import { fetchEarthquakeData } from './utils/ParseCSV';
import type { EarthquakeEntry } from './types/earthquake';

import ChartPanel from './components/ChartPanel';
import DataTable from './components/DataTable';

import { SelectionProvider } from './context/SelectionProvider';
/* SelectionProvider already wraps the component tree in your return statement, so no changes are needed here. */

function App() {
  const [data, setData] = useState<EarthquakeEntry[]>([]);

  useEffect(() => {
    // Fetch and parse earthquake data on component mount
    fetchEarthquakeData()
      .then((parsed) => setData(parsed))
      .catch((err) => console.error('Failed to fetch data:', err));
  }, []);

  return (
    // Root container with a navy blue gradient background
    <div className="min-h-screen w-screen flex flex-col bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">
      <SelectionProvider>
        {/* Header Section */}
        <header className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-900 text-white py-5 px-6 shadow-xl flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={viteLogo} className="w-10 animate-bounce" alt="Vite logo" />
            <img src={reactLogo} className="w-10 animate-pulse" alt="React logo" />
            <h1 className="text-3xl font-extrabold ml-4 text-white">
              Earthquake Data Dashboard 🌍
            </h1>
          </div>
          <p className="text-sm text-gray-200 font-medium">
            Total Earthquakes: <span className="text-cyan-200 font-bold">{data.length}</span>
          </p>
        </header>

        {/* Main Content: Chart and Data Table Panels */}
        <main className="flex flex-1 overflow-hidden">
          {/* Left Panel: Chart */}
          <section className="w-1/2 overflow-auto border-r border-slate-700 p-4 bg-slate-900 shadow-md text-white">
            <ChartPanel data={data} />
          </section>

          {/* Right Panel: Data Table */}
          <section className="w-1/2 overflow-auto p-4 bg-slate-800 text-white shadow-md">
            <DataTable data={data} />
          </section>
        </main>
      </SelectionProvider>
    </div>
  );
}

export default App;
