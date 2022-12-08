import { URL } from "./config";
import axios from "axios";

export const getDeckApi = async (id: string) => {
  return await axios(`${URL}/${id}`);
};
