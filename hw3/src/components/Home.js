import React from "react";

export default function Home() {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="m-5">Welcome!</h1>
      <p>
        This application displays data from the REST Countries API using
        Charts.js. Use the navbar to see different visualizations.{" "}
      </p>
    </div>
  );
}
