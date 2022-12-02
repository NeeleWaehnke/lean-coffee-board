import Card from "./Card";
import { Fragment } from "react";

export default function CardList({ cards, onRemoveCard, onEditCard }) {
  return (
    <section>
      {cards.map((card) => {
        return (
          <Fragment key={card.id}>
            <Card
              id={card.id}
              topic={card.topic}
              author={card.author}
              onRemoveCard={onRemoveCard}
              onEditCard={onEditCard}
            />
          </Fragment>
        );
      })}
    </section>
  );
}
