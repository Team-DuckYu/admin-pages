'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HomeIcon, ShoppingCartIcon, TruckIcon, Package, HeadsetIcon, ChartPie, Warehouse } from 'lucide-react'

const menuItems = [
  { name: '홈', icon: HomeIcon, path: '/home' },
  { name: '주문 관리', icon: ShoppingCartIcon, path: '/orders' },
  { name: '배송 관리', icon: TruckIcon, path: '/delivery' },
  { name: '상품 관리', icon: Package, path: '/products' },
  { name: '창고 관리', icon: Warehouse, path: '/warehouse' },
  { name: 'CS 관리', icon: HeadsetIcon, path: '/customers' },
  { name: '통계', icon: ChartPie, path: '/statics' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-white">
      <div className="p-6">
        <h2 className="text-2xl font-bold">ROO FAMILY</h2>
      </div>
      
      <nav className="mt-6">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`flex items-center px-6 py-3 text-sm ${
                isActive 
                  ? 'bg-gray-900 text-white' 
                  : 'text-gray-300 hover:bg-gray-700'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}