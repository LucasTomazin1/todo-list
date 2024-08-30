import { useState } from 'react'
import { Header } from './components/Header'
import { TrashProvider } from './constexts/TrashContext'
import { AppRoutes } from './routes'
import { BoardInterface } from './types'
import { BrowserRouter } from 'react-router-dom'

// TODO: Organização por Quadros, lixeira, Controle de Acesso, Sincronização em Tempo Real, Widgets de Tempo
function App() {
  const [boards, setBoards] = useState<BoardInterface[]>([])
  const addBoard = (newBoard: BoardInterface) => {
    setBoards((prevBoards) => [...prevBoards, newBoard])
  }
  return (
    <>
      <BrowserRouter>
        <TrashProvider>
          <Header addBoard={addBoard} />
          <AppRoutes boards={boards} />
        </TrashProvider>
      </BrowserRouter>
    </>
  )
}

export default App
