import Topbar from "../../Component/dashboard/Topbar";

export default function DonorDashboard() {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">

      <Topbar
        role="donor"
        userName="Fikerte Yimer"
        userEmail="fikerte@example.com"
      />

      <main className="p-6">
        <h1 className="text-3xl font-semibold text-[#241C3D]">
          Donor Dashboard
        </h1>

        <p className="mt-2 text-[#5D5875]">
          Manage your donations and giving activity.
        </p>
      </main>

    </div>
  );
}