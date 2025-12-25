'use client';

export default function CheckInPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center font-mono">
      <div className="grid grid-cols-2 gap-6 w-full max-w-5xl">
        {/* Employee */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold mb-4">Employee Weekly Check-In</h2>
          <input className="w-full border p-2 mb-3" placeholder="Progress update" />
          <input className="w-full border p-2 mb-3" placeholder="Blockers" />
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Submit Check-In
          </button>
        </div>

        {/* Client */}
        <div className="bg-white p-6 rounded shadow">
          <h2 className="font-bold mb-4">Client Feedback</h2>
          <textarea className="w-full border p-2 mb-3" placeholder="Comments" />
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
