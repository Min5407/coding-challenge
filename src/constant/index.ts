type Types<T> = T[keyof T];

export const METHODS = {
  BOIL: "boil",
  STEAM: "steam",
} as const;

export type MethodsType = Types<typeof METHODS>;

export const MATERIALS = {
  HYDROGEN: "hydrogen",
  ALCOHOL: "alcohol",
  HERB: "herb",
  MINT: "mint",
  VITAMIN: "vitamin",
} as const;

export type MaterialsType = Types<typeof MATERIALS>;

export const STATUS = {
  PENDING: "pending",
  ACTIVE: "active",
} as const;
export type StatusType = Types<typeof STATUS>;
