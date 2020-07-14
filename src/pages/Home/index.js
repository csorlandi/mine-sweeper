import React from 'react';

import MineField from '~/components/MineField';

import * as S from './styles';

export default function Home() {
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
