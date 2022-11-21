import React from "react";
import "./App.css";

function Page({ name, number, description }) {
  return (
    <div className="page">
      <h2>
        <span>{number} </span>
        {name}
      </h2>
      <p>{description}</p>
    </div>
  );
}

export default Page;
