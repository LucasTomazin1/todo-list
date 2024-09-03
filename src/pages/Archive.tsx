import { BoardContainer } from '../components/BoardContainer'
import { useArchive } from '../hooks/useArchive'

export const Archive: React.FC = () => {
  const { archiveItems } = useArchive()
  return (
    <section className="w-full min-h-screen bg-zinc-900  pt-[80px]">
      {archiveItems.length === 0 ? (
        <p className="text-white">O arquivo está vazio</p>
      ) : (
        <BoardContainer boards={archiveItems} />
      )}
    </section>
  )
}

// export const Trash: React.FC = () => {
//   const { trashItems } = useTrash()

//   return (
//     <section className="w-full min-h-screen bg-zinc-900">
//       {trashItems.length === 0 ? (
//         <p className="text-white">A lixeira está vazia</p>
//       ) : (
//         <BoardContainer boards={trashItems} />
//       )}
//     </section>
//   )
// }
