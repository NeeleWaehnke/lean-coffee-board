import styled from "styled-components";

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
      <button type="submit">+</button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  input {
    border-radius: 5px;
    border-style: none;
    margin: 2px;
  }
  input.topic {
    width: 200px;
    height: 30px;
  }
  input.author {
    width: 80px;
    height: 30px;
  }
  button {
    border-radius: 20px;
    height: 30px;
    width: 30px;
    border: 1px solid #7796cb;
    background-color: #d1d2f9;
  }
`;
