'use client';

import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";

interface DashboardItem {
  project: {
    _id: string;
    name: string;
    status: "On Track" | "At Risk" | "Critical";
    healthScore: number;
  };
  healthScore: number;
  lastFeedback?: {
    satisfaction: number;
    flagged: boolean;
  };
}

export default function AdminDashboard() {
  const [stats, setStats] = useState({ onTrack: 0, atRisk: 0, critical: 0 });
  const [dashboard, setDashboard] = useState<DashboardItem[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No auth token found. Please login.");
          return;
        }

        const res = await axios.get("https://project-pulse-server-five.vercel.app/api/dashboard/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const dashboardData: DashboardItem[] = res.data.dashboard || [];
        setDashboard(dashboardData);

        // 📊 Stats calculate
        setStats({
          onTrack: dashboardData.filter(d => d.project.status === "On Track").length,
          atRisk: dashboardData.filter(d => d.project.status === "At Risk").length,
          critical: dashboardData.filter(d => d.project.status === "Critical").length,
        });

      } catch (err: any) {
        console.error(err);
        setError(err.response?.data?.message || "Failed to fetch dashboard data.");
      }
    };

    fetchDashboard();
  }, []);

  // 🚨 High risk projects (Critical + At Risk)
  const highRiskProjects = dashboard.filter(
    d => d.project.status === "Critical" || d.project.status === "At Risk"
  );

  return (
    <div className="flex font-sans">
      <Sidebar />

      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6 space-y-6">
          {error && <p className="text-red-500">{error}</p>}

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-500 text-white p-4 rounded">
              {stats.onTrack} On Track
            </div>
            <div className="bg-orange-500 text-white p-4 rounded">
              {stats.atRisk} At Risk
            </div>
            <div className="bg-red-500 text-white p-4 rounded">
              {stats.critical} Critical
            </div>
          </div>

          {/* High Risk Projects */}
          <div className="bg-white p-4 rounded shadow">
            <h2 className="font-bold mb-3">High Risk Projects</h2>

            <ul className="space-y-2 text-sm">
              {highRiskProjects.length === 0 && (
                <li>No high risk projects</li>
              )}

              {highRiskProjects.map((item) => (
                <li
                  key={item.project._id}
                  className="flex justify-between"
                >
                  <span>{item.project.name}</span>
                  <span
                    className={
                      item.project.status === "Critical"
                        ? "text-red-600"
                        : "text-orange-600"
                    }
                  >
                    {item.project.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </div>
  );
}
