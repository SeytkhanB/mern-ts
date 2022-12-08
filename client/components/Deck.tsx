import { BsTrash, BsTrashFill } from "react-icons/bs";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";

type DeckProps = {
  deck: { _id: string; title: string };
  deleteDeck: (id: string) => void;
};

export const Deck = ({ deck, deleteDeck }: DeckProps) => {
  const [isTrashHover, setIsTrashHover] = useState(false);
  const [isEditHover, setIsEditHover] = useState(false);
  const [isDeckHover, setIsDeckHover] = useState(false);

  return (
    <div
      className="deck"
      onMouseEnter={() => setIsDeckHover(true)}
      onMouseLeave={() => setIsDeckHover(false)}
    >
      {isDeckHover && (
        <Link
          to={`/edit/${deck._id}`}
          className="edit-icon"
          onMouseEnter={() => setIsEditHover(true)}
          onMouseLeave={() => setIsEditHover(false)}
        >
          {isEditHover ? <AiFillEdit /> : <AiOutlineEdit />}
        </Link>
      )}
      {deck.title}

      {isDeckHover && (
        <i
          className="trash-icon"
          onClick={() => deleteDeck(deck._id)}
          onMouseEnter={() => setIsTrashHover(true)}
          onMouseLeave={() => setIsTrashHover(false)}
        >
          {isTrashHover ? <BsTrashFill /> : <BsTrash />}
        </i>
      )}
    </div>
  );
};
