import React, { useEffect, useState } from "react";
import axios from "axios";

const url = "https://restcountries.com/v3.1/subregion/South%20America";

const List = () => {
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <h1 className="m-5">List of Countries in South America</h1>
      <div className="d-flex flex-wrap justify-content-center gap-5 mb-5">
        {data.map((country) => (
          <div className="card d-inline-flex bg-light">
            <img
              className="card-img-top"
              src={country.flags.png}
              alt={`The flag of ${country.name.common}`}
            />
            <div className="card-body">
              <h2 className="card-title">{country.name.common}</h2>

              <div className="card-text">
                <strong>Capital:</strong> {country.capital[0]}
              </div>
              <div className="card-text">
                <strong>Population:</strong>{" "}
                {country.population.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
