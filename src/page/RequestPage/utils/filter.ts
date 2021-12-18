export const isIncludes = (dataList: any[], filteringList: any[]) =>
  dataList.some((item) => filteringList.includes(item));
