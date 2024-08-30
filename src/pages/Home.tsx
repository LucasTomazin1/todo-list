import { BoardContainer } from '../components/BoardContainer'
import { BoardInterface } from '../types'
interface HomeProps {
  boards: BoardInterface[]
}
export const Home: React.FC<HomeProps> = ({ boards }) => {
  return <BoardContainer boards={boards} />
}
