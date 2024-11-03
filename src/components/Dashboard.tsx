import React from 'react';
import { DollarSign, AlertTriangle, CheckCircle } from 'lucide-react';
import { Transaction } from '../types';

interface DashboardProps {
  transactions: Transaction[];
}

const Dashboard: React.FC<DashboardProps> = ({ transactions }) => {
  const pendingTransactions = transactions.filter(t => t.status === 'pending').length;
  const totalSpent = transactions.reduce((sum, t) => sum + t.amount, 0);
  const flaggedTransactions = transactions.filter(t => t.flagged).length;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-green-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-600 text-sm font-medium">Total Spending</p>
              <p className="text-2xl font-bold text-green-700">${totalSpent.toFixed(2)}</p>
            </div>
            <DollarSign className="h-8 w-8 text-green-500" />
          </div>
        </div>

        <div className="bg-yellow-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-yellow-600 text-sm font-medium">Pending Approvals</p>
              <p className="text-2xl font-bold text-yellow-700">{pendingTransactions}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-yellow-500" />
          </div>
        </div>

        <div className="bg-red-50 p-6 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-600 text-sm font-medium">Flagged Transactions</p>
              <p className="text-2xl font-bold text-red-700">{flaggedTransactions}</p>
            </div>
            <AlertTriangle className="h-8 w-8 text-red-500" />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {transactions.slice(0, 3).map((transaction) => (
            <div
              key={transaction.id}
              className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between"
            >
              <div>
                <p className="font-medium text-gray-800">{transaction.merchant}</p>
                <p className="text-sm text-gray-500">{transaction.date}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-medium text-gray-900">
                  ${transaction.amount.toFixed(2)}
                </span>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    transaction.status === 'approved'
                      ? 'bg-green-100 text-green-800'
                      : transaction.status === 'denied'
                      ? 'bg-red-100 text-red-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {transaction.status.charAt(0).toUpperCase() + transaction.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;