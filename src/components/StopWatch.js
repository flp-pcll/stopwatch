import React from "react";
import styled from "styled-components";

const TimerContainer = styled.div`
    font-size: 4rem;
`;


function StopWatch(props) {
    // console.log(props.timer);
    return(
        <TimerContainer>
            <span id="minutes">{String(props.timer.minutes).padStart(2, "0")}</span>
            :
            <span id="seconds">{String(props.timer.seconds).padStart(2, "0")}</span>
            .
            <span id="centiseconds">{String(props.timer.centiseconds).padStart(2, "0")}</span>
        </TimerContainer>
    );
};

export default StopWatch;