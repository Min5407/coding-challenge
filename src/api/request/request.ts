import data from "./requests.json";
import type { RequestResponseType } from "src/type/request";

export const getRequstData = () => {
  const { requests } = data as RequestResponseType;

  // return new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve(requests);
  //   }, 300);
  // });
  return requests;
};
