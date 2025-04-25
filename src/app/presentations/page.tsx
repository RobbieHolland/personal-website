export default function PresentationsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Recorded Talks</h1>
      
      <div className="space-y-8">
        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Upcoming Talks</h2>
          <p className="text-gray-600">Check back soon for upcoming talks and presentations.</p>
        </div>

        <div className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
          <h2 className="text-2xl font-semibold mb-4">Past Talks</h2>
          <p className="text-gray-600">Check back soon for past talks and presentations.</p>
        </div>
      </div>
    </div>
  );
} 