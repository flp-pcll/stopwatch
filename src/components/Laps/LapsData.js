import React from "react";
import styled from "styled-components";

const LapsRow = styled.tr`
`;


function LapsData(props) {
    return(
        <LapsRow id={props.lapItem.id}>
            <td name="numero da volta"> {props.lapItem.id} </td>
            <td name="tempo da volta"> {props.lapItem.lapTotalTime}</td>
            <td name="tempo total"> {props.lapItem.timerTotalTime} </td>
        </LapsRow>
    );
};

export default LapsData;