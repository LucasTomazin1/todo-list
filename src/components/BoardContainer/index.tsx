import { BoardInterface } from '../../types'
import { Board } from '../Board'

export const BoardContainer: React.FC<{ boards: BoardInterface[] }> = ({
  boards,
}) => {
  return (
    <section className="w-full min-h-screen pt-[80px] p-4 bg-zinc-900">
      <div className="flex flex-col gap-3 py-3">
        {boards.map((board) => (
          <Board
            key={board.id}
            title={board.title}
            id={board.id}
            isNote={board.isNote}
            isTodo={board.isTodo}
          />
        ))}
      </div>
    </section>
  )
}
