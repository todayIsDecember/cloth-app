import { API } from "../../helpers/api";

export const getColors = async (type: string) => {
  const response = await fetch(API.products.getColors, {
    method: "POST",
    body: JSON.stringify({ type }),
  });
  const data = await response.json();
  return data;
};
