import React from "react";
import Button from "../Button";

import * as S from './styles'

const Header = () => {

  let corPlay = '#11a812'
  let corPlaySecond = '#0b6f0c'
  let textPlay = 'Iniciar Jogo'

  let corReset = '#cfca15'
  let corResetSecond = '#9d9a10'
  let textReset = 'Resetar Jogo'

  return (
    <S.Container>
      <Button cor={corPlay} corHover={corPlaySecond}>{textPlay}</Button>
      <h1>JOGO DA MEMÓRIA</h1>
      <Button cor={corReset} corHover={corResetSecond}>{textReset}</Button>
    </S.Container>
  )
}

export default Header;
