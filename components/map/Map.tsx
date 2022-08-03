import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import geoUrl from "../data/topo.json";

const HelloWorld = () => {
  console.log("Hello");
  return "hello";
};

export default function MapChart() {
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 900,
        center: [118.015776, -2.600029],
      }}
    >
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              style={{
                default: { fill: "#fdfaf2" },
                hover: { fill: "#f2e3af" },
                pressed: { fill: "#f2e3af" },
              }}
              onClick={() => HelloWorld()}
            />
          ))
        }
      </Geographies>
      <Annotation
        subject={[118, -2]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "#FF5533",
          strokeWidth: 3,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#F53">
          {<a onClick={() => HelloWorld()}>Hello</a>}
        </text>
      </Annotation>
    </ComposableMap>
  );
}
