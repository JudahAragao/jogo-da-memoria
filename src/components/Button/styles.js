import styled from "styled-components";

const Container = styled.button`
    width: 250px;
    height: 70px;
    background-color: ${props => props.cor};
    border: none;
    border-bottom: 6px solid ${props => props.corHover};
    border-radius: 15px;
    cursor: pointer;

    &:active {
        border: none;
        background-color: ${props => props.corHover};
        transform: translateY(5px);
    }

    h3 {
        color: white;
        font-size: 25px;
    }
`

export {
    Container
}