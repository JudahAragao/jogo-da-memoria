import React, { useEffect, useState } from "react";

import * as S from './styles'

const Timer = () => {

  let [time, setTime] = useState(120)
  let [msg, setMsg] = useState('')

  useEffect(() => {
    if (time > 0) {
      setTimeout(()=>setTime(time-1),1000)
    } else {
      setMsg('Tempo Esgotado!')
    }
  }, [time])

  return (
    <S.Container>
      <h1>
        {(()=> time === 0 ? msg : time)()}
      </h1>
    </S.Container>
  )
}

export default Timer;
