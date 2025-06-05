import { useState } from "react";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ZAxis,
} from "recharts";
import type { EarthquakeEntry } from "../types/earthquake";
import useSelection from "../context/useSelection";

type Props = {
  data: EarthquakeEntry[];
};

const options = ["mag", "depth", "latitude", "longitude"] as const;

function ChartPanel({ data }: Props) {
  const [xKey, setXKey] = useState<(typeof options)[number]>("mag");
  const [yKey, setYKey] = useState<(typeof options)[number]>("depth");
  const { selectedId, setSelectedId } = useSelection();

  return (
    <div className="px-4">
      <h2 className="text-2xl font-semibold mb-4 text-navy-800">📊 Earthquake Scatter Plot</h2>

      {/* Axis Dropdown Selectors */}
      <div className="flex gap-4 mb-4">
        <label className="text-navy-700 font-medium">
          X-Axis:
          <select
            className="ml-2 border border-navy-300 bg-navy-50 text-navy-800 px-2 py-1 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-navy-400"
            value={xKey}
            onChange={(e) => setXKey(e.target.value as typeof xKey)}
          >
            {options.map((key) => (
              <option key={key}>{key}</option>
            ))}
          </select>
        </label>

        <label className="text-navy-700 font-medium">
          Y-Axis:
          <select
            className="ml-2 border border-navy-300 bg-navy-50 text-navy-800 px-2 py-1 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-navy-400"
            value={yKey}
            onChange={(e) => setYKey(e.target.value as typeof yKey)}
          >
            {options.map((key) => (
              <option key={key}>{key}</option>
            ))}
          </select>
        </label>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart margin={{ top: 20, right: 20, bottom: 10, left: 0 }}>
          <CartesianGrid stroke="#cbd5e1" />
          <XAxis type="number" dataKey={xKey} name={xKey} />
          <YAxis type="number" dataKey={yKey} name={yKey} />
          <ZAxis type="number" range={[60, 200]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          {/* Default scatter points */}
          <Scatter
            name="Earthquakes"
            data={data.filter((d) => d.id !== selectedId)}
            fill="#3b82f6" // blue-500
            onClick={(entry) => setSelectedId(entry.id)}
          />

          {/* Selected point scatter */}
          {selectedId && (
            <Scatter
              name="Selected"
              data={data.filter((d) => d.id === selectedId)}
              fill="#1e40af" // navy blue (blue-900)
              shape="circle"
              onClick={(entry) => setSelectedId(entry.id)}
            />
          )}
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ChartPanel;
