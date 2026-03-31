export default function Technologies({ items }) {
  const techColors = {
    Python: "border-blue-200 bg-blue-50 text-blue-700",
    JavaScript: "border-yellow-200 bg-yellow-50 text-yellow-700",
    PHP: "border-fuchsia-200 bg-fuchsia-50 text-fuchsia-700",
    Java: "border-red-200 bg-red-50 text-red-700",
    HTML: "border-orange-200 bg-orange-50 text-orange-700",
    CSS: "border-cyan-200 bg-cyan-50 text-cyan-700",
    React: "border-sky-200 bg-sky-50 text-sky-700",
    JavaFX: "border-indigo-200 bg-indigo-50 text-indigo-700",
    WordPress: "border-blue-200 bg-blue-50 text-blue-700",
    Figma: "border-pink-200 bg-pink-50 text-pink-700",
  };

  const getDefaultColor = (index) => {
    const colors = [
      "border-stone-200 bg-stone-100 text-stone-700",
      "border-slate-200 bg-slate-100 text-slate-700",
      "border-neutral-200 bg-neutral-100 text-neutral-700",
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center text-xs font-medium uppercase tracking-wider text-stone-500">
        <svg className="mr-1 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        Technologies
      </div>

      <div className="flex flex-wrap gap-2">
        {items.map((tech, index) => {
          const colorClass = techColors[tech] || getDefaultColor(index);

          return (
            <span
              key={index}
              className={`rounded-xl border px-3 py-1.5 text-xs font-medium transition-all duration-200 hover:scale-105 hover:shadow-md cursor-default ${colorClass}`}
              title={`Technologie: ${tech}`}
            >
              {tech}
            </span>
          );
        })}
      </div>

      {items.length > 0 && (
        <div className="pt-1 text-xs text-stone-400">
          {items.length} technologie{items.length > 1 ? "s" : ""} utilisee{items.length > 1 ? "s" : ""}
        </div>
      )}
    </div>
  );
}
