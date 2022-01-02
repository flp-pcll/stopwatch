import React from "react";
import GlobalStyle from "./assets/styles/GlobalStyles";
import Wrapper from "./components/Layout/Wrapper";
import TimerDataControl from "./components/TimerData";

function App() {
    return (
        <React.Fragment>
            <GlobalStyle />
            <Wrapper>
                <TimerDataControl>
                </TimerDataControl>
            </Wrapper>
        </React.Fragment>
    );
};

export default App;