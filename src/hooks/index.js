import React from 'react';

import { BoardProvider } from './board';

export default function AppProvider({ children }) {
  return <BoardProvider>{children}</BoardProvider>;
}
