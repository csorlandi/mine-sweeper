import React, { createContext, useState, useContext } from 'react';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BoardContext = createContext({});

function BoardProvider({ children }) {
  const [maxColumnsNumber, setMaxColumnsNumber] = useState(15);
  const [blockSize, setBlockSize] = useState(() => {
    const blockSizeWithoutMargin = width / maxColumnsNumber;
    const blockSizeWithMargin = blockSizeWithoutMargin - 4;

    return blockSizeWithMargin;
  });
  const [maxRowsNumber, setMaxRowsNumber] = useState(() => {
    const resizedHeight = height * 0.6;
    const numberOfRowsWithoutRound = resizedHeight / blockSize;
    const numberOfRowsRounded = Math.floor(numberOfRowsWithoutRound);

    return numberOfRowsRounded;
  });
  const [difficulty, setDifficulty] = useState(0.1);

  return (
    <BoardContext.Provider
      value={{ blockSize, maxColumnsNumber, maxRowsNumber, difficulty }}
    >
      {children}
    </BoardContext.Provider>
  );
}

function useBoard() {
  const context = useContext(BoardContext);

  return context;
}

export { BoardProvider, useBoard };
