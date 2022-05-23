import axios from "axios";
import React, { useEffect, useState } from "react";
import { Bar, BarChart, Tooltip, XAxis, YAxis } from "recharts";

const Axios = () => {
  const [phone, setPhone] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all")
    .then((data) => {
      const country = data.data;
      const cData = country.map((country) => {
        let cnn = country.ccn3;
        const num={
            value: cnn
        }
        return num;
        console.log("value", num.value)
      });
      setPhone(cData);
    });
    
  }, []);

  const num=[
    {
        value: 10
    },
    {
        value: 15
    },
    {
        value: 16
    },
    {
        value: 19
    },
    {
        value: 30
    },
]

  return (
    <div>
      <h1>api</h1>
      <BarChart width={900} height={400} data={phone}>
        <Bar dataKey='value' fill="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
      </BarChart>
    </div>
  );
};

export default Axios;
