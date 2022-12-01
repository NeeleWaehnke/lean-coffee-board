import Card from "./Card";
import { Fragment } from "react";

export default function CardList({ cards }) {
  return (
    <>
      {cards.map((card) => {
        return (
          <Fragment key={card.topic}>
            <Card topic={card.topic} author={card.author} />
          </Fragment>
        );
      })}
    </>
  );
}
