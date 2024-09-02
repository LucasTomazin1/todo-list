import { BoardContainer } from '../components/BoardContainer'
import { useTrash } from '../hooks/useTrash'

export const Trash: React.FC = () => {
  const { trashItems } = useTrash()

  return (
    <section className="w-full min-h-screen bg-zinc-900">
      {trashItems.length === 0 ? (
        <p className="text-white">A lixeira está vazia</p>
      ) : (
        <BoardContainer boards={trashItems} />
      )}
    </section>
  )
}
