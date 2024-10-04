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
  const isLoginOrRegisterPage =
    location.pathname === '/login' || location.pathname === '/register'

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
  if (isLoginOrRegisterPage) return null
  return (
    <header className="flex flex-col fixed top-0 w-full sm:px-10 left-0 py-3 gap-1 bg-black sm:flex-row items-center">
      <section className="flex gap-1 items-center">
        {location.pathname === '/todo-list' ? (
          <Link to="/archive">
            <Button tag={<BiArchiveIn />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        {location.pathname === '/archive' ? (
          <Link to="/todo-list">
            <Button tag={<FaHouse />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        {location.pathname === '/trash' ? (
          <Link to="/archive">
            <Button tag={<BiArchiveIn />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}

        {location.pathname === '/trash' ? (
          <Link to="/todo-list">
            <Button tag={<FaHouse />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        {location.pathname === '/todo-list' ? (
          <Link to="/trash">
            <Button tag={<BiTrash />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        {location.pathname === '/archive' ? (
          <Link to="/trash">
            <Button tag={<BiTrash />} onClick={() => setShowInput(false)} />
          </Link>
        ) : null}
        <Link to="/todo-list">
          <Button
            tag={<LuListTodo />}
            onClick={() => {
              onClickHandler('todo')
            }}
          />
        </Link>
        <Link to="/todo-list">
          <Button
            tag={<MdOutlineEditNote />}
            onClick={() => {
              onClickHandler('note')
            }}
          />
        </Link>
        <div className="right-2 xs:fixed flex flex-col p-2 rounded-lg gap-1 text-white text-sm underline text-center xs:pr-10">
          <Link to="/register">register</Link>
          <Link to="/login">login</Link>
        </div>
      </section>
      <div className="w-[270px]">
        {showInput && (
          <InputText
            ref={inputRef}
            onSubmit={onAddBoard}
            placeholder={isTodo ? 'Titúlo da Lista' : 'Titúlo da Nota'}
            value={title}
            onChange={onChangeTitle}
          />
        )}
      </div>
      {/* <div className="flex items-center">
        <Link
          to="/login"
          className="py-2 px-4 rounded-lg text-white text-sm underline"
        >
          login
        </Link>
      </div> */}
    </header>
  )
}
