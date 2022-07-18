import React, { useState } from "react";

import * as S from './styles'

const Card = () => {

  const [flip, setFlip] = useState(false)

  return (
    <S.Container onClick={() => setFlip(!flip)} flipped={flip}>
      <S.BackCard>
        <S.BackImgCard></S.BackImgCard>
      </S.BackCard>
      <S.FrontCard>judah</S.FrontCard>
    </S.Container>
  )
}

export default Card;
