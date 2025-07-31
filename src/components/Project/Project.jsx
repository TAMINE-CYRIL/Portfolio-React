import { useTranslation } from 'react-i18next';
import Technologies from './Technologies';
import { AiFillGithub } from 'react-icons/ai';

export default function Project({ title, desc, github, languages = [] }) {
  const { t } = useTranslation();

  return (
    <div className="mx-5 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 max-w-xl mt-8 flex flex-col justify-between min-h-[400px]">
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{title}</h2>
        <p className="text-gray-600 dark:text-gray-300">{desc}</p>
        <Technologies items={languages} />
      </div>

      <div className="px-6 pb-6 mt-auto">
        <a
          href={github}
          className="flex items-center justify-center px-4 py-2 bg-slate-200 hover:bg-amber-500 text-gray-900 font-medium rounded-md transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
        >
          {t('projects.githubRepo')}
          <AiFillGithub />

        </a>
      </div>
    </div>
  );
}
