import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 40px;
    cursor: pointer;
    padding: .1rem .5rem;
    font-weight: 400;


    background-color: ${props => props.start && '#444480'};
    background-color: ${props => (props.lap || props.pause) && '#2f2f2f'};
    background-color: ${props => props.reset && '#592730'};
`;

export default Button;