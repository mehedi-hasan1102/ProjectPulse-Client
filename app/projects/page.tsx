/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/jsx-no-comment-textnodes */
'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

export default function ProjectDetails() {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [projects, setProjects] = useState<any>(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const token = localStorage.getItem('token');

        const res = await axios.get(
          `http://localhost:5000/api/projects`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setProjects(res.data);
      } catch {
        setError('Failed to load project details');
      }
    };

    fetchProject();
  }, [id]);

  if (error) return <p className="p-6 text-red-500">{error}</p>;
  if (!projects) return <p className="p-6">Loading...</p>;

  return (
    <div className="flex font-sans">
      <Sidebar />
      <div className="flex-1 bg-gray-100 min-h-screen">
        <Navbar />

        <main className="p-6">
          <div className="bg-white p-6 rounded shadow">
            <div> 
{projects.map((project:any) => (
  <div key={project._id} className="bg-white rounded-xl shadow p-5 mb-4">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-semibold">{project.name}</h2>
      <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700">
        {project.status}
      </span>
    </div>

    <p className="text-gray-500 mt-2">
      {project.description}
    </p>

    <div className="mt-4 text-sm">
      <p><strong>Client:</strong> {project.client?.name}</p>
      <p><strong>Employees:</strong> {project.employees?.length}</p>
    </div>

    <div className="mt-4">
      <p className="text-sm font-medium">
        Health Score: {project.healthScore}%
      </p>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
        <div
          className="bg-green-500 h-2 rounded-full"
          style={{ width: `${project.healthScore}%` }}
        />
      </div>
    </div>
  </div>
))}


            </div>
           

            
            
          </div>
        </main>
      </div>
    </div>
  );
}
