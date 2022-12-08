import { Ok, NotFound } from "ts-http-status-codes";
import DeckModel from "../models/Deck.js";
import { Request, Response } from "express";

// **************************************************************
const deleteCard = async (req: Request, res: Response) => {
  const {
    params: { deckId, index },
  } = req;

  const deck = await DeckModel.findOne({ _id: deckId });
  if (!deck) {
    return res
      .status(NotFound)
      .json({ success: false, msg: `No deck with id: ${deckId}` });
  }

  deck.cards.splice(parseInt(index), 1);
  await deck.save();

  res.status(Ok).json({ success: true, deck });
};

export { deleteCard };
