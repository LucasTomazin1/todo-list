import { Header } from './components/Header'
import { TrashProvider } from './constexts/TrashContext'
import { AppRoutes } from './routes'

import { BrowserRouter } from 'react-router-dom'
import { ArchiveProvider } from './constexts/ArchiveContext'
import { BoardProvider } from './constexts/BoardContext'

// TODO: Organização por Quadros, lixeira, Controle de Acesso, Sincronização em Tempo Real, Widgets de Tempo
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
