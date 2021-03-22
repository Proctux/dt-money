import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  created_at: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'created_at'>

interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext({} as TransactionsContextData);


export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions').then(response => setTransactions(response.data.transactions))
  }, []);

 const createTransaction = async (transactionInput: TransactionInput) => {
  const response = await api.post('/transactions', {
    ...transactionInput,
    created_at: new Date()
  });
  const { transaction } = response.data;

  setTransactions([
    ...transactions,
    transaction
  ])
 }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}
