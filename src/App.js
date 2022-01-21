import React, { useState, useCallback } from "react";
import './App.css';
import Message, { Message1, Message2, Message3, Toggle, UpdateUseState, UpdateUseState1, UpdateUseState2 } from "./ArticleUseState/Message";
import FirstExample from "./ShollowCopyvsDeepCopy/FirstExample";
import StyledButton, { FancyButton } from "./Styled-codeEvolution/Button/Button";
// import Hello from './W3Schools/CallbackHook/Hello';

function App() {
  // const [count, setCount] = useState(0);
  // const increment = useCallback(() => {
  //   setCount(c => c + 1);
  // }, [setCount])
  return (
    <div className="App">
      {/* <Hello increment={increment} />
      <div>Count:{count}</div> */}

      {/* <StyledButton>Styled button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant="outline">Styled button</StyledButton>
      <div>
        <br />
      </div>
      <FancyButton as="a">Fancy button</FancyButton> */}
      {/* <Message /> */}
      {/* <Message1 /> */}
      {/* <Message2 /> */}
      {/* <Message3 /> */}
      {/* <FirstExample /> */}
      <Toggle />
      {/* <UpdateUseState /> */}
      {/* <UpdateUseState1 /> */}
      <UpdateUseState2 />
    </div>
  );
}

export default App;
