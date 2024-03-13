import { IPrices } from "./prices.interface";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  width: number;
  height: number;
  type: string;
  color: string;
  category: string;
  photo: string;
  price: string;
  discontinued: boolean;
  prices: IPrices;
}
