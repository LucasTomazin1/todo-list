import { BoardInterface } from '../../types'
import { TodoManager } from '../TodoManager'

export const Board: React.FC<BoardInterface> = ({ tittle, isTodo, isNote }) => {
  return (
    <div className="flex flex-col">
      <header>
        <h1>{tittle}</h1>
      </header>
      <div>
        {isNote && <p>notanotaotnaotnaotna</p>}
        {isTodo && <TodoManager />}
      </div>
    </div>
  )
}
