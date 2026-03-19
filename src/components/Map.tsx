import { ComposableMap, Geographies, Geography, Marker } from "react-simple-maps"
import { useLang } from '@/context/LangContext'

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

const cities = [
  {
    name: { en: "Brussels", fr: "Bruxelles" },
    coordinates: [4.3517, 50.8503] as [number, number],
    labelY: -12,
    labelX: 0,
    anchor: "middle" as const
  },
  {
    name: { en: "Namur", fr: "Namur" },
    coordinates: [4.8717, 50.4669] as [number, number],
    labelY: 4,
    labelX: 12,
    anchor: "start" as const
  },
]

const conference_cities = [
  {
    name: { en: "Roma", fr: "Rome" },
    coordinates: [12.4964, 41.9028] as [number, number],
    labelY: -12,
    labelX: 0,
    anchor: "middle" as const,
    color: "#3B82F6"
  },

  
  {
    name: { en: "Toulouse", fr: "Toulouse" },
    coordinates: [1.4442, 43.6047] as [number, number],
    labelY: 4,
    labelX: 12,
    anchor: "start" as const,
    color: "#3B82F6"
  },
  { name: { en: "Brno", fr: "Brno" }, coordinates: [16.6068, 49.1951] as [number, number], labelY: -10, labelX: 0, anchor: "middle" as const, color: "#3B82F6" },
  { name: { en: "Bergamo", fr: "Bergame" }, coordinates: [9.6699, 45.6983] as [number, number], labelY: 16, labelX: 0, anchor: "middle" as const, color: "#3B82F6" },
  { name: { en: "Aubervilliers", fr: "Aubervilliers" }, coordinates: [2.3833, 48.9167] as [number, number], labelY: 2.5, labelX: 50, anchor: "middle" as const, color: "#3B82F6" },
  {
    name: { en: "Paris", fr: "Paris" },
    coordinates: [2.3522, 48.8566] as [number, number],
    labelY: 18,
    labelX: 0,
    anchor: "middle" as const,
    color: "#3B82F6"
  },
  {
    name: { en: "Montreal", fr: "Montréal" },
    coordinates: [-73.5674, 45.5019] as [number, number],
    labelY: -12,
    labelX: 0,
    anchor: "middle" as const,
    color: "#3B82F6"
  },
  {
    name: { en: "Tirana", fr: "Tirana" },
    coordinates: [19.8187, 41.3275] as [number, number],
    labelY: -12,
    labelX: 0,
    anchor: "middle" as const,
    color: "#3B82F6"
  },
  {
    name: { en: "Lille", fr: "Lille" },
    coordinates: [3.0573, 50.6292] as [number, number],
    labelY: 3,
    labelX: -33,
    anchor: "right" as const,
    color: "#3B82F6"
  },
  {
    name: { en: "Vienna", fr: "Vienne" },
    coordinates: [16.3738, 48.2082] as [number, number],
    labelY: 18,
    labelX: 0,
    anchor: "middle" as const,
    color: "#2DE3E3"
  },
]

const legend = {
  en: [
    { color: "#cb564d", label: "Home universities" },
    { color: "#3B82F6", label: "Conferences" },
    { color: "#2DE3E3", label: "Summer schools" },
  ],
  fr: [
    { color: "#cb564d", label: "Universités de rattachement" },
    { color: "#3B82F6", label: "Conférences" },
    { color: "#2DE3E3", label: "Écoles d'été" },
  ],
  
}

export default function MapChart() {
  const { lang } = useLang()
  const legendItems = lang === 'fr' ? legend.fr : legend.en

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <ComposableMap
        projection="geoConicConformal"
        projectionConfig={{
          center: [-25, 55],
          scale: 750,
        }}
        width={1000}
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
                  hover: { fill: "#cb564d", stroke: "#fff", strokeWidth: 0.5 },
                  pressed: { fill: "#81181e" },
                }}
              />
            ))
          }
        </Geographies>

        {cities.map(({ name, coordinates, labelY, labelX, anchor }) => (
          <Marker key={name.en} coordinates={coordinates}>
            <circle r={6} fill="#cb564d" stroke="#fff" strokeWidth={2} />
            <text
              textAnchor={anchor}
              x={labelX}
              y={labelY}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 12,
                fill: "#1E293B",
                fontWeight: 600,
              }}
            >
              {lang === 'fr' ? name.fr : name.en}
            </text>
          </Marker>
        ))}

        {conference_cities.map(({ name, coordinates, labelY, labelX, anchor, color }) => (
          <Marker key={name.en} coordinates={coordinates}>
            <circle r={6} fill={color} stroke="#fff" strokeWidth={2} />
            <text
              textAnchor={anchor}
              x={labelX}
              y={labelY}
              style={{
                fontFamily: "Poppins, sans-serif",
                fontSize: 12,
                fill: "#1E293B",
                fontWeight: 600,
              }}
            >
              {lang === 'fr' ? name.fr : name.en}
            </text>
          </Marker>
        ))}
      </ComposableMap>

      {/* Legend */}
      <div
        style={{
          position: "absolute",
          bottom: "12%",
          left: "2%",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          border: "1px solid #E5E7EB",
          borderRadius: "8px",
          padding: "10px 14px",
          fontFamily: "Poppins, sans-serif",
          fontSize: 13,
          color: "#1E293B",
          boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        {legendItems.map(({ color, label }) => (
          <div key={label} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width={14} height={14}>
              <circle cx={7} cy={7} r={6} fill={color} stroke="#fff" strokeWidth={2} />
            </svg>
            <span>{label}</span>
          </div>
        ))}
      </div>
    </div>
  )
}