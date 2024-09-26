import { createContext, useState } from 'react'
import { BoardInterface } from '../types'

interface BoardContextType {
  boards: BoardInterface[]
  addBoard: (newBoard: BoardInterface) => void
  removeBoard: (id: number) => void
  updateBoard: (board: BoardInterface) => void
}

export const BoardContext = createContext<BoardContextType | undefined>(
  undefined,
)

export const BoardProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [boards, setBoards] = useState<BoardInterface[]>([])

  const addBoard = (newBoard: BoardInterface) => {
    setBoards((prevBoards) => [...prevBoards, newBoard])
  }

  const removeBoard = (id: number) => {
    setBoards((prevBoards) => prevBoards.filter((board) => board.id !== id))
  }

  const updateBoard = (updatedBoard: BoardInterface) => {
    setBoards((prevBoards) =>
      prevBoards.map((board) =>
        board.id === updatedBoard.id ? updatedBoard : board,
      ),
    )
  }

  return (
    <BoardContext.Provider
      value={{ boards, addBoard, removeBoard, updateBoard }}
    >
      {children}
    </BoardContext.Provider>
  )
}
