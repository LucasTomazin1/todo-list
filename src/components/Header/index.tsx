import { Link, useLocation } from 'react-router-dom'
import { Button } from '../atoms/Button'
import { MdOutlineEditNote } from 'react-icons/md'
import { FaTrash } from 'react-icons/fa'
import { LuListTodo } from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react'
import { BoardInterface } from '../../types'
import { FaHouse } from 'react-icons/fa6'
import { InputText } from './../atoms/InputText/index'
interface HeaderProps {
  addBoard: (newBoard: BoardInterface) => void
}
export const Header: React.FC<HeaderProps> = ({ addBoard }) => {
  const [showInput, setShowInput] = useState(false)
  const [title, setTitle] = useState('')
  const [isTodo, setIsTodo] = useState(false)
  const [isNote, setIsNote] = useState(false)
  const location = useLocation()
  const inputRef = useRef<HTMLInputElement>(null)
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const onClickHandler = () => {
    setShowInput(!showInput)
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
    <header className="flex flex-col p-2 gap-2 bg-black">
      <div className="flex gap-2">
        {location.pathname === '/trash' ? (
          <Link to="/">
            <Button tag={<FaHouse />} />
          </Link>
        ) : null}
        {location.pathname === '/' ? (
          <Link to="/trash">
            <Button tag={<FaTrash />} />
          </Link>
        ) : null}
        <Button
          tag={<LuListTodo />}
          onClick={() => {
            onClickHandler()
            setIsTodo(!isTodo)
            setIsNote(isNote)
          }}
        />
        <Button
          tag={<MdOutlineEditNote />}
          onClick={() => {
            onClickHandler()
            setIsNote(!isNote)
            setIsTodo(isTodo)
          }}
        />
      </div>
      {/* {showInput && (
        <div className="flex gap-2">
          <input
            type="text"
            onChange={onChangeTittle}
            placeholder="Titulo do quadro"
          />
          <Button onClick={onAddBoard} tag={<FaPlus />} />
        </div>
      )} */}
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
