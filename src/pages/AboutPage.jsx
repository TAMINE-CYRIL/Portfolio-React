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
            <section className="flex flex-col md:flex-row items-center gap-8 p-14 justify-center">
                <img className="w-48 h-auto md:w-64" src={icon} alt="Personal Icon" />

                <div className="flex flex-col gap-4 max-w-2xl">
                    <h1 className="text-2xl font-bold text-center">
                    {t('about.title')}<span className="text-amber-500">{t('about.me')}</span>
                    </h1>

                    <p>
                        {t('about.description1')}
                    </p>

                    <p>
                        {t('about.description2')}
                    </p>

                    <div>
                    <p>{t('about.beyondCoding')}</p>
                    <ul className="list-disc list-inside">
                        <li>{t('about.hobbies.gaming')}</li>
                        <li>{t('about.hobbies.reading')}</li>
                        <li>{t('about.hobbies.drawing')}</li>
                    </ul>
                    </div>
                </div>
            </section>
            <hr />

            <section className="flex flex-col items-center gap-12 py-12">

                <section className="max-w-3xl w-full px-8">
                    <h1 className="text-3xl font-bold p-4">{t('about.education')}</h1>
                    <Education />
                </section>
                <section className="self-end max-w-3xl w-full px-8">
                    <h1 className="text-3xl font-bold p-4">{t('about.experience')}</h1>
                    <Experience />
                </section>

            </section>
            <hr />
            <SkillsSection />   


            <Footer />
        </>
    )

}