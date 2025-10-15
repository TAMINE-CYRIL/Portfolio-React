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
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          {t('about.skills')}
        </span>
      </h2>

      <div className="space-y-10">
        <div>
          <section className="flex items-center gap-2 text-xl 2 font-semibold text-gray-700 dark:text-gray-300 mb-4" >
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-lg p-3">
                <BiCode className="text-white text-2xl w-6 h-6"/>
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
        <hr />

        <div>
          <section className="flex items-center gap-2 text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            <div className="bg-gradient-to-r from-emerald-400 to-teal-500 rounded-lg p-3">
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

        <hr />

        <div>
          <section className="flex items-center gap-2 text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            <div className="bg-gradient-to-r from-sky-400 to-blue-500 rounded-lg p-3">
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
        
        <hr />

        <section className="flex flex-col items-center transition-transform duration-300 hover:shadow-md shadow-sm p-3 rounded-lg">
          <h2 className="text-3xl bg-gradient-to-r bg-clip-text text-transparent from-amber-400 to-orange-500 font-bold">{languages.length}</h2>
          <p className="text-lg">{t('about.categories.languages')}</p>
        </section>

        <section className="flex flex-col items-center transition-transform duration-300 hover:shadow-md shadow-sm p-3 rounded-lg">
          <h2 className="text-3xl bg-gradient-to-r bg-clip-text text-transparent from-emerald-400 to-teal-500 font-bold">{frameworks.length}</h2>
          <p className="text-lg">{t('about.categories.frameworks')}</p>
        </section>

        <section className="flex flex-col transition-transform duration-300 hover:shadow-md items-center shadow-sm p-3 rounded-lg">
          <h2 className="text-3xl bg-gradient-to-r bg-clip-text text-transparent from-sky-400 to-blue-500  font-bold">{tools.length}</h2>
          <p className="text-lg">{t('about.categories.tools')}</p>
        </section>


      </div>
    </section>
  );
}
