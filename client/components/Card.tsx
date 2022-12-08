import { BsTrash, BsTrashFill } from "react-icons/bs";
import { AiFillEdit, AiOutlineEdit } from "react-icons/ai";
import { useState } from "react";
// import { deleteCardApi } from "../api/deleteCardApi";

type DeckProps = {
  card: string;
  index: number;
  deckId: string;
  deleteCard: (index: number) => void;
};

export const Card = ({ card, index, deleteCard }: DeckProps) => {
  const [isTrashHover, setIsTrashHover] = useState(false);
  const [isEditHover, setIsEditHover] = useState(false);
  const [isCardHover, setIsCardHover] = useState(false);

  return (
    <div
      className="card"
      onMouseEnter={() => setIsCardHover(true)}
      onMouseLeave={() => setIsCardHover(false)}
    >
      {isCardHover && (
        <i
          className="edit-icon"
          onMouseEnter={() => setIsEditHover(true)}
          onMouseLeave={() => setIsEditHover(false)}
        >
          {isEditHover ? <AiFillEdit /> : <AiOutlineEdit />}
        </i>
      )}
      {card}
      {isCardHover && (
        <i
          className="trash-icon"
          onClick={() => deleteCard(index)}
          onMouseEnter={() => setIsTrashHover(true)}
          onMouseLeave={() => setIsTrashHover(false)}
        >
          {isTrashHover ? <BsTrashFill /> : <BsTrash />}
        </i>
      )}
    </div>
  );
};
