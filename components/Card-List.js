import Card from "./Card";
import { Fragment } from "react";

export default function CardList({ cards, onRemoveCard }) {
  return (
    <>
      {cards.map((card) => {
        return (
          <Fragment key={card.id}>
            <Card
              id={card.id}
              topic={card.topic}
              author={card.author}
              onRemoveCard={onRemoveCard}
            />
          </Fragment>
        );
      })}
    </>
  );
}
