import React, { useState } from "react";

import * as S from './App.styles'
import FildGame from "./components/FildGame";
import Header from "./components/Header";
import Timer from "./components/Timer";

const App = () => {

  const contentButton = {
    corPlay: '#11a812',
    corPlaySecond: '#0b6f0c',
    corReset: '#cfca15',
    corResetSecond: '#9d9a10',
    textPlay: 'Iniciar Jogo',
    textReset: 'Resetar Jogo'
  }

  const [countdown, setCountdown] = useState()

  const startTimer = () => {
    setCountdown(<Timer startTimer={startTimer}/>)
  }

  return (
    <S.GlobalContainer>
      <Header
        contentButton={contentButton}
        startTimer={startTimer}
      />
      {countdown}
      <FildGame />
    </S.GlobalContainer>
  )
}

export default App;
