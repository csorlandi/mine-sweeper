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
        boardWithMines[selectedRow][selectedColumn].nearMinesQuantity = 0;

        const rowNeighbors = [selectedRow - 1, selectedRow, selectedRow + 1];
        const columnNeighbors = [
          selectedColumn - 1,
          selectedColumn,
          selectedColumn + 1,
        ];

        rowNeighbors.forEach(rowIndex => {
          columnNeighbors.forEach(columnIndex => {
            const different =
              rowIndex !== selectedRow || columnIndex !== selectedColumn;
            const validRow = rowIndex >= 0 && rowIndex < boardWithMines.length;
            const validColumn =
              columnIndex >= 0 && columnIndex < boardWithMines[0].length;
            if (different && validRow && validColumn) {
              const validField = !boardWithMines[rowIndex][columnIndex].mined;

              if (validField)
                boardWithMines[rowIndex][columnIndex].nearMinesQuantity += 1;
            }
          });
        });

        minesSpread += 1;
      }
    }

    return boardWithMines;
  });
  const [gameOverModalVisible, setGameOverModalVisible] = useState(false);

  function toggleGameOverModal() {
    setGameOverModalVisible(!gameOverModalVisible);
  }

  function getNeighbors(itemRowIndex, itemColumnIndex) {
    const neighbors = [];
    const rowNeighbors = [itemRowIndex - 1, itemRowIndex, itemRowIndex + 1];
    const columnNeighbors = [
      itemColumnIndex - 1,
      itemColumnIndex,
      itemColumnIndex + 1,
    ];

    rowNeighbors.forEach(rowIndex => {
      columnNeighbors.forEach(columnIndex => {
        const different =
          rowIndex !== itemRowIndex || columnIndex !== itemColumnIndex;
        const validRow = rowIndex >= 0 && rowIndex < minedBoard.length;
        const validColumn =
          columnIndex >= 0 && columnIndex < minedBoard[0].length;
        if (different && validRow && validColumn) {
          neighbors.push(minedBoard[rowIndex][columnIndex]);
        }
      });
    });

    return neighbors;
  }

  function openBoardFields(fieldRowIndex, fieldColumnIndex) {
    setMinedBoard(
      minedBoard.map((rowItem, rowIndex) => {
        return rowItem.map((columnItem, columnIndex) => ({
          ...columnItem,
          opened: true,
          exploded:
            fieldRowIndex === rowIndex && fieldColumnIndex === columnIndex,
        }));
      }),
    );
  }

  function invertFlag(itemRowIndex, itemColumnIndex) {
    setMinedBoard(
      minedBoard.map((rowItem, rowIndex) => {
        if (rowIndex === itemRowIndex) {
          return rowItem.map((columnItem, columnIndex) => {
            if (columnIndex === itemColumnIndex) {
              return { ...columnItem, flagged: !columnItem.flagged };
            }
            return columnItem;
          });
        }
        return rowItem;
      }),
    );
  }

  function openField(itemRowIndex, itemColumnIndex) {
    const field = minedBoard[itemRowIndex][itemColumnIndex];

    if (!field.opened && !field.flagged) {
      const exploded = field.mined;

      if (exploded) {
        openBoardFields(itemRowIndex, itemColumnIndex);
        setGameOverModalVisible(true);
      } else {
        setMinedBoard(
          minedBoard.map((rowItem, rowIndex) => {
            if (rowIndex === itemRowIndex) {
              return rowItem.map((columnItem, columnIndex) => {
                if (columnIndex === itemColumnIndex) {
                  return { ...columnItem, opened: true };
                }
                return columnItem;
              });
            }
            return rowItem;
          }),
        );
      }
    }
  }

  return (
    <BoardContext.Provider
      value={{
        blockSize,
        maxColumnsNumber,
        maxRowsNumber,
        difficulty,
        cleanBoard,
        minedBoard,
        gameOverModalVisible,
        toggleGameOverModal,
        invertFlag,
        openField,
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
