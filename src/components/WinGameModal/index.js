import React from 'react';

import { useBoard } from '~/hooks/board';

import * as S from './styles';

export default function WinGameModal() {
  const board = useBoard();

  return (
    <S.ModalContainer
      animationType="fade"
      transparent
      visible={board.winModalVisibility}
      onRequestClose={board.toggleWinGameModal}
    >
      <S.Container>
        <S.ContentContainer>
          <S.CloseButtonContainer onPress={board.toggleWinGameModal}>
            <S.CloseButtonIcon name="x" />
          </S.CloseButtonContainer>
          <S.TrophyIcon name="trophy" />
          <S.MessageTitle>You Win!</S.MessageTitle>
          <S.Message>Você conseguiu vencer, parabéns!</S.Message>
          <S.TimerContainer>
            <S.TimerIcon name="timer-sand" />
            <S.TimerText>01:11</S.TimerText>
          </S.TimerContainer>
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
