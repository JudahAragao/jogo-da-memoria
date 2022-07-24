import React, { useState } from "react";

import * as S from './styles'

const Card = ({card, flipCount, flipped, setFlipped, index}) => {

  const [flip, setFlip] = useState(false)

  return (
    <S.Container 
      onClick={() => {
        if ((flipped.length) === flipCount) {
          return
        } else {
          setFlip(!flip)
          setFlipped(oldCards => [...oldCards, index])
        }
      }} 
      flip={flip}
    >
      <S.BackCard>
        <S.BackImgCard></S.BackImgCard>
      </S.BackCard>
      <S.FrontCard>
        <span>{card}</span>
      </S.FrontCard>
    </S.Container>
  )
}

export default Card;
