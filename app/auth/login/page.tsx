// app/auth/login/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login:', { email, password });
    router.push('/admin/dashboard'); // Example role redirect
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-mono">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <div className="text-blue-600 text-3xl font-bold mb-2">❤</div>
          <h1 className="text-2xl font-bold text-gray-800">ProjectPulse</h1>
        </div>

        <h2 className="text-center text-lg font-medium text-gray-700 mb-6">
          Login to Your Account
        </h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <input
              type="email"
              placeholder="user@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition font-mono"
          >
            Log In
          </button>
        </form>

        <div className="text-center mt-4">
          <a href="#" className="text-sm text-blue-600 hover:underline font-mono">
            Forgot password?
          </a>
        </div>
      </div>
    </div>
  );
}

// 'use client';

// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 font-mono">
//       <div className="bg-white w-full max-w-md rounded-lg shadow p-8">
//         <h1 className="text-center text-xl font-bold mb-6">
//           Login to Your Account
//         </h1>

//         <form className="space-y-4">
//           <input
//             type="email"
//             placeholder="Email"
//             className="w-full border px-3 py-2 rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             className="w-full border px-3 py-2 rounded"
//           />

//           <select className="w-full border px-3 py-2 rounded">
//             <option>Admin</option>
//             <option>Employee</option>
//             <option>Client</option>
//           </select>

//           <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//             Log In
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }
