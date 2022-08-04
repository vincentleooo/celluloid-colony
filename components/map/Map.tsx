import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

import geoUrl from "../data/topo.json";

interface MapProps {
  onClickFunction: (geo: string) => void;
  clickedProvince: string;
}

export default function MapChart(props: MapProps) {
  // const [clickedProvince, setClickedProvince] = useState("");
  const clickedProvince = props.clickedProvince;
  const handleClick = props.onClickFunction;
  return (
    <ComposableMap
      projection="geoMercator"
      projectionConfig={{
        scale: 900,
        center: [118.015776, -2.600029],
      }}
      height={350}
    >
      <rect
        width="100%"
        height="100%"
        fill="transparent"
        onClick={() => handleClick("")}
        className="hover:cursor-pointer"
      />
      <Geographies geography={geoUrl} className="hover:cursor-pointer">
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
        subject={[101.3, 0]}
        dx={40}
        dy={-50}
        connectorProps={{
          stroke: "#ead17a",
          strokeWidth: 2,
          strokeLinecap: "square"
        }}
      >
        <text x="5" y="-10" textAnchor="start" alignmentBaseline="middle" fill="#ead17a">
          {"Sumatra"}
        </text>
      </Annotation>
      <Annotation
        subject={[110, -7.6]}
        dx={10}
        dy={20}
        connectorProps={{
          stroke: "#ead17a",
          strokeWidth: 2,
          strokeLinecap: "square"
        }}
      >
        <text x="5" y="10" textAnchor="start" alignmentBaseline="middle" fill="#ead17a">
          {"Jawa"}
        </text>
      </Annotation>
      <Annotation
        subject={[113, -0.5]}
        dx={20}
        dy={-80}
        connectorProps={{
          stroke: "#ead17a",
          strokeWidth: 2,
          strokeLinecap: "square"
        }}
      >
        <text x="5" y="-10" textAnchor="start" alignmentBaseline="middle" fill="#ead17a">
          {"Kalimantan"}
        </text>
      </Annotation>
      <Annotation
        subject={[120.7, -2]}
        dx={30}
        dy={-90}
        connectorProps={{
          stroke: "#ead17a",
          strokeWidth: 2,
          strokeLinecap: "square"
        }}
      >
        <text x="5" y="-10" textAnchor="start" alignmentBaseline="middle" fill="#ead17a">
          {"Sulawesi"}
        </text>
      </Annotation>

      <Annotation
        subject={[128, 0.7]}
        dx={30}
        dy={-10}
        connectorProps={{
          stroke: "#ead17a",
          strokeWidth: 2,
          strokeLinecap: "square"
        }}
      >
        <text x="5" y="-5" textAnchor="start" alignmentBaseline="middle" fill="#ead17a">
          {"Maluku"}
        </text>
      </Annotation>
      <Annotation
        subject={[139, -5]}
        dx={-30}
        dy={70}
        connectorProps={{
          stroke: "#ead17a",
          strokeWidth: 2,
          strokeLinecap: "square"
        }}
      >
        <text x="-5" y="10" textAnchor="end" alignmentBaseline="middle" fill="#ead17a">
          {"Papua"}
        </text>
      </Annotation>
      <Annotation
        subject={[123, -8.3]}
        dx={20}
        dy={40}
        connectorProps={{
          stroke: "#ead17a",
          strokeWidth: 2,
          strokeLinecap: "square"
        }}
      >
        <text x="5" y="10" textAnchor="start" alignmentBaseline="middle" fill="#ead17a">
          {"Eastern Islands"}
        </text>
      </Annotation>
    </ComposableMap>
  );
}
