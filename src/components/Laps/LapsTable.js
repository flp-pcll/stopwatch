import React from "react";
import styled from "styled-components";
import LapsData from "./LapsData";

const Table = styled.table`
    text-align: center;
    width: 500px;
    
    & thead {
        width: 100%
    }

    & tbody {
        background-color: magenta;
        background-color: #141414;
    }
`;


const TableHeader = styled.tr`
    border: none;
    
    & th {
        font-weight: 800;
        border-bottom: 1px solid #fff;
    }
`;

function LapsTable(props) {

    const laps = props.lapsList.map((lap, index) => {
        return (
            <LapsData key={index} id={index} lapItem={lap}></LapsData>
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