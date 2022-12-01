import styled from "styled-components";
import { BiTrash } from "react-icons/bi";

export default function Card({ author, topic, onRemoveCard, id }) {
  return (
    <StyledCard>
      <h3>{topic}</h3>
      <p>{author}</p>
      <button
        onClick={() => {
          onRemoveCard(id);
        }}
      >
        <BiTrash />
      </button>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  border-radius: 5px;
  padding: 5px;
  margin: 2em;
  background-color: #edf6f9;
  text-align: start;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-template-rows: 50% 50%;
  button {
    height: 40px;
    width: 40px;
    font-size: 24px;
    padding: 4px 6px 1px 6px;
    grid-column-start: 2;
    justify-self: end;
    align-self: end;
    border: none;
    background-color: transparent;
    grid-row-start: 2;
  }
  p {
    grid-column-start: 1;
    grid-row-start: 2;
  }
`;
