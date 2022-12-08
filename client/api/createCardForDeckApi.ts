import axios from "axios";
import { URL } from "./config";

type CreateCardForDeckApiProps = {
  text: string;
  id?: string;
};

export const createCardForDeckApi = async ({
  text,
  id,
}: CreateCardForDeckApiProps) => {
  return await axios.post(`${URL}/${id}/cards`, { text });
};
