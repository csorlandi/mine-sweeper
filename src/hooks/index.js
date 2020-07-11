import React from 'react';
import PropTypes from 'prop-types';

import { BoardProvider } from './board';

export default function AppProvider({ children }) {
  return <BoardProvider>{children}</BoardProvider>;
}

AppProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
