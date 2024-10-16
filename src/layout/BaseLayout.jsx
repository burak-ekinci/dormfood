import React from "react";
import Navbar from "../components/Navbar";

const BaseLayout = ({ props }) => {
  return (
    <>
      <Navbar />
      <div className="text-center">
        <i>
          Aşağıya her yemeğe bir like/unlike butonu koydum yemeği yiyen oylasın
          ona göre yemeğe gelmim yaw. (meymun opsiyonel)
        </i>
      </div>
      {/* <div className="container text-center d-flex justify-content-center align-items-center">
        <div>
          <h2>Çalışma var!</h2>
        </div>
        <div>
          <img
            src="https://www.ilgitrafik.com/image/cache/catalog/tehlike-uyari-levhalari/yolda-calisma-var-levhasi-t-15-tehlike-uyari-levhasi-yol-trafik-tabelasi-40-cm-60-cm-75-cm-90-cm-normal-performans-yuksek-performans-levha-fiyati-imalati-uretimi-ankara-ilgi-trafik-700x700.jpg"
            width={100}
          />
        </div>
      </div>
      <div className="m-1 text-center">
        <img className="img-fluid w-100 " src="/public/monkey.gif" alt="" />
      </div>
      <div className="container mt-3 fs-5">
        <i>
          {" "}
          <strong>
            Geliştiricilerimiz hızla kykyemek'i sunmak için çalışıyor...
            Beklemede kalın!
          </strong>{" "}
        </i>
      </div> */}

      <div className="">{props}</div>

      <div className="container text-center">
        <h4>Otobüs Saatleri</h4>
        <hr />
        <div className="row justi align-items-center mb-5">
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <img
              className="img-fluid border border-3 border-warning rounded-4 "
              src="/bus.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <img
              className="mt-2 img-fluid border border-3 border-warning rounded-4 "
              src="/bus1.jpg  "
              alt=""
            />
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 p-2">
            <img
              className="mt-2 img-fluid border border-3 border-warning rounded-4 "
              src="/bus2.jpg  "
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BaseLayout;
