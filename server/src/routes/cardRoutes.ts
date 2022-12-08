import express from "express";
import { deleteCard } from "../controllers/cardControllers.js";

const router = express.Router();

router.route("/deleteCard/:deckId/:index").delete(deleteCard);

export default router;
