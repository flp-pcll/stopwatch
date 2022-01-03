import React from "react";
import styled from "styled-components";

const LapsRow = styled.tr`
`;


function LapsData(props) {
    return(
        <LapsRow id={props.id}>
            <td name="numero da volta"> {String(props.id + 1).padStart(2, "0")} </td>
            <td name="tempo da volta">00:00.00</td>
            <td name="tempo total"> <span>{String(props.lapItem.timerTotalTime.minutes).padStart(2, "0")}</span>:<span>{String(props.lapItem.timerTotalTime.seconds).padStart(2, "0")}</span>.<span>{String(props.lapItem.timerTotalTime.centiseconds).padStart(2, "0")}</span></td>
        </LapsRow>
    );
};

export default LapsData;