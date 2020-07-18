import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const ModalContainer = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: 'rgba(0,0,0,0.75)';
`;

export const ContentContainer = styled.View`
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  margin: 0 32px;
  align-items: center;
  align-self: stretch;
`;

export const CloseButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  position: absolute;
  right: 8px;
  top: 8px;
  padding: 8px;
`;

export const CloseButtonIcon = styled(Icon)`
  font-size: 24px;
  color: #3b95b1;
`;

export const TrophyIcon = styled(MaterialCommunityIcons)`
  font-size: 48px;
  color: gold;
`;

export const MessageTitle = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #3b95b1;
`;

export const Message = styled.Text`
  font-size: 18px;
  color: #333333;
  margin-top: 16px;
  text-align: center;
`;

export const TimerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  margin-top: 16px;
`;

export const TimerIcon = styled(MaterialCommunityIcons)`
  font-size: 24px;
  color: #333333;
`;

export const TimerText = styled.Text`
  font-size: 18px;
  color: #333333;
  margin-left: 8px;
  font-weight: bold;
`;

export const ButtonsContainer = styled.View`
  margin-top: 32px;
  align-self: stretch;
`;

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  background-color: ${({ featured }) => (featured ? '#3B95B1' : '#333333')};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding: 16px 0;
  margin-bottom: ${({ last }) => (last ? 0 : 8)}px;
`;

export const HomeIcon = styled(Icon)`
  font-size: 18px;
  color: #f2f2f2;
`;

export const NewGameIcon = styled(Icon)`
  font-size: 18px;
  color: #f2f2f2;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  font-weight: ${({ featured }) => (featured ? 'bold' : 'normal')};
  color: #f2f2f2;
  margin-left: 8px;
`;
