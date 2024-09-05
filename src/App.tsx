import { Header } from './components/Header'
import { TrashProvider } from './constexts/TrashContext'
import { AppRoutes } from './routes'

import { BrowserRouter } from 'react-router-dom'
import { ArchiveProvider } from './constexts/ArchiveContext'
import { BoardProvider } from './constexts/BoardContext'

// TODO: reordenar os quadros, Criação de conta, banco de dados Firestore/Realtime Database
function App() {
  return (
    <>
      <BrowserRouter>
        <BoardProvider>
          <ArchiveProvider>
            <TrashProvider>
              <Header />
              <AppRoutes />
            </TrashProvider>
          </ArchiveProvider>
        </BoardProvider>
      </BrowserRouter>
    </>
  )
}

export default App
