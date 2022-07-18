import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./TinyLineChartShowCartesianGridShowX2.css";

function TinyLineChartShowCartesianGridShowX2() {
  const args = {
    width: 198.6696319580078,
    height: 139.06874084472656,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    lineColor: "#FFDF90",
    lineKey: "blue",
    data: [{ blue: 220 }, { blue: 200 }, { blue: 200 }, { blue: 30 }, { blue: 450 }, { blue: 0 }],
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

export default TinyLineChartShowCartesianGridShowX2;
