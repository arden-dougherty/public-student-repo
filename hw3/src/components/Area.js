import React, { useEffect, useState } from "react";
import axios from "axios";

import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const url = "https://restcountries.com/v3.1/subregion/South%20America";

const Area = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const areaData = {
    labels: data.map((country) => country.name.common),
    datasets: [
      {
        label: "Area",
        data: data.map((country) => country.area),
        backgroundColor: [
          "#E83131",
          "#EB9526",
          "#FFBC5E",
          "#F7E045",
          "#B1E060",
          "#6EE36B",
          "#177327",
          "#60E0C1",
          "#60C6E0",
          "#6086E0",
          "#8460E0",
          "#D560E0",
          "#FFB3D8",
          "#E060AF",
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Percentage of Total Area of Countries in South America",
        font: {
          size: 24,
        },
        padding: {
          bottom: 20,
        },
      },
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="m-5">Total Area of Countries in South America</h1>
      <br />
      <Pie className="mb-5 ms-5 me-5" data={areaData} options={options} />
    </div>
  );
};

export default Area;
