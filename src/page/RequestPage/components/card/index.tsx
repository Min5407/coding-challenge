import React from "react";
import "./style.css";
import { RequestDataType } from "src/type/request";
import { STATUS } from "src/constant";

interface Props {
  cardData: RequestDataType;
}

const Card = ({ cardData }: Props) => {
  return (
    <div className="request-card">
      {cardData.status !== STATUS.ACTIVE && (
        <span className="status">{STATUS.ACTIVE}</span>
      )}
      <b className="client">{cardData.title}</b>
      <span className="client">{cardData.client}</span>
      <span className="date">{cardData.date}</span>
      <div className="desc">
        <span>갯수:</span>
        <span> {cardData.count}</span>
      </div>
      <div className="desc">
        <span>가격:</span>
        <span> {cardData.price}</span>
      </div>
      <div className="desc">
        <span>methods:</span>
        <span>
          {cardData.method.map((item, index) => {
            const text =
              index === cardData.method.length - 1 ? item : item + ", ";
            return text;
          })}
        </span>
      </div>
      <div className="desc">
        <span>materials:</span>
        <span>
          {cardData.material.map((item, index) => {
            const text =
              index === cardData.material.length - 1 ? item : item + ", ";
            return text;
          })}
        </span>
      </div>
      <button>요청 내역 보기</button>
      <button>채팅하기</button>
    </div>
  );
};

export default Card;
