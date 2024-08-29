import { Button } from '../atoms/Button'
import { MdOutlineEditNote } from 'react-icons/md'
import { useEffect, useState } from 'react'
import { Board } from '../Board'
import { LuListTodo } from 'react-icons/lu'
import { FaPlus } from 'react-icons/fa'
import { BoardInterface } from '../../types'

export const BoardContainer: React.FC = () => {
  const [boards, setBoards] = useState<BoardInterface[]>([])
  const [showInput, setShowInput] = useState(false)
  const [tittle, setTittle] = useState('Sem Título')
  const [isTodo, setIsTodo] = useState(false)
  const [isNote, setIsNote] = useState(false)
  const onChangeTittle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTittle(e.target.value)
  }
  const onClickHandler = () => {
    setShowInput(!showInput)
  }
  const addBoard = () => {
    setBoards((prevBoards) => [
      ...prevBoards,
      { tittle, id: prevBoards.length, isNote, isTodo },
    ])
    setShowInput(!showInput)
    setTittle('Sem Título')
    setIsNote(false)
    setIsTodo(false)
  }
  useEffect(() => {
    console.log(boards)
  }, [boards])

  return (
    <div className="w-full min-h-full p-4 bg-black">
      <header className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Button
            tag={<LuListTodo />}
            onClick={() => {
              onClickHandler()
              setIsTodo(true)
              setIsNote(false)
            }}
          />
          <Button
            tag={<MdOutlineEditNote />}
            onClick={() => {
              onClickHandler()
              setIsNote(true)
              setIsTodo(false)
            }}
          />
        </div>
        {showInput && (
          <div className="flex gap-2">
            <input
              type="text"
              onChange={onChangeTittle}
              placeholder="Titulo do quadro"
            />
            <Button onClick={addBoard} tag={<FaPlus />} />
          </div>
        )}
      </header>
      <section>
        {boards.map((board) => (
          <Board
            key={board.id}
            tittle={board.tittle}
            id={board.id}
            isNote={board.isNote}
            isTodo={board.isTodo}
          />
        ))}
      </section>
    </div>
  )
}
