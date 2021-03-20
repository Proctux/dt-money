import Modal from 'react-modal';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/entradas.svg';
import outcomeImg from '../../assets/saidas.svg';

import { Container, TransactionTypeContainer } from './styles';

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
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
      >
        <button type="button" onClick={onRequestClose} className="react-modal-close">
          <img src={closeImg} alt="Fechar modal" />
        </button>

        <Container>
          <h2>Cadastrar transação</h2>

          <input
            placeholder="Título"
          />

          <input
            type="number"
            placeholder="Valor"
          />

          <TransactionTypeContainer>
            <button
              type="button"
            >
              <img src={incomeImg} alt="Entrada" />
              <span>Entrada</span>
            </button>

            <button
              type="button"
            >
              <img src={outcomeImg} alt="Saida" />
              <span>Entrada</span>
            </button>
          </TransactionTypeContainer>

          <input
            placeholder="Categoria"
          />

          <button type="submit">Cadastrar</button>
        </Container>
      </Modal>
  )
}
