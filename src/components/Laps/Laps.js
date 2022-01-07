import React from "react";
import LapsTable from "./LapsTable";
import Card from "../UI/Card";
import styled from "styled-components";

const Section = styled.section`
    width: 100%; 
    height: 100%;
    overflow: auto;
    scrollbar-color: #5d5d5d black;
    color: #adadad;
`;

function Laps({ lapsList }) {
    return (
        <Card>
            <Section>
                {lapsList.length > 0 && <LapsTable lapsList={lapsList}></LapsTable>}
            </Section>
        </Card>
    );
};

export default React.memo(Laps);