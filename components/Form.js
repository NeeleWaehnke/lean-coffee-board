import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

export default function Form({ onAddCard }) {
  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.target.elements;
    const data = {
      text: form.text.value,
      name: form.name.value,
    };

    onAddCard(data);
    event.target.reset();
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="text"></label>
      <input
        type="text"
        id="text"
        name="text"
        className="text"
        placeholder="Type your thoughts here ..."
        required
      />
      <label htmlFor="name"></label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Your Name"
        className="name"
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
  margin-bottom: 2em;
  input {
    border-radius: 5px;
    border-style: none;
    margin: 2px;
    background-color: #edf6f9;
  }
  input:focus {
    outline: 2px #f78e69 solid;
  }
  input.text {
    width: 60%;
    height: 30px;
  }
  input.name {
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
