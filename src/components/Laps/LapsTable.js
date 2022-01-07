import React from "react";
import styled from "styled-components";
import LapsData from "./LapsData";

const Table = styled.table`
    width: 100%;
    text-align: center;

`;

const TableHeader = styled.tr`
    position: relative;
    border: 1px solid white;

     & :before {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 2px;
        background-color: orange;
        z-index: 3000;
    }

`;

const TableHead = styled.thead`
    position: sticky;
    top: 0;
    background-color: #000;

    & th {
        position: sticky;
        top: 0;
        border-bottom: 1px solid white;
    }

`;

const TableBody = styled.tbody`

`;

function LapsTable(props) {

    const laps = props.lapsList.map((lap, index) => {
        return (
            <LapsData key={index} id={index} lapItem={lap}></LapsData>
        );
    })

    return (
        <Table>
            <TableHead>
                <TableHeader name="header">
                    <th>Volta</th>
                    <th>Tempo da volta</th>
                    <th>Tempo geral</th>
                </TableHeader>
            </TableHead>
            <TableBody>
                {laps}
            </TableBody>
        </Table >
    );
};

export default LapsTable;