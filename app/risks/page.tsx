'use client';

import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

interface Risk {
  _id: string;
  project: string;
  status: 'Critical' | 'At Risk' | 'On Track' | 'Resolved';
  title: string;
}

export default function RisksPage() {
  const [risks, setRisks] = useState<Risk[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchRisks = async () => {
      try {
        const res = await fetch(
          'https://project-pulse-server-five.vercel.app/api/risks',
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error('Failed to fetch risks');
        }

        const {data} = await res.json();
        setRisks(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRisks();

  }, []);
console.log(risks);
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Critical':
        return 'text-red-600';
      case 'At Risk':
        return 'text-orange-600';
      case 'On Track':
        return 'text-green-600';
      case 'Resolved':
        return 'text-gray-500';
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
            {loading && <p>Loading risks...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {!loading && !error && (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="py-2 px-4">Project</th>
                    <th className="py-2 px-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {risks.length === 0 ? (
                    <tr>
                      <td colSpan={2} className="py-4 text-center text-gray-500">
                        No risks found
                      </td>
                    </tr>
                  ) : (
                    risks.map((risk) => (
                      <tr key={risk._id} className="border-b last:border-b-0">
                        <td className="py-2 px-4">{risk.title}</td>
                        <td
                          className={`py-2 px-4 font-semibold ${getStatusColor(
                            risk.status
                          )}`}
                        >
                          {risk.status}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
