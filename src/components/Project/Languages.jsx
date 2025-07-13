export default function Languages({ items }) {
  return (
    <div className="flex flex-wrap gap-2 pt-2">
      {items.map((lang, index) => (
        <span
          key={index}
          className="bg-slate-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-sm font-medium"
        >
          {lang}
        </span>
      ))}
    </div>
  );
}
