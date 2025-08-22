export default function Technologies({ items }) {
  const techColors = {
    'Python': 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
    'JavaScript': 'bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-900/30 dark:text-yellow-300 dark:border-yellow-700',
    'PHP': 'bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-900/30 dark:text-purple-300 dark:border-purple-700',
    'Java': 'bg-red-100 text-red-700 border-red-200 dark:bg-red-900/30 dark:text-red-300 dark:border-red-700',
    'HTML': 'bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-900/30 dark:text-orange-300 dark:border-orange-700',
    'CSS': 'bg-cyan-100 text-cyan-700 border-cyan-200 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-700',
    'React': 'bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-900/30 dark:text-sky-300 dark:border-sky-700',
    'JavaFX': 'bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-700',
    'WordPress': 'bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700',
    'Figma': 'bg-pink-100 text-pink-700 border-pink-200 dark:bg-pink-900/30 dark:text-pink-300 dark:border-pink-700'
  };

  const getDefaultColor = (index) => {
    const colors = [
      'bg-gray-100 text-gray-700 border-gray-200 dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600',
      'bg-slate-100 text-slate-700 border-slate-200 dark:bg-slate-700/50 dark:text-slate-300 dark:border-slate-600',
      'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-700/50 dark:text-zinc-300 dark:border-zinc-600'
    ];
    return colors[index % colors.length];
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider font-medium">
        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
        Technologies
      </div>
      
      <div className="flex flex-wrap gap-2">
        {items.map((tech, index) => {
          const colorClass = techColors[tech] || getDefaultColor(index);
          
          return (
            <span
              key={index}
              className={`
                px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-200 
                hover:scale-105 hover:shadow-md cursor-default
                ${colorClass}
              `}
              title={`Technologie: ${tech}`}
            >
              {tech}
            </span>
          );
        })}
      </div>
      
      {items.length > 0 && (
        <div className="text-xs text-gray-400 dark:text-gray-500 pt-1">
          {items.length} technologie{items.length > 1 ? 's' : ''} utilisée{items.length > 1 ? 's' : ''}
        </div>
      )}
    </div>
  );
}