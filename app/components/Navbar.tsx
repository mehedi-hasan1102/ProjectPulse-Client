'use client';

export default function Navbar() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6 font-sans">
      <span className="text-gray-600">Dashboard</span>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-500">Admin</span>
        <div className="h-8 w-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}
