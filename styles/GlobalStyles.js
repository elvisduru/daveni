import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }  

  * {
      box-sizing: border-box;
    }

  ::-moz-selection { background: #f1ab41; }
  ::selection { background: #f1ab41; }


  @supports (-webkit-text-stroke: 1px black) {
    h2.display span:last-child {
      -webkit-text-stroke: 2px white;
      -webkit-text-fill-color: transparent;
      paint-order: stroke fill;
      margin-bottom: 1.25rem;
      font-weight: 900;
      font-size: 7rem;
      line-height: 1;
      text-transform: uppercase;
      letter-spacing: 30px;
    }

    @media (max-width: 500px) {
      h2.display span:last-child {
        font-size: 3rem;
        letter-spacing: 0.75rem;
      }
    }
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    -webkit-tap-highlight-color: ${theme`colors.purple.500`};
    ${tw`antialiased`}
    width: 100vw;
  }

  .active {
    border-bottom: 2px solid white;
  }

  .star {display:inline-block;background-size: contain;max-width: 256px;max-height: 256px;background-image: url(data:image/svg+xml;base64,PHN2ZyBpZD0iY29sb3IiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDI0IDI0IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yMy4zNjMgOC41ODQtNy4zNzgtMS4xMjctMy4zMDctNy4wNDRjLS4yNDctLjUyNi0xLjExLS41MjYtMS4zNTcgMGwtMy4zMDYgNy4wNDQtNy4zNzggMS4xMjdjLS42MDYuMDkzLS44NDguODMtLjQyMyAxLjI2NWw1LjM2IDUuNDk0LTEuMjY3IDcuNzY3Yy0uMTAxLjYxNy41NTggMS4wOCAxLjEwMy43NzdsNi41OS0zLjY0MiA2LjU5IDMuNjQzYy41NC4zIDEuMjA1LS4xNTQgMS4xMDMtLjc3N2wtMS4yNjctNy43NjcgNS4zNi01LjQ5NGMuNDI1LS40MzYuMTgyLTEuMTczLS40MjMtMS4yNjZ6IiBmaWxsPSIjZmZjMTA3Ii8+PC9zdmc+);background-repeat: no-repeat}
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
