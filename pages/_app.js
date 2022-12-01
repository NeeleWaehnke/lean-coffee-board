import { GlobalStyle } from "../styles";
import HomePage from ".";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <HomePage></HomePage>
    </>
  );
}
