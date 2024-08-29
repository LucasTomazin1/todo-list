import { BoardInterface } from '../../types'
import { TodoManager } from '../TodoManager'

export const Board: React.FC<BoardInterface> = ({ tittle, isTodo, isNote }) => {
  return (
    <div className="flex flex-col max-w-[300px]">
      <header>
        <h1 className="text-xl text-bold">{tittle}</h1>
      </header>
      <div className="flex border border-zinc-400 rounded-md p-2 text-zinc-300">
        {isNote && <p>notanotaotnaotnaotna</p>}
        {isTodo && <TodoManager />}
      </div>
    </div>
  )
}
