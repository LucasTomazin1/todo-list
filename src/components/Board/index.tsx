import { BiTrash } from 'react-icons/bi'
import { useBoards } from '../../hooks/useBoards'
import { useTrash } from '../../hooks/useTrash'
import { BoardInterface } from '../../types'
import { Note } from '../Note'
import { TodoManager } from '../TodoList/TodoManager'
import { useLocation } from 'react-router-dom'

export const Board: React.FC<BoardInterface> = ({
  title,
  isTodo,
  isNote,
  id,
}) => {
  const location = useLocation()
  const { addTrashItem, removeTrashItem } = useTrash()
  const { removeBoard } = useBoards()

  const handleDelete = () => {
    addTrashItem({ title, isTodo, isNote, id })
    removeBoard(id)
  }

  const handleTrashItemDelete = () => {
    removeTrashItem({ title, isTodo, isNote, id })
  }

  return (
    <div className="flex flex-col max-w-[300px] border border-zinc-400 rounded-md p-2 text-zinc-300">
      <header className="flex justify-between items-start">
        <h1 className="text-xl text-bold">{title}</h1>
        {location.pathname === '/' ? (
          <button onClick={handleDelete} className="text-red-500">
            <BiTrash />
          </button>
        ) : null}
        {location.pathname === '/trash' ? (
          <button onClick={handleTrashItemDelete} className="text-red-500">
            <BiTrash />
          </button>
        ) : null}
      </header>
      <div className="flex ">
        {isNote && <Note />}
        {isTodo && <TodoManager />}
      </div>
    </div>
  )
}
