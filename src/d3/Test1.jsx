import React, { useEffect, useState } from 'react';
import * as d3 from "d3";
import "./d3.css";

const Test1 = ({ width = 640, height = 400 }) => {
  const [pos, setPos] = useState([100, 200]);

  const line = d3.line().curve(d3.curveCatmullRom.alpha(1));
  let d = line([[0, 0], [pos[0], pos[1]], [400, 400]]);

  const setUpDrag = () => {
    const handleDrag = d3.drag()
    .subject(function() {
      const me = d3.select(this);
      return { x: me.attr('cx'), y: me.attr('cy') }
    })
    .on('drag', function(event) {
      const me = d3.select(this);
      me.attr('cx', event.x);
      me.attr('cy', event.y);
      setPos([event.x, event.y]);
    });
    const bar = d3.select("#middle-circle");
    handleDrag(bar);
  }

  useEffect(() => setUpDrag(), []);

  return (
    <div className="outline margin-all-10px padding-all-10px">
      <svg width={width} height={height}>
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d={d} />
        <circle stroke="currentColor" key={"some key 1"} cx={0} cy={0} r="5" />
        <circle id="middle-circle" stroke="currentColor" key={"some key 2"} cx={pos[0]} cy={pos[1]} r="5" />
        <circle stroke="currentColor" key={"some key 3"} cx={400} cy={400} r="5" />
      </svg>
    </div>
  );
}

export default Test1;
