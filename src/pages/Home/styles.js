import styled from 'styled-components';

import { Dimensions } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const { height } = Dimensions.get('window');

Icon.loadFont();

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  background-color: #e8e7e7;
`;

export const HeaderContainer = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: red;
`;

export const BoardContainer = styled.View`
  height: ${height * 0.7}px;
  align-items: center;
  justify-content: center;
`;

export const FooterContainer = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: blue;
`;
