export default function RecentOrders() {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">최근 주문</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-2">주문번호</th>
              <th className="text-left py-2">고객명</th>
              <th className="text-left py-2">금액</th>
              <th className="text-left py-2">상태</th>
            </tr>
          </thead>
          <tbody>
            {/* 실제 데이터는 API를 통해 가져올 예정 */}
            <tr className="border-b">
              <td className="py-2">ORD-2023001</td>
              <td>홍길동</td>
              <td>₩150,000</td>
              <td>배송중</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}