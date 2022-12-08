import {
  BadRequest,
  Created,
  InternalServerError,
  NotFound,
  Ok,
} from "ts-http-status-codes";
import DeckModel from "../models/Deck.js";
import { Request, Response } from "express";

// **************************************************************
const getAllDecks = async (req: Request, res: Response) => {
  const decks = await DeckModel.find({});
  res.status(Ok).json({ success: true, decks });
};

// **************************************************************
const createDeck = async (req: Request, res: Response) => {
  const {
    body: { title },
  } = req;

  // if (!title) {
  //   throw new Error("Please provide title");
  // }

  const newDeck = new DeckModel({
    title,
  });
  await newDeck.save();
  res.status(Created).json({ success: true, newDeck });
};

// **************************************************************
const createCardForDeck = async (req: Request, res: Response) => {
  const {
    params: { id },
    body: { text },
  } = req;

  try {
    if (!id) {
      return res
        .status(BadRequest)
        .json({ success: false, msg: "Please provide decks id" });
    }

    if (!text) {
      return res
        .status(BadRequest)
        .json({ success: false, msg: "Please provide text" });
    }

    const deck = await DeckModel.findOne({ _id: id });

    if (!deck) {
      return res
        .status(NotFound)
        .json({ success: false, msg: `No deck with id: ${id}` });
    }

    deck.cards.push(text);
    await deck.save();
    res.status(Created).json({ success: true, deck });
  } catch (error) {
    return res
      .status(InternalServerError)
      .json({ success: false, msg: "Something went wrong! Please try again" });
  }
};

// **************************************************************
const getDeck = async (req: Request, res: Response) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    res.status(BadRequest).json({ success: false, msg: "Please provide id" });
  }

  const deck = await DeckModel.findOne({ _id: id });

  if (!deck) {
    res
      .status(BadRequest)
      .json({ success: false, msg: `No deck with id: ${id}` });
  }

  res.status(200).json({ success: true, deck });
};

// **************************************************************
const deleteDeck = async (req: Request, res: Response) => {
  const id = req.params.id;

  const deletedDeck = await DeckModel.findOneAndDelete({ _id: id });
  res.status(Ok).json({ success: true, deletedDeck });
};

export { createCardForDeck, getAllDecks, getDeck, createDeck, deleteDeck };
