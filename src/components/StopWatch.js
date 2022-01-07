import React from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
    font-size: 4rem;
    line-height: 2;
    height: 100px;

    & span {
        display: inline;
        vertical-align: top;
    }
`;

function StopWatch(props) {
    return(
        <TimerContainer>
            <span id="minutes">{String(props.timer.minutes).padStart(2, "0")}</span>
            <span>:</span>
            <span id="seconds">{String(props.timer.seconds).padStart(2, "0")}</span>
            <span>.</span>
            <span id="centiseconds">{String(props.timer.centiseconds).padStart(2, "0")}</span>
        </TimerContainer>
    );
};

export default StopWatch;