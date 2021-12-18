import React, { ChangeEvent, useEffect, useState } from "react";
import { getRequstData } from "src/api/request/request";
import SelectBox from "src/components/selectBox";
import ToggleButton from "src/components/toggleButton";
import {
  METHODS,
  MATERIALS,
  MethodsType,
  MaterialsType,
  STATUS,
} from "src/constant";
import type { RequestDataType } from "src/type/request";
import Card from "./components/card";
import "./style.css";
import { isIncludes } from "./utils/filter";

const methodList = [METHODS.BOIL, METHODS.STEAM];
const materialList = [
  MATERIALS.ALCOHOL,
  MATERIALS.HERB,
  MATERIALS.HYDROGEN,
  MATERIALS.VITAMIN,
  MATERIALS.MINT,
];

export interface FileterListType {
  material: MaterialsType[];
  method: MethodsType[];
}

const RequestPage = () => {
  const [requestData] = useState(() => getRequstData());
  const [filteredData, setFilterdData] = useState<RequestDataType[]>([]);
  const [isActive, setIsActive] = useState(false);
  const [selectList, setSelectList] = useState<FileterListType>({
    material: [],
    method: [],
  });

  const handleSelectChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked } = e.target as {
      name: keyof FileterListType;
      value: MaterialsType | MethodsType;
      checked: boolean;
    };

    setSelectList((prev) => {
      const previousList = prev[name] as (MaterialsType | MethodsType)[];
      const filteredList = previousList.filter((item) => item !== value);
      const modifiedList = checked ? [...prev[name], value] : filteredList;
      return {
        ...prev,
        [name]: modifiedList,
      };
    });
  };

  const resetFilter = () => {
    setSelectList({ material: [], method: [] });
  };

  const handleToggleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setIsActive(checked);
  };

  // filter list
  useEffect(() => {
    setFilterdData(() => {
      let filterredList = [...requestData];

      const hasNothingtoFilter = (bool: boolean, cb: any) => {
        return bool ? cb() : true;
      };
      if (selectList.material.length > 0 || selectList.method.length > 0) {
        filterredList = filterredList.filter(
          (item) =>
            hasNothingtoFilter(!!selectList.material.length, () =>
              isIncludes(item.material, selectList.material)
            ) &&
            hasNothingtoFilter(!!selectList.method.length, () =>
              isIncludes(item.method, selectList.method)
            )
        );
      }

      if (isActive) {
        filterredList = filterredList.filter(
          (item) => item.status === STATUS.ACTIVE
        );
      }
      return filterredList;
    });
  }, [isActive, selectList.method, selectList.material]);

  return (
    <>
      <h1>들어온 요청</h1>
      <p>파트너님에게 딱 맞는 요청서를 찾아보세요.</p>

      <div className="filter-section">
        <SelectBox
          defaultText="Method"
          optionList={methodList}
          selectedList={selectList.method}
          onSelectChange={handleSelectChange}
          name="method"
        />
        <SelectBox
          defaultText="material"
          optionList={materialList}
          selectedList={selectList.material}
          onSelectChange={handleSelectChange}
          name="material"
        />
        <button onClick={resetFilter}>reset filter</button>
        <ToggleButton onToggleChange={handleToggleChange} />
      </div>

      <section className="request-content">
        {filteredData.length > 0 ? (
          filteredData.map((item) => {
            return <Card cardData={item} key={item.id} />;
          })
        ) : (
          <div>데이터가 없습니다</div>
        )}
      </section>
    </>
  );
};

export default RequestPage;
