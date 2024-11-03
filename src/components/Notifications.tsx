import React from 'react';
import { AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import { Notification } from '../types';

interface NotificationsProps {
  notifications: Notification[];
}

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'warning':
        return <AlertTriangle className="h-6 w-6 text-yellow-500" />;
      case 'success':
        return <CheckCircle className="h-6 w-6 text-green-500" />;
      case 'error':
        return <XCircle className="h-6 w-6 text-red-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-4">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`p-4 rounded-lg flex items-start space-x-4 ${
            notification.type === 'warning'
              ? 'bg-yellow-50'
              : notification.type === 'success'
              ? 'bg-green-50'
              : 'bg-red-50'
          }`}
        >
          {getIcon(notification.type)}
          <div>
            <p className="text-gray-900 font-medium">{notification.message}</p>
            <p className="text-gray-500 text-sm">{notification.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notifications;