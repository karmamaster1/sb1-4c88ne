export interface Transaction {
  id: string;
  date: string;
  merchant: string;
  amount: number;
  status: 'pending' | 'approved' | 'denied';
  flagged: boolean;
  reason?: string;
}

export interface Notification {
  id: string;
  type: 'warning' | 'success' | 'error';
  message: string;
  date: string;
}