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
              text={card.text}
              name={card.name}
              onRemoveCard={onRemoveCard}
              onEditCard={onEditCard}
            />
          </Fragment>
        );
      })}
    </section>
  );
}
