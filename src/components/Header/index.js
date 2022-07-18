import React from "react";
import Button from "../Button";

import * as S from './styles'

const Header = ({ contentButton, startTimer }) => {
  return (
    <S.Container>
      <Button
        cor={contentButton.corPlay}
        corHover={contentButton.corPlaySecond}
        onClick={startTimer}
      >
        {contentButton.textPlay}
      </Button>

      <h1>JOGO DA MEMÓRIA</h1>

      <Button
        cor={contentButton.corReset}
        corHover={contentButton.corResetSecond}
      >
        {contentButton.textReset}
      </Button>
    </S.Container>
  )
}

export default Header;
