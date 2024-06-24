import React from "react";
import Navbar from "../components/Navbar";

const BaseLayout = ({ props }) => {
  return (
    <>
      <Navbar />
      <div className="custom-display">{props}</div>
      <img className="m-4 img-fluid" src="/bus.jpg" alt="" />
      <img className="m-4 mt-2 img-fluid" src="/bus1.jpg  " alt="" />
    </>
  );
};

export default BaseLayout;
