# Good Karma: *A React to-do App using Hooks*
Basic React16.8.x todo app using hooks

No Media queries! (responsive–even in landscape modes)

No css file! (using createGlobalStyle from Styled-Components API)

Looks sharp on Chrome, Safari & Mozilla

## Feature-set

| <h3>Feature</h3>      | <h3>Notes</h3>                         | <h3>Status</h3> |
| :-------------------- | :------------------------------------- | :-------------- |
| **React**             | 16.8.6                                 | ***√***         |
| **Styled-Components** | uses <ThemeProvider>                   | ***√***         |
| **Parcel**            | 1.12.3                                 | ***√***         |
| **CSS-Grid**          | (fully responsive w/o media queries )  | ***√***         |
| **CSS-Animations**    | cubic-bezier animation timing function | ***√***         |

*(prettier, eslint-recommended, jsx-a11y plugin)*

## Media queryless responsiveness
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

### Attribution

Andy Bell was the inspiration behind the layout idea and I'm very grateful.
https://twitter.com/andybelldesign

Andrew Faulkner's interesting codepen was the inspiration behind the hover buttons
https://codepen.io/andrewfaulkner/pen/tcvJz

Traversy Media's basic intro to hooks inspired the structure of the code.
https://www.youtube.com/watch?v=mxK8b99iJTg

Max Stoiber, co-creator of styled-components, is super-human & a nice person.
https://mxstbr.com/

