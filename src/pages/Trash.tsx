import { BoardContainer } from '../components/BoardContainer'
import { useTrash } from '../hooks/useTrash'

export const Trash: React.FC = () => {
  const { trashItems, emptyTrash } = useTrash()
  return (
    <section className="w-full min-h-screen bg-zinc-900 pt-[80px] md:px-10 p-4">
      {trashItems.length === 0 ? (
        <p className="text-zinc-300">A lixeira está vazia</p>
      ) : (
        <button className="text-zinc-300 mb-5" onClick={() => emptyTrash()}>
          Esvaziar lixeira
        </button>
      )}
      <BoardContainer boards={trashItems} />
    </section>
  )
}
