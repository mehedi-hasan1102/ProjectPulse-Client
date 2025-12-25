// app/page.tsx
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/auth/login'); // Redirect to login
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 font-mono">
      <p className="text-gray-700 text-lg">Redirecting to Login...</p>
    </div>
  );
}
