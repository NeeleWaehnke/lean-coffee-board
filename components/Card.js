export default function Card({ author, topic }) {
  return (
    <section>
      <h3>{topic}</h3>
      <p>{author}</p>
    </section>
  );
}
