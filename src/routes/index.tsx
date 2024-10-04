import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages/Home'
import { Trash } from '../pages/Trash'
import { Archive } from '../pages/Archive'
import { useBoards } from '../hooks/useBoards'
import { LoginPage } from '../pages/Login'
import { RegisterPage } from '../pages/Register'

export const AppRoutes: React.FC = () => {
  const { boards } = useBoards()
  return (
    <Routes>
      <Route path="/" element={<Home boards={boards} />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/trash" element={<Trash />} />
      <Route path="/archive" element={<Archive />} />
      <Route path="/todo-list" element={<Home boards={boards} />} />
    </Routes>
  )
}
