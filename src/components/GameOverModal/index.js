import React from 'react';

import { useBoard } from '~/hooks/board';

import * as S from './styles';

export default function GameOverModal() {
  const board = useBoard();

  return (
    <S.ModalContainer
      animationType="fade"
      transparent
      visible={board.gameOverModalVisible}
      onRequestClose={board.toggleGameOverModal}
    >
      <S.Container>
        <S.ContentContainer>
          <S.CloseButtonContainer onPress={board.toggleGameOverModal}>
            <S.CloseButtonIcon name="chevron-down" />
          </S.CloseButtonContainer>
          <S.Message>Game Over!</S.Message>
        </S.ContentContainer>
      </S.Container>
    </S.ModalContainer>
  );
}
