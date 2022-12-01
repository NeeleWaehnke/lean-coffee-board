export default function Form() {
  return (
    <form action="">
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
