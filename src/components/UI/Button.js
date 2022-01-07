import styled from "styled-components";

const Button = styled.button`
    width: 100%;
    height: 100%;
    border-radius: 40px;
    cursor: pointer;
    padding: .1rem .5rem;
    font-weight: 400;
    vertical-align: bottom;


    background-color: ${props => props.start && 'rgba(68, 68, 128, .4)'};
    background-color: ${props => (props.lap || props.pause) && 'rgba(47, 47, 47, .8)'};
    background-color: ${props => props.reset && '#592730'};
`;

export default Button;