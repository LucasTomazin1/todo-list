import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Trash } from '../pages/Trash'
import { BoardInterface } from '../types'
import { Archive } from '../pages/Archive'
interface AppRoutesProps {
  boards: BoardInterface[]
}
export const AppRoutes: React.FC<AppRoutesProps> = ({ boards }) => {
  return (
    <Routes>
      <Route path="/" element={<Home boards={boards} />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/archive" element={<Archive />} />
    </Routes>
  )
}
