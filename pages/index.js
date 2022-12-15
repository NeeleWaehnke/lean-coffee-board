import Header from "../components/Header";
import CardList from "../components/Card-List";
import Form from "../components/Form";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  async function handleAddCard(newCard) {
    await fetch("/api/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCard),
    });
    getNotes();
  }
  async function handleRemoveCard(id) {
    await fetch("/api/questions/" + id, {
      method: "DELETE",
    });
    getNotes();
  }

  async function handleEditCard(editCard) {
    await fetch("/api/questions/" + editCard.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editCard),
    });
    getNotes();
  }

  async function getNotes() {
    const response = await fetch("/api/questions");
    const questionList = await response.json();
    setCards(questionList);
  }
  useEffect(() => {
    getNotes();
  }, []);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     getNotes();
  //   }, 20000000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <>
      <Header />
      <CardList
        cards={cards}
        onRemoveCard={handleRemoveCard}
        onEditCard={handleEditCard}
      />
      <Form onAddCard={handleAddCard} />
    </>
  );
}
