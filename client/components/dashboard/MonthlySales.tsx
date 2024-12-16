'use client';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface SalesData {
  month: string;
  amount: number;
}

export default function MonthlySales() {
  const data: SalesData[] = [
    { month: '1월', amount: 4000 },
    { month: '2월', amount: 3000 },
    { month: '3월', amount: 5000 },
    { month: '4월', amount: 4500 },
    { month: '5월', amount: 6000 },
    { month: '6월', amount: 5500 },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">월별 매출 현황</h2>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="amount" stroke="#4F46E5" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}