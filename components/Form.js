import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

export default function Form({ onAddCard }) {
  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const data = {
      topic: form.topic.value,
      author: form.author.value,
    };
    onAddCard(data);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="topic"></label>
      <input
        type="text"
        id="topic"
        name="topic"
        className="topic"
        placeholder="Type your thoughts here ..."
        required
      />
      <label htmlFor="author"></label>
      <input
        type="text"
        id="author"
        name="author"
        placeholder="Your Name"
        className="author"
        required
      />
      <button type="submit">
        <BiPlus />
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  position: relative;
  input {
    border-radius: 5px;
    border-style: none;
    margin: 2px;
    background-color: #edf6f9;
  }
  input:focus {
    outline: 2px #f78e69 solid;
  }
  input.topic {
    width: 60%;
    height: 30px;
  }
  input.author {
    width: 20%;
    height: 30px;
  }
  button {
    border-radius: 20px;
    border: none;
    background-color: #f78e69;
    font-size: 30px;
    padding-top: 6px;
    position: relative;
    top: 7px;
    left: 2px;
    color: white;
  }
`;
