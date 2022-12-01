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
  background-color: #006d77;
  padding: 1em;
`;
