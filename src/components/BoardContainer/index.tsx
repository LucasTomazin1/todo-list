import { BoardInterface } from '../../types'
import { Board } from '../Board'

export const BoardContainer: React.FC<{ boards: BoardInterface[] }> = ({
  boards,
}) => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen gap-3 items-center md:items-start flex-wrap">
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
  )
}
