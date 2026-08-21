import TopBar from "../Component/dashboard/Topbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FBF8FD]">

      <main>{children}</main>
    </div>
  );
}