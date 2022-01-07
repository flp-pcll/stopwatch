import React from "react";
import styled from "styled-components";

const LapsRow = styled.tr`
    td {
        line-height: 2;

        & span {
            line-height: 2;
            vertical-align: sub;
        }
    }


`;


function LapsData(props) {
    const { lapStartime, timerTotalTime } = props.lapItem;

    const lapResults = {
        minutes: timerTotalTime.minutes - lapStartime.minutes,
        seconds: timerTotalTime.seconds - lapStartime.seconds,
        centiseconds: timerTotalTime.centiseconds > lapStartime.centiseconds ? timerTotalTime.centiseconds - lapStartime.centiseconds : lapStartime.centiseconds - timerTotalTime.centiseconds
    };

    return (
        <LapsRow id={props.id}>
            <td name="numero da volta"> 
                <span>{String(props.id + 1).padStart(2, "0")}</span> 
            </td>
            <td name="tempo da volta">
                <span>{String(lapResults.minutes).padStart(2, "0")}</span>
                <span>:</span>
                <span>{String(lapResults.seconds).padStart(2, "0")}</span>
                <span>.</span>
                <span>{String(lapResults.centiseconds).padStart(2, "0")}</span>
            </td>
            <td name="tempo total">
                <span>{String(props.lapItem.timerTotalTime.minutes).padStart(2, "0")}</span>
                <span>:</span>
                <span>{String(props.lapItem.timerTotalTime.seconds).padStart(2, "0")}</span>
                <span>.</span>
                <span>{String(props.lapItem.timerTotalTime.centiseconds).padStart(2, "0")}</span>
            </td>
        </LapsRow>
    );
};

export default LapsData;