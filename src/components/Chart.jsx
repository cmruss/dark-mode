import React from "react";
import moment from "moment";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts";

const Chart = ({ sparklineData }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx;
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null;
    })
    .filter(data => data);

  return (
    <AreaChart width={1100} height={300} data={formattedData}>
      <defs>
        <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
            <stop offset="35%" stopColor="#8884d8" stopOpacity={0.9}/>
            <stop offset="95%" stopColor="#f7931a" stopOpacity={0.1}/>
        </linearGradient>
      </defs>
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} />
      <YAxis />
      <Tooltip />
      <Area className="area" type="monotone" dataKey="value" stroke="#8884d8" fill="url(#area)"/>
    </AreaChart>
  );
};

export default Chart;
