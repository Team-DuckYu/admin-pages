import DashboardLayout from '@/components/layouts/DashboardLayout';
import DashboardMetrics from '@/components/dashboard/DashboardMetrics';
import RecentOrders from '@/components/dashboard/RecentOrders';
import SystemNotifications from '@/components/dashboard/SystemNotifications';
import MonthlySales from '@/components/dashboard/MonthlySales';

export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-gray-800">대시보드</h1>
        
        {/* 주요 지표 요약 */}
        <DashboardMetrics />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 최근 주문 목록 */}
          <RecentOrders />
          
          {/* 시스템 알림 */}
          <SystemNotifications />
        </div>
        
        {/* 월별 매출 현황 */}
        <MonthlySales />
      </div>
    </DashboardLayout>
  );
}