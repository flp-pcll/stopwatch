import React from "react";
import LapsTable from "./LapsTable";
import styled from "styled-components";

const Section = styled.section``;

function Laps({lapsList}) {
    console.log('passei via prop', lapsList);
    return(
        <Section>
            <LapsTable lapsList={lapsList}></LapsTable>
        </Section>
    );
};

export default React.memo(Laps);