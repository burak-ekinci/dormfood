import React from "react";

const Warning = () => {
  return (
    <>
      <div className="alert alert-warning m-5" role="alert">
        Yemek listesini <strong>en kısa zamanda</strong> güncelleyecem{" "}
        <strong>yemek listesini bekliyoruz...</strong> Beklemede kalın bropalar{" "}
        <i>@kykyemek @DEVS</i>
      </div>
      <img
        className="img img-fluid me-5 ms-5"
        width={"60%"}
        src="https://gifdb.com/images/high/monkey-on-the-phone-e87w1ne9zw18qddo.gif"
        alt="yemekler bekleniyi"
      />
    </>
  );
};

export default Warning;
