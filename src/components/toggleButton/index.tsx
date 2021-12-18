import React, { ChangeEvent } from "react";
import "./style.css";

interface Props {
  onToggleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ToggleButton = ({ onToggleChange: handleToggleChange }: Props) => {
  return (
    <div className="switch-container">
      <div
        className="switch"
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleToggleChange(e)}
      >
        <input type="checkbox" id="switch" />
        <span className="slider round"></span>
      </div>
      <label htmlFor="switch">상담 중인 요청만 보기</label>
    </div>
  );
};

export default ToggleButton;
