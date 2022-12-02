import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";

export default function Card({ author, topic, onRemoveCard, id, onEditCard }) {
  const [edit, setEdit] = useState(false);

  function handleSubmitEdit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const editData = {
      topic: form.topic.value,
      author: form.author.value,
      id: id,
    };
    onEditCard(editData);
    setEdit(false);
  }

  return (
    <StyledCard>
      {edit === true ? (
        <form onSubmit={handleSubmitEdit}>
          <label htmlFor="topic"></label>
          <input
            type="text"
            id="topic"
            name="topic"
            className="topic"
            placeholder={topic}
            required
          />
          <label htmlFor="author"></label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder={author}
            className="author"
            required
          />
          <button className="edit-save" type="submit">
            <BiCheck />
          </button>
        </form>
      ) : (
        <>
          <h3>{topic}</h3>
          <p>{author}</p>
          <button
            className="delete"
            onClick={() => {
              onRemoveCard(id);
            }}
          >
            <BiTrash />
          </button>
          <button
            className="edit"
            onClick={() => {
              setEdit(true);
            }}
          >
            <BiPencil />
          </button>
        </>
      )}
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
  grid-template-rows: 1fr 1fr auto;
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
  .edit {
    grid-row-start: 1;
  }
  p {
    grid-column-start: 1;
    grid-row-start: 2;
  }
`;
