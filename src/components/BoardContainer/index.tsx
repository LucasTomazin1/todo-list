import { BoardInterface } from '../../types'
import { Board } from '../Board'

export const BoardContainer: React.FC<{ boards: BoardInterface[] }> = ({
  boards,
}) => {
  return (
    <div className="w-full min-h-full p-4 bg-black">
      <section className="flex flex-col gap-3 py-3">
        {boards.map((board) => (
          <Board
            key={board.id}
            title={board.title}
            id={board.id}
            isNote={board.isNote}
            isTodo={board.isTodo}
          />
        ))}
      </section>
    </div>
  )
}
