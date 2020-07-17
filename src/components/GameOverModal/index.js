import React from 'react';

import { useBoard } from '~/hooks/board';

import * as S from './styles';

export default function GameOverModal() {
  const board = useBoard();

  return (
    <S.ModalContainer
      animationType="fade"
      transparent
      visible={board.gameOver}
      onRequestClose={board.toggleGameOverModal}
    >
      <S.Container>
        <S.ContentContainer>
          <S.CloseButtonContainer onPress={board.toggleGameOverModal}>
            <S.CloseButtonIcon name="x" />
          </S.CloseButtonContainer>
          <S.BombIcon name="bomb" />
          <S.MessageTitle>Game Over!</S.MessageTitle>
          <S.Message>
            Não foi dessa vez, mas não se preocupe, você pode tentar novamente!
          </S.Message>
          <S.ButtonsContainer>
            <S.ButtonContainer>
              <S.HomeIcon name="home" />
              <S.ButtonText>Home</S.ButtonText>
            </S.ButtonContainer>
            <S.ButtonContainer last featured>
              <S.NewGameIcon name="refresh-cw" featured />
              <S.ButtonText featured>Novo Jogo</S.ButtonText>
            </S.ButtonContainer>
          </S.ButtonsContainer>
        </S.ContentContainer>
      </S.Container>
    </S.ModalContainer>
  );
}
