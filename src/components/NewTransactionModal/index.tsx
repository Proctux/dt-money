import Modal from 'react-modal';

Modal.setAppElement('#root');

interface NewTransationModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionsModal({ isOpen, onRequestClose }: NewTransationModalProps) {
  return (
      <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      >
        <h2>Cadastrar transação</h2>
      </Modal>
  )
}
