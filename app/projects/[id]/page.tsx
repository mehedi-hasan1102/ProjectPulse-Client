'use client';

import Sidebar from '@/components/Sidebar';
import Navbar from '@/components/Navbar';

export default function ProjectDetails() {
  return (
    <div className="flex font-mono">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6">
          <div className="bg-white p-6 rounded shadow">
            <h1 className="text-xl font-bold mb-2">Project Alpha</h1>
            <span className="text-red-600 text-sm">Status: At Risk</span>

            <div className="mt-6">
              <h2 className="font-semibold mb-2">Activity Timeline</h2>
              <ul className="space-y-2 text-sm">
                <li>✔ Weekly Check-in submitted</li>
                <li>⚠ Risk added: Security vulnerability</li>
                <li>💬 Client feedback received</li>
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
