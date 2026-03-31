import { useTranslation } from 'react-i18next';
import Technologies from './Technologies';
import { AiFillGithub } from 'react-icons/ai';

export default function Project({ title, desc, github, languages = [] }) {
  const { t } = useTranslation();

  return (
    <div className="mt-4 flex min-h-[400px] max-w-xl flex-col justify-between overflow-hidden rounded-3xl border border-stone-200/80 bg-gradient-to-br from-white via-stone-50 to-amber-50/40 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="p-6 space-y-4">
        <h2 className="text-2xl font-bold text-stone-800">{title}</h2>
        <p className="text-stone-600">{desc}</p>
        <Technologies items={languages} />
      </div>

      <div className="px-6 pb-6 mt-auto">
        <a
          href={github}
          className="flex items-center justify-center gap-2 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 font-medium text-stone-800 transition duration-200 hover:scale-[1.02] hover:border-amber-400 hover:bg-amber-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2"
        >
          {t('projects.githubRepo')}
          <AiFillGithub />

        </a>
      </div>
    </div>
  );
}
