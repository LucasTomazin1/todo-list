import Modal from 'react-modal'

Modal.setAppElement('#root')

interface ConfirmDeleteModalProps {
  onConfirm: () => void
  onRequestClose: () => void
}

export const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  onRequestClose,
  onConfirm,
}) => {
  return (
    <Modal
      className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50"
      isOpen={true}
      onRequestClose={onRequestClose}
    >
      <div className="flex flex-col bg-black text-white border border-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-xl font-semibold mb-4">
          Deseja exluir este item permanentemente?
        </h2>
        <div className="flex gap-4">
          <button
            className="border border-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
            onClick={onConfirm}
          >
            Sim
          </button>
          <button
            className="border border-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            onClick={onRequestClose}
          >
            Não
          </button>
        </div>
      </div>
    </Modal>
  )
}
