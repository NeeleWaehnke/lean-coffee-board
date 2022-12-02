import Header from "../components/Header";
import CardList from "../components/Card-List";
import Form from "../components/Form";
import { useState, useEffect } from "react";

export default function HomePage() {
  const [cards, setCards] = useState([]);

  async function handleAddCard(newCard) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCard),
      }
    );
    getNotes();
  }
  async function handleRemoveCard(id) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" + id,
      {
        method: "DELETE",
      }
    );
    getNotes();
  }

  async function handleEditCard(editCard) {
    await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions/" +
        editCard.id,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(editCard),
      }
    );
    getNotes();
  }

  async function getNotes() {
    const response = await fetch(
      "https://lean-coffee-board-api-nextjs.vercel.app/api/questions"
    );
    const questionList = await response.json();
    setCards(questionList);
  }
  useEffect(() => {
    getNotes();
  }, []);

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
