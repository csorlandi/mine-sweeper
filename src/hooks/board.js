import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const BoardContext = createContext({});

function BoardProvider({ children }) {
  const [maxColumnsNumber] = useState(10);
  const [blockSize] = useState(() => {
    const marginDeduction = ((maxColumnsNumber + 1) * 4) / maxColumnsNumber;
    const blockSizeWithoutMargin = width / maxColumnsNumber;
    const blockSizeWithMargin = blockSizeWithoutMargin - marginDeduction;

    return blockSizeWithMargin;
  });
  const [maxRowsNumber] = useState(() => {
    const resizedHeight = height * 0.7;
    const numberOfRowsWithoutRound = resizedHeight / (blockSize + 4);
    const numberOfRowsRounded = Math.floor(numberOfRowsWithoutRound);

    return numberOfRowsRounded;
  });
  const [difficulty, setDifficulty] = useState(0.1);
  const [cleanBoard, setCleanBoard] = useState(() => {
    const board = Array(maxRowsNumber)
      .fill(0)
      .map((_rowItem, rowIndex) => {
        return Array(maxColumnsNumber)
          .fill(0)
          .map((_columnItem, columnIndex) => ({
            row: rowIndex,
            column: columnIndex,
            opened: false,
            flagged: false,
            mined: false,
            exploded: false,
            nearMinesQuantity: 0,
          }));
      });

    return board;
  });
  const [minedBoard, setMinedBoard] = useState(() => {
    const boardWithMines = cleanBoard;
    const minesAmount = maxRowsNumber * maxColumnsNumber * difficulty;

    let minesSpread = 0;

    while (minesSpread < minesAmount) {
      const selectedRow = Math.floor(Math.random() * maxRowsNumber);
      const selectedColumn = Math.floor(Math.random() * maxColumnsNumber);

      if (!boardWithMines[selectedRow][selectedColumn].mined) {
        boardWithMines[selectedRow][selectedColumn].mined = true;
        minesSpread += 1;
      }
    }

    boardWithMines.forEach((rowItem, rowIndex) => {
      rowItem.forEach((columnItem, columnIndex) => {
        const rowNeighbors = [rowIndex - 1, rowIndex, rowIndex + 1];
        const columnNeighbors = [columnIndex - 1, columnIndex, columnIndex + 1];

        if (columnItem.mined) {
          rowNeighbors.forEach(rowNeighborsIndex => {
            if (rowNeighborsIndex >= 0 && rowNeighborsIndex < maxRowsNumber) {
              columnNeighbors.forEach(columnNeighborsIndex => {
                if (
                  columnNeighborsIndex >= 0 &&
                  columnNeighborsIndex < maxColumnsNumber
                ) {
                  if (
                    !boardWithMines[rowNeighborsIndex][columnNeighborsIndex]
                      .mined
                  ) {
                    boardWithMines[rowNeighborsIndex][
                      columnNeighborsIndex
                    ].nearMinesQuantity += 1;
                  }
                }
              });
            }
          });
        }
      });
    });

    return boardWithMines;
  });

  return (
    <BoardContext.Provider
      value={{
        blockSize,
        maxColumnsNumber,
        maxRowsNumber,
        difficulty,
        cleanBoard,
        minedBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
}

function useBoard() {
  const context = useContext(BoardContext);

  return context;
}

BoardProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export { BoardProvider, useBoard };
