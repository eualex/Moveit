import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --white: #fff;
    --background: #f2f3f5;
    --gray-line: #DCDDE0;
    --text: #666666;
    --text-highlight: #b3b9ff;
    --title: #2e384d;
    --red: #e83f5b;
    --green: #4cd62b;
    --blue: #5965E0;
    --blue-dark: #4953b8;
    --blue-twitter: #2aa9e0;
  }

  body {
    width: 100%;
    height: 100%;

    background-color: var(--background);
    color: var(--text);

    font-size: 1.6rem;

    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font: 400 1.6rem 'Inter', sans-serif;
  }

  button {
    cursor: pointer;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  html {
    font-size: 62.5%;
  }

  @media(max-width: 720px) {
    html {
      font-size: 50%;
    }
  }
`

export default GlobalStyles
