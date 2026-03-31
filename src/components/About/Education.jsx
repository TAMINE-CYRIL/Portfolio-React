import { useTranslation } from "react-i18next";
import { BiCalendar } from "react-icons/bi";
import { FaMapPin } from "react-icons/fa";

export default function Education() {
  const { t } = useTranslation();
  
  const educationData = t("education.list", { returnObjects: true });

  return (
    <div className="ml-4 border-l-2 border-amber-200 pl-6">
      {educationData.map((item, index) => (
        <div key={index} className="relative mb-10">
          <div className="rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white via-stone-50 to-amber-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <section className="flex justify-between items-center">
              <section className="flex items-center gap-2 text-stone-700">
                <BiCalendar />
                <p className="font-medium text-amber-600">{item.date}</p>
              </section>

              <section className="flex items-center gap-2 text-stone-500">
                <FaMapPin />
                <p>{item.location}</p>
              </section>
            </section>

            <h3 className="pb-1 pt-3 text-xl font-bold text-stone-900">
              {item.title}
            </h3>
            <h4 className="font-semibold text-amber-500 pb-3">
              {item.school}
            </h4>

            <p className="text-stone-600">
              {item.description}
            </p>

            {item.skills && (
              <div className="flex flex-wrap gap-2 mt-4">
                {item.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="rounded-full border border-amber-100 bg-white/80 px-3 py-1 text-sm font-medium text-stone-700 shadow-sm"
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
