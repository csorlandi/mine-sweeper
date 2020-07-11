import React from 'react';

import { useBoard } from '~/hooks/board';

import MineField from '~/components/MineField';

import * as S from './styles';

export default function Home() {
  const board = useBoard();

  return (
    <S.SafeAreaContainer>
      <S.HeaderContainer />
      <S.BoardContainer>
        <MineField />
      </S.BoardContainer>
      <S.FooterContainer />
    </S.SafeAreaContainer>
  );
}
