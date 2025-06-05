import type { EarthquakeEntry } from "../types/earthquake";
import { useEffect, useRef } from "react";
import useSelection from "../context/useSelection";
import { formatDate } from "../utils/ParseCSV";

type Props = {
  data: EarthquakeEntry[];
};

function DataTable({ data }: Props) {
  const { selectedId, setSelectedId } = useSelection();
  const tableRef = useRef<HTMLTableElement>(null);

  // Scroll to selected row
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
    <div className="mt-2">
      <h2 className="text-2xl font-semibold mb-4">📋 Earthquake Table</h2>

      <div className="overflow-auto max-h-[450px] border rounded shadow-inner">
        <table
          className="min-w-full text-sm border-collapse"
          ref={tableRef}
        >
          <thead className="bg-indigo-100 sticky top-0 z-10 text-indigo-700">
            <tr>
              <th className="border px-2 py-1">Time</th>
              <th className="border px-2 py-1">Magnitude</th>
              <th className="border px-2 py-1">Depth (km)</th>
              <th className="border px-2 py-1">Location</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry) => (
              <tr
                key={entry.id}
                data-id={entry.id}
                className={`cursor-pointer ${
                  entry.id === selectedId
                    ? "bg-purple-100 font-semibold"
                    : "hover:bg-blue-50"
                }`}
                onClick={() => setSelectedId(entry.id)}
              >
                <td className="border px-2 py-1">{formatDate(entry.time)}</td>
                <td className="border px-2 py-1">{entry.mag.toFixed(1)}</td>
                <td className="border px-2 py-1">{entry.depth.toFixed(1)}</td>
                <td className="border px-2 py-1">{entry.place}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DataTable;
// This component renders a scrollable table of earthquake data with selectable rows.
// It highlights the selected row and scrolls to it when changed.