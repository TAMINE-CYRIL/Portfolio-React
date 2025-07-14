import Technologies from './Technologies';

export default function Project({ title, desc, github, languages = [] }) {
  return (
    <div className="mx-5 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-xl mx-auto mt-10 flex flex-col">
      <div className="p-6 space-y-4"> 
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{desc}</p>
        <Technologies items={languages} />
      </div>

      <div className="px-6 pb-6">
        <a
          href={github}
          className="inline-flex items-center px-4 py-2 bg-slate-200 hover:bg-slate-400 text-gray-900 font-medium rounded-md transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}
