import React from 'react';

import { useBoard } from '~/hooks/board';

import * as S from './styles';

export default function Home() {
  const board = useBoard();

  return (
    <S.Container>
      <S.Title>Tamanho do Board:</S.Title>
      <S.SubTitle>
        {board.maxColumnsNumber} x {board.maxRowsNumber}
      </S.SubTitle>
      <S.Title>BlockSize:</S.Title>
      <S.SubTitle>{board.blockSize}px</S.SubTitle>
      <S.Title>Difficulty:</S.Title>
      <S.SubTitle>{board.difficulty * 100}%</S.SubTitle>
    </S.Container>
  );
}
