import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
    box-sizing: border-box;
}
:root {
  --main-background:  #FEFAE0; // Beige

  /* LOGO COLORS */
  --logo-one: #344E41; // Dark Green Logo
  --logo-two: #A3B18A; // Middle Green Logo

  /* 3 BASIC COLORS */
  --color-one: #606C38; // Green
  --color-two: #DDA15E; // Light Brown
  --color-three: #BC6C25; // Middle Brown
}
body {
  margin: 0;
  padding: 0;
  background: var(--main-background);
  font-family: 'Montserrat', sans-serif;
}

main {
  margin-bottom: 6.2rem;
}

h1, h2, h3 {
  line-height: 1.2;
}

ul,
ol {
  list-style: none;
  padding: 0;
  margin: 0;
}

ul li,
ol li {
  list-style: none;
  padding: 0;
}

button {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

select {
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
}

`;

export default GlobalStyle;
