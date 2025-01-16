import React from "react";
import "./Banner.scss";

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <div className="row">
          <div className="col-lg-4">
            <div className="box-1 box">
              <span>WOMEN'S</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box-2 box">
              <span>ACCESSORIES'S</span>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="box-3 box">
                <span>MEN'S</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
