import React, { ChangeEvent, memo, useState } from "react";
import "./style.css";

interface Props {
  defaultText: string;
  optionList: string[];
  selectedList: string[];
  onSelectChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

const SelectBox = ({
  optionList,
  defaultText,
  selectedList,
  onSelectChange: handleSelectChange,
  name,
}: Props) => {
  const [showCheckBox, setShowCheckBox] = useState(false);
  return (
    <span className="select-box">
      <span onClick={() => setShowCheckBox((prev) => !prev)}>
        {defaultText}
      </span>
      {showCheckBox && (
        <div className="checkbox-container">
          {optionList.map((value) => (
            <label key={value}>
              <input
                type="checkbox"
                value={value}
                name={name}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  handleSelectChange(e)
                }
                checked={selectedList.includes(value)}
              />
              {value}
            </label>
          ))}
        </div>
      )}
    </span>
  );
};

export default memo(SelectBox);
