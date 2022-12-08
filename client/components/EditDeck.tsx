import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createCardForDeckApi, getDeckApi } from "../api/index";
import { Card } from "./Card";
import { TDeck } from "../src/App";
import { deleteCardApi } from "../api/deleteCardApi";

export const EditDeck = () => {
  const [text, setText] = useState("");
  const [deck, setDeck] = useState<TDeck | null>();
  const [cards, setCards] = useState([]);
  const { id } = useParams();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setText(value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text) return;
    const { data } = await createCardForDeckApi({ text, id });
    setCards(data.deck.cards);
    setText("");
  };

  const getDeck = async () => {
    const {
      data: { deck },
    } = await getDeckApi(id!);
    setDeck(deck);
    setCards(deck.cards);
  };

  const deleteCard = async (index: number) => {
    const {
      data: {
        deck: { cards },
      },
    } = await deleteCardApi({ deckId: id!, index });
    setCards(cards);
  };

  useEffect(() => {
    if (!id) return;
    getDeck();
  }, [id]);

  const showCards = cards.map((card, index) => (
    <Card
      key={index}
      card={card}
      deleteCard={deleteCard}
      deckId={id!}
      index={index}
    />
  ));

  return (
    <div>
      <h2>{deck?.title}</h2>
      <div className="cards">{showCards}</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="card-text">Card text</label>
        <input
          name="text"
          value={text}
          onChange={handleChange}
          type="text"
          id="card-text"
        />
        <button type="submit">Create card</button>
      </form>
    </div>
  );
};
