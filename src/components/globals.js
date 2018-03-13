import { injectGlobal } from "emotion"
import { PRIMARY_TEXT, SECONDARY_TEXT, NICER_BLUE } from "./constants"

injectGlobal`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-size: 18px;
    font-family: Calibre, Roboto, sans-serif;
    color: ${SECONDARY_TEXT};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
    font-family: Calibre, Roboto, sans-serif;
  }

  h1 {
    font-size: 3.765rem;
  }

  h2 {
    font-size: 48px;
    color: red;
  }

  h3 {
    font-size: 1.75rem;
    font-weight: 600;
  }

  h4 {
    font-size: 1.5rem;
    line-height: 1.7rem;
  }

  h5 {
    font-size: 1rem;
  }

  h6 {
    font-size: .9rem;
  }

  p,
  span {
    margin: 0;
    color: ${SECONDARY_TEXT};
  }
`
