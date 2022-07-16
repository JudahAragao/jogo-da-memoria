import React from "react";

import * as S from './styles'

const Button = ({children, onClick, cor, corHover}) => {
  return (
    <S.Container onClick={() => onClick} cor={cor} corHover={corHover}>
      <h3>{children}</h3>
    </S.Container>
  )
}

export default Button;
