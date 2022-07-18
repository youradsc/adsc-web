import React, { useEffect } from "react";
import * as Recharts from "recharts";
import "./SimpleBarChartShowCartesianGridShow.css";

function SimpleBarChartShowCartesianGridShow() {
  const args = {
    width: 657.8583984375,
    height: 440.9273681640625,
    margin: { top: 0, right: 0, left: 0, bottom: 3 },
    xAxisDataKey: "name",
    data1Color: "#694BDB",
    data2Color: "#FF7777",
    data1Key: "2021",
    data2Key: "2022",
    data: [
      { 2021: 60, 2022: 240, name: "Jan" },
      { 2021: 200, 2022: 139, name: "B" },
      { 2021: 400, 2022: 200, name: "C" },
      { 2021: 208, 2022: 390, name: "D" },
      { 2021: 459, 2022: 480, name: "E" },
      { 2021: 500, 2022: 380, name: "F" },
    ],
    align: "center",
    verticalAlign: "bottom",
    ShowCartesianGrid: true,
    ShowXAxis: false,
    ShowYAxis: false,
    ShowLegend: false,
    ShowTooltip: true,
  };

  return (
    <div className="simple-bar-chart-sho">
      <Recharts.BarChart {...args}>
        {args.ShowCartesianGrid && <Recharts.CartesianGrid strokeDasharray="3 3" />}
        <Recharts.XAxis dataKey={args.xAxisDataKey} hide={!args.ShowXAxis} />
        <Recharts.YAxis hide={!args.ShowYAxis} />
        {args.ShowTooltip && <Recharts.Tooltip />}
        {args.ShowLegend && <Recharts.Legend align={args.align} verticalAlign={args.verticalAlign} />}
        <Recharts.Bar dataKey={args.data1Key} fill={args.data1Color} />
        <Recharts.Bar dataKey={args.data2Key} fill={args.data2Color} />
      </Recharts.BarChart>
    </div>
  );
}

export default SimpleBarChartShowCartesianGridShow;
