import { Link, useLocation } from 'react-router-dom'
import { Button } from '../atoms/Button'
import { MdOutlineEditNote } from 'react-icons/md'
import { LuListTodo } from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react'
import { FaHouse } from 'react-icons/fa6'
import { InputText } from './../atoms/InputText/index'
import { BiArchiveIn, BiTrash } from 'react-icons/bi'
import { useBoards } from '../../hooks/useBoards'

export const Header: React.FC = () => {
  const [showInput, setShowInput] = useState(false)
  const [title, setTitle] = useState('')
  const [isTodo, setIsTodo] = useState(false)
  const [isNote, setIsNote] = useState(false)
  const location = useLocation()
  const inputRef = useRef<HTMLInputElement>(null)
  const { addBoard } = useBoards()
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const onClickHandler = (type: 'todo' | 'note') => {
    if (showInput) {
      setShowInput(false)
      setIsTodo(false)
      setIsNote(false)
    } else {
      setShowInput(true)
      setIsTodo(type === 'todo')
      setIsNote(type === 'note')
    }
  }

  const onAddBoard = () => {
    addBoard({ title, id: Date.now(), isNote, isTodo })
    setShowInput(!showInput)
    setTitle('')
    setIsNote(false)
    setIsTodo(false)
  }

  useEffect(() => {
    if (showInput && inputRef.current) {
      inputRef.current.focus()
    }
  }, [showInput])

  return (
    <header className="flex flex-col header fixed top-0 w-full md:px-10 left-0 py-3 gap-1 bg-black md:flex-row items-center">
      <div className="flex gap-2">
        {location.pathname === '/' ? (
          <Link to="/archive">
            <Button tag={<BiArchiveIn />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        {location.pathname === '/archive' ? (
          <Link to="/">
            <Button tag={<FaHouse />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        {location.pathname === '/trash' ? (
          <Link to="/archive">
            <Button tag={<BiArchiveIn />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}

        {location.pathname === '/trash' ? (
          <Link to="/">
            <Button tag={<FaHouse />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        {location.pathname === '/' ? (
          <Link to="/trash">
            <Button tag={<BiTrash />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        {location.pathname === '/archive' ? (
          <Link to="/trash">
            <Button tag={<BiTrash />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        <Link to="/">
          <Button
            tag={<LuListTodo />}
            onClick={() => {
              onClickHandler('todo')
            }}
          />
        </Link>
        <Link to="/">
          <Button
            tag={<MdOutlineEditNote />}
            onClick={() => {
              onClickHandler('note')
            }}
          />
        </Link>
      </div>
      <div className="w-[270px]">
        {showInput && (
          <InputText
            ref={inputRef}
            onSubmit={onAddBoard}
            placeholder="Título do quadro"
            value={title}
            onChange={onChangeTitle}
          />
        )}
      </div>
    </header>
  )
}
