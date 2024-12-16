interface MetricCardProps {
  title: string;
  value: string | number;
  change?: string;
}

const MetricCard = ({ title, value, change }: MetricCardProps) => (
  <div className="bg-white p-6 rounded-lg shadow">
    <h3 className="text-gray-500 text-sm">{title}</h3>
    <p className="text-2xl font-bold mt-2">{value}</p>
    {change && <p className="text-sm text-green-500 mt-1">{change}</p>}
  </div>
);

export default function DashboardMetrics() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard title="일일 주문" value="124" change="+12.5%" />
      <MetricCard title="배송 현황" value="89" />
      <MetricCard title="미처리 해피콜" value="23" />
      <MetricCard title="고객 문의" value="15" />
    </div>
  );
}