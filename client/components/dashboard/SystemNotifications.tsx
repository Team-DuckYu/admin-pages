interface Notification {
  id: string;
  message: string;
  type: 'info' | 'warning' | 'error';
  timestamp: string;
}

export default function SystemNotifications() {
  const notifications: Notification[] = [
    {
      id: '1',
      message: '재고 부족 알림: SKU-1234',
      type: 'warning',
      timestamp: '10분 전'
    },
    {
      id: '2',
      message: '신규 주문 접수: ORD-2023002',
      type: 'info',
      timestamp: '30분 전'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">시스템 알림</h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div 
            key={notification.id}
            className={`p-4 rounded-lg ${
              notification.type === 'warning' ? 'bg-yellow-50' :
              notification.type === 'error' ? 'bg-red-50' : 'bg-blue-50'
            }`}
          >
            <p className="text-sm">{notification.message}</p>
            <span className="text-xs text-gray-500">{notification.timestamp}</span>
          </div>
        ))}
      </div>
    </div>
  );
}