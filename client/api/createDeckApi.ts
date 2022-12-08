import axios from "axios";
import { URL } from "./config";

type CreateDeckApiProps = {
  titleState: string;
};

export const createDeckApi = async ({ titleState }: CreateDeckApiProps) => {
  return await axios.post(URL, { title: titleState });
};
