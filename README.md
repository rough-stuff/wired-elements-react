# wired-elements-react
React wrappers for [wired-elements](https://wiredjs.com). Wired Elements is a series of basic UI Elements that have a hand drawn look. These can be used for wireframes, mockups, or just the fun hand-drawn look. 

Wired Elements ([github](https://github.com/rough-stuff/wired-elements)) are implemented as web components. Though you can use these Web Components directly in React (like, [here](https://codesandbox.io/s/xrll5wyl8w)), and in any framework; React's design make them a bit non-trivial to use at times. ([More here](https://custom-elements-everywhere.com/#react)).

This project wraps the web components in React components to make them easy to use. This is done via [@lit-labs/react](https://github.com/lit/lit/tree/main/packages/labs/react) made by [Lit](https://lit.dev/).

## Usage: 

Add to your project:
```
npm i wired-elements-react
```

And use then in your JSX:
```javascript
import { WiredButton, WiredInput, WiredCard } from "wired-elements-react";

function App() {
  let textInput = React.createRef();

  function handleClick() {
    window.alert(`Hello ${textInput.current.value}!`);
  }

  return (
    <WiredCard elevation="5">
      <h1>wired-elements demo</h1>
      <section>
        <WiredInput placeholder="your name" />
        <WiredButton elevation={2} onClick={handleClick}>
          Submit
        </WiredButton>
      </section>
    </WiredCard>
  );
}
```

## Example
Here's a basic example on CodeSandbox: [Open sandbox](https://codesandbox.io/s/react-wrapper-for-wired-elements-vid1j?file=/src/index.js)

## Documentation

Documentation on individual component can be [found here](https://github.com/rough-stuff/wired-elements/tree/master/docs).

## License
[MIT License](https://github.com/rough-stuff/wired-elements/blob/master/LICENSE) (c) [Preet Shihn](https://twitter.com/preetster)

## Support Rough Stuff

Become a financial contributor and help us maintain the Rough libraries like this one. [Open Collective](https://opencollective.com/rough) or [Github Sponsor](https://github.com/sponsors/pshihn)
