import React from "react";
import styled from "styled-components";
import LapsData from "./LapsData";

const Table = styled.table`
    width: 100%;
    text-align: center;
`;

const TableHeader = styled.tr`
    vertical-align: middle;
`;

const TableHead = styled.thead`
    position: sticky;
    top: 0;
    background-color: #000;
    height: 40px;

    & th {
        position: sticky;
        top: 0;
    }

`;

const TableBody = styled.tbody`
    background-color: #1d1d1d;
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