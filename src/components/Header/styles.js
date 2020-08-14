import styled from 'styled-components';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  padding: 0 16px;
`;

export const TimerContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const TimerIcon = styled(Fontisto)`
  color: #454344;
  font-size: 28px;
`;

export const TimerText = styled.Text`
  margin-left: 8px;
  font-size: 18px;
`;

export const ToggleSelectorContainer = styled.View``;

export const ToggleSelectorButton = styled.TouchableOpacity``;

export const ToggleSelectorBombIcon = styled(MaterialCommunityIcons)`
  color: #454344;
  font-size: 28px;
`;

export const ToggleSelectorFlagIcon = styled(Fontisto)`
  color: #454344;
  font-size: 28px;
`;

export const CounterContainer = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;

export const CounterIcon = styled(MaterialCommunityIcons)`
  color: #454344;
  font-size: 28px;
`;

export const CounterText = styled.Text`
  margin-right: 4px;
  font-size: 18px;
`;
