import styled from "styled-components";

export default function Card({ author, topic }) {
  return (
    <StyledCard>
      <h3>{topic}</h3>
      <p>{author}</p>
    </StyledCard>
  );
}

const StyledCard = styled.section`
  border-radius: 5px;
  padding: 5px;
  margin: 2em;
  background-color: #d1d2f9;
  text-align: start;
`;
