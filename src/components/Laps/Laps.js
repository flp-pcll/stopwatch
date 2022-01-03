import React from "react";
import LapsTable from "./LapsTable";
import styled from "styled-components";

const Section = styled.section`
    height: 50vh;
    overflow: auto;
`;

function Laps({lapsList}) {
    // console.log('Laps:', lapsList)
    return(
        <Section>
            <LapsTable lapsList={lapsList}></LapsTable>
        </Section>
    );
};

export default React.memo(Laps);