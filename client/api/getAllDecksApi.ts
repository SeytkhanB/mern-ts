import { URL } from "./config";
import axios from "axios";

export const getAllDecksApi = async () => {
  return await axios(URL);
};
