import { LucideIcon, ChevronRight, FileText, PackageCheck, PackageOpen, Truck, Package, } from "lucide-react";
import Link from "next/link";

interface MetricCardProps {
  href: string;
  title: string;
  value: string | number;
  isComplain?: boolean;
  icon?: LucideIcon;
  
}

const MetricElement = ({ href, title, value, isComplain, icon:Icon }: MetricCardProps) => (
  <Link href={href}>
    <div className="flex flex-col items-center gap-2">
      {Icon && <Icon className="w-6 h-6 text-gray-500" />}
      <h3 className="text-gray-500 text-base">{title}</h3>
      <p className={`${isComplain ? "text-red-500" : "text-blue-500"} text-lg font-bold`}>{value}</p>
    </div>
  </Link>
);

export default function DashboardMetrics() {
  return (
    // 주문현황
    <>
      <div className="bg-white flex flex-col rounded-lg shadow">
        <div className="flex justify-between items-center border-b p-4 border-gray-200">
          <h2 className="text-lg font-bold">주문현황</h2>
          <h3 className="text-sm text-gray-500">최근 1개월 기준</h3>
        </div>
        <div className="flex items-center p-6 justify-evenly">
            <MetricElement title="주문확인" value="124" href="/orders" icon={FileText}/>
            <div className="text-gray-300"><ChevronRight size={36}/></div>
            <MetricElement title="상품준비" value="89" href="/orders" icon={PackageOpen}/>
            <div className="text-gray-300"><ChevronRight size={36}/></div>
            <MetricElement title="배송대기" value="23" href="/orders" icon={Package}/>
            <div className="text-gray-300"><ChevronRight size={36}/></div>
            <MetricElement title="배송중" value="15" href="/orders" icon={Truck}/>
            <div className="text-gray-300"><ChevronRight size={36}/></div>
            <MetricElement title="배송완료" value="15" href="/orders" icon={PackageCheck}/>
        </div>
      </div>
      
      <div className="bg-white flex flex-col rounded-lg shadow">
        <div className="flex justify-between items-center border-b p-4 border-gray-200">
          <h2 className="text-lg font-bold">클레임현황</h2>
        </div>
        <div className="flex items-center p-6 justify-evenly">
            <MetricElement title="취소" value="124" href="/orders" isComplain={true}/>
            <div className="w-px h-12 bg-gray-200"></div>
            <MetricElement title="교환 반품 A/S" value="89" href="/orders" isComplain={true}/>
            <div className="w-px h-12 bg-gray-200"></div>
            <MetricElement title="배송지연" value="23" href="/orders" isComplain={true}/>
            <div className="w-px h-12 bg-gray-200"></div>
            <MetricElement title="미처리문의" value="15" href="/orders" isComplain={true} />
        </div>
      </div>
    </>
  );
}