import React from "react";
import Navbar from "../components/Navbar";

const BaseLayout = ({ props }) => {
  return (
    <>
      <Navbar />
      <div className="custom-display">{props}</div>
    </>
  );
};

export default BaseLayout;
