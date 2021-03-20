import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { createServer, Model } from 'miragejs';
import { GlobalStyle } from './styles/global';
import { useState } from 'react';
import { NewTransactionsModal } from './components/NewTransactionModal'

createServer({
  models: {
    transaction: Model,
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);

      return schema.create('transaction', data)
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
