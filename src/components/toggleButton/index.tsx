import React from "react";
import "./style.css";

const ToggleButton = () => {
  return (
    <div className="switch-container">
      <div className="switch">
        <input type="checkbox" id="switch" />
        <span className="slider round"></span>
      </div>
      <label htmlFor="switch">상담 중인 요청만 보기</label>
    </div>
  );
};

export default ToggleButton;
