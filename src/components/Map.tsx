import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const cities = [
  { name: "Bruxelles", coordinates: [4.3517, 50.8503] as [number, number], labelY: -12, labelX: 0, anchor: "middle" as const },
  { name: "Namur", coordinates: [4.8717, 50.4669] as [number, number], labelY: 4, labelX: 12, anchor: "start" as const },
]

export default function MapChart() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        center: [10, 50],
        scale: 850,
      }}
      width={800}
      height={600}
      style={{ width: "100%", height: "auto" }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }: { geographies: any[] }) =>
          geographies.map((geo: any) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "#E5E7EB", stroke: "#fff", strokeWidth: 0.5 },
                hover:   { fill: "#cb564d", stroke: "#fff", strokeWidth: 0.5 },
                pressed: { fill: "#81181e" },
              }}
            />
          ))
        }
      </Geographies>

      {cities.map(({ name, coordinates, labelY, labelX, anchor }) => (
        <Marker key={name} coordinates={coordinates}>
          <circle r={6} fill="#cb564d" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor={anchor}
            x={labelX}
            y={labelY}
            style={{ fontFamily: "Poppins, sans-serif", fontSize: 12, fill: "#1E293B", fontWeight: 600 }}
          >
            {name}
          </text>
        </Marker>
      ))}
    </ComposableMap>
  )
}