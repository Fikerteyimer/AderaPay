
type StatCardProps = {
  icon: string;
  title: string;
  value: string;
  description: string;
};

export default function StatCard({
  icon,
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-[#E9DAF4] bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#F6EEFB] text-lg font-bold text-[#9F08BD]">
          {icon}
        </div>

        <span className="text-xs text-[#9C93B0]">
          {description}
        </span>
      </div>

      <p className="mt-5 text-sm font-medium text-[#7B728C]">
        {title}
      </p>

      <h3 className="mt-1 text-2xl font-bold text-[#241C3D]">
        {value}
      </h3>
    </div>
  );
}

