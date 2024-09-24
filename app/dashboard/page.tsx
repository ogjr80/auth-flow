export default function Dashboard() {
    return (
      <div className="container mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-lg">Welcome to your protected dashboard!</p>
        <p className="mt-4">This page is only accessible to authenticated users.</p>
      </div>
    );
  }