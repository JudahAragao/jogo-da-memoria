import React, { useState } from "react";
import Card from "../Card";

import * as S from './styles'

const FildGame = ({ chosenCards, flipCount }) => {

  const [flipped, setFlipped] = useState([])

  return (
    <S.Container>
      {chosenCards?.map((card, index) =>
        <Card
          card={card}
          key={index}
          flipCount={flipCount}
          setFlipped={setFlipped}
          flipped={flipped}
          index={index}
        />)
      }
    </S.Container>
  )
}

export default FildGame;
