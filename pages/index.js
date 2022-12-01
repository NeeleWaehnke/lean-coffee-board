import Header from "../components/Header";
import CardList from "../components/Card-List";
import Form from "../components/Form";
import { useState } from "react";
import styled from "styled-components";

export default function HomePage() {
  const [cards, setCards] = useState([]);
  function handleAddCard(newCard) {
    setCards([{ topic, author, ...newCard }, ...cards]);
    console.log(cards);
  }

  return (
    <>
      <Header />
      <CardList cards={cards} />
      <Form onAddCard={handleAddCard} />
    </>
  );
}

const StyledMain = styled.main`
  background-color: #a3bcf9;
`;
