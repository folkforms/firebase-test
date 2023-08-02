import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import "./d3.css";

const Test2 = () => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = 640;
    const height = 400;
    const marginTop = 20;
    const marginRight = 30;
    const marginBottom = 30;
    const marginLeft = 40;

    svg.attr("width", width).attr("height", height);

    const xAxis = d3.scaleLinear()
        .domain([0, 10_000_000])
        .range([marginLeft, width - marginRight]);

    const yAxis = d3.scaleLinear()
        .domain([0, 100])
        .range([height - marginBottom, marginTop]);

    svg.append("g")
        .attr("transform", `translate(0,${height - marginBottom})`)
        .call(d3.axisBottom(xAxis));

    svg.append("g")
        .attr("transform", `translate(${marginLeft},0)`)
        .call(d3.axisLeft(yAxis));
  }, []);

  return (
    <svg ref={svgRef}>
    </svg>
  );
}

export default Test2;
