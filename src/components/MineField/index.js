import React from 'react';

import { useBoard } from '~/hooks/board';

import Field from '~/components/Field';

import * as S from './styles';

export default function MineField() {
  const board = useBoard();

  return (
    <S.Container>
      {board.minedBoard.map((rowItem, rowIndex) => (
        <S.RowContainer key={`row-${rowIndex}`}>
          {rowItem.map((columnItem, columnIndex) => (
            <Field
              key={`row-${rowIndex}-column-${columnIndex}`}
              {...columnItem}
            />
          ))}
        </S.RowContainer>
      ))}
    </S.Container>
  );
}
