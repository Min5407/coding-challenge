import type { MethodsType, MaterialsType, StatusType } from "src/constant";

export interface RequestDataType {
  id: number;
  title: string;
  client: string;
  date: string;
  count: number;
  price: number;
  method: MethodsType[];
  material: MaterialsType[];
  status: StatusType;
}

export interface RequestResponseType {
  requests: RequestDataType[];
}
