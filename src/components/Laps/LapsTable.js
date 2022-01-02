import React from "react";
import styled from "styled-components";
import LapsData from "./LapsData";

const Table = styled.table`
    text-align: center;
    width: 100%
`;


const TableHeader = styled.tr`
    border: 5px solid #fff;
    
    & th {
        font-weight: 800;
        border-bottom: 1px solid #fff;
    }
`;

function LapsTable(props) {
    // console.log(props.laps);
    const laps = props.laps.map(lap => {
        return (
            <LapsData key={lap.id} lapItem={lap}></LapsData>
        );
    })

    return (
        <Table>
            <thead>
                <TableHeader name="header">
                    <th>Volta</th>
                    <th>Tempo da volta</th>
                    <th>Tempo geral</th>
                </TableHeader>
            </thead>
            <tbody>
                {laps}
            </tbody>
        </Table >
    );
};

export default LapsTable;