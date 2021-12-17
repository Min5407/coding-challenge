import React from "react";
import { getRequstData } from "src/api/request/request";
import SelectBox from "src/components/selectBox";
import ToggleButton from "src/components/toggleButton";
import { METHODS, MATERIALS } from "src/constant";
import Card from "./components/card";
import "./style.css";

const methodList = [METHODS.BOIL, METHODS.STEAM];
const materialList = [
  MATERIALS.ALCOHOL,
  MATERIALS.HERB,
  MATERIALS.HYDROGEN,
  MATERIALS.VITAMIN,
  MATERIALS.MINT,
];

const RequestPage = () => {
  const data = getRequstData();

  return (
    <>
      <h1>들어온 요청</h1>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>

      <div className="filter-section">
        <SelectBox defaultText="Method" optionList={methodList} />
        <SelectBox defaultText="material" optionList={methodList} />
        <ToggleButton />
      </div>

      <section className="request-content">
        <Card cardData={data[0]} />
      </section>
    </>
  );
};

export default RequestPage;
