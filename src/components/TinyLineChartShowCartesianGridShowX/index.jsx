import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./TinyLineChartShowCartesianGridShowX.css";

function TinyLineChartShowCartesianGridShowX() {
  const args = {
    width: 187.08531188964844,
    height: 139.11582946777344,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    lineColor: "#FF7777",
    lineKey: "blue",
    data: [{ blue: 480 }, { blue: 200 }, { blue: 900 }, { blue: 190 }, { blue: 550 }, { blue: 20 }],
    align: "center",
    verticalAlign: "bottom",
    ShowCartesianGrid: false,
    ShowXAxis: false,
    ShowYAxis: false,
    ShowTooltip: false,
    ShowLegend: false,
  };

  return (
    <div className="tiny-line-chart-show">
      <Recharts.LineChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="0 1" />}
        <Recharts.XAxis dataKey={args.lineKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Line type="monotone" dataKey={args.lineKey} stroke={args.lineColor} dot={false} strokeWidth={2} />
      </Recharts.LineChart>
    </div>
  );
}

export default TinyLineChartShowCartesianGridShowX;
