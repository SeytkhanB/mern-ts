import { useEffect, useState } from "react";
import { Deck } from "../components/Deck";
import { createDeckApi, deleteDeckApi, getAllDecksApi } from "../api/index";

export type TDeck = {
  _id: string;
  title: string;
  cards: string[];
};

function App() {
  const [decksState, setDecksState] = useState<TDeck[]>([]);
  const [titleState, setTitleState] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTitleState(value);
  };

  const deleteDeck = async (id: string) => {
    deleteDeckApi({ id });
    setDecksState(decksState.filter((deck) => deck._id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!titleState) return;
    try {
      const { data } = await createDeckApi({ titleState });
      setTitleState("");
      setDecksState([...decksState, data.newDeck]);
    } catch (error) {
      console.log("error while submitting form and error is: ", error);
    }
  };

  const getAllDecks = async () => {
    try {
      const { data } = await getAllDecksApi();
      setDecksState(data.decks);
    } catch (error) {
      console.log("error while getting decks and error is: ", error);
    }
  };

  useEffect(() => {
    getAllDecks();
  }, []);

  const decks = decksState.map((deck) => (
    <Deck deleteDeck={deleteDeck} key={deck._id} deck={deck} />
  ));

  return (
    <div>
      <h2>DECKS</h2>
      <div className="decks">{decks}</div>

      <form onSubmit={handleSubmit}>
        <label htmlFor="deck-title">Deck title</label>
        <input
          name="title"
          value={titleState}
          onChange={handleChange}
          type="text"
          id="deck-title"
        />
        <button type="submit">Create deck</button>
      </form>
    </div>
  );
}

export default App;
