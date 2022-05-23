import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

const Mychart = () => {
    const data = [
        {
          name: "Page A",
          price: 4000,
          pv: 2400,
          amt: 2400
        },
        {
          name: "Page B",
          price: 390,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page B",
          price: 3000,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page B",
          price: 3600,
          pv: 1398,
          amt: 2210
        },
        {
          name: "Page B",
          price: 330,
          pv: 1398,
          amt: 2210
        },
      ];
    return (
        <div>
            <h1>Hello !</h1>
            <LineChart width={500} height={500} data={data}>
                <Line dataKey={'price'}></Line>
                <Line dataKey={'pv'}></Line>
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </div>
    );
};

export default Mychart;