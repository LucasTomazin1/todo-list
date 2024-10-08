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
import { ConfirmDeleteModal } from './ConfirmDeleteModal'
import { useEffect, useRef, useState } from 'react'
import { MdModeEditOutline } from 'react-icons/md'

export const Board: React.FC<BoardInterface> = ({
  title,
  isTodo,
  isNote,
  id,
}) => {
  const location = useLocation()
  const { addBoard, removeBoard, updateBoard } = useBoards()
  const { addTrashItem, removeTrashItem } = useTrash()
  const { addArchiveItem, removeArchiveItem } = useArchive()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<BoardInterface | null>(null)
  const [isEditing, setIsEditing] = useState(false)
  const [editedTitle, setEditedTitle] = useState(title)
  const inputRef = useRef<HTMLInputElement>(null)
  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isEditing])

  const handleDelete = () => {
    addTrashItem({ title, isTodo, isNote, id })
    removeBoard(id)
  }
  const handleConfirmDelete = () => {
    if (itemToDelete) {
      removeTrashItem(itemToDelete)
      setIsModalOpen(false)
      setItemToDelete(null)
    }
  }
  const handleTrashItemDelete = () => {
    setItemToDelete({ title, isTodo, isNote, id })
    setIsModalOpen(true)
  }

  const handleRestoreTrashItem = () => {
    removeTrashItem({ title, isTodo, isNote, id })
    addBoard({ title, isTodo, isNote, id })
  }

  const handleArchiveItem = () => {
    addArchiveItem({ title, isTodo, isNote, id })
    removeBoard(id)
    removeTrashItem({ title, isTodo, isNote, id })
  }

  const handleRestoreArchiveItem = () => {
    removeArchiveItem({ title, isTodo, isNote, id })
    addBoard({ title, isTodo, isNote, id })
  }

  const handleEditClick = () => {
    setIsEditing(true)
  }

  const handleEditTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value)
  }

  const handleEditSubmit = () => {
    if (editedTitle.trim()) {
      const updatedBoard = { title: editedTitle, isTodo, isNote, id }
      updateBoard(updatedBoard)
      setIsEditing(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditSubmit()
    }
  }

  return (
    <div className="flex flex-col w-[300px] border border-zinc-400 rounded-md p-2 text-zinc-300">
      <header className="flex justify-between items-start">
        <div className="flex">
          {isEditing ? (
            <input
              ref={inputRef}
              value={editedTitle}
              onChange={handleEditTitleChange}
              onBlur={handleEditSubmit}
              onKeyDown={handleKeyDown}
              className="border border-gray-500 rounded p-1"
            />
          ) : (
            <h1 className="text-xl text-bold max-w-[220px] overflow-hidden">
              {title}
            </h1>
          )}
          <button onClick={handleEditClick}>
            <MdModeEditOutline />
          </button>
        </div>
        {location.pathname === '/todo-list' ? (
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
            <button onClick={handleArchiveItem}>
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
            <button
              onClick={handleRestoreArchiveItem}
              className="text-green-500"
            >
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
      {isModalOpen && (
        <ConfirmDeleteModal
          onConfirm={handleConfirmDelete}
          onRequestClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  )
}
