'use client';

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

export default function AdminDashboard() {
  return (
    <div className="flex font-sans">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500 text-white p-4 rounded">8 On Track</div>
            <div className="bg-orange-500 text-white p-4 rounded">3 At Risk</div>
            <div className="bg-red-500 text-white p-4 rounded">2 Critical</div>
          </div>

          {/* High Risk Projects */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-3">High Risk Projects</h2>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span>Security Audit</span>
                <span className="text-red-600">Critical</span>
              </li>
              <li className="flex justify-between">
                <span>Payment System</span>
                <span className="text-orange-600">At Risk</span>
              </li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
