import Topbar from "../../Component/dashboard/Topbar";

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">

      <Topbar
        role="admin"
        userName="Administrator"
        userEmail="admin@aderapay.com"
      />

      <main className="p-6">
        <h1 className="text-3xl font-semibold text-[#241C3D]">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-[#5D5875]">
          Manage AderaPay users, churches, and donations.
        </p>
      </main>

    </div>
  );
}