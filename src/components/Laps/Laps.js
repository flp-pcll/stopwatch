import React from "react";
import LapsTable from "./LapsTable";
import styled from "styled-components";

const Section = styled.section``;

function Laps(props) {
    return(
        <Section>
            <LapsTable laps={props.laps}></LapsTable>
        </Section>
    );
};

export default Laps;