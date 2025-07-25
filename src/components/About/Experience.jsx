import { useTranslation } from "react-i18next";
import Technologies from "../Project/Technologies";

export default function Experience() {
  const { t } = useTranslation();

  const experienceData = t('experience.list', { returnObjects: true });

  return (
    <div className="border-l-2 border-gray-300 ml-4 pl-6">
        {experienceData.map((item, index) => (
        <div key={index} className="mb-10">
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="text-sm text-gray-500">{item.job}</p>
            <h3 className="text-lg font-semibold text-gray-800">{item.title} - <span className="text-amber-500">Adalab</span></h3>
            <p>{item.desc}</p>
            <Technologies items={item.technologies} />
        </div>
        
        )
        )}
        

    </div>
  );
}