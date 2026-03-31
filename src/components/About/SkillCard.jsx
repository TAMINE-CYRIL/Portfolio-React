export default function SkillCard({ title }) {
  return (
    <div className="rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white via-amber-50/40 to-orange-50/70 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-lg">
      <h3 className="text-center font-medium text-stone-800">
        {title}
      </h3>
    </div>
  );
}
