# react-hooks-todo-app
dead-simple React16.8.x todo app using hooks


## Feature-set

| <h3>Feature</h3>      | <h3>Notes</h3>                        | <h3>Status</h3> |
| :-------------------- | :------------------------------------ | :-------------- |
| **React**             | 16.8.6                                | ***√***         |
| **Styled-Components** | uses <ThemeProvider>                  | ***√***         |
| **Parcel**            | 1.12.3                                | ***√***         |
| **CSS-Grid**          | (fully responsive w/o media queries ) | ***√***         |

(prettier, eslint-recommended, jsx-a11y plugin)



## Responsiveness using CSS Grid and no media queries
![Early version working on phones and tablets without break-points](https://github.com/beauhaus/react-hooks-todo-app/blob/master/readmeRefImg/goodKarmaSrn1.jpg?raw=true "without breakpoints")

## styles.css is removed entirely using styled-components 
https://www.styled-components.com/docs/api#createglobalstyle

```(javascript)

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #333;
  }
  html {
    font-size: 62.5%;
  }
  body {
    margin: 0;
    font-size: 1.6rem;  
  }
`;
```

