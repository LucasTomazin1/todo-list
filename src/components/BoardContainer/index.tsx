import { BoardInterface } from '../../types'
import { Board } from '../Board'

export const BoardContainer: React.FC<{ boards: BoardInterface[] }> = ({
  boards,
}) => {
  return (
    <section className="flex flex-col md:flex-row w-full min-h-screen pt-[80px] md:px-10 p-4 gap-3 bg-zinc-900 items-center md:items-start">
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
