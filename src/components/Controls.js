import React from "react";
import Button from "./UI/Button";
import styled from "styled-components";

const ControlsList = styled.ul`
    display: flex;
    justify-content: space-around;
    margin: 1rem 0 2rem 0;

    & li{
        width: 120px;
        height: 40px;
    }
`;

function Controls(props) {
    return(
        <ControlsList>
            <li>
                <Button start="true" type="button" name="start timer" onClick={props.onStart}><span style={{verticalAlign: "sub"}}>Iniciar</span></Button>
            </li>
            <li>
                <Button pause="true" type="button" name="pause timer" onClick={props.onPause}><span style={{verticalAlign: "sub"}} >Pausar</span></Button>
            </li>
            <li>
                <Button lap="true" type="button" name="add lap" onClick={props.onAddLap}><span style={{verticalAlign: "sub"}}>Volta</span></Button>
            </li>
            <li>
                <Button reset="true" type="button" name="reset timer" onClick={props.onReset}> <span style={{verticalAlign: "sub"}}>Restaurar</span></Button>
            </li>
        </ControlsList>
    );
};

export default Controls;