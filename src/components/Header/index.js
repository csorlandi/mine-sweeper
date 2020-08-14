import React from 'react';

import { useBoard } from '~/hooks/board';

import * as S from './styles';

export default function Header() {
  const board = useBoard();

  return (
    <S.Container>
      <S.TimerContainer>
        <S.TimerIcon name="stopwatch" />
        <S.TimerText>00:11</S.TimerText>
      </S.TimerContainer>
      <S.ToggleSelectorContainer />
      <S.CounterContainer>
        <S.CounterText>{board.remainingBombs}</S.CounterText>
        <S.CounterIcon name="bomb" />
      </S.CounterContainer>
    </S.Container>
  );
}
