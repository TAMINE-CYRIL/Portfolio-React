import { useTranslation } from "react-i18next";
import SkillCard from "./SkillCard";
import { BiCode } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { SiFramework } from "react-icons/si";

export default function SkillsSection() {

  const languages = [
    "Java", 
    "C++", 
    "Python",
    "JavaScript",
    "HTML/CSS",
    "PHP"
  ]

  const frameworks = [
    "React", 
    "Pandas", 
    "TailwindCSS",
   "Matplotlib", 
   "Swiper JS", 
   "Seaborn", 
   "NumPy"
  ]

  const tools = [
    "Visual Studio Code",
    "Git/GitHub",
    "IntelliJ IDEA",
    "PyCharm",
    "Docker",
    "Figma",
    "WordPress",
    "Crawl4AI"
    ]

          

  const { t } = useTranslation();
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="mb-8 text-center text-3xl font-bold text-stone-900">
        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          {t('about.skills')}
        </span>
      </h2>

      <div className="space-y-10">
        <div>
          <section className="mb-4 flex items-center gap-3 text-xl font-semibold text-stone-800">
              <div className="rounded-xl bg-gradient-to-r from-amber-400 to-orange-500 p-3 shadow-sm">
                <BiCode className="h-6 w-6 text-white text-2xl" />
              </div>
            <h3>
              {t('about.categories.languages')}
            </h3>
          </section>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {languages.map((title) => (
              <div
                key={title}
                className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <SkillCard title={title} />
              </div>
            ))}
          </div>
        </div>
        <hr className="border-stone-200" />

        <div>
          <section className="mb-4 flex items-center gap-3 text-xl font-semibold text-stone-800">
            <div className="rounded-xl bg-gradient-to-r from-emerald-400 to-teal-500 p-3 shadow-sm">
              <SiFramework className="text-white text-2xl w-6 h-6" />
            </div>
            <h3>
              {t('about.categories.frameworks')}
            </h3>
          </section>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {frameworks.map((title) => (
              <div
                key={title}
                className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <SkillCard title={title} />
              </div>
            ))}
          </div>
        </div>

        <hr className="border-stone-200" />

        <div>
          <section className="mb-4 flex items-center gap-3 text-xl font-semibold text-stone-800">
            <div className="rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 p-3 shadow-sm">
              <BsTools className="text-white text-2xl h-6 w-6" />
            </div>
            <h3>
              {t('about.categories.tools')}
            </h3>
          </section>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {tools.map((title) => (
              <div
                key={title}
                className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <SkillCard title={title} />
              </div>
            ))}
          </div>
        </div>
        
        <hr className="border-stone-200" />

        <section className="flex flex-col items-center rounded-2xl border border-amber-100 bg-gradient-to-br from-white to-amber-50 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
          <h2 className="text-3xl bg-gradient-to-r bg-clip-text text-transparent from-amber-400 to-orange-500 font-bold">{languages.length}</h2>
          <p className="text-lg text-stone-700">{t('about.categories.languages')}</p>
        </section>

        <section className="flex flex-col items-center rounded-2xl border border-emerald-100 bg-gradient-to-br from-white to-emerald-50 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
          <h2 className="text-3xl bg-gradient-to-r bg-clip-text text-transparent from-emerald-400 to-teal-500 font-bold">{frameworks.length}</h2>
          <p className="text-lg text-stone-700">{t('about.categories.frameworks')}</p>
        </section>

        <section className="flex flex-col items-center rounded-2xl border border-sky-100 bg-gradient-to-br from-white to-sky-50 p-4 shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
          <h2 className="text-3xl bg-gradient-to-r bg-clip-text text-transparent from-sky-400 to-blue-500  font-bold">{tools.length}</h2>
          <p className="text-lg text-stone-700">{t('about.categories.tools')}</p>
        </section>


      </div>
    </section>
  );
}
