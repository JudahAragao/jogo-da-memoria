import styled from "styled-components";

import backImgCard from '../../assets/img/img-card-back.png'

const Container = styled.div`
    width: 120px;
    height: 150px;
    margin: 10px;
    position: relative;

    ${() => BackCard}, ${() => FrontCard} {
        width: 120px;
        height: 150px;
        border-radius: 10px;
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: 500ms;
    }

    ${() => BackCard} {
        z-index: ${props => props.flip === true ? 0 : 1};
        transform: rotateY(${props => props.flip === true ? '180deg' : '0'});
    }

    ${() => FrontCard} {
        z-index: ${props => props.flip === false ? 0 : 1};
        transform: rotateY(${props => props.flip === false ? '-180deg' : '0'});
    }
`

const BackCard = styled.div`
    background-color: #071a4a;
`

const BackImgCard = styled.img.attrs({
    src: `${backImgCard}`
})`
    width: 90%;
`

const FrontCard = styled.div`
    background-color: #b6b8d8;
    
    span {
        font-size: 45px;
    }
`

export {
    Container,
    BackCard,
    BackImgCard,
    FrontCard
}