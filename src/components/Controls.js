import React from "react";
import Button from "./UI/Button";
import styled from "styled-components";

const ControlsList = styled.ul`
    display: flex;
    align-content: center;
    justify-content: space-between;

    & li{
        width: 120px;
        height: 40px;
    }
`;

function Controls() {
    return(
        <ControlsList>
            <li>
                <Button start type="button" name="start timer">Iniciar</Button>
            </li>
            <li>
                <Button pause type="button" name="pause timer">Parar</Button>
            </li>
            <li>
                <Button lap type="button" name="add lap">Volta</Button>
            </li>
            <li>
                <Button reset type="button" name="reset timer">Restaurar</Button>
            </li>
        </ControlsList>
    );
};

export default Controls;