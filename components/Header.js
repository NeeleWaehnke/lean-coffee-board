import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>Lean Coffee Board</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  text-align: center;
  background-color: #7796cb;
  padding: 1em;
`;
