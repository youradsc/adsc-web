import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./SimpleDonutChartShowTooltipShowLege.css";

function SimpleDonutChartShowTooltipShowLege() {
  const args = {
    width: 380.741455078125,
    height: 356.9248962402344,
    margin: { top: 0, right: 0, left: 0, bottom: 0 },
    dataFillColor: "#3366FF",
    dataOuterRadius: 70,
    dataInnerRadius: 50,
    dataKey: "value",
    data: [
      { name: "Group B", value: 300, color: "#FF7777" },
      { name: "Group C", value: 300, color: "#2BEBC8" },
      { name: "Group D", value: 200, color: "#694BDB" },
    ],
    align: "center",
    verticalAlign: "top",
    ShowTooltip: true,
    ShowLegend: false,
  };

  return (
    <div className="simple-donut-chart-s">
      <Recharts.PieChart {...args}>
        <Recharts.Pie
          data={args.data}
          dataKey={args.dataKey}
          cx="50%"
          cy="50%"
          outerRadius={args.dataOuterRadius}
          innerRadius={args.dataInnerRadius}
          fill={args.dataFillColor}
          label
        >
          {args.data.map((entry, index) => (
            <Recharts.Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Recharts.Pie>
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
      </Recharts.PieChart>
    </div>
  );
}

export default SimpleDonutChartShowTooltipShowLege;
