import React, { useEffect, useState } from 'react';
import * as d3 from "d3";
import "./d3.css";

const Test1 = ({ width = 640, height = 300 }) => {
  const [pos0, setPos0] = useState([10, 10]);
  const [pos1, setPos1] = useState([100, 200]);
  const [pos2, setPos2] = useState([290, 290]);

  const line = d3.line().curve(d3.curveCatmullRom.alpha(1));
  let d = line([[pos0[0], pos0[1]], [pos1[0], pos1[1]], [pos2[0], pos2[1]]]);

  const setUpLeftDrag = () => {
    const handleDrag = d3.drag()
    .subject(function() {
      const me = d3.select(this);
      return { x: me.attr('cx'), y: me.attr('cy') }
    })
    .on('drag', function(event) {
      const me = d3.select(this);
      let y = event.y;
      if (y < 10) {
        y = 10;
      } else if (y > 290) {
        y = 290;
      }
      // me.attr('cx', event.x);
      me.attr('cy', y);
      setPos0([10, y]);
    });
    const bar = d3.select("#left-circle");
    handleDrag(bar);
  }

  const setUpMiddleDrag = () => {
    const handleDrag = d3.drag()
    .subject(function() {
      const me = d3.select(this);
      return { x: me.attr('cx'), y: me.attr('cy') }
    })
    .on('drag', function(event) {
      const me = d3.select(this);
      let x = event.x;
      if (x < 10) {
        x = 10;
      } else if (x > 630) {
        x = 630;
      }
      let y = event.y;
      if (y < 10) {
        y = 10;
      } else if (y > 290) {
        y = 290;
      }
      me.attr('cx', x);
      me.attr('cy', y);
      setPos1([x, y]);
    });
    const bar = d3.select("#middle-circle");
    handleDrag(bar);
  }

  const setUpBottomDrag = () => {
    const handleDrag = d3.drag()
    .subject(function() {
      const me = d3.select(this);
      return { x: me.attr('cx'), y: me.attr('cy') }
    })
    .on('drag', function(event) {
      const me = d3.select(this);
      let x = event.x;
      if (x < 10) {
        x = 10;
      } else if (x > 630) {
        x = 630;
      }
      me.attr('cx', x);
      // me.attr('cy', event.y);
      setPos2([x, 290]);
    });
    const bar = d3.select("#bottom-circle");
    handleDrag(bar);
  }

  useEffect(() => {
    setUpLeftDrag();
    setUpMiddleDrag();
    setUpBottomDrag();
  }, []);

  return (
    <div className="outline margin-all-10px padding-all-10px">
      <svg width={width} height={height}>
        <path fill="none" stroke="currentColor" strokeWidth="1.5" d={d} />
        <circle id="left-circle" stroke="currentColor" key={"some key 1"} cx={pos0[0]} cy={pos0[1]} r="5" />
        <circle id="middle-circle" stroke="currentColor" key={"some key 2"} cx={pos1[0]} cy={pos1[1]} r="5" />
        <circle id="bottom-circle" stroke="currentColor" key={"some key 3"} cx={pos2[0]} cy={pos2[1]} r="5" />
      </svg>
    </div>
  );
}

export default Test1;
