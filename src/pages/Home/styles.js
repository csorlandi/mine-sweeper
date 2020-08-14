import styled from 'styled-components';

import {
  getStatusBarHeight,
  getBottomSpace,
} from 'react-native-iphone-x-helper';

import Icon from 'react-native-vector-icons/FontAwesome';

Icon.loadFont();

export const SafeAreaContainer = styled.View`
  flex: 1;
  background-color: #e8e7e7;
`;

export const HeaderContainer = styled.View`
  border-width: 1px;
  border-color: red;
  margin-top: ${getStatusBarHeight(true)}px;
  height: ${({ headerHeight }) => headerHeight}px;
`;

export const BoardContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  margin-bottom: ${getBottomSpace()}px;
`;

export const FooterContainer = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: blue;
`;
