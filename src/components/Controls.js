import React from "react";
import Button from "./UI/Button";
import styled from "styled-components";

const ControlsList = styled.ul`
    display: flex;
    align-content: center;
    justify-content: space-between;
    width: 50%;

    & li{
        width: 120px;
        height: 40px;
    }
`;

function Controls(props) {
    return(
        <ControlsList>
            <li>
                <Button start type="button" name="start timer" onClick={props.onStart}>Iniciar</Button>
            </li>
            <li>
                <Button pause type="button" name="pause timer" onClick={props.onPause}>Parar</Button>
            </li>
            <li>
                <Button lap type="button" name="add lap" onClick={props.onAddLap}>Volta</Button>
            </li>
            <li>
                <Button reset type="button" name="reset timer" onClick={props.onReset}>Restaurar</Button>
            </li>
        </ControlsList>
    );
};

export default Controls;