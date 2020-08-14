import React from 'react';

import MineField from '~/components/MineField';
import Header from '~/components/Header';

import { useBoard } from '~/hooks/board';

import * as S from './styles';

export default function Home() {
  const board = useBoard();

  return (
    <S.SafeAreaContainer>
      <S.HeaderContainer headerHeight={board.headerHeight}>
        <Header />
      </S.HeaderContainer>
      <S.BoardContainer>
        <MineField />
      </S.BoardContainer>
    </S.SafeAreaContainer>
  );
}
