import { BoardContainer } from './components/BoardContainer'
import { TrashProvider } from './constexts/TrashContext'

// TODO: Organização por Quadros, lixeira, Controle de Acesso, Sincronização em Tempo Real, Widgets de Tempo
function App() {
  return (
    <>
      <TrashProvider>
        <BoardContainer />
      </TrashProvider>
    </>
  )
}

export default App
