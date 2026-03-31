import { useTranslation } from "react-i18next";
import Technologies from "../Project/Technologies";

export default function Experience() {
  const { t } = useTranslation();

  const experienceData = t('experience.list', { returnObjects: true });

  return (
    <div className="ml-4 border-l-2 border-sky-200 pl-6">
        {experienceData.map((item, index) => (
        <div key={index} className="mb-10">
          <div className="rounded-2xl border border-stone-200/80 bg-gradient-to-br from-white via-stone-50 to-sky-50/70 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

            <p className="text-sm text-stone-500">{item.date}</p>
            <p className="text-sm text-stone-500">{item.job}</p>
            <h3 className="text-lg font-semibold text-stone-800">{item.title} - <span className="text-amber-600">{item.company}</span></h3>
            <p className="text-stone-600">{item.desc}</p>
            <Technologies items={item.technologies} />
          </div>
        </div>
        
        )
        )}
        

    </div>
  );
}
