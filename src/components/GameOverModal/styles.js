import styled from 'styled-components';

import Icon from 'react-native-vector-icons/Feather';

export const ModalContainer = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: 'rgba(0,0,0,0.75)';
`;

export const ContentContainer = styled.View`
  background-color: #fff;
  border-radius: 4px;
  padding: 66px;
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
`;

export const Message = styled.Text`
  font-size: 40px;
  font-weight: bold;
`;
