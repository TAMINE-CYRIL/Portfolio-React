import { useTranslation } from "react-i18next";
import SkillCard from "./SkillCard";

export default function SkillsSection() {

  const { t } = useTranslation();

  return (
    <section className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8 text-center">
        <span className="text-amber-500 bg-clip-text text-shadow-sm">
          {t('about.skills')}
        </span>
      </h2>

      <div className="space-y-10">
        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {t('about.categories.languages')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["Java", "C++", "Python", "JavaScript", "HTML/CSS", "PHP"].map((title) => (
              <div
                key={title}
                className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <SkillCard title={title} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {t('about.categories.frameworks')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {["React", "Pandas", "TailwindCSS", "Matplotlib", "Swiper JS"].map((title) => (
              <div
                key={title}
                className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <SkillCard title={title} />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            {t('about.categories.tools')}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              "Visual Studio Code",
              "Git/GitHub",
              "IntelliJ IDEA",
              "PyCharm",
              "Docker",
              "Figma",
              "WordPress",
            ].map((title) => (
              <div
                key={title}
                className="hover:scale-105 transition-transform duration-300 hover:shadow-lg"
              >
                <SkillCard title={title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
