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

  const sorted = [...data].sort((a, b) => b.area - a.area);

  const top5 = sorted.slice(0, 7);
  const other = sorted.slice(7);

  const labels = top5.map((country) => country.name.common);
  const allData = top5.map((country) => country.area);

  labels.push("Other");
  allData.push(other.reduce((sum, country) => sum + country.area, 0));

  const areaData = {
    labels: labels,
    datasets: [
      {
        label: "Area",
        data: allData,
        backgroundColor: [
          "#EB9526",
          "#F7E045",
          "#6EE36B",
          "#60E0C1",
          "#60C6E0",
          "#6086E0",
          "#8460E0",
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
        display: true,
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="m-5">Total Area of Countries in South America</h1>
      <br />
      <div
        className="chart-container d-flex justify-content-center align-items-center"
        style={{ position: "relative", height: "70vh", width: "70vw" }}
      >
        <Pie className="mb-5 ms-5 me-5" data={areaData} options={options} />
      </div>
    </div>
  );
};

export default Area;
