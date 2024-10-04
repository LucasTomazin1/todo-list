import { Header } from './components/Header'
import { TrashProvider } from './constexts/TrashContext'
import { AppRoutes } from './routes'

import { BrowserRouter } from 'react-router-dom'
import { ArchiveProvider } from './constexts/ArchiveContext'
import { BoardProvider } from './constexts/BoardContext'
import { AuthProvider } from './constexts/AuthContext'

// TODO: reordenar os quadros
function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <BoardProvider>
            <ArchiveProvider>
              <TrashProvider>
                <Header />
                <AppRoutes />
              </TrashProvider>
            </ArchiveProvider>
          </BoardProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  )
}

export default App
