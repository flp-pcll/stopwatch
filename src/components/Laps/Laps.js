import React from "react";
import LapsTable from "./LapsTable";
import styled from "styled-components";

const Section = styled.section`
    margin: 0 0 2.5rem 0;
    min-height: 50vh;
    width: 500px;
`;

function Laps({lapsList}) {
    return(
        <Section>
            {lapsList.length > 0 && <LapsTable lapsList={lapsList}></LapsTable>}
        </Section>
    );
};

export default React.memo(Laps);