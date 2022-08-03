import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";

import geoUrl from "../data/topo.json";

interface MapProps {
  onClickFunction: (geo: string) => void;
  clickedProvince: string;
}

export default function MapChart(props: MapProps) {
  // const [clickedProvince, setClickedProvince] = useState("");
  const clickedProvince = props.clickedProvince
  const handleClick = props.onClickFunction
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
          geographies.map((geo) => {
            const isClicked = clickedProvince === geo.properties.name;

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={isClicked ? "#f2e3af" : "#fdfaf2"}
                style={{
                  hover: { fill: "#f2e3af" },
                }}
                onClick={() => handleClick(geo.properties.name)}
              />
            );
          })
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
          {"Hello"}
        </text>
      </Annotation>
    </ComposableMap>
  );
}
