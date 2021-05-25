import { createGlobalStyle} from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bodyPage.background};
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.font};
    transition: all 0.50s linear;
  }
`;