import React from "react";
import styled from "styled-components";

const LapsRow = styled.tr`
    border-top: .5px solid white;

    td {
        line-height: 2;

        & span {
            vertical-align: middle;
        }
    }


`;


function LapsData(props) {
    const {lapStartime, timerTotalTime} = props.lapItem;

    const lapResults = {
        minutes: timerTotalTime.minutes - lapStartime.minutes,
        seconds: timerTotalTime.seconds - lapStartime.seconds,
        centiseconds: timerTotalTime.centiseconds > lapStartime.centiseconds ? timerTotalTime.centiseconds - lapStartime.centiseconds : lapStartime.centiseconds - timerTotalTime.centiseconds
    };

    return(
        <LapsRow id={props.id}>
            <td name="numero da volta"> {String(props.id + 1).padStart(2, "0")} </td>
            <td name="tempo da volta"><span>{String(lapResults.minutes).padStart(2, "0")}</span>:<span>{String(lapResults.seconds).padStart(2, "0")}</span>.<span>{String(lapResults.centiseconds).padStart(2, "0")}</span></td>
            <td name="tempo total"> <span>{String(props.lapItem.timerTotalTime.minutes).padStart(2, "0")}</span>:<span>{String(props.lapItem.timerTotalTime.seconds).padStart(2, "0")}</span>.<span>{String(props.lapItem.timerTotalTime.centiseconds).padStart(2, "0")}</span></td>
        </LapsRow>
    );
};

export default LapsData;