import { useState } from 'react';

import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { createServer, Model } from 'miragejs';
import { GlobalStyle } from './styles/global';
import { NewTransactionsModal } from './components/NewTransactionModal'
import { TransactionsProvider } from './hooks/useTransactions';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freelance de website',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          created_at: new Date('2021-02-12 09:00:00')
        },
        {
          id: 2,
          title: 'Alguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1200,
          created_at: new Date('2021-02-17 09:00:00')
        }
      ],
    })
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
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransanctionModal}/>

      <Dashboard />

      <NewTransactionsModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransationModal} />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
