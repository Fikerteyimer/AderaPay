import Topbar from "../Component/dashboard/Topbar";
import Sidebar from "../Component/dashboard/Sidebar";

export default function DonorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">
      <Topbar
        role="donor"
        userName="Fikerte Yimer"
      />

      <div className="flex">
        <Sidebar role="donor" />

        <main className="min-w-0 flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}