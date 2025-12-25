'use client';

import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-blue-600 text-white min-h-screen font-mono">
      <div className="px-6 py-5 text-xl font-bold">
        ProjectPulse
      </div>

      <nav className="mt-6 space-y-2 px-4">
        <Link href="/admin/dashboard" className="block px-3 py-2 rounded hover:bg-blue-500">
          Dashboard
        </Link>
        <Link href="/projects" className="block px-3 py-2 rounded hover:bg-blue-500">
          My Projects
        </Link>
        <Link href="/risks" className="block px-3 py-2 rounded hover:bg-blue-500">
          Risks
        </Link>
      </nav>
    </aside>
  );
}
