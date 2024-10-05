import { Header } from './components/Header'
import { TrashProvider } from './constexts/TrashContext'
import { AppRoutes } from './routes'
import { ThemeProvider } from './constexts/ThemeContext'
import { BrowserRouter } from 'react-router-dom'
import { ArchiveProvider } from './constexts/ArchiveContext'
import { BoardProvider } from './constexts/BoardContext'
import { AuthProvider } from './constexts/AuthContext'

// TODO: reordenar os quadros
function App() {
  return (
    <>
      <ThemeProvider>
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
      </ThemeProvider>
    </>
  )
}

export default App
