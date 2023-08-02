import React from 'react';
import * as d3 from "d3";
// import { drag } from "d3";
import "./d3.css";
import { render } from '@testing-library/react';

const flip = (data, height) => data.map(coord => [coord[0], height - coord[1]]);

const Test1 = ({
  data,
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 20,
  marginLeft = 20
}) => {
  const line = d3.line().curve(d3.curveCatmullRom.alpha(1));
  let d = line([[0, 0], [100, 200], [400, 400]]);

  const myReference = React.createRef();

  const foo = () => {
    const handleDrag = d3.drag()
    .subject(function() {
      console.log("subject");
      const me = d3.select(this);
      return { x: me.attr('cx'), y: me.attr('cy') }
    })
    .on('drag', function(event) {
      console.log("drag");
      const me = d3.select(this);
      me.attr('cx', event.x);
      me.attr('cy', event.y);

      d = line([[0, 0], [event.x, event.y], [400, 400]]);
    });
    const bar = d3.select("#middle-circle");
    console.log(`bar = ${bar}`);
    handleDrag(bar);
  }

  return (
    <div className="outline margin-all-10px">
      <svg width={width} height={height} onClick={foo}>
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d={d} />
        <circle stroke="currentColor" key={"some key 1"} cx={0} cy={0} r="5" />
        <circle id="middle-circle" stroke="currentColor" key={"some key 2"} cx={100} cy={200} r="5" />
        <circle stroke="currentColor" key={"some key 3"} cx={400} cy={400} r="5" />
      </svg>
    </div>
  );
}

export default Test1;
