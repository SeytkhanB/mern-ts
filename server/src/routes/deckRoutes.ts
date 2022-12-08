import express from "express";
import {
  getAllDecks,
  createCardForDeck,
  getDeck,
  createDeck,
  deleteDeck,
} from "../controllers/deckControllers.js";

const router = express.Router();

router.route("/").get(getAllDecks).post(createDeck);
router.route("/deleteDeck/:id").delete(deleteDeck);
router.route("/:id/cards").post(createCardForDeck);
router.route("/:id").get(getDeck);

export default router;
