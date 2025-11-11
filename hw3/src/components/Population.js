import React, { useEffect, useState } from "react";
import axios from "axios";

import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const url = "https://restcountries.com/v3.1/subregion/South%20America";

const Population = () => {
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

  const sorted = [...data].sort((a, b) => b.population - a.population);

  const popData = {
    labels: sorted.map((country) => country.name.common),
    datasets: [
      {
        label: "Population",
        data: sorted.map((country) => country.population),
        backgroundColor: "#42A5F5",
        borderColor: "#1E88E5",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Population of Countries in South America",
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
    scales: {
      x: {
        title: {
          display: true,
          text: "Country",
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Population",
        },
      },
    },
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="m-5">Population of Countries in South America</h1>
      <br />
      <div
        className="chart-container d-flex justify-content-center align-items-center"
        style={{ position: "relative", height: "70vh", width: "70vw" }}
      >
        <Bar className="mb-5 ms-5 me-5" data={popData} options={options} />
      </div>
    </div>
  );
};

export default Population;
