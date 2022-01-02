import React from "react";
import styled from "styled-components";
import Controls from "./Controls";
import StopWatch from "./StopWatch";

const TimerData = styled.main``;

/*This component holds the logic*/

function TimerDataControl() {
    return (
        <TimerData>
            <StopWatch /> {/*tem que receber um objto timer como prop;*/}
            <Controls />
        </TimerData>
    );
};

export default TimerDataControl;

