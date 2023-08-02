import * as d3 from "d3";
import { drag } from "d3";
import "./d3.css";

const flip = (data, height) => data.map(coord => [coord[0], height - coord[1]]);

export default function Test1({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20
}) {

  const line = d3.line().curve(d3.curveCatmullRom.alpha(1));
  const d = line([[0, 0], [100, 200], [400, 400]]);

  return (
    <div className="outline margin-all-10px">
      <svg width={width} height={height}>
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d={d} />
        <circle stroke="currentColor" key={"some key 1"} cx={0} cy={0} r="5" />
        <g id="contentWrap">
          <circle id="middle-circle" stroke="currentColor" key={"some key 2"} cx={100} cy={200} r="5" />
        </g>
        <circle stroke="currentColor" key={"some key 3"} cx={400} cy={400} r="5" />
      </svg>
    </div>
  );
}
