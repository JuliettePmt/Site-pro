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
    anchor: "middle" as const
  },
  {
    name: { en: "Paris", fr: "Paris" },
    coordinates: [2.3522, 48.8566] as [number, number],
    labelY: 12,
    labelX: 0,
    anchor: "middle" as const
  },
  {
    name: { en: "Toulouse", fr: "Toulouse" },
    coordinates: [1.4442, 43.6047] as [number, number],
    labelY: 4,
    labelX: 12,
    anchor: "start" as const
  },
  {
    name: { en: "Montreal", fr: "Montréal" },
    coordinates: [-73.5674, 45.5019] as [number, number],
    labelY: -12,
    labelX: 0,
    anchor: "middle" as const
  },
  {
    name: { en: "Tirana", fr: "Tirana" },
    coordinates: [19.8187, 41.3275] as [number, number],
    labelY: -12,
    labelX: 0,
    anchor: "middle" as const
  },
  {
    name: { en: "Lille", fr: "Lille" },
    coordinates: [3.0573, 50.6292] as [number, number],
    labelY: 3,
    labelX: -33,
    anchor: "right" as const
  },
  {
    name: { en: "Vienna", fr: "Vienne" },
    coordinates: [16.3738, 48.2082] as [number, number],
    labelY: -12,
    labelX: 0,
    anchor: "middle" as const
  }
]

export default function MapChart() {
  const { lang } = useLang()

  return (
    <ComposableMap
      projection="geoConicConformal"
      projectionConfig={{
        center: [-30, 50],
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
                default: {
                  fill: "#E5E7EB",
                  stroke: "#fff",
                  strokeWidth: 0.5,
                },
                hover: {
                  fill: "#cb564d",
                  stroke: "#fff",
                  strokeWidth: 0.5,
                },
                pressed: {
                  fill: "#81181e",
                },
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

      {conference_cities.map(({ name, coordinates, labelY, labelX, anchor }) => (
        <Marker key={name.en} coordinates={coordinates}>
          <circle r={6} fill="#3B82F6" stroke="#fff" strokeWidth={2} />
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
  )
}