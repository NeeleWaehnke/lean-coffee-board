import styled from "styled-components";
import { BiTrash } from "react-icons/bi";
import { BiPencil } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";
import { useState } from "react";

export default function Card({ name, text, onRemoveCard, id, onEditCard }) {
  const [edit, setEdit] = useState(false);

  function handleSubmitEdit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const editData = {
      text: form.text.value,
      name: form.name.value,
      id: id,
    };
    onEditCard(editData);
    setEdit(false);
  }

  return (
    <StyledCard>
      {edit === true ? (
        <form onSubmit={handleSubmitEdit}>
          <label htmlFor="text"></label>
          <input
            type="text"
            id="text"
            name="text"
            className="text"
            placeholder={text}
            required
          />
          <label htmlFor="name"></label>
          <input
            type="text"
            id="namer"
            name="name"
            placeholder={name}
            className="name"
            required
          />
          <button className="edit-save" type="submit">
            <BiCheck />
          </button>
        </form>
      ) : (
        <>
          <h3>{text}</h3>
          <p>{name}</p>
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
  grid-template-rows: 1fr auto;
  button {
    height: 40px;
    width: 40px;
    font-size: 24px;
    padding: 4px 6px 1px 6px;
    grid-column-start: 2;
    justify-self: end;
    align-self: start;
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
