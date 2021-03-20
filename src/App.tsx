import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { createServer } from 'miragejs';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionsModal } from './components/NewTransactionModal'

createServer({
  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 400,
          type: 'deposit',
          category: 'Food',
          created_at: '20/01/2020'
        }
      ]
    })
  }
})

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  const handleOpenNewTransanctionModal = () => {
    setIsNewTransactionModalOpen(true)
  }

  const handleCloseNewTransationModal = () => {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransanctionModal}/>

      <Dashboard />

      <NewTransactionsModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransationModal} />

      <GlobalStyle />
    </>
  );
}
