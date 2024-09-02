import { Link, useLocation } from 'react-router-dom'
import { Button } from '../atoms/Button'
import { MdOutlineEditNote } from 'react-icons/md'
import { LuListTodo } from 'react-icons/lu'
import { useEffect, useRef, useState } from 'react'
import { BoardInterface } from '../../types'
import { FaHouse } from 'react-icons/fa6'
import { InputText } from './../atoms/InputText/index'
import { BiArchiveIn, BiTrash } from 'react-icons/bi'
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
  //   const onClickHandler = () => {
  //     setShowInput(!showInput)
  //   }

  //   const onClickHandler = () => {
  //       const closeInput = () => {
  //         setShowInput(false)
  //         setTitle('')
  //         setIsTodo(false)
  //         setIsNote(false)
  //       }
  //     if (showInput === false) {
  //       setShowInput(true)
  //     }
  //     if (showInput === true) {
  //       closeInput()
  //     }
  //   }

  const onClickHandler = (type: 'todo' | 'note') => {
    if (showInput) {
      // Close the input and reset states if it is already open
      setShowInput(false)
      setIsTodo(false)
      setIsNote(false)
    } else {
      // Open the input and set the correct type
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
    <header className="flex flex-col p-3 gap-1 bg-zinc-800 md:flex-row items-center">
      <div className="flex gap-2">
        <Link to="/">
          <Button tag={<BiArchiveIn />} />
        </Link>
        {location.pathname === '/trash' ? (
          <Link to="/">
            <Button tag={<FaHouse />} />
          </Link>
        ) : null}
        {location.pathname === '/' ? (
          <Link to="/trash">
            <Button tag={<BiTrash />} />
          </Link>
        ) : null}
        <Button
          tag={<LuListTodo />}
          onClick={() => {
            onClickHandler('todo')
          }}
        />
        <Button
          tag={<MdOutlineEditNote />}
          onClick={() => {
            onClickHandler('note')
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
