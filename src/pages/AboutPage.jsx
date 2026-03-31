import Footer from "../components/Footer";
import Header from "../components/Header";
import icon from "../assets/iconAbout.png";
import SkillsSection from "../components/About/SkillsSection";
import { useTranslation } from "react-i18next";
import Education from "../components/About/Education";
import Experience from "../components/About/Experience";

export default function AboutPage(){

    const {t} = useTranslation();

    return(
        <>
            <Header />
            <section className="flex flex-col items-center justify-center gap-8 bg-gradient-to-b from-white via-amber-50/40 to-white px-6 py-14 md:flex-row">
                <img className="w-48 h-auto md:w-64" src={icon} alt="Personal Icon" />

                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-center text-3xl font-bold text-stone-900">
                    {t('about.title')}<span className="text-amber-500">{t('about.me')}</span>
                    </h1>

                    <p className="text-stone-700">
                        {t('about.description1')}
                    </p>

                    <p className="text-stone-700">
                        {t('about.description2')}
                    </p>

                    <div>
                    <p className="font-medium text-stone-800">{t('about.beyondCoding')}</p>
                    <ul className="list-disc list-inside text-stone-700">
                        <li>{t('about.hobbies.gaming')}</li>
                        <li>{t('about.hobbies.reading')}</li>
                        <li>{t('about.hobbies.drawing')}</li>
                    </ul>
                    </div>
                </div>
            </section>
            <hr className="border-stone-200" />

            <section className="flex flex-col items-center gap-12 bg-gradient-to-b from-white to-stone-50/80 py-12">

                <section className="max-w-3xl w-full px-8">
                    <h1 className="p-4 text-3xl font-bold text-stone-900">{t('about.education')}</h1>
                    <Education />
                </section>
                <section className="self-end max-w-3xl w-full px-8">
                    <h1 className="p-4 text-3xl font-bold text-stone-900">{t('about.experience')}</h1>
                    <Experience />
                </section>

            </section>
            <hr className="border-stone-200" />
            <SkillsSection />   


            <Footer />
        </>
    )

}
