import Header from "../components/Header";
import CardList from "../components/Card-List";
import Form from "../components/Form";
import { useState } from "react";
import { nanoid } from "nanoid";

export default function HomePage() {
  const [cards, setCards] = useState([]);
  function handleAddCard(newCard) {
    setCards([{ topic, author, id: nanoid(), ...newCard }, ...cards]);
    console.log(cards);
  }
  function handleRemoveCard(id) {
    setCards(cards.filter((card) => card.id !== id));
  }

  return (
    <>
      <Header />
      <CardList cards={cards} onRemoveCard={handleRemoveCard} />
      <Form onAddCard={handleAddCard} />
    </>
  );
}
