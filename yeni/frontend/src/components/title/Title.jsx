import React from "react";
import "./Title.scss";

const Title = ({ children }) => {
  return (
    <div className="title">
      {children}
      <div className="line"></div>{" "}
    </div>
  );
};

export default Title;
