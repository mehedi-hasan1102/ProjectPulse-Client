'use client';

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";



export default function RisksPage() {
  const risks = [
    { project: 'Security Audit', status: 'Critical' },
    { project: 'Payment System', status: 'At Risk' },
    { project: 'Website Redesign', status: 'On Track' },
    { project: 'Mobile App', status: 'At Risk' },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critical':
        return 'text-red-600';
      case 'At Risk':
        return 'text-orange-600';
      case 'On Track':
        return 'text-green-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="flex font-sans">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6 space-y-6">
          <h1 className="text-2xl font-bold mb-4">Project Risks</h1>

          <div className="bg-white p-6 rounded shadow">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4">Project</th>
                  <th className="py-2 px-4">Status</th>
                </tr>
              </thead>
              <tbody>
                {risks.map((risk, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-2 px-4">{risk.project}</td>
                    <td className={`py-2 px-4 font-semibold ${getStatusColor(risk.status)}`}>
                      {risk.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}
