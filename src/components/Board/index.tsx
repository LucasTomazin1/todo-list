import { useTrash } from '../../hooks/useTrash'
import { BoardInterface } from '../../types'
import { TodoManager } from '../TodoList/TodoManager'

export const Board: React.FC<BoardInterface> = ({
  title,
  isTodo,
  isNote,
  id,
}) => {
  const { addTrashItem } = useTrash()

  const handleDelete = () => {
    addTrashItem({ title, isTodo, isNote, id })
  }
  return (
    <div className="flex flex-col max-w-[300px] border border-zinc-400 rounded-md p-2 text-zinc-300">
      <header className="flex justify-between items-start">
        <h1 className="text-xl text-bold">{title}</h1>
        <button onClick={handleDelete} className="text-red-500">
          X
        </button>
      </header>
      <div className="flex ">
        {isNote && <p>notanotaotnaotnaotna</p>}
        {isTodo && <TodoManager />}
      </div>
    </div>
  )
}
