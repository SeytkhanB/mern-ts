import axios from "axios";
import { URL } from "./config";

type DeleteCardApiProps = {
  deckId: string;
  index: number;
};

export const deleteCardApi = async ({ deckId, index }: DeleteCardApiProps) => {
  return await axios.delete(`${URL}/deleteCard/${deckId}/${index}`);
};
