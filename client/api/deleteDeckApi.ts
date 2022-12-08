import axios from "axios";
import { URL } from "./config";

type DeleteDeckApiProps = {
  id: string;
};

export const deleteDeckApi = async ({ id }: DeleteDeckApiProps) => {
  await axios.delete(`${URL}/deleteDeck/${id}`);
};
