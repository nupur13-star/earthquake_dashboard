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
      <h2 className="text-2xl font-semibold mb-4">📊 Earthquake Scatter Plot</h2>

      <div className="flex gap-4 mb-4">
        <label>
          X-Axis:
          <select
            className="ml-2 border px-2 py-1 rounded"
            value={xKey}
            onChange={(e) => setXKey(e.target.value as typeof xKey)}
          >
            {options.map((key) => (
              <option key={key}>{key}</option>
            ))}
          </select>
        </label>

        <label>
          Y-Axis:
          <select
            className="ml-2 border px-2 py-1 rounded"
            value={yKey}
            onChange={(e) => setYKey(e.target.value as typeof yKey)}
          >
            {options.map((key) => (
              <option key={key}>{key}</option>
            ))}
          </select>
        </label>
      </div>

      <ResponsiveContainer width="100%" height={400}>
        <ScatterChart
          margin={{ top: 20, right: 20, bottom: 10, left: 0 }}
        >
          <CartesianGrid />
          <XAxis type="number" dataKey={xKey} name={xKey} />
          <YAxis type="number" dataKey={yKey} name={yKey} />
          <ZAxis type="number" range={[60, 200]} />
          <Tooltip cursor={{ strokeDasharray: "3 3" }} />

          {/* Unselected points */}
          <Scatter
            name="Earthquakes"
            data={data.filter((d) => d.id !== selectedId)}
            fill="#8884d8"
            onClick={(entry) => setSelectedId(entry.id)}
          />

          {/* Selected point highlighted in purple */}
          {selectedId && (
            <Scatter
              name="Selected"
              data={data.filter((d) => d.id === selectedId)}
              fill="#9333ea" // Tailwind purple-600
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
