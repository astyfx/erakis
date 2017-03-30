import { injectGlobal, css, keyframes } from 'styled-components'

import normalize from './normalize'
import variables from './variables'

const cubicBezier = 'cubic-bezier(.16, .55, .42, 1)'

const globalStyles = () => injectGlobal`
  ${normalize}

  html {
    height: 100%;
    box-sizing: border-box;
    line-height: 1;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
  }

  body {
    color: ${variables.color.gray9};
    font-family: 'Spoqa Han Sans', "Helvetica Neue", helvetica, Arial, sans-serif;
    letter-spacing: 0;
    position: relative;
    height: 100%;

    background: ${variables.color.gray0};

    text-rendering: optimizeLegibility;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  img {
    vertical-align: middle;
  }

  button, input, optgroup, select, textarea {
    font-family: 'Spoqa Han Sans', "Helvetica Neue", helvetica, Arial, sans-serif;
  }

  ::-webkit-input-placeholder { /* WebKit, Blink, Edge */
    color: #8090b4;
  }

  :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
     color: #8090b4;
     opacity: 1;
  }

  ::-moz-placeholder { /* Mozilla Firefox 19+ */
     color: #8090b4;
     opacity: 1;
  }

  :-ms-input-placeholder { /* Internet Explorer 10-11 */
     color: #8090b4;
  }

  a {
    color: #4184f3;
    &:hover {
      color: #4184f3;
    }
  }

  div#root {
    height: 100%;
  }
`

const clearfix = () => css`
  &::after {
    content: "";
    display: table;
    clear: both;
  }
`

const animationBounceDelay = () => keyframes`
  0%, 80%, 100% {
    transform: scale(0);
  } 40% {
    transform: scale(1.0);
  }
`

const animationScaleY = () => keyframes`
  0% {
    transform: scaleY(0);
    opacity: 0;
  } 100% {
    transform: scaleY(1.0);
    opacity: 1;
  }
`

const animationOpacity = () => keyframes`
  from {
    opacity: 0;
  } to {
    opacity: 1;
  }
`

const animationFadeInOut = () => keyframes`
  0% {
    opacity: 0;
  } 50% {
    opacity: 1;
  } 100% {
    opacity: 0;
  }
`

const animationLoading = () => keyframes`
  from {
    transform: rotate(0deg);
  } to {
    transform: rotate(360deg);
  }
`

export {
  globalStyles,
  normalize,
  clearfix,
  cubicBezier,
  variables,

  // animations
  animationBounceDelay,
  animationScaleY,
  animationOpacity,
  animationFadeInOut,
  animationLoading,
}
