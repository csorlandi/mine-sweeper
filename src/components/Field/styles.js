import styled from 'styled-components';

import { StyleSheet } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

export const ButtonContainer = styled.TouchableWithoutFeedback``;

function backgroundSwitch({ opened, exploded }) {
  if (opened) {
    if (exploded) return '#ff5757';
    return '#DAD9D9';
  }
  return '#fff';
}

export const Container = styled.View`
  width: ${({ blockSize }) => blockSize}px;
  height: ${({ blockSize }) => blockSize}px;
  border-radius: 2px;
  border-top-width: ${({ opened, exploded }) => {
    if (opened && !exploded) return 2;
    return 0;
  }}px;
  border-bottom-width: ${({ opened }) =>
    opened ? 0 : StyleSheet.hairlineWidth}px;
  background-color: ${props => backgroundSwitch(props)};
  border-color: ${({ opened }) => (opened ? '#bdbdc9' : '#3d3d40')};
  align-items: center;
  justify-content: center;
  margin: 2px;
`;

function colorSwitch(nearMinesQuantity) {
  switch (nearMinesQuantity) {
    case 1:
      return '#0600FB';
    case 2:
      return '#017F01';
    case 3:
      return '#FD0100';
    case 4:
      return '#010180';
    case 5:
      return '#800202';
    case 6:
      return '#00807E';
    case 7:
      return '#000000';
    default:
      return '#808080';
  }
}

export const FieldText = styled.Text`
  color: ${({ nearMinesQuantity }) => colorSwitch(nearMinesQuantity)};
`;

export const FieldBomb = styled(MaterialCommunityIcons)`
  color: #454344;
  font-size: ${({ blockSize }) => blockSize * 0.75}px;
`;

export const FieldFlag = styled(Fontisto)`
  color: #f56969;
  font-size: ${({ blockSize }) => blockSize * 0.55}px;
`;
