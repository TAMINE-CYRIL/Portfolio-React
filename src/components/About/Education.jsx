import { useTranslation } from "react-i18next";
import { BiCalendar } from "react-icons/bi";
import { FaMapPin } from "react-icons/fa";

export default function Education() {
  const { t } = useTranslation();
  
  const educationData = t("education.list", { returnObjects: true });

  return (
    <div className="relative border-l-2 border-gray-300 ml-4 pl-6">
      {educationData.map((item, index) => (
        <div key={index} className="relative mb-10">
          {/* Ombre dégradée orientée vers le bas */}
          <div className="absolute bottom-0 left-0 right-0 h-12 rounded-b-lg bg-gradient-to-t from-amber-400/70 to-transparent blur-xl"></div>

          {/* Carte principale */}
          <div className="relative bg-white dark:bg-gray-900 p-6 rounded-lg shadow">
            {/* Ligne du haut : date + lieu */}
            <section className="flex justify-between items-center">
              <section className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <BiCalendar />
                <p className="font-medium text-amber-600">{item.date}</p>
              </section>

              <section className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                <FaMapPin />
                <p>{item.location}</p>
              </section>
            </section>

            {/* Titre et école */}
            <h3 className="font-bold text-xl pt-3 pb-1 text-gray-900 dark:text-white">
              {item.title}
            </h3>
            <h4 className="font-semibold text-amber-500 pb-3">
              {item.school}
            </h4>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400">
              {item.description}
            </p>

            {/* Tags optionnels si tu en as */}
            {item.skills && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
