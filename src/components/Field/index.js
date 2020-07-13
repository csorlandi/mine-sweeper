import React from 'react';
import PropTypes from 'prop-types';

import { useBoard } from '~/hooks/board';

import * as S from './styles';

export default function Field({
  opened,
  nearMinesQuantity,
  mined,
  exploded,
  flagged,
  row,
  column,
}) {
  const board = useBoard();

  return (
    <S.ButtonContainer
      onPress={() => board.openField(row, column)}
      onLongPress={() => board.invertFlag(row, column)}
    >
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

Field.propTypes = {
  opened: PropTypes.bool,
  flagged: PropTypes.bool,
  exploded: PropTypes.bool,
  mined: PropTypes.bool,
  nearMinesQuantity: PropTypes.number,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired,
};

Field.defaultProps = {
  opened: false,
  flagged: false,
  exploded: false,
  mined: false,
  nearMinesQuantity: 0,
};
