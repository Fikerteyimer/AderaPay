import Topbar from "../Component/dashboard/Topbar";
import Sidebar from "../Component/dashboard/Sidebar";

export default function DonorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">

      {/* TOPBAR */}
      <Topbar
        role="donor"
        userName="Fikerte Yimer"
      />

      {/* SIDEBAR + CONTENT */}
      <div className="flex">

        {/* SIDEBAR */}
        <div className="hidden lg:block w-64 shrink-0">
          <div className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)]">
            <Sidebar role="donor" />
          </div>
        </div>

        {/* MAIN CONTENT */}
        <main className="min-w-0 flex-1">
          {children}
        </main>

      </div>
    </div>
  );
}