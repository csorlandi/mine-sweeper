import styled from 'styled-components';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
  font-size: 16px;
  margin-bottom: 32px;
`;
