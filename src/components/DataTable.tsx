import { useEffect, useRef } from "react";
import type { EarthquakeEntry } from "../types/earthquake";
import useSelection from "../context/useSelection";
import { formatDate } from "../utils/ParseCSV";

type Props = {
  data: EarthquakeEntry[];
};

function DataTable({ data }: Props) {
  const { selectedId, setSelectedId } = useSelection();
  const tableRef = useRef<HTMLTableElement>(null);

  // Scroll the selected row into view smoothly when selectedId changes
  useEffect(() => {
    if (!selectedId || !tableRef.current) return;
    const row = tableRef.current.querySelector(`[data-id="${selectedId}"]`);
    if (row) {
      (row as HTMLTableRowElement).scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedId]);

  return (
    <div className="mt-4">
      {/* Table Title */}
      <h2 className="text-2xl font-bold text-navy-800 mb-4">
        📋 Earthquake Records
      </h2>

      {/* Scrollable Table Container */}
      <div className="overflow-auto max-h-[450px] border border-navy-200 rounded-md shadow-md">
        <table
          ref={tableRef}
          className="min-w-full text-sm border-collapse font-medium"
        >
          <thead className="bg-navy-800 text-white sticky top-0 z-10">
            <tr>
              <th className="border px-3 py-2">Time</th>
              <th className="border px-3 py-2">Magnitude</th>
              <th className="border px-3 py-2">Depth (km)</th>
              <th className="border px-3 py-2">Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr
                key={entry.id}
                data-id={entry.id}
                className={`transition-colors cursor-pointer ${
                  entry.id === selectedId
                    ? "bg-navy-100 text-navy-900 font-semibold"
                    : "hover:bg-navy-50"
                }`}
                onClick={() => setSelectedId(entry.id)}
              >
                <td className="border px-3 py-2">{formatDate(entry.time)}</td>
                <td className="border px-3 py-2">{entry.mag.toFixed(1)}</td>
                <td className="border px-3 py-2">{entry.depth.toFixed(1)}</td>
                <td className="border px-3 py-2">{entry.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
