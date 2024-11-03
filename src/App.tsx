import React from 'react';
import Dashboard from './components/Dashboard';
import TransactionList from './components/TransactionList';
import Notifications from './components/Notifications';
import { Transaction, Notification } from './types';

const mockTransactions: Transaction[] = [
  {
    id: '1',
    date: '2024-03-10',
    merchant: 'Amazon',
    amount: 299.99,
    status: 'pending',
    flagged: true,
    reason: 'Unusual amount'
  },
  {
    id: '2',
    date: '2024-03-09',
    merchant: 'Walmart',
    amount: 45.50,
    status: 'approved',
    flagged: false
  },
  {
    id: '3',
    date: '2024-03-08',
    merchant: 'Unknown Vendor',
    amount: 999.99,
    status: 'denied',
    flagged: true,
    reason: 'Suspicious merchant'
  }
];

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'warning',
    message: 'Large transaction detected from Amazon',
    date: '2024-03-10 14:30'
  },
  {
    id: '2',
    type: 'success',
    message: 'Transaction approved by trusted contact',
    date: '2024-03-09 10:15'
  },
  {
    id: '3',
    type: 'error',
    message: 'Suspicious transaction blocked',
    date: '2024-03-08 16:45'
  }
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Elder Financial Security</h1>
          <p className="mt-2 text-gray-600">Protecting your loved ones' financial well-being</p>
        </header>

        <div className="space-y-8">
          <section>
            <Dashboard transactions={mockTransactions} />
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Recent Transactions</h2>
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <TransactionList transactions={mockTransactions} />
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Notifications</h2>
            <Notifications notifications={mockNotifications} />
          </section>
        </div>
      </div>
    </div>
  );
};

export default App;