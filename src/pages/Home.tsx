import { BoardContainer } from '../components/BoardContainer'
import { BoardInterface } from '../types'
interface HomeProps {
  boards: BoardInterface[]
}
export const Home: React.FC<HomeProps> = ({ boards }) => {
  return (
    <section className="min-h-screen bg-zinc-900 pt-[80px]  md:px-10 p-4">
      <BoardContainer boards={boards} />
    </section>
  )
}
