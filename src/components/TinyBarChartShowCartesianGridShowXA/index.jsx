import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./TinyBarChartShowCartesianGridShowXA.css";

function TinyBarChartShowCartesianGridShowXA() {
  const args = {
    width: 473.96942138671875,
    height: 189.64434814453125,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    fillColor: "#ff7777",
    strokeColor: "#ffffff",
    dataKey: "blue",
    xAxisDataKey: "blue",
    data: [{ blue: 630 }, { blue: 200 }, { blue: 400 }, { blue: 208 }, { blue: 450 }, { blue: 500 }],
    align: "center",
    verticalAlign: "bottom",
    ShowCartesianGrid: false,
    ShowXAxis: false,
    ShowYAxis: false,
    ShowTooltip: true,
    ShowLegend: false,
  };

  return (
    <div className="tiny-bar-chart-show">
      <Recharts.BarChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
        <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Bar dataKey={args.dataKey} fill={args.fillColor} />
      </Recharts.BarChart>
    </div>
  );
}

export default TinyBarChartShowCartesianGridShowXA;
