//import { useState } from "react";

export default function Form({ onAddCard }) {
  //   const [text, setText] = useState("");
  //   const [author, setAuthor] = useState("");

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
    <form onSubmit={handleSubmit}>
      <label htmlFor="topic"></label>
      <input
        type="text"
        id="topic"
        name="topic"
        placeholder="Type your thoughts here ..."
        required
      />
      <label htmlFor="author"></label>
      <input
        type="text"
        id="author"
        name="author"
        placeholder="Your Name"
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
}
