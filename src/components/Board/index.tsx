import { BiArchiveIn, BiTrash } from 'react-icons/bi'
import { useBoards } from '../../hooks/useBoards'
import { useTrash } from '../../hooks/useTrash'
import { BoardInterface } from '../../types'
import { Note } from '../Note'
import { TodoManager } from '../TodoList/TodoManager'
import { useLocation } from 'react-router-dom'
import { LiaTrashRestoreAltSolid } from 'react-icons/lia'
import { RiInboxUnarchiveLine } from 'react-icons/ri'
import { useArchive } from '../../hooks/useArchive'

export const Board: React.FC<BoardInterface> = ({
  title,
  isTodo,
  isNote,
  id,
}) => {
  const location = useLocation()
  const { addBoard, removeBoard } = useBoards()
  const { addTrashItem, removeTrashItem } = useTrash()
  const { addArchiveItem, removeArchiveItem } = useArchive()

  const handleDelete = () => {
    addTrashItem({ title, isTodo, isNote, id })
    removeBoard(id)
  }

  const handleTrashItemDelete = () => {
    removeTrashItem({ title, isTodo, isNote, id })
  }

  const handleRestoreTrashItem = () => {
    removeTrashItem({ title, isTodo, isNote, id })
    addBoard({ title, isTodo, isNote, id })
  }
  const handleArchiveItem = () => {
    addArchiveItem({ title, isTodo, isNote, id })
    removeBoard(id)
  }

  const handleRestoreArchiveItem = () => {
    removeArchiveItem({ title, isTodo, isNote, id })
    addBoard({ title, isTodo, isNote, id })
  }

  return (
    <div className="flex flex-col max-w-[300px] border border-zinc-400 rounded-md p-2 text-zinc-300">
      <header className="flex justify-between items-start">
        <h1 className="text-xl text-bold">{title}</h1>
        {location.pathname === '/' ? (
          <div className="flex gap-2">
            <button onClick={handleArchiveItem}>
              <BiArchiveIn />
            </button>
            <button onClick={handleDelete} className="text-red-500">
              <BiTrash />
            </button>
          </div>
        ) : null}
        {location.pathname === '/trash' ? (
          <div className="flex gap-2">
            <button>
              <BiArchiveIn />
            </button>
            <button onClick={handleRestoreTrashItem} className="text-green-500">
              <LiaTrashRestoreAltSolid />
            </button>
            <button onClick={handleTrashItemDelete} className="text-red-500">
              <BiTrash />
            </button>
          </div>
        ) : null}
        {location.pathname === '/archive' ? (
          <div className="flex gap-2">
            <button onClick={handleRestoreArchiveItem}>
              <RiInboxUnarchiveLine />
            </button>
            <button onClick={handleDelete} className="text-red-500">
              <BiTrash />
            </button>
          </div>
        ) : null}
      </header>
      <div className="flex ">
        {isNote && <Note />}
        {isTodo && <TodoManager />}
      </div>
    </div>
  )
}
