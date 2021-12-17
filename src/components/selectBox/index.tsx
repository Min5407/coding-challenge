import React, { memo } from "react";
import "./style.css";

interface Props {
  defaultText: string;
  optionList: string[];
}

const SelectBox = ({ optionList, defaultText }: Props) => {
  return (
    <select>
      <option value="">{defaultText}</option>

      {optionList.map((data) => (
        <option value={data} key={data}>
          {data}
        </option>
      ))}
    </select>
  );
};

export default memo(SelectBox);
