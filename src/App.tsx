import { useEffect, useState } from 'react';
import './index.css';
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
    fetchEarthquakeData()
      .then((parsed) => setData(parsed))
      .catch((err) => console.error('Failed to fetch data:', err));
  }, []);

  return (
    <SelectionProvider>
      <div className="min-h-screen w-screen flex flex-col bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100">
        {/* Header */}
        <header className="bg-indigo-800 text-white py-4 px-6 shadow-md flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center gap-4 mb-2 md:mb-0">
            <img src={viteLogo} className="w-10 animate-bounce" alt="Vite logo" />
            <img src={reactLogo} className="w-10 animate-pulse" alt="React logo" />
            <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-400">
              Earthquake Dashboard 🌍
            </h1>
          </div>
          <p className="text-sm text-gray-200">
            Total Entries: <strong>{data.length}</strong>
          </p>
        </header>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row flex-1 overflow-hidden gap-4 p-4">
          {/* Left Panel: Chart */}
          <section className="md:w-1/2 w-full h-full bg-white rounded-lg shadow-md overflow-auto">
            <ChartPanel data={data} />
          </section>

          {/* Right Panel: Table */}
          <section className="md:w-1/2 w-full h-full bg-white rounded-lg shadow-md overflow-auto">
            <DataTable data={data} />
          </section>
        </main>
      </div>
    </SelectionProvider>
  );
}

export default App;
