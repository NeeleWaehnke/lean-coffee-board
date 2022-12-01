import Header from "../components/Header";
import CardList from "../components/Card-List";
import Form from "../components/Form";
import { useState } from "react";

export default function HomePage() {
  const [cards, setCards] = useState();
  function handleAddCard(newCard) {
    setCards([...newCard, ...cards]);
  }

  return (
    <>
      <Header />
      <CardList />
      <Form onAddCard={handleAddCard} />
    </>
  );
}
