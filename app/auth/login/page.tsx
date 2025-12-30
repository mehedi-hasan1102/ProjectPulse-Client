'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

// Axios instance
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // only /api
  headers: { 'Content-Type': 'application/json' },
});

// Save token to localStorage
const saveToken = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('token', token);
  }
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    try {
      // POST to backend
      const res = await api.post('/auth/login', { email, password });

      const token = res.data.token;
      const role = res.data.user?.role; // ✅ get role from user object

      if (!token || !role) {
        setError('Invalid login response from server');
        return;
      }

      saveToken(token); // Save JWT

      // Redirect based on role
      if (role === 'admin') router.push('/admin/dashboard');
      else if (role === 'employee') router.push('/employee/dashboard');
      else if (role === 'client') router.push('/client/dashboard');
      else setError('Invalid user role');

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error(err);
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-sans">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="text-blue-600 text-3xl font-bold mb-2">❤</div>
          <h1 className="text-2xl font-bold text-gray-800">ProjectPulse</h1>
        </div>

        <h2 className="text-center text-lg font-medium text-gray-700 mb-6">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="user@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}
