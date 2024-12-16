import { BellIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function Header() {
  return (
    <header className="bg-white shadow h-16">
      <div className="h-full px-6 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-800">SCM 관리자</h1>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100">
            <BellIcon className="h-6 w-6 text-gray-600" />
            <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              3
            </span>
          </button>
          
          <div className="flex items-center space-x-2">
            <UserCircleIcon className="h-8 w-8 text-gray-600" />
            <span className="text-sm font-medium">관리자</span>
          </div>
        </div>
      </div>
    </header>
  );
}