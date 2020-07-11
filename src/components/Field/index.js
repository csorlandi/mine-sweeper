import React from 'react';

import { useBoard } from '~/hooks/board';

import * as S from './styles';

export default function Field({
  opened,
  nearMinesQuantity,
  mined,
  exploded,
  flagged,
}) {
  const board = useBoard();

  return (
    <S.ButtonContainer>
      <S.Container
        blockSize={board.blockSize}
        opened={opened}
        exploded={exploded}
      >
        {opened && nearMinesQuantity > 0 && (
          <S.FieldText nearMinesQuantity={nearMinesQuantity}>
            {nearMinesQuantity}
          </S.FieldText>
        )}
        {opened && mined && (
          <S.FieldBomb name="bomb" blockSize={board.blockSize} />
        )}
        {flagged && !opened && (
          <S.FieldFlag name="flag" blockSize={board.blockSize} />
        )}
      </S.Container>
    </S.ButtonContainer>
  );
}
